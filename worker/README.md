# Assessment form mailer (Cloudflare Worker)

The site is a static export with no server, so the contact/assessment forms
can't safely hold an email API key. This Worker is a tiny server-side relay:
the browser POSTs the form fields to it, and the Worker calls SMTP2GO using a
**secret** key that never reaches the browser. CORS is locked to the site origin.

## One-time setup

### 1. Get a valid SMTP2GO API key
The old hardcoded key was revoked/invalid. In the SMTP2GO admin console →
**Settings → API Keys**, create a key with the **email/send** permission.
Also confirm the sender address's domain is **verified** under
**Settings → Sender Domains** (the Worker sends from `info@alienitservices.com`).

### 2. Install Wrangler and log in
```bash
npm install -g wrangler        # or: npx wrangler ...
cd worker
wrangler login                 # opens a browser to authorize your Cloudflare account
```

### 3. Add the secret and deploy
```bash
wrangler secret put SMTP2GO_API_KEY     # paste the new key when prompted
wrangler deploy
```
Deploy prints a URL like:
`https://alienit-assessment-form.<your-subdomain>.workers.dev`

### 4. Point the site at the Worker
Edit `src/app/formEndpoint.js` and replace the placeholder with that URL:
```js
export const FORM_ENDPOINT = "https://alienit-assessment-form.<your-subdomain>.workers.dev";
```
Commit + push — GitHub Actions rebuilds and deploys the site automatically.

## Config
Non-secret settings live in `wrangler.toml` under `[vars]`:
- `ALLOWED_ORIGIN` — only this origin may call the Worker (CORS).
- `TO_EMAIL` — where submissions are delivered.
- `SENDER_EMAIL` — the From address (its domain must be verified in SMTP2GO).

After changing `[vars]`, run `wrangler deploy` again.

## Debugging
`wrangler tail` streams live logs. On a failed send the Worker logs the real
SMTP2GO status/response (the browser only sees a generic error).
