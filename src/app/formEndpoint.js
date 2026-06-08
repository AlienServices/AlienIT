// Cloudflare Worker endpoint that holds the SMTP2GO key and relays contact forms.
// The key is NOT in client code — it's a Worker secret. See worker/README.md.
// Replace the placeholder with your deployed Worker URL, e.g.:
//   https://alienit-assessment-form.<your-subdomain>.workers.dev
export const FORM_ENDPOINT = "REPLACE_WITH_WORKER_URL";
