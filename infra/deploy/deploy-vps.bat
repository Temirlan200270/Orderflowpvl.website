@echo off
REM Deploy Next.js site to VPS via SSH (see deploy-vps.ps1).
REM Run from repo root: infra\deploy\deploy-vps.bat
REM Extra args pass through to PowerShell, e.g. deploy-vps.bat -SkipLocalBuild

setlocal
pushd "%~dp0..\.."
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy-vps.ps1" %*
set RC=%ERRORLEVEL%
popd
exit /b %RC%
