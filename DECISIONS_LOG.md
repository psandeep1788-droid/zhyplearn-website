# ZhypLearn — Decisions Log

Chronological record of material decisions, supersessions, and open conflicts.
Nothing here is silently replaced — superseded items are marked as such, not deleted.

## Design & Branding
- **Product name correction:** the product is **ZhypLearn**, not "Zhypility LMS 3.0"
  — corrected everywhere, including the live Artifact. Company name "Zhypility
  InfoSolutions" kept separate, footer-only.
- **"Courz Builder"** confirmed as a real ZhypLearn feature (not a separate
  product) → presented publicly as "ZhypLearn Courz Builder."
- Header "BY ZHYPILITY INFOSOLUTIONS" line: added, then explicitly removed per
  Sandeep's instruction — company attribution stays footer-only.
- Design direction: Sana Labs reviewed for *principles only* (editorial rhythm,
  narrative-over-feature-lists, layered hero composition) — no Sana text, graphics,
  or branding was copied. Confirmed originality maintained throughout.
- **Header/footer branding changed (2026-10-25) — supersedes the text-wordmark
  approach:** header must show the official Zhypility InfoSolutions logo image,
  not "ZhypLearn" text. Logo file received as a verified real attachment (an
  earlier inline chat paste with no file path was explicitly rejected and
  re-requested, to avoid using a possibly re-encoded copy), saved byte-identical
  to `public/zhypility-logo.webp`. **Header implemented and deployed** (commit
  `80ad1f2`) — served via plain `<img>`, not `next/image`, specifically so the
  source file is never re-encoded or resized. Nav height increased 76px→92px
  and logo display size increased after initial testing showed the full lockup
  (mark + wordmark + tagline) was illegible at the first size tried. Verified
  live on desktop and mobile before and after deploy.
  **Footer extension requested (2026-10-25):** same logo-instead-of-text change,
  now also for the footer — **not yet implemented**, pending a legibility check
  against the footer's dark background (see Acceptance Criteria).

## SCORM Capabilities
- **2026-10-25 — product owner confirmed two specific capabilities**, superseding
  the earlier blanket "unconfirmed" status:
  1. SCORM Package Upload.
  2. AI-Powered Course Creation with SCORM Output.
- Explicitly **not** confirmed and must not be claimed: SCORM version(s), learner
  tracking, completion reporting, score tracking, or any other SCORM-adjacent
  functionality. These two are a narrower, confirmed subset of "SCORM support" —
  not a blanket confirmation of everything SCORM-related.
- Homepage must feature these two prominently once Phase 3 (homepage
  implementation) begins — not a reason to delay that phase.

## Real Product Screenshots
- Sandeep supplied 19 real screenshots. Audit found they showed a named client's
  live branded tenant (Future Pipe Industries) and a law firm's explicit
  confidentiality notice (Rajah & Tann Asia) — **declined to publish as-is.**
- Agreed approach: redact only the identifying elements (logos, real names, the
  confidential notice) while leaving actual product UI untouched. Done, re-audited
  for missed PII (found and fixed 3 additional gaps: a header photo avatar, a
  system-account name, and a product-line-specific calendar event), republished to
  the Artifact.
- **Superseded:** Sandeep's later instruction ("use existing screenshots only as
  temporary design references... do not spend time editing screenshots at this
  stage") pauses further real-screenshot work. The redaction work already done
  isn't wrong, it's just not the active workstream — real, approved proprietary
  images are pending from Sandeep for later use.

## Page Structure
- **Original (Phase 1):** 9 separate pages (Home, Platform, AI-Powered Learning,
  Interactive & Immersive Learning, Solutions, About, Contact, Book a Demo,
  Privacy).
- **Superseded by (explicitly approved):** 5 pages — one rich homepage with anchor
  navigation covering Platform/AI Capabilities/Solutions/How It Works, plus About,
  Contact, Book a Demo, Privacy as standalone pages.

## Technology Stack
- Next.js + TypeScript + Tailwind + Framer Motion: proposed, approved in
  principle, now implemented at the foundation level (Framer Motion installed,
  not yet applied to components).

## Hosting — Pivot Chain
1. **Vercel** (original default assumption) → **ruled out**: Hobby tier confirmed
   (via research) to be non-commercial-use only; Sandeep declined Vercel Pro
   (~$20/month).
2. **Netlify Free** → chosen, confirmed commercial-use-permitted by Netlify's own
   published statement → Sandeep's new account was **auto-suspended by Netlify's
   own fraud detection** immediately after signup (platform-side, not a
   configuration issue). Netlify support contact suggested, not waited on.
3. **Cloudflare Workers** (previously identified as the vetted backup) →
   **current, live decision.** Deployed via `@opennextjs/cloudflare`. UAT URL
   verified working: <https://zhyplearn-website.psandeep1788.workers.dev/>.
   - During setup, Cloudflare's dashboard flow turned out to be its newer unified
     "Workers" deploy flow, not the classic "Pages" flow originally researched —
     the free-tier cost research done earlier was for Pages specifically and needs
     re-confirming for Workers (see Decisions Needed below).
   - A real compatibility bug was found and fixed before deployment: Next.js 16's
     "Cache Components" feature hung every request on Cloudflare's runtime
     (`setTimeout` incompatibility) — disabled, re-verified working via `wrangler
     dev` against the actual Workers runtime, not just `next dev`.

## Database
- **Confirmed:** Neon PostgreSQL, separate ZhypLearn project, own credentials,
  never shared with the CRM's database (verified by inspecting the CRM repo
  directly — it uses Prisma + PostgreSQL + a not-yet-provisioned AWS RDS target,
  confirming Postgres is the right family but RDS is not the right hosting choice
  for this project's scale/budget).

## Demo Form
- Collects name, work email, company, message. Stores to Neon, notifies via
  Resend as best-effort. Honeypot + rate-limiting for spam. Never shows success
  unless the lead is actually stored — verified live.

## Git Identity
- This machine had no git author identity. Set **locally, for this repo only**
  (not globally) at Sandeep's explicit instruction and provided email
  (`psandeep1788@gmail.com`) — not set unilaterally.

---

## Open Decisions Needed (carried into `PROJECT_STATUS.md` Risks section)

1. **Analytics approach is stale.** The original recommendation (Vercel Web
   Analytics) no longer applies — hosting is Cloudflare, not Vercel. Needs a fresh,
   privacy-conscious, free recommendation and your approval.
2. **Production-detection bug.** `isProductionDeploy()` checks a Netlify-only
   environment variable and will never correctly detect a real Cloudflare
   production deploy as-is. Needs fixing before launch; harmless today.
3. ~~Cloudflare Workers free-tier limits need re-confirming~~ — **Resolved during
   this audit.** Confirmed directly from Cloudflare's own docs: **100,000
   requests/day** (resets midnight UTC), 1,000 req/min burst cap, 10ms CPU time per
   request. Far beyond what a marketing site needs at launch. Source:
   [developers.cloudflare.com/workers/platform/limits](https://developers.cloudflare.com/workers/platform/limits)
4. ~~SCORM support status — still unconfirmed by Sandeep~~ — **Resolved
   2026-10-25**: two specific capabilities confirmed (SCORM Package Upload;
   AI-Powered Course Creation with SCORM Output). See "SCORM Capabilities" above.
   Version/tracking/reporting/scoring details remain unconfirmed and must not be
   claimed.
