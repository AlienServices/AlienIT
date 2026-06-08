// Cloudflare Worker: relays the assessment form to SMTP2GO.
// The SMTP2GO API key lives in env (a Worker secret), never in the browser.
//
// Required secret:   SMTP2GO_API_KEY   (set via: wrangler secret put SMTP2GO_API_KEY)
// Optional vars:     SENDER_EMAIL, TO_EMAIL, ALLOWED_ORIGIN  (set in wrangler.toml [vars])

const DEFAULTS = {
  ALLOWED_ORIGIN: "https://alienitservices.com",
  TO_EMAIL: "info@alienitservices.com",
  SENDER_EMAIL: "info@copiersutah.com",
};

export default {
  async fetch(request, env) {
    const allowedOrigin = env.ALLOWED_ORIGIN || DEFAULTS.ALLOWED_ORIGIN;

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors(allowedOrigin) });
    }
    if (request.method !== "POST") {
      return json({ error: "method_not_allowed" }, 405, allowedOrigin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "invalid_json" }, 400, allowedOrigin);
    }

    const name = (body.name || "").toString().trim();
    const company = (body.company || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const number = (body.number || "").toString().trim();
    const message = (body.message || "").toString().trim();

    if (!name || !email) {
      return json({ error: "missing_fields" }, 422, allowedOrigin);
    }
    // Light spam guard: reject absurdly long input.
    if (message.length > 5000 || name.length > 200) {
      return json({ error: "too_long" }, 422, allowedOrigin);
    }

    const text =
      `New IT assessment request\n\n` +
      `Name: ${name}\n` +
      `Company: ${company || "-"}\n` +
      `Email: ${email}\n` +
      `Phone: ${number || "-"}\n\n` +
      `Message:\n${message || "-"}\n`;

    let smtpRes, data;
    try {
      smtpRes = await fetch("https://api.smtp2go.com/v3/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: env.SMTP2GO_API_KEY,
          to: [env.TO_EMAIL || DEFAULTS.TO_EMAIL],
          sender: env.SENDER_EMAIL || DEFAULTS.SENDER_EMAIL,
          reply_to: email,
          subject: `New assessment request from ${name}${number ? ` (${number})` : ""}`,
          text_body: text,
        }),
      });
      data = await smtpRes.json().catch(() => ({}));
    } catch {
      return json({ error: "upstream_unreachable" }, 502, allowedOrigin);
    }

    const succeeded = smtpRes.ok && data?.data?.succeeded >= 1;
    if (!succeeded) {
      // Log the real reason in the Worker tail; don't leak it to the browser.
      console.log("SMTP2GO failure:", smtpRes.status, JSON.stringify(data));
      return json({ error: "send_failed" }, 502, allowedOrigin);
    }

    return json({ ok: true }, 200, allowedOrigin);
  },
};

function cors(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(obj, status, origin) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...cors(origin) },
  });
}
