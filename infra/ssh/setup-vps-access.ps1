# =============================================================================
#  Hetzner VPS (orderflowpvl.website) - one-shot SSH setup for a NEW Windows PC.
#
#  What it does:
#    1. Installs OpenSSH Client if missing
#    2. Creates %USERPROFILE%\.ssh
#    3. Deploys private + public key (embedded base64, or files in secrets/)
#    4. Writes ~/.ssh/config: ssh hetzner-deploy / ssh hetzner-root
#    5. Locks down the private key via icacls
#    6. ssh-keyscan (if available) + smoke test (BatchMode: no password hang)
#
#  How to run (3 options):
#    A) Right-click the .ps1 -> Run with PowerShell
#    B) PowerShell:  powershell -ExecutionPolicy Bypass -File .\setup-vps-access.ps1
#    C) Double-click setup-vps-access.bat (pass-through args supported)
#
#  Security:
#    Embedded private key is equivalent to a password. Do not commit to public git
#    or share in chat without encryption. After a successful setup you may clear
#    PRIVATE_KEY_B64 in your copy, or delete this file if keys only live in ~/.ssh/.
# =============================================================================

param(
    [string] $VpsHost = "orderflowpvl.website",
    [string] $VpsUser = "deploy",
    [string] $VpsUserRoot = "root",
    [string] $SshKeyFileName = "hetzner_deploy",
    [string] $SourcePrivateKey = "",
    [string] $SourcePublicKey = ""
)

# -----------------------------------------------------------------------------
# EMBEDDED KEYS - replace or set both to "" to use secrets/hetzner_deploy only
# -----------------------------------------------------------------------------
$PRIVATE_KEY_B64 = @"
LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNDc2szM1NDM0hNRW1yYVlkTnFrUnN1VzVVQklOUVZBQzFnZWdDWVc0Tk1Ud0FBQUppdHY2dzZyYitzCk9nQUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDQ3NrMzNTQzNITUVtcmFZZE5xa1JzdVc1VUJJTlFWQUMxZ2VnQ1lXNE5NVHcKQUFBRUFVa2VzbjhqWkoxY204K1BzSzBaVXZBblQvbm9XazJ1UzFBbTQ0WGV4aFk2eVRmZElMY2N3U2F0cGgwMnFSR3k1YgpsUUVnMUJVQUxXQjZBSmhiZzB4UEFBQUFFSEJzYjNaNFlXNWhMV2hsZEhwdVpYSUJBZ01FQlE9PQotLS0tLUVORCBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0K
"@

# Full line: type + key + comment (comment is optional; kept neutral)
$PUBLIC_KEY = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKyTfdILccwSatph02qRGy5blQEg1BUALWB6AJhbg0xP hetzner-vps"

$ErrorActionPreference = "Stop"

$ScriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$DefaultSecrets = Join-Path $ScriptRoot "secrets"
if (-not $SourcePrivateKey) { $SourcePrivateKey = Join-Path $DefaultSecrets $SshKeyFileName }
if (-not $SourcePublicKey) { $SourcePublicKey = "$SourcePrivateKey.pub" }

function Step([string]$n, [string]$text) {
    Write-Host ""
    Write-Host ("[{0}] {1}" -f $n, $text) -ForegroundColor Cyan
}
function Ok([string]$text) { Write-Host ("    OK - {0}" -f $text) -ForegroundColor Green }
function Warn([string]$text) { Write-Host ("    ! {0}" -f $text) -ForegroundColor Yellow }

Write-Host "=============================================================" -ForegroundColor White
Write-Host '  Hetzner VPS - SSH setup (this PC)' -ForegroundColor White
Write-Host ("  Host: {0}   Users: {1} / {2}" -f $VpsHost, $VpsUser, $VpsUserRoot) -ForegroundColor White
Write-Host "=============================================================" -ForegroundColor White

$embedPrivate = ($PRIVATE_KEY_B64 -replace "\s", "").Trim()
$useEmbedded = $embedPrivate.Length -gt 0
$keyContent = $null
$pubText = $null

