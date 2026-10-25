import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disabled: Next.js 16's Cache Components relies on a setTimeout
  // behavior the Cloudflare Workers runtime doesn't support yet, which
  // causes every request to hang (confirmed locally via `wrangler dev`
  // before this was deployed). Revisit once Cloudflare/Next.js close
  // this gap.
  cacheComponents: false,
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
