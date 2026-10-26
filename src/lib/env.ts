/**
 * Deployment signals come from explicit env vars set per-environment in
 * wrangler.jsonc ("vars") — not from a hosting-platform-specific variable.
 * The previous version checked Netlify's CONTEXT var, which Cloudflare
 * never sets, so the site always evaluated as "not production" regardless
 * of where it was actually deployed. IS_PRODUCTION is left unset on UAT
 * (defaults to false, preserving noindex) and must be explicitly set to
 * "true" — alongside the real production SITE_URL — only when a genuine,
 * separately-approved production launch happens.
 */
export function isProductionDeploy(): boolean {
  return process.env.IS_PRODUCTION === "true";
}

export function siteUrl(): string {
  return process.env.SITE_URL ?? "http://localhost:3000";
}

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}
