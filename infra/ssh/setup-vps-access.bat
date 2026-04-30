@echo off
REM Hetzner VPS - SSH setup launcher (orderflowpvl.website).
REM Double-click to run; uses setup-vps-access.ps1 in this folder (ExecutionPolicy Bypass).

pushd "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0setup-vps-access.ps1" %*
set RC=%ERRORLEVEL%
popd

echo.
echo Exit code: %RC%
echo Press any key to close...
pause >nul
exit /b %RC%
