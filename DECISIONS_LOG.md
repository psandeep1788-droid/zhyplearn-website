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
  **Footer implemented and deployed (2026-10-25, commits `5505a4b`,
  `2f717eb`):** same logo-instead-of-text change applied to the footer, plus
  removal of the now-redundant separate "Empowering Your Learning Journey"
  `<p>` (the tagline is already inside the logo image), per Sandeep's explicit
  follow-up instructions. A follow-up report that the logo looked "stretched"
  was correctly diagnosed: the footer's `flex-col` container defaults to
  `align-items: stretch`, which forced the image to fill the column's width
  and distort its aspect ratio (the header never hit this, since it's a row
  layout) — fixed with `self-start`. Legibility against the charcoal
  background verified via browser screenshot/zoom at desktop and 375px mobile
  widths. Build and lint pass. Re-verified live on the Cloudflare UAT
  deployment (desktop + mobile, no console errors, robots.txt still
  disallows indexing) after `wrangler login` was re-authenticated.

## Pre-UAT Design Checklist Alignment (2026-10-25)
Sandeep supplied a third-party technical reference, "SaaS LMS Marketing
Website — Pre-UAT Design Checklist" (12 checkpoint items across Funnel & Lead
Capture, LMS & Product Showcases, Pricing & Subscription Models, and
Responsive & Display Assets). Reconciled against this project's existing
requirements rather than treated as a new roadmap. Classification key:
**A** = required now (current site/UAT) · **B** = required before production
launch · **C** = future enhancement, needs separate approval · **D** = deferred,
blocked on a business/product/integration decision not yet made. Status is
evidence-based (code read directly, or live-browser-verified this session),
never assumed.

| # | Checklist item | Class | Status | Rationale / phase | Dependency |
|---|---|---|---|---|---|
| 1 | Demo Scheduling Flow (embedded calendar states) | D | The existing custom demo-request **form** (not a calendar widget) is Implemented & verified — Phase 2 foundation, honest-failure behavior confirmed live. Upgrading to an embedded Calendly/HubSpot-style calendar is a different, bigger feature. | No phase assigned until approved — not Phase 2 scope as originally defined | Needs Sandeep's decision on a scheduling tool, and a new third-party account (Sandeep creates it, not Claude) |
| 2 | Product Handoff (marketing ↔ `app.*` URLs/session params) | D (implementation) | **Documented now** (this entry) per Sandeep's instruction; **not implemented** — no login URL, no session/SSO architecture exists. Matches the standing Login-button decision: real URL only when supplied, never invented. | Phase 4+ (Supporting Pages) at the earliest, once the LMS product side defines the handoff | Blocked on the actual LMS login URL and session/auth design — owned by the product team, not this website |
| 3 | Form Fields & Validation (inline errors, required fields, corporate-email blocking) | A | **Implemented but not fully verified.** Verified by reading `DemoRequestForm.tsx`/`validation.ts` directly: required fields + email-format validation exist client-side (HTML5) and server-side (Zod), plus honeypot + rate-limiting. **Gaps found:** only one generic error banner, not per-field inline states; no corporate/business-email-domain blocking exists at all. | Phase 2 (Demo-Request Workflow) | Corporate-email-only policy needs Sandeep's decision (should a personal Gmail/Yahoo address be blocked, or just discouraged?) before it's built |
| 4 | Post-Action Success Views (dedicated confirmation page for tracking pixels) | A (core) / D (tracking) | **Core requirement implemented & verified**: success is shown inline only after the lead is actually validated and stored, never faked — verified live earlier in the project. **Not implemented:** a separate, dedicated confirmation URL to host analytics/conversion pixels. | Phase 2 core: done. Dedicated tracking page: Phase 5 (SEO) at the earliest | Blocked on the still-open Analytics decision (see "Decisions Needed" below) — no analytics tool chosen yet |
| 5 | Interactive Features (mini-course preview, feature calculators) | C | Explicitly named in Sandeep's own instruction as an optional future enhancement, not automatic scope. Not started. | Unscheduled — future phase, needs separate approval | None blocking; purely an approval decision |
| 6 | Media & Canvas Frameworks (locked aspect ratios, no layout shift) | A | **Implemented & verified.** Every `ScreenshotPlaceholder` instance and all 3 inline SVG illustrations (hero, assessment, multilingual) declare explicit `aspect-ratio`/`width`/`height`/`viewBox` — confirmed by code review and live-browser checks across every Phase 3 build stage. | Phase 3 (Homepage) — already met | None |
| 7 | Audience Pathing Navigation (separate landing paths per cohort) | C | Current single-homepage Solutions section already segments by audience (Enterprises/SMEs/Educational Institutions) within one page. Dedicated landing pages per cohort is a larger change, already logged as a future proposal in `MASTER_REQUIREMENTS.md` §9. | Unscheduled — future phase, needs separate approval | None blocking; purely an approval decision |
| 8 | Billing Switch Interactions (Monthly/Annual toggle) | D | No pricing page or pricing model exists. Directly prohibited for now by Sandeep's standing rule against invented pricing. | No phase — blocked until a pricing model exists | Needs a confirmed pricing/subscription model from Sandeep |
| 9 | System Cap Transparency (e.g. "Max 50 active learners") | D | No tier/capacity limits have been confirmed by the product owner. Stating any number now would violate the standing "no fabricated capabilities or statistics" rule. | No phase — blocked | Needs confirmed tier limits from the product owner |
| 10 | Enterprise Funnel Branching (tier-specific form fields) | D | Depends on items 8 and 9 (pricing/tiers) being decided first, plus confirmed B2B routing rules. | No phase — blocked | Needs the pricing model and B2B routing rules first |
| 11 | Breakpoints for Complex UI (pricing grids, comparison tables) | A (general) / D (pricing-specific) | **General responsive-grid requirement already implemented & verified**: Platform strip, Showcase gallery, Solutions and How It Works all reflow correctly at tested breakpoints, confirmed live at mobile (375px) and desktop. **Pricing grids / feature-comparison tables don't exist** — blocked on item 8. | Phase 3 general case: met. Pricing-specific case: no phase | Blocked on a pricing model existing at all |
| 12 | Font & Headline Scalability (fluid sizing, no overlap on small laptop/tablet) | A | **Implemented but not fully verified.** Headings use fixed per-breakpoint sizes (e.g. `text-[26px] sm:text-[30px]`), not true fluid/`clamp()` scaling. Only mobile (375px) and desktop (1280px+) have been live-tested this session — the ~768–1024px tablet/small-laptop range the checklist specifically names has **not** been separately verified. | Phase 3/6 (Homepage / QA) | None — this is a verification task Claude can complete without further approval, just hasn't been done yet |

