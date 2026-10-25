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

### Follow-up decisions on the checklist items (2026-10-25)
Sandeep reviewed the classification above and made these final calls:
1. **Demo form stays custom** — no calendar-embed tool, no new account. Sales
   coordinates scheduling after an enquiry comes in.
2. **No personal-email blocking** — any valid email is accepted; a business/
   institutional address may be gently suggested, never enforced.
3. **Form improvements approved as planned work** (not yet built — see the
   implementation plan presented alongside this entry): per-field inline
   validation, retained server-side validation, an explicit confirmation
   state, and the existing "never show success on failure" rule kept intact.
   Database persistence and email-notification behavior must be verified
   before the form is called production-ready — not assumed from the code
   alone.
4. **Pricing/subscriptions reaffirmed deferred** — see Decision #7 above.
5. **Analytics reaffirmed open** — see Decision #9 above; requirement
   clarified to cover demo-CTA engagement and successful-enquiry measurement
   without exposing personal information.
6. **Tablet QA added to acceptance criteria** — see Decision #8 above and
   `ACCEPTANCE_CRITERIA.md`.
7. **Future integrations documented, not built**: the calendar-scheduling
   tool (if later approved) and the LMS Product Handoff (real login URL,
   session parameters) both remain documentation-only until their
   dependencies are confirmed — no implementation, no invented URLs.
8. **Explicitly confirmed still out of scope**: interactive course previews,
   pricing functionality, audience-specific landing pages, or any unrelated
   feature — none of this follow-up authorizes building them.

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

## Third Stakeholder Document Reconciliation (2026-10-25)
Sandeep supplied a third document, "ZhypLearn: 360° Comprehensive Website
Audit & Strategy" (**Doc C**), for reconciliation against the existing
docs and the two prior reconciliation rounds below. PDF read in full (2
pages, confirmed complete). Access to the repo and all 5 governing documents
confirmed. **Note:** the pasted task instructions this round cut off mid-way
through section B; proceeded using the same reconciliation pattern as the
two prior rounds (clear precedent, documentation-only, low risk), flagged to
Sandeep rather than guessed at silently.

**Fresh verification (not recalled from memory — re-checked live, right now):**
- Confirmed via `git log`: commits `39edf97` and `2b068d1` are exactly as
  reported — `39edf97` is still the current tip of both local and
  `origin/main`, working tree clean.
