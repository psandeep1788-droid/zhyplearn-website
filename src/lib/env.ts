/**
 * Netlify sets CONTEXT to "production" | "deploy-preview" | "branch-deploy".
 * Used to keep preview/branch deploys out of search engines and to decide
 * whether optional integrations (Neon, Resend) are actually configured.
 */
export function isProductionDeploy(): boolean {
  return process.env.CONTEXT === "production";
}

export function siteUrl(): string {
  if (isProductionDeploy()) return "https://lms.zhypility.com";
  return process.env.URL ?? process.env.DEPLOY_PRIME_URL ?? "http://localhost:3000";
}

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}
