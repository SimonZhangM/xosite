@echo off
setlocal

cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found in PATH.
  echo Please install Node.js and npm first.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo node_modules was not found.
  echo Running npm install first...
  call npm install
  if errorlevel 1 (
    echo npm install failed.
    pause
    exit /b 1
  )
)

echo Starting local website at http://localhost:3000 ...
start "xosite dev server" cmd /k "cd /d ""%~dp0"" && npm run dev"

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$url = 'http://localhost:3000';" ^
  "for ($i = 0; $i -lt 90; $i++) {" ^
  "  try {" ^
  "    Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 2 | Out-Null;" ^
  "    Start-Process $url;" ^
  "    exit 0;" ^
  "  } catch {" ^
  "    Start-Sleep -Seconds 1;" ^
  "  }" ^
  "}" ^
  "Write-Host 'Server did not become ready in time. You can open http://localhost:3000 manually.';"

endlocal
