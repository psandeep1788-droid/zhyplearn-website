# ZhypLearn — Acceptance Criteria

Objective, checkable criteria for each deliverable area. A phase is not reported
"complete" unless every criterion below it has real, direct evidence (a passing
command, a verified live-browser check, or a reviewed file) — not an assumption.

## Foundation (Phase 1) — done
- [x] `npm run build` exits 0
- [x] `npm run lint` exits 0
- [x] All 5 routes return HTTP 200 on the live UAT URL
- [x] `/robots.txt` returns `Disallow: /` on non-production deploys
- [x] Demo form returns an honest error (not a fake success) when Neon/Resend
      aren't configured — verified against the live UAT URL, not just locally

## Hero Headline & Site-Wide Copy Polish (2026-10-26 addition) — done
- [x] Hero eyebrow reads "The Future of Enterprise Learning" — verified live
      via DOM text content
- [x] Hero H1 renders as exactly one `<h1>`, two lines: "ZhypLearn: A New
      Era of" in bold charcoal (`rgb(26, 26, 26)`), then "AI-Powered
      Learning." in bold, solid gold (`rgb(245, 166, 35)` = `#F5A623`
      exactly) — verified via computed styles on both the text node and the
      gold `<span>`
- [x] Supporting paragraph reads exactly "ZhypLearn brings learning
      management, engaging learner experiences, and AI-powered content
      creation together in one intelligent learning platform." — verified
      live
- [x] Primary CTA still reads "Book a Demo" and links to `/book-a-demo` —
      unchanged, verified live
- [x] No orphaned single word on its own line at desktop width (1280px) —
      a non-breaking space between "Era" and "of" keeps that pair together;
      verified via screenshot before and after the fix
- [x] No horizontal overflow at 375px (mobile) or 768px (tablet) — measured
      via `scrollWidth`/`clientWidth`
- [x] Existing hero illustration, background gradient/glow, animations,
      secondary "Explore the Platform" CTA, and the 4 capability checkmarks
      all unchanged — confirmed via diff (only the eyebrow `<span>`, `<h1>`,
      and supporting `<p>` text/styling changed in `Hero.tsx`)
- [x] `<title>` (both `layout.tsx`'s default and `page.tsx`'s
      homepage-specific override), Open Graph title, and Twitter title all
      read "ZhypLearn: A New Era of AI-Powered Learning." — verified via
      `document.title` and direct `<meta>` tag inspection live
- [x] Meta/OG descriptions retained their existing content; only their em
      dash was changed to a colon, per the approved Phase A table — verified
      via direct `<meta>` tag inspection live
- [x] `MASTER_REQUIREMENTS.md`'s fixed-wording positioning statement updated
      to the new headline, with a note that it supersedes the prior wording
- [x] Approved copy/punctuation changes applied exactly as specified in the
      Phase A table across `AIContentCreation.tsx`, `Assessment.tsx`,
      `Engagement.tsx`, `Multilingual.tsx`, `PlatformStrip.tsx`,
      `Showcase.tsx`, `ScreenshotPlaceholder.tsx`, `DemoRequestForm.tsx`,
      `Footer.tsx`, `FAQs.tsx` — verified live: Footer's 3 "Our Presence"
      lines now use "·"; all 11 screenshot-placeholder instances now read
      "Coming soon"; the 3 "Illustrative placeholder(s)" disclaimers now use
      a period; the demo form's business-email hint now reads "...respond
      faster, though personal addresses are fine too." (confirmed live by
      triggering it with a `gmail.com` address and tabbing away)
