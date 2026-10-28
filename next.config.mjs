// Baseline CSP for a server-rendered Next.js app with no third-party
// scripts/embeds today (confirmed: no analytics, no Calendly/Stripe/HubSpot,
// next/font self-hosts fonts at build time — no external font requests).
// 'unsafe-inline' on script-src/style-src is required because Next.js's App
// Router injects inline hydration/RSC bootstrap scripts, this app's own
// Organization JSON-LD <script> tag, and React's inline `style={{...}}`
// attributes used throughout the homepage sections — none of these use
// nonces, and wiring nonce-based CSP through is a larger change than this
// fix's scope. Everything else stays locked to same-origin.
// frame-src is scoped to exactly the two third-party domains this site
// embeds: Google (the Mumbai office map on the Contact page) and YouTube
// (the company-intro video on the About page).
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://www.google.com https://www.youtube.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Disabled: Next.js 16's Cache Components relies on a setTimeout
  // behavior the Cloudflare Workers runtime doesn't support yet, which
  // causes every request to hang (confirmed locally via `wrangler dev`
  // before this was deployed). Revisit once Cloudflare/Next.js close
  // this gap.
  cacheComponents: false,
  // Removes the X-Powered-By: Next.js response header (minor framework
  // fingerprint, no functional purpose).
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: CSP },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
