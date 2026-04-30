# Windows — SSH access to Hetzner VPS

Scripts configure OpenSSH Client, install keys under `%USERPROFILE%\.ssh`, and add SSH config aliases.

## Files

| File | Purpose |
|------|---------|
| `setup-vps-access.bat` | Double-click launcher (runs PowerShell with bypass policy) |
| `setup-vps-access.ps1` | Main logic |

## Before first run

**Option A — embedded (default in script):** `setup-vps-access.ps1` may contain `$PRIVATE_KEY_B64` and `$PUBLIC_KEY` at the top. Clear both (empty `PRIVATE_KEY_B64`) to switch to files only.

**Option B — files:** place **OpenSSH-format** key pair in `infra/ssh/secrets/`:

- `hetzner_deploy` (private)
- `hetzner_deploy.pub` (public)

Or pass `-SourcePrivateKey` / `-SourcePublicKey`.

**Never commit** live keys to a public repo. Rotate keys after sharing the script.

Default SSH target is **`orderflowpvl.website`** (per [docs/INFRA_DNS.md](../../docs/INFRA_DNS.md)). Override with `-VpsHost 178.104.163.216` if needed.

## After setup

```text
ssh hetzner-deploy   # user: deploy
ssh hetzner-root     # user: root
```

## Security

Remove or securely archive this folder after deploying keys to a new PC if you stored plaintext copies anywhere outside `secrets/`.
