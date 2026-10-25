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

## Footer Branding (2026-10-25 addition) — done, pending live verification
- [x] Footer "ZhypLearn" text (and the separate "Empowering Your Learning
      Journey" paragraph) replaced with the same official logo
- [x] Logo legible against the footer's dark (charcoal) background — verified
      directly via browser screenshot/zoom, both desktop and mobile (375px):
      gray triangle shapes and "INFOSOLUTIONS" subtext read clearly, not washed
      out
- [x] Same fidelity rule as header: plain `<img>`, not `next/image`, no
      recoloring/re-encoding
- [ ] Verified on live Cloudflare UAT deployment (local verification done;
      live check pending this same session)

## Demo-Request Workflow (Phase 2) — not yet met
- [ ] A real submission on the live site creates a row in the Neon database
- [ ] A real submission triggers a Resend email to elearning@Zhypility.com
- [ ] If the email fails, the lead is still saved and no error is shown that implies
      the lead was lost
- [ ] Spam test: submitting with the honeypot field filled does not create a row

## Homepage (Phase 3) — not yet met
- [ ] Every section from the approved Artifact exists on the real site, in the same
      order, with the same copy (allowing only corrections already approved, e.g.
      ZhypLearn naming)
- [ ] Visually reviewed side-by-side against the Artifact by Sandeep, not just by
      Claude
- [ ] Works at mobile, tablet, and desktop widths without layout breakage
- [ ] All animations respect `prefers-reduced-motion`
- [ ] **SCORM capabilities (2026-10-25 addition):** SCORM Package Upload and
      AI-Powered Course Creation with SCORM Output are both featured prominently
      — copy states only the two confirmed capabilities, with no claims about
      SCORM version, tracking, completion reporting, or score tracking

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