if ($useEmbedded) {
    try {
        $keyContent = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($embedPrivate))
    }
    catch {
        Write-Host "Invalid PRIVATE_KEY_B64 (not valid base64)." -ForegroundColor Red
        exit 1
    }
    $pubText = $PUBLIC_KEY.TrimEnd() + "`n"
}
else {
    if (-not (Test-Path $SourcePrivateKey)) {
        Write-Host ""
        Write-Host "Missing private key file:" -ForegroundColor Red
        Write-Host "  $SourcePrivateKey" -ForegroundColor Yellow
        Write-Host "Place keys in secrets/ OR set PRIVATE_KEY_B64 in this script." -ForegroundColor Yellow
        exit 1
    }
    if (-not (Test-Path $SourcePublicKey)) {
        Write-Host ""
        Write-Host "Missing public key file:" -ForegroundColor Red
        Write-Host "  $SourcePublicKey" -ForegroundColor Yellow
        exit 1
    }
    $keyContent = [System.IO.File]::ReadAllText($SourcePrivateKey)
    $pubText = [System.IO.File]::ReadAllText($SourcePublicKey).TrimEnd() + "`n"
}

# --- 1. OpenSSH Client ---
Step 1 "Check OpenSSH Client"
try {
    $cap = Get-WindowsCapability -Online -Name "OpenSSH.Client~~~~0.0.1.0" -ErrorAction SilentlyContinue
    if ($cap -and $cap.State -eq "Installed") {
        Ok "already installed"
    }
    else {
        Warn "installing OpenSSH Client (UAC may appear)..."
        Start-Process powershell -Verb RunAs -ArgumentList "-NoProfile", "-Command", "Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0" -Wait
        Ok "installed"
    }
}
catch {
    Warn "could not install automatically. Install manually: Optional features -> OpenSSH Client"
}

# --- 2. ~/.ssh ---
Step 2 "Prepare ~/.ssh directory"
$sshDir = Join-Path $env:USERPROFILE ".ssh"
if (-not (Test-Path $sshDir)) {
    New-Item -ItemType Directory -Path $sshDir -Force | Out-Null
    Ok "created $sshDir"
}
else {
    Ok "$sshDir already exists"
}

# --- 3-4. Copy keys ---
Step 3 "Install private key"
$keyPath = Join-Path $sshDir $SshKeyFileName

if ((Test-Path $keyPath) -and ((Get-Content $keyPath -Raw) -eq $keyContent)) {
    Ok "identical key already present - skip"
}
else {
    if (Test-Path $keyPath) {
        $backup = "$keyPath.bak.$((Get-Date).ToString('yyyyMMddHHmmss'))"
        Copy-Item $keyPath $backup -Force
        Warn "existing key backed up to $backup"
    }
    [System.IO.File]::WriteAllText($keyPath, $keyContent.TrimEnd() + "`n")
    Ok "wrote private key to $keyPath"
}

Step 4 "Install public key"
$pubPath = "$keyPath.pub"
[System.IO.File]::WriteAllText($pubPath, $pubText)
Ok "wrote public key to $pubPath"

# --- 5. ssh config ---
Step 5 "Update ~/.ssh/config"
$configPath = Join-Path $sshDir "config"
$block = @"
Host hetzner-deploy
    HostName $VpsHost
    User $VpsUser
    IdentityFile ~/.ssh/$SshKeyFileName
    ServerAliveInterval 60

Host hetzner-root
    HostName $VpsHost
    User $VpsUserRoot
    IdentityFile ~/.ssh/$SshKeyFileName
    ServerAliveInterval 60
"@

$existing = ""
if (Test-Path $configPath) {
    $existing = Get-Content $configPath -Raw
}

if ($existing -match '(?ms)^Host\s+hetzner-deploy\b') {
    $rx = [System.Text.RegularExpressions.RegexOptions]::Multiline
    $cleaned = [regex]::Replace(
        $existing,
        '(?ms)^Host\s+hetzner-(deploy|root)\b.*?(?=^Host\s|\z)',
        '',
        $rx
    ).TrimEnd()
    $final = ($cleaned + "`n`n" + $block + "`n").TrimStart()
    [System.IO.File]::WriteAllText($configPath, $final)
    Ok "updated config (replaced hetzner-deploy / hetzner-root blocks)"
}
else {
    $final = ($existing.TrimEnd() + "`n`n" + $block + "`n").TrimStart()
    [System.IO.File]::WriteAllText($configPath, $final)
    Ok "appended hetzner hosts to config"
}

