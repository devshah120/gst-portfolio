# Production deployment (Node server behind nginx)

The site now has a live API route (`/api/contact`), so it can no longer be
served as a static export from a plain `root /var/www/...` nginx block. Nginx
must reverse-proxy to a running Next.js process instead.

## 1. On the server: install deps and build

```bash
cd /var/www/gst-portfolio
git pull
npm install
npm run build
```

## 2. Add the production env file

Create `/var/www/gst-portfolio/.env.local` on the server (this file is
gitignored, so it won't come from `git pull`):

```
RESEND_API_KEY=your_resend_api_key
CONTACT_FORM_TO_EMAIL=devshah120902@gmail.com
```

## 3. Run it with PM2

```bash
npm install -g pm2       # once, if not already installed
pm2 start ecosystem.config.js
pm2 save                 # persist the process list
pm2 startup              # follow the printed command to enable boot-start
```

Useful commands:

```bash
pm2 status
pm2 logs gst-portfolio
pm2 restart gst-portfolio   # after future deploys (git pull && npm run build && pm2 restart gst-portfolio)
```

## 4. Point nginx at it

Replace the old static-file nginx config with
[`yasshshah.com.conf`](./yasshshah.com.conf), which proxies everything to the
Next.js process on `127.0.0.1:3000`:

```bash
sudo cp deploy/yasshshah.com.conf /etc/nginx/sites-available/yasshshah.com
sudo nginx -t
sudo systemctl reload nginx
```

If you're using an old config that served `root /var/www/gst-portfolio/out`,
remove/replace it — the `out/` static export is no longer used.

## 5. Verify

```bash
curl -X POST http://127.0.0.1:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"+911234567890","message":"Deploy check"}'
```

Should return `{"ok":true}`, and an email should land at
`CONTACT_FORM_TO_EMAIL`. Then submit the real form at
`https://yasshshah.com/contact` to confirm end-to-end.

## Future deploys

```bash
cd /var/www/gst-portfolio
git pull
npm install
npm run build
pm2 restart gst-portfolio
```