- Re-fetched the live site with `cache: 'no-store'` and inspected the actual
  HTML: hero subcopy reads "one connected platform" (old "AI-powered
  platform" phrase absent); floating chip reads "Course Creation" (old
  "AI-Assisted Creation" absent); Final CTA's only button is `<a
  href="/book-a-demo">Book a Demo</a>`, followed by the secondary
  `mailto:`/`tel:` links; Footer's COMPANY column still has its own working
  `/book-a-demo` link, unchanged. All exactly as previously reported.
- Live-clicked the Final CTA button in this session: confirmed it lands on
  `/book-a-demo` with no console errors.

**Doc C's recommendations, reconciled (full detail below). Three of its five
sections substantially repeat Doc A/B from the first reconciliation round —
noted as repeats, not re-litigated from scratch:**

| Doc C item | Status |
|---|---|
| "Explore the Platform" → "Take a Product Tour" | **Repeat of Doc A/B.** Decision unchanged: not recommended as a literal rename while the button still does a static anchor-scroll, not a guided tour. |
| Mega-menu consolidation (Platform/AI Capabilities/In Action → "Product"/"Features") | **Repeat of Doc A/B.** Decision unchanged: deferred, real nav-IA build, not a documentation change. |
| "Pricing" nav tab | **Repeat of Doc A/B.** Decision unchanged: blocked entirely on the undefined pricing model. |
| Sticky header / "Sticky CTA Headers" | **Repeat of Doc B's inaccurate claim.** The header (`Nav.tsx`) already uses `sticky top-0` — re-confirmed again this round. Nothing to implement. |
| 11 "Coming Soon" placeholders | **Repeat of Doc A/B.** Decision unchanged: current placeholders already meet the "premium, clearly labelled" bar Sandeep approved; higher-fidelity illustrative mockups remain a future polish option (C), not a defect. |
| Hero H1 → "Train Teams and Build Branded Courses 10x Faster with Agentic AI" | **Repeat of Doc A, word-for-word.** Decision unchanged: the "10x Faster" claim has no supporting evidence — **not recommended**. The approved, fixed H1 is untouched. |
| CRM/Calendly-integrated multi-step lead form | **Repeat of Doc A.** Decision unchanged: conflicts with Sandeep's explicit decision to keep the custom form and not adopt a calendar tool. |

**New items from Doc C, not seen in the first two documents:**

| # | Doc C proposal (exact wording) | Current label | Assessment | Decision |
|---|---|---|---|---|
| 1 | "Intelligent Assessment" → **"Smart Assessments & Integrity Suite"** | Intelligent Assessment (Platform strip card) | Doc C **merges** two previously-separate proposals from round 1 into one: "Smart Assessments" (already approved) and an "Integrity Suite" addition that functions like round 1's rejected "Integrity & Compliance Control" — it implies broader security/compliance capability than the confirmed AI Proctoring + Quizzes feature set, and the Assessment section already carries a deliberate disclaimer that this would contradict. **The two source documents are inconsistent with each other here** — recorded, not silently resolved. | "Smart" portion: **approved** (consistent with round 1). "& Integrity Suite" portion: **not recommended**, same rationale as round 1's "Integrity & Compliance Control" rejection |
| 2 | "Platform Management" → **"Admin Control Center"** / **"Core LMS"** | Platform Management (homepage section heading) | Verified against `PlatformManagement.tsx`: the section is 3 static, descriptive cards (Create & Organise / Deliver & Assess / Review Progress) — no interactive admin panel exists. "**Core LMS**" is a direct scope-boundary risk — it would brand a marketing-site section as the actual LMS product, contradicting this project's own standing rule that the website is not the application itself. "Admin Control Center" is a milder copy change but still implies more interactivity than the static cards actually have. | "Core LMS": **not recommended** — scope-boundary conflict. "Admin Control Center": **deferred/needs clarification** — acceptable only if kept purely descriptive, not implying a real control panel |
| 3 | "Partner Logo Ribbon... leverage parent organization footprints (Zhypility InfoSolutions)" | — (new hero element) | Distinct from round 1's "Customer Logo Ribbon" proposal: this one uses the **parent company's own branding** (already approved for footer use per `MASTER_REQUIREMENTS.md`), not third-party client logos needing separate authorization. Lower risk than round 1's version, but still new scope — a visual ribbon element under the hero doesn't exist today and needs a design decision | **Deferred** — future enhancement, needs a design/placement decision, not blocked on client permissions like round 1's version was |
| 4 | "Asynchronous Review Integration" — customer quotes/G2/LinkedIn reviews "as the software lifecycle advances" | — | No real customer reviews exist yet to display — Doc C's own phrasing already acknowledges this is future-dependent, consistent with the standing "no fabricated testimonials" rule. Nothing to do today | **Deferred** — correctly contingent on real reviews existing in the future, not a current gap |

## Stakeholder Audit Reconciliation (2026-10-25)
Sandeep supplied two third-party documents — "ZhypLearn Website Audit & Master
Strategy" (**Doc A**) and "ZhypLearn Website Design Audit & Nomenclature
Strategy" (**Doc B**) — for reconciliation against this project's existing
docs, not as a new roadmap. Verified against the actual current code/live site
before writing anything below, per instruction; nothing here is assumed.

**Verified first (evidence, not assumption):**
- `src/components/layout/Nav.tsx` already uses `sticky top-0` — the header
  is already sticky. Doc B's claim that the site "completely avoids... a
  hidden navigation toggle" is **inaccurate** — the mobile hamburger menu
  exists and is correct, standard behavior below `lg:` (1024px); it does not
  hide "core links," it's the responsive pattern already fixed in commit
  `185dc45`.
- "Explore the Platform" (`src/components/sections/Hero.tsx:38`) links to
  `href="#platform"` — a same-page anchor scroll to the existing Platform
  strip section. It is **not** a dead link, routing loop, or blank
  authentication dashboard. Doc B's "Ambiguous Action Boundaries" risk does
  **not apply** to the current implementation.
- Exactly **11** screenshot placeholders exist ("Product screenshot — coming
  soon"): 2 in AI Content Creation, 1 in Engagement, 8 in Showcase — matches
  both documents' "over 10" claim.
- The word "AI" appears **7 times** in the visible hero viewport text (eyebrow,
  H1, subcopy, 3 check badges, 1 floating chip) — Doc B's "five positions"
  claim is accurate in direction, actual count is higher.
- **Follow-up implemented 2026-10-25:** Sandeep approved a narrowly scoped
  fix for the Final CTA defect and a reduction in hero "AI" density. Hero
  subcopy changed from "...one AI-powered platform" to "...one connected
  platform"; the floating UI chip changed from "AI-Assisted Creation" to
  "Course Creation". The H1 (fixed positioning statement), eyebrow, and the
  three capability badges ("Built-in GenAI", "AI Proctoring", "AI Authoring
  Tool") were explicitly left unchanged to avoid touching locked copy or
  creating inconsistent terminology with the Assessment section. No
  performance/speed claims were introduced. Verified live, no regressions.
- **New finding, not named in either document:** the homepage's main Final
  CTA (`src/components/sections/FinalCta.tsx`) and the Footer
  (`src/components/layout/Footer.tsx`) both use raw `mailto:`/`tel:` links
  ("Schedule a Demo" → `mailto:`, "Call ..." → `tel:`) instead of routing to
  the actual `/book-a-demo` page, which has the validated, tested demo form
  with database persistence and email notification. The header's own "Book a
  Demo" button correctly links to `/book-a-demo` — only the Final CTA section
  and Footer bypass it. This means the site's most prominent conversion point
  currently skips the built lead-capture system. Flagged as a real defect,
  not fixed in this documentation-only pass (see action register).

### Nomenclature decision table
Exact wording preserved from both source documents, which differ slightly on
two rows (noted). No proposal was substituted with different wording of my
own.

| # | Current label | Doc A proposed | Doc B proposed | Stakeholder rationale | Assessment | Decision |
|---|---|---|---|---|---|---|
| 1 | Platform / AI Capabilities / In Action | "Product (Unified Mega Menu)" | "Product (Drop Panel)" | Collapses overlapping tabs into one scannable module map | Legitimate nav-clutter concern, but this is a real IA/component build (dropdown menu, keyboard/focus handling, mobile adaptation), not a label swap. No functionality lost if destinations are preserved. | **Deferred — future enhancement**, needs its own design/build effort, not a documentation-only change |
| 2 | In Action | — (folded into "Product") | "Resources / Tour" | Signals dedicated documentation/visual-validation channels | No "Resources" content (docs, blog, case studies) exists on the site to populate such a menu — adding the label without content would be an empty promise. The section it currently points to (`#showcase`) is itself mostly placeholder screenshots today. | **Not recommended as "Resources"** (no content to support it) — **deferred** as "Tour" pending real, non-placeholder showcase content |
| 3 | ZhypLearn Courz Builder | "AI Authoring Workspace" | "AI Authoring Workspace" | Removes "dated 'z' styling", reads as premium enterprise label | This is the actual **product's established feature name**, used consistently per `MASTER_REQUIREMENTS.md` §1 ("ZhypLearn Courz Builder... presented publicly as 'ZhypLearn Courz Builder'"). Renaming it only on the marketing site risks a mismatch with what the real product calls itself. This is a product-naming decision, not a copy-polish decision. | **Deferred — requires Sandeep's explicit product-naming decision**, not a marketing-copy call |
| 4 | Intelligent Assessment | "Smart Assessments" | "Smart Assessments" | More modern, accessible descriptor | Pure tone/phrasing change — does not imply new capability or claim, low risk | **Recommended for approval** |
| 5 | Assessment & Verification | "Integrity & Compliance Control" | "Integrity & Compliance" | Aligns with corporate procurement/compliance language | This implies regulatory/compliance certification or systemic security guarantees that are **not verified**. The current section already carries an explicit, deliberate disclaimer ("AI Proctoring supports assessment integrity; it is not a guarantee against all forms of misconduct.") — adopting "Compliance Control" language would contradict that disclaimer and overstate the actual, confirmed capability (AI Proctoring + Quizzes only). | **Not recommended** as proposed. Would need verified compliance certifications or features before reconsidering — evidence, not phrasing, is the blocker |
| 6 | Explore the Platform (CTA) | "Take a Product Tour" | "Take a Product Tour" | Sets realistic expectations vs. an unbuilt sandbox | Verified: the button currently does a same-page anchor scroll to a **static** content grid (§1 above) — not a guided or interactive tour. Relabeling it "Take a Product Tour" would **overstate** what actually happens, the opposite of the stakeholders' own stated goal ("manage expectations", "set realistic bounds"). | **Not recommended as a literal rename** given the current static destination. Revisit only if an actual guided/interactive tour experience is later built (future scope) |

