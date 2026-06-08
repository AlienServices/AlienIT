// Cloudflare Worker endpoint that holds the SMTP2GO key and relays contact forms.
// The key is NOT in client code — it's a Worker secret. See worker/README.md.
export const FORM_ENDPOINT =
  "https://alienit-assessment-form.alienitservices.workers.dev";
