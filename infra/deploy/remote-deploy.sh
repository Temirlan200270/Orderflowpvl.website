#!/usr/bin/env bash
# Runs ON THE VPS after SSH. Same logic as deploy-vps.ps1 remote half.
# Env overrides (optional): DEPLOY_REMOTE_DIR, DEPLOY_BRANCH, DEPLOY_PM2_NAME
set -euo pipefail

REMOTE_DIR="${DEPLOY_REMOTE_DIR:-/home/deploy/ie-abishev-landing}"
BRANCH="${DEPLOY_BRANCH:-main}"
PM2_NAME="${DEPLOY_PM2_NAME:-ie-abishev-landing}"

cd "$REMOTE_DIR"
git fetch origin
git checkout "$BRANCH"
git pull origin "$BRANCH"
npm ci
npm run build
if command -v pm2 >/dev/null 2>&1; then
  if pm2 describe "$PM2_NAME" >/dev/null 2>&1; then
    pm2 restart "$PM2_NAME"
  else
    pm2 start npm --name "$PM2_NAME" -- start
    pm2 save
  fi
else
  echo "PM2 not found. On server run: sudo npm install -g pm2" >&2
  exit 1
fi
echo "Remote deploy finished."
