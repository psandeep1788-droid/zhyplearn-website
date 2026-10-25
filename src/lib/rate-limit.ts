/**
 * Minimal in-memory rate limit: a handful of submissions per IP per window.
 * Resets on cold start — acceptable for a low-traffic marketing-site form;
 * revisit if spam becomes a real problem (see Cloudflare Turnstile note
 * in the foundation checklist).
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}
