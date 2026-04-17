@echo off
setlocal

echo Looking for processes using port 3000...

set "FOUND_PID="
for /f "tokens=5" %%P in ('netstat -ano ^| findstr ":3000" ^| findstr "LISTENING"') do (
  set "FOUND_PID=%%P"
  echo Stopping process PID %%P ...
  taskkill /PID %%P /F >nul 2>nul
)

if not defined FOUND_PID (
  echo No process is currently listening on port 3000.
) else (
  echo Local preview server on port 3000 has been stopped.
)

pause
endlocal
