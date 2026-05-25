# Deploy IE ABISHEV landing to Hetzner VPS over SSH.
# Prerequisite on server once: git clone <repo> -> /home/deploy/ie-abishev-landing, npm i -g pm2
#
# Usage (from repo root or anywhere):
#   .\infra\deploy\deploy-vps.bat
#   powershell -ExecutionPolicy Bypass -File .\infra\deploy\deploy-vps.ps1 -SkipLocalBuild
#
param(
    [string] $SshTarget = "hetzner-deploy",
    [string] $RemoteDir = "/home/deploy/ie-abishev-landing",
    [string] $Branch = "main",
    [string] $Pm2AppName = "ie-abishev-landing",
    [switch] $SkipLocalBuild,
    [switch] $RunLint,
    [switch] $RemoteOnly
)

if ($RemoteOnly) {
    $SkipLocalBuild = $true
}

$ErrorActionPreference = "Stop"

$RepoRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..")
Set-Location $RepoRoot

function Write-Step([string]$msg) {
    Write-Host ""
    Write-Host "[deploy] $msg" -ForegroundColor Cyan
}

if (-not $SkipLocalBuild -and -not $RemoteOnly) {
    Write-Step "Local: npm ci"
    npm ci
    if ($RunLint) {
        Write-Step "Local: npm run lint"
        npm run lint
    }
    Write-Step "Local: npm run build"
    npm run build
}

Write-Step "Remote: git pull + build + PM2 ($SshTarget : $RemoteDir)"
$remoteScript = Join-Path $PSScriptRoot "remote-deploy.sh"
if (-not (Test-Path $remoteScript)) {
    Write-Host "[deploy] Missing $remoteScript" -ForegroundColor Red
    exit 1
}
$remoteCmd = @"
export DEPLOY_REMOTE_DIR='$RemoteDir'
export DEPLOY_BRANCH='$Branch'
export DEPLOY_PM2_NAME='$Pm2AppName'
cd '$RemoteDir'
git fetch origin
git checkout '$Branch'
git pull origin '$Branch'
bash infra/deploy/remote-deploy.sh
"@
$remoteCmd | & ssh $SshTarget "bash -s"
$sshExit = $LASTEXITCODE
if ($sshExit -ne 0) {
    Write-Host "[deploy] Remote step failed (exit $sshExit)." -ForegroundColor Red
    exit $sshExit
}

Write-Host ""
Write-Host "[deploy] Done." -ForegroundColor Green
