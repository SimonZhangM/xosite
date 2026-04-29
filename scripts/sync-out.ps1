param(
  [switch]$DryRun,
  [switch]$Delete,
  [string]$HostName = "root@47.86.245.251",
  [string]$RemoteRoot = "/www/wwwroot/xplorone.com",
  [string]$LocalRoot = "out"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $LocalRoot)) {
  throw "Local output directory not found: $LocalRoot. Run npm run build first."
}

$localRootItem = Get-Item -LiteralPath $LocalRoot
$localRootFull = $localRootItem.FullName.TrimEnd('\')
$remoteListCommand = "cd '$RemoteRoot' && find . -type f -exec sha256sum '{}' \;"

Write-Host "Reading remote file list from ${HostName}:$RemoteRoot ..."
$remoteRaw = & ssh $HostName $remoteListCommand

$remoteFiles = @{}
foreach ($line in $remoteRaw) {
  if (-not $line) { continue }
  if ($line -notmatch '^([a-fA-F0-9]{64})\s+\*?\.\/(.+)$') { continue }
  $path = $Matches[2] -replace "\\", "/"
  $remoteFiles[$path] = [pscustomobject]@{
    Hash = $Matches[1].ToLowerInvariant()
  }
}

$localFiles = @{}
$uploads = New-Object System.Collections.Generic.List[object]

Get-ChildItem -LiteralPath $localRootFull -Recurse -File | ForEach-Object {
  $relative = $_.FullName.Substring($localRootFull.Length + 1).Replace('\', '/')
  $localFiles[$relative] = $_

  $needsUpload = $true
  if ($remoteFiles.ContainsKey($relative)) {
    $remote = $remoteFiles[$relative]
    $localHash = (Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256).Hash.ToLowerInvariant()
    $needsUpload = $localHash -ne $remote.Hash
  }

  if ($needsUpload) {
    $uploads.Add([pscustomobject]@{
      Relative = $relative
      FullName = $_.FullName
      Length = $_.Length
    })
  }
}

$deletes = New-Object System.Collections.Generic.List[string]
if ($Delete) {
  foreach ($path in $remoteFiles.Keys) {
    if (-not $localFiles.ContainsKey($path)) {
      $deletes.Add($path)
    }
  }
}

Write-Host "Files to upload: $($uploads.Count)"
Write-Host "Files to delete: $($deletes.Count)"

if ($DryRun) {
  if ($uploads.Count -gt 0) {
    Write-Host "`nUpload preview:"
    $uploads | Select-Object -First 40 Relative, Length | Format-Table -AutoSize
    if ($uploads.Count -gt 40) { Write-Host "... plus $($uploads.Count - 40) more" }
  }
  if ($deletes.Count -gt 0) {
    Write-Host "`nDelete preview:"
    $deletes | Select-Object -First 40
    if ($deletes.Count -gt 40) { Write-Host "... plus $($deletes.Count - 40) more" }
  }
  Write-Host "`nDry run only. No remote files changed."
  exit 0
}

foreach ($item in $uploads) {
  $remotePath = "$RemoteRoot/$($item.Relative)"
  $remoteDir = Split-Path -Path $remotePath -Parent
  $remoteDir = $remoteDir.Replace('\', '/')
  & ssh $HostName "mkdir -p '$remoteDir'"
  & scp $item.FullName "${HostName}:$remotePath"
  if ($LASTEXITCODE -ne 0) {
    throw "Failed to upload $($item.Relative)"
  }
}

foreach ($path in $deletes) {
  $remotePath = "$RemoteRoot/$path"
  & ssh $HostName "rm -f '$remotePath'"
}

& ssh $HostName "chown -R www:www '$RemoteRoot'; chmod -R u=rwX,g=rX,o=rX '$RemoteRoot'; /www/server/nginx/sbin/nginx -t -c /www/server/nginx/conf/nginx.conf >/dev/null && /etc/init.d/nginx reload >/dev/null"

Write-Host "Sync complete."
