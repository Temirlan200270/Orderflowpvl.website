# Nginx + Let’s Encrypt (VPS)

Assumes **Next.js** listens on **`127.0.0.1:3000`** (PM2: `ie-abishev-landing`).

## 1. Install Certbot (Ubuntu 24.04)

```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
```

## 2. Webroot for ACME (if missing)

```bash
sudo mkdir -p /var/www/html
```

## 3. Copy site config

From the machine where this repo lives (or paste the file on the server):

```bash
sudo cp /home/deploy/ie-abishev-landing/infra/nginx/orderflowpvl.website.conf /etc/nginx/sites-available/orderflowpvl.website.conf
sudo ln -sf /etc/nginx/sites-available/orderflowpvl.website.conf /etc/nginx/sites-enabled/orderflowpvl.website.conf
```

Disable the default site if it still catches your domain:

```bash
sudo rm -f /etc/nginx/sites-enabled/default
```

## 4. Test and reload nginx

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## 5. TLS certificates

```bash
sudo certbot --nginx -d orderflowpvl.website -d www.orderflowpvl.website
```

Follow prompts (email, agree to ToS). Certbot will add `listen 443 ssl` and renew hooks.

Dry-run renew:

```bash
sudo certbot renew --dry-run
```

## 6. Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## 7. Check

- `https://orderflowpvl.website` — site loads.
- `pm2 status` — `ie-abishev-landing` **online**.

If **502 Bad Gateway**: Next is not on 3000 — `ss -tlnp | grep 3000` and `pm2 logs ie-abishev-landing`.
