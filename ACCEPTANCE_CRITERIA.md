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

## Demo-Request Workflow (Phase 2) — not yet met
- [ ] A real submission on the live site creates a row in the Neon database
- [ ] A real submission triggers a Resend email to elearning@Zhypility.com
- [ ] If the email fails, the lead is still saved and no error is shown that implies
      the lead was lost
- [ ] Spam test: submitting with the honeypot field filled does not create a row

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
- [x] Works at mobile and desktop widths without layout breakage — verified via
      live browser checks at 375px and desktop on every stage; tablet not
      separately tested
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

## Supporting Pages (Phase 4) — not yet met
- [ ] About, Contact, Privacy have final, reviewed copy (not placeholder text)
- [ ] Each has a unique, correct `<title>` and meta description

## SEO (Phase 5) — not yet met
- [ ] `isProductionDeploy()` correctly detects real Cloudflare production vs. preview
      (current Netlify-only check fixed)
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
