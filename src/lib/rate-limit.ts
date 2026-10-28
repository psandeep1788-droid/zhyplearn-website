/**
 * Minimal in-memory rate limit: a handful of submissions per IP per window.
 * Resets on cold start — acceptable for a low-traffic marketing-site form;
 * revisit if spam becomes a real problem (see Cloudflare Turnstile note
 * in the foundation checklist).
 *
 * Portability note: this `Map` is per-process state. It's an independent
 * limit per isolate/instance rather than a single global one wherever more
 * than one instance of the app can run concurrently — Cloudflare Workers
 * (many isolates across the edge), a multi-instance/clustered Node
 * deployment, or serverless platforms that spin up parallel invocations.
 * In those cases the effective limit per visitor is higher than
 * MAX_PER_WINDOW suggests, not lower — it never under-blocks a single
 * legitimate visitor, it just doesn't coordinate across instances. A
 * shared store (e.g. Redis, or a platform's own edge rate-limiting
 * product) would close that gap, but that's new infrastructure outside
 * this change's scope — noted here rather than added speculatively.
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