- [x] The demo form's "Network error..." and "Thank you..." strings were
      updated and confirmed correct by direct code inspection — neither is
      practically triggerable live in this environment (the first requires
      a genuine fetch failure, the second requires Neon actually configured,
      which it still isn't), so these two are **verified by reading the
      source, not by a live trigger** — flagged rather than claimed as
      live-tested
- [x] FAQs: all 8 questions, their order, and single-open accordion
      behavior confirmed unchanged live; both SCORM core sentences
      ("upload your existing SCORM course packages and manage your learning
      content in ZhypLearn." / "create AI-powered courses and export them
      as SCORM packages for use with compatible LMS platforms.") confirmed
      byte-for-byte identical — only the "Yes — " lead-in became "Yes, "
- [x] Code comments, ARIA labels/`alt` text, and the `about`/`privacy`
      placeholder stub pages confirmed untouched — `git diff` shows no
      changes to `Nav.tsx`, and the only comment-adjacent lines in changed
      files are unrelated to this edit
- [x] `robots.txt` still returns `Disallow: /`; CSP and other security
      headers unchanged; `X-Powered-By` still absent — confirmed no
      regression to unrelated configuration
- [x] `npm run build` and `npm run lint` both exit 0; no new console errors
      in a fresh tab (only the pre-existing dev-only CSP/eval warning)
- [x] `git diff --stat` confirms exactly 14 files changed, matching the
      approved scope: `MASTER_REQUIREMENTS.md`, `src/app/layout.tsx`,
      `src/app/page.tsx`, and the 10 approved copy-polish component files
      plus `Hero.tsx` — no unrelated section, nav, SEO config, or
      deployment infrastructure touched

## Header Navigation — Product Dropdown (2026-10-26 addition) — done
- [x] Desktop nav (≥1024px) collapsed to: Product (dropdown) · Solutions ·
      About · Contact · Login · Book a Demo — reduced from 6 flat items to 4,
      easing horizontal pressure at the 1024px breakpoint
- [x] Dropdown reuses existing destinations only — no new pages: Platform
      Overview → `/#platform`, AI Capabilities → `/#creation`, See It in
      Action → `/#showcase` — all 3 verified live by clicking through
- [x] Semantic `<button>` trigger with `aria-expanded`, `aria-haspopup="true"`,
      `aria-controls="product-menu"` — verified via DOM inspection, both
      open and closed states
- [x] Opens via click and Enter/Space (native button activation); closes on
      **Escape with focus returned to the trigger** (verified:
      `document.activeElement === trigger` after Escape) and on
      **click-outside** (verified via DOM state after an outside click)
- [x] Panel items are real `<Link>`s, keyboard-reachable via Tab with a
      visible focus ring (confirmed `:focus-visible` + screenshot), each
      navigates correctly and closes the dropdown afterward
- [x] Mobile/tablet hamburger menu (≤1023px) lists all 3 Product links flat,
      alongside Solutions/About/Contact — no nested accordion, verified at
      375px
- [x] No horizontal overflow at 375px/768px/820px/1024px/1280px — measured
      via `scrollWidth`/`clientWidth`, not visual guess
- [x] Login still disabled, no `href`, `aria-disabled="true"` — reconfirmed
      unchanged
- [x] Book a Demo still routes to `/book-a-demo` — reconfirmed unchanged
- [x] No mega-menu, no Pricing/Resources/Customers/Integrations added
- [x] `git diff --stat` confirms only `Nav.tsx` changed
- [x] Build and lint clean; no console errors (one `<anonymous>` script
      error is unrelated browser-tooling noise, consistent with every prior
      round this session)

## Header Branding — done (commit `80ad1f2`)
- [x] Official Zhypility InfoSolutions logo file received and saved at
      `public/zhypility-logo.webp` (byte-identical copy verified via `cmp`)
- [x] Header shows the logo only — no "ZhypLearn" text alongside it
- [x] Logo rendered pixel-faithful to the supplied file: served via plain `<img>`,
      not `next/image`, so the source is never re-encoded/resized
- [x] Logo is a clickable link to `/` — verified by clicking it live
- [x] Logo renders correctly and legibly at mobile (375px) and desktop widths —
      verified live, both locally and on the Cloudflare UAT deployment
- [ ] Visually reviewed by Sandeep himself against the actual supplied file —
      **outstanding; Claude's verification is not a substitute for yours**

## Footer Branding (2026-10-25 addition) — done (commit `2f717eb`)
- [x] Footer "ZhypLearn" text (and the separate "Empowering Your Learning
      Journey" paragraph) replaced with the same official logo
- [x] Logo legible against the footer's dark (charcoal) background — verified
      directly via browser screenshot/zoom, both desktop and mobile (375px):
      gray triangle shapes and "INFOSOLUTIONS" subtext read clearly, not washed
      out
- [x] Same fidelity rule as header: plain `<img>`, not `next/image`, no
      recoloring/re-encoding, correct aspect ratio (fixed a flex-stretch bug
      that initially distorted it)
- [x] Verified on live Cloudflare UAT deployment, desktop and mobile — no
      console errors, robots.txt still disallows indexing

## Footer Social Media Icons (2026-10-25 addition) — done
- [x] 5 icons added (LinkedIn, YouTube, Instagram, Facebook, X) under a
      "CONNECT WITH US" heading in the footer's first column, matching the
      existing gold/charcoal/white design system and icon style used
      elsewhere on the site
- [x] Destinations centralized in a named `SOCIAL_LINKS` config array in
      `Footer.tsx`, each marked with a code comment as **temporary platform
      homepages, not verified official profiles** — must be replaced before
      production launch
- [x] No new dependency added — reuses the project's existing hand-written
      inline-SVG icon pattern (no icon library exists in this project to
      "reuse" instead)
- [x] Each icon has an accessible name (`aria-label`: "LinkedIn", "YouTube",
      etc.) — not relying on icon shape alone
- [x] Keyboard accessible and a visible focus ring confirmed — **tested with
      real keyboard Tab navigation** (not just `tabIndex` inspection):
      `document.activeElement.matches(':focus-visible')` returned `true` on
      the X icon after Shift+Tab, with the gold outline visible in a
      screenshot
- [x] External links open in a new tab with `rel="noopener noreferrer"`
- [x] Verified at mobile (375px) and desktop (1280px) — icons wrap cleanly,
      no overlap, existing footer columns/content/copyright unchanged
- [x] `git diff --stat` confirms only additive changes to `Footer.tsx` — no
      other file touched, no existing footer content removed or altered
- [x] Build and lint clean, no console errors

## Solutions Copy Revision (2026-10-25 addition) — done
- [x] "Run a professional learning program without a dedicated L&D team"
      (SMEs card, `Solutions.tsx`) replaced with the approved wording
      "Deliver professional learning programs with greater ease" — codebase
      search confirmed this was the only occurrence anywhere in `src/`
- [x] No other sections or bullet points changed — `git diff --stat` shows a
      single-line change in one file
- [x] No unverified capability/performance/outcome claims introduced
- [x] Verified at mobile (375px) and desktop (1280px) — layout, typography,
      spacing unchanged, no console errors
- [x] Build and lint clean

## Technical Remediation F-1–F-6 (2026-10-26 addition) — done, verified locally and on live UAT
- [x] **F-1 (sitemap/JSON-LD/production detection):** `isProductionDeploy()`/
      `siteUrl()` now read explicit `SITE_URL`/`IS_PRODUCTION` Cloudflare `vars`
      instead of Netlify's `CONTEXT` var. Locally (no vars set, matching a
      non-production deploy), `sitemap.xml` and the Organization JSON-LD both
      resolve to `http://localhost:3000` — the correct same-origin fallback,
      not a hardcoded wrong domain — and `robots.txt` still returns
      `Disallow: /`. `wrangler.jsonc` sets `SITE_URL` to the real UAT Workers
      domain with `IS_PRODUCTION` intentionally omitted. **Confirmed live on
      the deployed UAT site** (deployed version
      `7dcfa246-ef89-429e-a075-c81ba15b4b5c`): `sitemap.xml` and the JSON-LD
      `url` both resolve to
      `https://zhyplearn-website.psandeep1788.workers.dev`, `robots.txt`
      still returns `Disallow: /`.
- [x] **F-2 (honeypot validation order):** confirmed via live POST testing
      against the dev server — a valid submission is correctly rejected only
      by real field errors; an invalid submission (short name, bad email)
      returns the expected 400 with a field message; a honeypot-filled
      submission returns `{"ok":true}` with HTTP 200 and does not reach
      validation, storage, or email. (A repeat honeypot POST immediately
      after returned 429 from the pre-existing rate limiter — expected,
      unrelated behavior, not a defect.)
- [x] **F-3 (Hero CTA routing):** `Hero.tsx`'s "Book a Demo" now uses
      `next/link` to `/book-a-demo`, matching the other 4 instances (Nav
      desktop, Nav mobile, Final CTA, Footer) — all 5 confirmed via code
      search to point at the same route.
- [x] **F-4 (OG/Twitter metadata):** live HTML fetch confirms `og:title`,
      `og:description`, `og:url`, `og:site_name`, `og:type`, `twitter:card`,
      `twitter:title`, `twitter:description` all present, text-only (no
      invented image), using the same `siteUrl()`-derived absolute URL as the
      JSON-LD.
- [x] **F-5 (security headers + CSP):** live header fetch confirms
      `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
      `Strict-Transport-Security`, `Permissions-Policy`, and
      `Content-Security-Policy` all present. Functionally tested against the
      CSP: desktop Product dropdown opens/closes (click + Escape), mobile
      hamburger menu opens with all links, and the demo API route responds
      correctly to all 3 submission cases above — no CSP violation broke any
      of this. (Dev-only note: the CSP's absence of `unsafe-eval` triggers a
      benign Next.js dev-mode console warning about React's debug `eval()`
      and blocks the dev-only HMR websocket; both are explicitly dev-tooling
      only — React's own message confirms `eval()` is never used in
      production — and do not affect the production build or any real
      feature.)
- [x] **F-6 (X-Powered-By removed):** `poweredByHeader: false` confirmed —
      header grep returns no match on the live dev response.
- [x] `npm run build` and `npm run lint` both exit 0
- [x] `git diff --stat` confirms exactly the 8 approved files changed, no
      scope creep: `.env.example`, `next.config.ts`,
      `src/app/api/demo-request/route.ts`, `src/app/layout.tsx`,
      `src/components/sections/Hero.tsx`, `src/lib/env.ts`,
      `src/lib/validation.ts`, `wrangler.jsonc`
- [x] **Deployed to UAT and re-verified live (2026-10-26, commit `155339b`,
      deploy version `7dcfa246-ef89-429e-a075-c81ba15b4b5c`):** all 6
      security headers + CSP present on the live response; Product dropdown
      and mobile menu both work under the live CSP; all 3 demo-form cases
      (valid → honest 503, invalid → 400, honeypot → silent 200) reproduced
      against the live API; all 5 Book a Demo links verified live, one
      clicked through to confirm real navigation; OG/Twitter/JSON-LD all
      resolve to the real UAT domain; `X-Powered-By` absent; zero console
      errors on the deployed production build

## FAQs Section (2026-10-26 addition) — done
- [x] New section inserted in `src/app/page.tsx` immediately after `<HowItWorks />`
      and before `<FinalCta />` — no other section reordered; `git diff --stat`
      confirms only `src/app/page.tsx` (2-line addition) and the new
      `src/components/sections/FAQs.tsx` file were touched
- [x] Eyebrow label and visible H2 heading both read exactly "FAQs" — verified
      live via DOM inspection (`#faqs span` and `#faqs h2` both return `"FAQs"`)
- [x] Light-gray section background (`bg-gray-100`), white rounded accordion
      cards with subtle gray borders, gold-dark accents (eyebrow, chevron,
      hover state) and existing typography — matches the established pattern
      from `AIContentCreation.tsx`/`Assessment.tsx`/`HowItWorks.tsx`, no new
      visual language introduced
- [x] All 8 questions implemented with the approved copy (see below);
      Q3/Q4 SCORM answers reproduced **exactly**, byte-for-byte, from the
      approved wording
- [x] Independent expand/collapse verified live: two different items opened
      simultaneously (`aria-expanded="true"` on both at once), confirming no
      single-open/auto-close behavior
- [x] Keyboard operation verified live: `Enter` opens a focused item, `Space`
      closes it, focus remains on the trigger button throughout, and a
      visible focus outline renders (`outline: rgb(229,151,0) auto 1px` —
      browser default `:focus-visible`, same mechanism relied on elsewhere
      on this site)
- [x] ARIA wiring verified live: each question is an `<h3>` wrapping a
      `<button aria-expanded aria-controls id="faq-trigger-N">`; each answer
      is `<div role="region" aria-labelledby="faq-trigger-N" id="faq-panel-N">`;
      `aria-controls`/`id` pairs confirmed to match via DOM inspection
- [x] Reduced-motion: the only animation is the chevron's `rotate-180`
      transition, which inherits the site's existing global
      `prefers-reduced-motion` rule in `globals.css` automatically — no new
      exemption needed. The answer panel itself is conditionally rendered
      (same approach as the Nav dropdown/mobile menu), not CSS-animated, so
      there is no additional motion to govern.
- [x] Restrained text CTA below the accordion ("Still have questions? Book a
      demo and we'll walk through it with you.") links to `/book-a-demo` —
      confirmed via `find` against the live DOM
- [x] No horizontal overflow at 375px (mobile) or 768px (tablet) — measured
      via `scrollWidth`/`clientWidth`, both before and after expanding an item
- [x] `npm run build` and `npm run lint` both exit 0
- [x] No console errors from the component itself — one stray
      `getComputedStyle` error seen in the first test tab was confirmed to be
      residue from this session's own manual JS test calls (reproduced clean
      in a fresh tab), consistent with the same browser-tooling-noise pattern
      documented earlier in this project
- [x] No dependency installed, no unrelated section modified, no production
      config touched

## FAQs Section — Heading & Accordion Correction (2026-10-26) — done
**Supersedes two items above** (the eyebrow+H2 bullet and the
independent-with-multiple-open bullet): Sandeep requested a single gold
heading (no eyebrow, no subtitle) and single-open accordion behavior,
correcting the original implementation.
- [x] Heading: exactly one `<h2>FAQs</h2>` remains in the section — the
      small uppercase eyebrow `<span>` and the subtitle `<p>` were removed
      entirely. Verified live: `#faqs` contains exactly 1 `<h2>`, its
      computed color is `rgb(245, 166, 35)` (`#F5A623` exactly), `font-weight:
      700`, centered — no eyebrow span or subtitle text found in the DOM.
- [x] Accordion: changed from independent multi-open (`Record<number,
      boolean>` state) to single-open (`number | null` state) — opening an
      item closes any other open item; clicking the open item again closes
      it, leaving all closed. Verified live: opening item 0 then item 1
      shows item 0's `aria-expanded` flip to `"false"` and its panel removed
      from the DOM while item 1 opens; clicking item 1 again returns all 8
      items to `aria-expanded="false"`.
- [x] `aria-expanded` confirmed accurate at every step of the above sequence
- [x] Keyboard: `Enter` opens the focused item, `Space` closes it, focus
      stays on the trigger, visible focus outline unchanged
      (`rgb(229,151,0) auto 1px`)
- [x] No horizontal overflow at 375px or 768px, with an item open, both
      before and after this change
- [x] All 8 questions and answers confirmed unchanged and in original order;
      Q3/Q4 SCORM answers byte-for-byte identical; CTA still links to
      `/book-a-demo`
- [x] `npm run build` and `npm run lint` both exit 0; no new console errors
      (only the pre-existing dev-only CSP/eval warning, reproduced in a
      fresh tab)
- [x] `git diff --stat` confirms exactly one file changed:
      `src/components/sections/FAQs.tsx` — no other file touched

## Demo-Request Workflow (Phase 2) — not yet met
- [ ] A real submission on the live site creates a row in the Neon database
- [ ] A real submission triggers a Resend email to elearning@Zhypility.com
- [ ] If the email fails, the lead is still saved and no error is shown that implies
      the lead was lost
- [ ] Spam test: submitting with the honeypot field filled does not create a row
- [x] Required-field and email-format validation, client- and server-side —
      verified by reading `DemoRequestForm.tsx`/`validation.ts` directly
- [ ] **Pre-UAT checklist addition (2026-10-25):** inline, per-field error
      states — currently only one generic error banner exists, not per-field;
      **approved as planned work**, not yet built (see implementation plan)
- [x] **Decided 2026-10-25:** no personal-email-domain blocking. Any valid
      email is accepted; a business/institutional address may be gently
      suggested as a hint, never enforced as a validation failure — approved
      as planned work alongside the inline-validation item above
- [ ] **Decided 2026-10-25:** an explicit, distinct confirmation state after a
      successful submission (clearer than today's inline message) —
      **approved as planned work**; the existing "never show success on
      failure" rule must be preserved exactly
- [ ] **Before the form is called production-ready:** verify an actual
      database row is created and the email notification fires — code review
      alone is not sufficient evidence (reaffirmed 2026-10-25)
- [ ] **Pre-UAT checklist addition:** a dedicated post-submission confirmation
      *page* for hosting analytics/conversion tracking — still **blocked** on
      the open analytics-tool decision (scope clarified 2026-10-25: must
      measure demo-CTA engagement and successful enquiries without exposing
      personal information)

## Homepage (Phase 3) — implemented, pending Sandeep's own review
- [x] Every section from the approved Artifact exists on the real site, in the same
      order (Hero → Platform → AI Content Creation → Engagement → Assessment →
      Multilingual → Platform Management → Showcase → Solutions → How It Works →
      Final CTA → Footer), with the same copy — except "Narrative 1–4 —" internal
      eyebrow prefixes dropped and SCORM copy added, both per Sandeep's explicit
      approval; the Artifact's text-wordmark nav/footer and placeholder social
      icons were not carried over, per the standing logo-branding decision
- [ ] **Visually reviewed side-by-side against the Artifact by Sandeep** — still
      outstanding; Claude's verification (build, lint, live-browser checks at
      desktop/mobile, console-error checks) is not a substitute
- [x] **Defect fixed and verified 2026-10-25** (found during stakeholder audit
      reconciliation): the homepage's Final CTA (`FinalCta.tsx`) now links its
      primary button to `/book-a-demo` ("Book a Demo", matching the header's
      wording), with email and phone retained as smaller secondary text links
      in the same section. Footer was already correct, left unchanged.
      Verified live: the button navigates to the real form, email/phone links
      still work, no wrapping at 375px or desktop, no console errors.
- [x] **Hero "AI" density reduced 2026-10-25** (stakeholder audit): subcopy
      changed from "...one AI-powered platform" to "...one connected
      platform"; floating chip changed from "AI-Assisted Creation" to "Course
      Creation". H1, eyebrow, the three capability badges, both CTAs, and the
      dashboard mockup are unchanged — verified by diff and live check. No
      performance/speed claims introduced.
- [x] Works at mobile and desktop widths without layout breakage — verified via
      live browser checks at 375px and desktop on every stage
- [x] Tablet QA run 2026-10-25 at 768px, ~820px, 1024px against the live
      homepage — results recorded in `PROJECT_STATUS.md` §11. All 11 content
      sections pass at every width tested.
- [x] **Nav header defect fixed and verified 2026-10-25** (found by the tablet
      QA above): moved the desktop-nav breakpoint from `md:` to `lg:`, plus a
      related fix for "Book a Demo" wrapping and ~19px overflow at exactly
      1024px. Re-verified live at 375px/768px/~820px/1024px/1280px — no
      overflow, no wrapping, Login/Book a Demo always one line. Details in
      `PROJECT_STATUS.md` §11.
- [x] **Pre-UAT checklist addition:** screenshots and illustrations use locked
      aspect ratios / explicit dimensions to avoid layout shift — verified by
      code review of `ScreenshotPlaceholder.tsx` and the 3 inline SVG sections
- [x] All animations (`pulse-glow`, `float`, hover-lift) respect
      `prefers-reduced-motion` — via the existing global reduced-motion rule in
      `globals.css`, unchanged
- [x] **SCORM capabilities (2026-10-25 addition):** both confirmed capabilities
      featured prominently with Sandeep's exact approved wording — "Create
      AI-powered courses and export them as SCORM packages for use with
      compatible LMS platforms" (AI Content Creation section) and "Upload your
      existing SCORM course packages and manage your learning content in
      ZhypLearn" (Platform Management section) — verified present in the live
      HTML via a direct no-cache fetch, not assumed. No SCORM version,
      tracking, completion-reporting, or score-tracking claims made.
- [x] **11 product-screenshot slots**: built as premium, clearly labelled
      placeholder frames ("Product screenshot — coming soon"), visually
      distinct from the 3 illustrative SVG mockups (hero, assessment,
      multilingual), and forward-compatible — each accepts a `src` prop so a
      real screenshot drops in later with no layout change
- [x] **Marketing-website scope preserved**: no login form, dashboard,
      account/subscription/billing flow, or invented login URL was built; the
      Artifact's "LMS Login" nav button was omitted per Sandeep's instruction

## Header Login Button (2026-10-25 addition) — done
- [x] Login button added to desktop nav and mobile menu, alongside Book a Demo
- [x] Genuine disabled `<button>` — no `href`, not clickable, not
      keyboard-focusable — verified via live DOM inspection and a failed
      click test on the deployed site, not assumed
- [x] No login page, form, dashboard, or auth logic added; no URL invented
- [x] One-line change to activate once a real login URL is supplied

## Deferred / Future Scope (Pre-UAT Design Checklist, 2026-10-25)
Not part of any current phase — listed here so they are not mistaken for
missed work. See `DECISIONS_LOG.md` for the full classification and
rationale per item.
- Interactive course-preview widgets / feature calculators (**C** — future,
  needs separate approval)
- Audience-specific landing pages per cohort, beyond the homepage's existing
  Solutions section (**C** — future, needs separate approval)
- Embedded calendar scheduling tool in place of the current form (**D** —
  blocked on a tool decision + new third-party account)
- Pricing/billing toggle, tier-limit transparency, enterprise funnel branching
  (**D** — blocked entirely on an undefined pricing model; nothing here may be
  built, including a default/placeholder price, until Sandeep confirms one)
- Product Handoff to the LMS login portal (URLs, session parameters) —
  documented in `DECISIONS_LOG.md`, **not implemented**; blocked on the real
  login URL and session/auth design from the product team

## Supporting Pages (Phase 4) — not yet met
- [ ] About, Contact, Privacy have final, reviewed copy (not placeholder text)
- [ ] Each has a unique, correct `<title>` and meta description

## SEO (Phase 5) — not yet met
- [x] **Fixed 2026-10-26 (F-1):** `isProductionDeploy()` now reads explicit
      Cloudflare `vars` (`IS_PRODUCTION`/`SITE_URL`) instead of Netlify's
      `CONTEXT` — see Technical Remediation F-1–F-6 above for evidence
- [ ] Sitemap URLs resolve to the real production domain once connected
- [ ] Organization schema validates with Google's Rich Results Test
- [ ] No fabricated statistics, ratings, or claims anywhere in metadata or schema

## QA (Phase 6) — not yet met
- [ ] Lighthouse: Performance, Accessibility, Best Practices, SEO all scored and
      reported (not just assumed good)
- [ ] Manually tested on at least one real mobile device or emulated viewport per
      breakpoint
- [ ] No secrets findable in the deployed client-side JavaScript bundle (checked,
      not assumed)
- [ ] Demo form resists basic spam/abuse testing

## Production Readiness (Phase 7) — not yet met
- [ ] All above criteria met
- [ ] Sandeep has explicitly reviewed and approved the live UAT site end-to-end

## Launch (Phase 8) — not yet met
- [ ] `lms.zhypility.com` DNS changed **only** after Sandeep's explicit, separate
      launch approval — never bundled with any other approval
