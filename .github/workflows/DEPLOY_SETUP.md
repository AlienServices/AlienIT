# Deployment setup (GitHub Actions → JetHost)

This site is a **static Next.js export** (`output: "export"` in `next.config.js`).
`npm run build` produces an `out/` folder of plain HTML/CSS/JS. JetHost is PHP
shared hosting with **no Node runtime**, so the build happens in GitHub Actions
and the finished `out/` is rsynced to the site's docroot over SSH.

**Docroot:** `/home/zacknick001/alienitservices.com/www`

## One-time setup

### 1. Authorize the deploy key on JetHost
A dedicated SSH key was generated at `~/.ssh/alienit_jethost_deploy` (private)
and `~/.ssh/alienit_jethost_deploy.pub` (public).

In cPanel → **SSH Access** → **Manage SSH Keys** → **Import Key**:
- Paste the **public** key (`.pub`) contents.
- After importing, click **Manage** → **Authorize**.

### 2. Find the SSH port
cPanel → **SSH Access** shows the port (often 22; some hosts use a custom port).

### 3. Add GitHub repo secrets
Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:

| Secret name     | Value                                              |
|-----------------|----------------------------------------------------|
| `DEPLOY_SSH_KEY`| Full contents of the **private** key `~/.ssh/alienit_jethost_deploy` |
| `SSH_HOST`      | `15.204.40.157` (shared IP) or the host's SSH hostname |
| `SSH_PORT`      | The port from step 2                               |
| `SSH_USER`      | `zacknick001`                                      |
| `DEPLOY_PATH`   | `/home/zacknick001/alienitservices.com/www/` (keep the trailing slash) |

## How it runs
- Every push to `main` builds and deploys automatically.
- You can also trigger it manually: repo → **Actions** → **Build and Deploy to JetHost** → **Run workflow**.
- To make it **manual-only**, delete the `push:` block in `deploy.yml`.

## Notes
- `rsync --delete` keeps the docroot in sync (removes stale files), but **excludes**
  `cgi-bin` and `.well-known` so it won't clobber host-managed files or SSL/ACME challenges.
- The SMTP2GO key in the assessment form is still client-side (no server here to hide it).
  Rotate the exposed key and consider a third-party form backend or serverless function.
