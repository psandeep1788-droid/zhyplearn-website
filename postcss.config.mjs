// Used only for production builds (`next build --webpack`, see package.json).
// Turbopack (dev, and the default build bundler) uses its own loader rule in
// next.config.mjs instead and ignores this file. This exists specifically so
// the webpack build path — our fallback for hosts whose native SWC/Turbopack
// binary fails to load (e.g. a too-old system glibc) — can still compile
// Tailwind CSS v4.
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