# --- 6. icacls ---
Step 6 "Private key permissions"
try {
    icacls $keyPath /inheritance:r | Out-Null
    icacls $keyPath /grant:r "$($env:USERNAME):R" | Out-Null
    Ok "restricted to $env:USERNAME (read-only)"
}
catch {
    Warn 'icacls failed. If ssh errors, run:'
    $icaclsHint = '  icacls "' + $keyPath + '" /inheritance:r /grant:r "' + $env:USERNAME + ':R"'
    Warn $icaclsHint
}

# --- 7. known_hosts ---
Step 7 "ssh-keyscan"
$khPath = Join-Path $sshDir "known_hosts"
try {
    $scan = & ssh-keyscan -H $VpsHost 2>$null
    if ($scan) {
        Add-Content -Path $khPath -Value $scan
        $unique = Get-Content $khPath | Sort-Object -Unique
        Set-Content -Path $khPath -Value $unique
        Ok "host key added"
    }
    else {
        Warn "ssh-keyscan empty; first ssh may ask to confirm host key"
    }
}
catch {
    Warn "ssh-keyscan failed"
}

# --- 8. Smoke test ---
$smokeOk = $false
Step 8 "Test: ssh hetzner-deploy"
try {
    $result = & ssh -o StrictHostKeyChecking=accept-new -o ConnectTimeout=15 -o BatchMode=yes hetzner-deploy "whoami && hostname" 2>&1
    if ($LASTEXITCODE -eq 0) {
        Ok "connected:"
        $result | ForEach-Object { Write-Host "       $_" -ForegroundColor Green }
        $smokeOk = $true
    }
    else {
        Warn ("ssh exit code {0}" -f $LASTEXITCODE)
    }
}
catch {
    Warn ("test failed: {0}" -f $_.Exception.Message)
    Warn "Try: ssh -v hetzner-deploy"
}

if (-not $smokeOk) {
    Write-Host ""
    Warn "This PC has the key; the VPS must list the same public key for user '$VpsUser'."
    Write-Host ("    Public key file: {0}" -f $pubPath) -ForegroundColor White
    Write-Host "  One-time on the server (log in as root via Hetzner Console if SSH fails):" -ForegroundColor Yellow
    Write-Host "    id deploy 2>/dev/null || sudo adduser deploy" -ForegroundColor DarkGray
    Write-Host "    sudo install -d -m 700 -o deploy -g deploy /home/deploy/.ssh" -ForegroundColor DarkGray
    Write-Host "    sudo nano /home/deploy/.ssh/authorized_keys   # paste the ONE line from the .pub file on this PC" -ForegroundColor DarkGray
    Write-Host "    sudo chmod 600 /home/deploy/.ssh/authorized_keys && sudo chown deploy:deploy /home/deploy/.ssh/authorized_keys" -ForegroundColor DarkGray
    Write-Host "  For root instead: put the same line in /root/.ssh/authorized_keys, then: ssh hetzner-root" -ForegroundColor DarkGray
    Write-Host ""
    Write-Host "  Note: BatchMode=yes avoids a password prompt during this script; use ssh hetzner-deploy manually after fixing the server." -ForegroundColor DarkGray
}

Write-Host ""
Write-Host "=============================================================" -ForegroundColor White
if ($smokeOk) {
    Write-Host "  Done. You can now run:" -ForegroundColor White
    Write-Host "    ssh hetzner-deploy   # as deploy user" -ForegroundColor Green
    Write-Host "    ssh hetzner-root     # as root" -ForegroundColor Green
}
else {
    Write-Host "  Done with SSH test failure - fix server authorized_keys, then: ssh hetzner-deploy" -ForegroundColor Yellow
}
Write-Host ""
Write-Host "  After access works: strip PRIVATE_KEY_B64 from your copy or remove this script" -ForegroundColor Yellow
Write-Host "  if the key should exist only under %USERPROFILE%\.ssh\ ." -ForegroundColor Yellow
Write-Host "=============================================================" -ForegroundColor White

if (-not $smokeOk) {
    exit 1
}