### Consolidated action register
Classification: **A** = required before Phase 3 acceptance · **B** = required
before production launch · **C** = recommended future enhancement · **D** =
deferred pending decision/dependency · **E** = not recommended.

| Recommendation (source) | Class | Status | Rationale / priority | Dependencies | Approval needed? |
|---|---|---|---|---|---|
| Final CTA / Footer bypass the real demo form via raw `mailto:`/`tel:` (found independently during this review) | **A** | **Fixed and deployed 2026-10-25** — Final CTA's primary button now links to `/book-a-demo`; Footer was already correct, unchanged | Resolved — verified live (navigation works, email/phone retained as secondary links, no wrapping, no console errors) | — | Approved and implemented |
| Robust layouts for long text / missing assets (Doc A §1) | B | Needs verification — not stress-tested with edge-case content lengths (very long names, long chip labels) | Resilience item, not yet broken, but unverified | None | No — can verify in QA (Phase 6) |
| Image compression (.webp/.avif) + CLS prevention (Doc A §1, Doc B roadmap #2) | A (CLS) done / B (compression) pending | CLS: **implemented & verified** — all placeholders and SVGs use explicit aspect-ratio/dimensions (code-reviewed). Compression: **not applicable yet** — no real raster screenshots exist to compress | Real screenshots aren't supplied yet | Sandeep supplies final product screenshots | No — only applies once real images arrive |
| Third-party script sandboxing / async loading (Doc A §1) | **E** (not applicable now) | No third-party scripts exist (no Stripe/HubSpot/Calendly integrated) — nothing to sandbox | Would only become relevant if such an integration is later approved | N/A | N/A today |
| SCORM 1.2 / 2004 ingestion validation (Doc A §1, Doc B risk #3) | **D** | Deferred — **this is product/backend engineering verification, not a website task.** The two approved marketing statements remain the only claims made; no version-specific claim exists on the site to correct | Needs the LMS product-engineering team to test real SCORM ingestion, not this website's code | Yes — product-team confirmation, not a website decision |
| Hero headline rewrite to "Train Teams and Build Branded Courses 10x Faster with Agentic AI" (Doc A §2) | **E** (as literally proposed) | The "10x Faster" claim has **no supporting evidence** — directly conflicts with the standing "no fabricated statistics" rule | A benefit-led headline direction has some merit for a future copy pass, but any numeric claim needs real data first | Yes — only if Sandeep can supply or approve a verified benchmark; otherwise rejected as written |
| Customer Logo Ribbon under hero (Doc A §2) | **D** | Deferred — no client has been confirmed as authorized for public logo display. (Prior project history: a real client's branded tenant was explicitly kept confidential, never approved for public marketing use.) | Needs Sandeep to confirm specific clients and obtain their permission | Yes — client-by-client authorization |
| Replace placeholder text with higher-fidelity vector/wireframe mockups (Doc A §2, Doc B risk #1) | **C** | Recommended future enhancement — current placeholders are already "premium, clearly labelled" (your own prior approval), not raw broken-image text. A higher-fidelity illustrative treatment is a polish option, not a defect | Should not delay for real screenshots — can be done independently | Yes — design direction call, and clarify these stay clearly illustrative, never presented as genuine screenshots |
| Multi-step inline form + real-time calendar engine (HubSpot/Calendly) (Doc A §2) | **D**, partially **E** | Directly conflicts with your explicit recent decision to keep the custom form and not introduce a calendar tool/new account. Recorded as a conflict, not silently adopted. | Calendar-tool decision already answered "no, for now" in the Pre-UAT checklist follow-up | Yes, if you want to revisit that decision — otherwise no action |
| CRM lead routing + mandatory corporate-email verification (Doc A §4) | **E** | Directly conflicts with your explicit decision: no CRM/lead-management dashboard in the marketing site, and personal emails must not be blocked (only a gentle suggestion) | — | No — conflicts with a decision already made; would need you to explicitly reverse it |
| Global nav refactor: Product / Solutions / Resources / Pricing (Doc A §4, Doc B risk "Missing SaaS Index") | **D** | Pricing nav item blocked entirely on the undefined pricing model (existing standing decision). "Solutions" already exists as a homepage section, not a nav dropdown. "Resources" has no content yet (see nomenclature row 2) | Pricing model approval; content for Resources | Yes — multi-part, needs your prioritization |
| Interactive WebXR fallbacks for AR/VR blocks (Doc A §4) | **C** | The current Multilingual & Immersive section already uses a static illustrative SVG, not a live WebXR embed — so there's no WebXR content requiring a fallback today. Relevant only if a real interactive AR/VR demo is later built | None today | No — not applicable until WebXR content exists |
| Dynamic/compressed sticky sub-bar on scroll (Doc B roadmap #1) | **C** | The header is **already sticky** (verified — see above); a shrinking/compressing animation on scroll is a polish enhancement, not a gap | None | No |
| Footer/CTA programmatic scheduler module (Doc B roadmap #3) | **D**, see Final CTA defect above | Same conflict as the Doc A calendar-tool item — the immediate, approved fix is routing the existing raw links to `/book-a-demo`, not adding a new scheduler tool | Calendar-tool decision | Yes, for the scheduler-tool part; the `/book-a-demo` routing fix (category A above) does not need new approval beyond this report |
| Analytics for demo-CTA engagement, enquiry conversion, nav/tour engagement (Doc A implied, your own point 7) | **D** | Still open — same unresolved analytics decision from the Pre-UAT checklist round, scope reaffirmed: demo-CTA engagement, successful enquiries, landing-to-enquiry conversion, without exposing personal data. Cloudflare Web Analytics is your stated starting preference, not yet assessed for capability fit or confirmed | Needs a capability/privacy assessment before approval | Yes |

## Tablet QA Findings (2026-10-25)
Tested the live homepage at 768px, ~820px, and 1024px per Sandeep's approved
Plan B. All 11 content sections pass at every width. **One real defect found:**
the sticky nav header (`Nav.tsx`) switches from the mobile hamburger menu to
the full desktop row at Tailwind's `md:` breakpoint (768px), but there isn't
enough width for 6 links + Login + Book a Demo until roughly 900–950px — at
768px the links wrap and the buttons are pushed off-screen entirely; at 820px
the links fit but Book a Demo is still cut off. Resolved by 1024px. Reported
with a proposed fix (move the breakpoint from `md:` to `lg:`, matching where
the content sections already switch to their desktop grid layouts) and
**not implemented** — Sandeep asked to see proposed fixes before any code
change from this QA pass. Full detail in `PROJECT_STATUS.md` §11.

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
5. ~~Demo scheduling approach~~ — **Resolved 2026-10-25**: keep the existing
   custom form. No embedded calendar tool, no new third-party account. The
   sales team coordinates actual scheduling after receiving an enquiry.
6. ~~Corporate-email-only policy for the demo form~~ — **Resolved 2026-10-25**:
   do not block personal email domains (Gmail, etc.) — any valid email address
   is accepted. A polite, non-blocking suggestion toward a business/
   institutional email may be shown where appropriate, as a hint only, never
   as a validation failure.
7. **Pricing/subscription model** — still entirely undefined, **reaffirmed
   2026-10-25**: blocks the same 3 checklist items (billing toggle, tier-limit
   transparency, enterprise funnel branching), plus all pricing switches,
   subscription tiers, learner-limit claims, and billing functionality.
   Nothing here may be built — including a placeholder or default — until the
   commercial model is formally approved.
8. **Tablet-width (~768–1024px) QA** — **scheduled, not yet done.** Added to
   `ACCEPTANCE_CRITERIA.md` as a concrete requirement: test representative
   widths (768px, ~820px, 1024px) against the live Phase 3 homepage and record
   the results. No blocker; implementation plan presented alongside this
   decision (see Decisions Log entry below).
9. **Analytics approach** — **kept open 2026-10-25, scope clarified**: must
   measure demo-CTA engagement and successful enquiry submissions without
   exposing personal information. Not decided until options, privacy
   implications, implementation effort, and any cost are assessed and
   presented for approval. Supersedes/narrows Decision #1 above.