**Explicitly out of scope for now** (per Sandeep's instructions, restated for
clarity): no subscription billing, checkout, invented pricing, unsupported
learner limits, or other unconfirmed commercial claims anywhere on the site.
This remains ZhypLearn's marketing website, not the LMS SaaS application
itself — no learner login, dashboard, or in-product functionality is in scope.

## Phase 3 — Homepage Implementation (2026-10-25)
- **Plan approved, then implemented in 4 staged commits**, each built, linted,
  visually verified (desktop + mobile, live browser) and deployed to UAT before
  the next stage began: (1) Hero/Platform/AI Content Creation/Engagement, (2)
  Assessment/Multilingual, (3) Platform Management/Showcase, (4) Solutions/How
  It Works/Final CTA.
- **Sandeep's plan-approval decisions, applied exactly:** placeholder frames
  (not a wait) for the 11 missing screenshots, forward-compatible with a `src`
  prop; the two SCORM statements used verbatim as Sandeep wrote them; the
  Artifact's old text-wordmark nav/footer, "BY ZHYPILITY INFOSOLUTIONS" line
  and placeholder (`#`) social icons were **not** carried over — the real,
  already-built logo-based `Nav.tsx`/`Footer.tsx` are the source of truth; the
  Artifact's "LMS Login" nav button was omitted (no login URL supplied, none
  invented); "Narrative 1–4 —" eyebrow prefixes dropped for customer-facing
  labels.
- **Real bug found and fixed during stage 4:** `globals.css` had an unlayered
  `h1,h2,h3 { color: charcoal }` rule. In Tailwind v4's CSS cascade-layers
  setup, unlayered CSS always wins over layered utility classes regardless of
  specificity — so `text-white` on the dark Solutions section was silently
  overridden, making "Solutions Built Around You" and the card headings nearly
  invisible. Fixed by wrapping the rule in `@layer base`; re-verified all prior
  sections were unaffected, on both the local build and the live deployment.
- **Mid-build scope clarification (Sandeep):** reinforced that this is a
  marketing website, not a SaaS product rebuild — no login, dashboard, account,
  subscription, billing, or onboarding functionality. Confirmed and stated
  explicitly that nothing built drifts into that territory: the 3 SVG mockups
  are labelled illustrative, the 11 screenshot slots are labelled placeholders,
  no login URL was invented.
- **Verification discipline note:** a mid-build live check appeared to show the
  final 3 sections missing from production. Root cause was a stale client-side
  tab reused across several deploy stages (Next.js soft-navigation on a
  hash-only URL change doesn't refetch). Confirmed via a fresh no-cache
  `fetch()` and a brand-new tab that the deployed content was correct —
  documented here so this isn't mistaken for a real deployment gap later.
- **Outstanding before Phase 3 is "done":** Sandeep's own visual review against
  the Artifact (not a Claude substitute, per `ACCEPTANCE_CRITERIA.md`), and
  final approved product screenshots to replace the 11 placeholders.

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
5. **Demo scheduling approach** (from the Pre-UAT Design Checklist). Keep the
   current custom form, or move to an embedded calendar tool (Calendly/
   HubSpot)? The latter needs a new third-party account Sandeep would create.
6. **Corporate-email-only policy for the demo form.** Should a personal
   Gmail/Yahoo/etc. address be blocked outright, just discouraged, or left as
   is? No domain-blocking exists today.
7. **Pricing/subscription model** — entirely undefined. Blocks 3 checklist
   items outright (billing toggle, tier-limit transparency, enterprise funnel
   branching). No work should start here without Sandeep's explicit business
   decision.
8. **Tablet-width (~768–1024px) verification of the Phase 3 homepage** has not
   been done — only mobile (375px) and desktop (1280px+) were live-tested.
   No external blocker; just not yet scheduled.
