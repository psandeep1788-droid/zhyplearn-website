import type { NextRequest } from "next/server";

/**
 * Best-effort client IP for rate limiting — not an auth/security boundary,
 * so "best effort" is an acceptable trust level here.
 *
 * `CF-Connecting-IP` is set by Cloudflare's edge from the real TCP
 * connection and overwrites any client-supplied value of the same name, so
 * it can't be spoofed when the app is actually served through Cloudflare.
 * `X-Forwarded-For`'s first entry is the common fallback for other
 * reverse-proxy setups (a conventional Node host behind nginx/a load
 * balancer, etc.), but unlike `CF-Connecting-IP` it genuinely can be
 * spoofed by the client unless the specific proxy in front of the app is
 * configured to strip/overwrite incoming XFF — something this code can't
 * verify generically across hosting platforms. Treat it as a reasonable
 * default, not a guarantee.
 */
export function getClientIp(req: NextRequest): string {
  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  const forwardedFor = req.headers.get("x-forwarded-for");
  const firstHop = forwardedFor?.split(",")[0]?.trim();
  if (firstHop) return firstHop;

  return "unknown";
}
