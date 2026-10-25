# ZhypLearn — Master Requirements

Consolidated from every planning conversation to date. This is the single source of
truth going forward. Nothing here has been silently dropped or reinterpreted; where a
later decision superseded an earlier one, that is noted explicitly (see
`DECISIONS_LOG.md` for the full chronology).

---

## 1. Business Objectives & Product Positioning

- Product: **ZhypLearn**, an AI-powered Learning Management System.
- Company: **Zhypility InfoSolutions** — kept as a distinct, separate name from the
  product (never "ZhypLearn" and "Zhypility" conflated; company attribution lives in
  the footer only, never the header).
- Positioning statement (fixed wording): **"ZhypLearn — AI-Powered Learning.
  Reimagined."**
- Tagline: **"Empowering Your Learning Journey."**
- Objective: a production-ready marketing website that attracts enterprise customers
  and generates qualified demo requests — not a rebuild of the LMS product itself.
- **Marketing-site boundary (reaffirmed 2026-10-25):** no learner/admin login,
  dashboard, account creation, subscription, billing, checkout, or invented
  pricing belongs on this site. A disabled "Login" button exists in the header
  as a placeholder for the real LMS portal, with no URL invented — see
  `DECISIONS_LOG.md` → "Pre-UAT Design Checklist Alignment" for the full
  reconciliation of a third-party technical checklist against this boundary,
  including which items are in current scope, which are future enhancements
  needing separate approval, and which are blocked on an undefined pricing
  model or other business decisions.
- "Courz Builder" is a confirmed **feature within ZhypLearn** (AI-assisted Level-1
  eLearning authoring with SCORM output), presented publicly as **"ZhypLearn Courz
  Builder"** — never as a separate product name.
- **SCORM capabilities — confirmed by product owner (2026-10-25), supersedes the
  earlier "unconfirmed" status:**
  1. **SCORM Package Upload** — customers can upload SCORM packages to ZhypLearn.
  2. **AI-Powered Course Creation with SCORM Output** — ZhypLearn's AI course
     creation (Courz Builder) produces SCORM as an output format.
  - These two capabilities **may be stated publicly**, including on the homepage.
  - **Still unverified — do not state or imply any of the following** until
    separately confirmed: specific SCORM version(s) supported (e.g. 1.2 vs 2004),
    learner-tracking functionality, completion reporting, score tracking, or any
    other SCORM-adjacent capability beyond the two confirmed items above.

## 2. Design Direction & Approved Visual References

- **Primary design benchmark:** the approved Claude Artifact —
  <https://claude.ai/artifact/BWakk1bJmNmDUFo4SZqnAQ>.
- **Secondary inspiration (principles only, never copied content/graphics):**
  sanalabs.com/lms.
- Mandatory direction: premium, futuristic, AI-first SaaS — explicitly **not** a
  generic corporate template, not simplified for performance or hosting convenience.
- Palette: sophisticated gold / white / charcoal (refined from the logo: gold
  ~#F5A623–#F7A828, charcoal ~#1A1A1A–#2B2B2B, light gray ~#F5F6F8).
- Typography: Poppins (display/headings), Inter (body).
- **Header branding (2026-10-25 — supersedes all previous header-branding
  decisions):**
  - The header must show the **official Zhypility InfoSolutions company logo**,
    not the "ZhypLearn" text wordmark previously used.
  - No "ZhypLearn" text displayed alongside the logo in the header.
  - Logo's original design, colors, proportions, and clarity must be preserved
    exactly — no recoloring, redrawing, or stylizing.
  - Must be appropriately sized and responsive at desktop, tablet, and mobile
    widths.
  - Logo is clickable, linking to the homepage.
  - **Asset received 2026-10-25:** official transparent logo file supplied by
    Sandeep, saved byte-identical (verified via `cmp`) at
    `public/zhypility-logo.webp` (WebP, 1500×456, alpha transparency confirmed).
  - **Implemented and deployed 2026-10-25** (commit `80ad1f2`): header now shows
    the logo in place of the "ZhypLearn" text, clickable, linking home. Verified
    directly on the live Cloudflare UAT deployment (desktop + mobile, no console
    errors, logo link confirmed working).
  - **Footer branding (2026-10-25, same rule extended by Sandeep) —
    implemented and deployed** (commits `5505a4b`, `2f717eb`): the footer's
    "ZhypLearn" text and the separate "Empowering Your Learning Journey" line
    are replaced with the same logo image. Legibility of the logo's gray
    elements against the charcoal background verified directly via browser
    screenshot (desktop and 375px mobile) — not assumed. Verified live on the
    Cloudflare UAT deployment.
- Visual language: layered compositions, subtle gold glow fields, soft shadows,
  hover-lift micro-interactions, smooth scroll, restrained animation that respects
  `prefers-reduced-motion`.
- Real/representative product screenshots: currently treated as **temporary design
  references** (per Sandeep's instruction). Approved, proprietary final images and
  the final logo file will be supplied later — do not spend further effort
  editing/redacting screenshots until then.

## 3. Website Pages & Homepage Sections

**Approved page structure (supersedes the original 9-page Phase-1 sitemap):**

| Route | Purpose |
|---|---|
| `/` | Rich, immersive homepage with anchor navigation |
| `/about` | About Zhypility InfoSolutions |
| `/contact` | Contact |
| `/book-a-demo` | Demo-request page |
| `/privacy` | Privacy Policy |

**Approved homepage section order** (anchors: Platform, AI Capabilities, Solutions,
How It Works), matching the approved Artifact exactly:

Nav → Hero → Platform strip (4 capability groups) → AI-Powered Content Creation →
Engaging & Personal Learning → Assessment & Verification → Multilingual & Immersive
Learning → Platform Management & Business Value → "See ZhypLearn in Action" gallery →
Solutions (Enterprise / SME / Education) → How It Works → Final CTA → Footer (with
Our Presence).

## 4. Technology Stack & Architecture

- **Framework:** Next.js (App Router), TypeScript.
- **Styling:** Tailwind CSS v4.
- **Animation:** Framer Motion (installed; not yet applied to any component).
- **Component architecture:** `layout/` (Nav, Footer), `ui/` (shared primitives), a
  reusable `NarrativeSection`-style pattern for the four AI-capability blocks,
  `forms/` (demo request).

## 5. Cloudflare Hosting & Deployment

- **Decision (current, supersedes earlier Vercel and Netlify plans — see
  `DECISIONS_LOG.md`):** Cloudflare Workers, via the official `@opennextjs/cloudflare`
  adapter.
- Free tier only. No paid upgrades or usage-based billing without explicit approval.
- **UAT URL:** <https://zhyplearn-website.psandeep1788.workers.dev/>
- **Intended production domain:** `lms.zhypility.com` — **must stay disconnected**
  until Sandeep explicitly approves launch. No DNS changes until then.
- Preview/non-production deploys must never be indexed by search engines.

## 6. GitHub Repository & Source Control

- Repo: <https://github.com/psandeep1788-droid/zhyplearn-website> (private), created
  fresh — **never** modifies `zhypility-crm` or `chs-accounting`.
- Commits only after build + lint pass locally where applicable.
- No secrets committed; `.env.local` gitignored, `.env.example` tracked as the
  template.

## 7. Neon PostgreSQL & Secure Demo-Request Storage

- **Decision:** Neon PostgreSQL, as its own dedicated ZhypLearn project with its own
  credentials — **never** the CRM's database or credentials.
- Free tier only, no paid upgrade without approval.
- Demo-request submissions stored durably; a lead must never be lost even if the
  notification email fails.
- Sandeep creates the Neon account himself (not created on his behalf).

## 8. Resend Email Notifications & Failure Handling

- **Decision:** Resend, free tier, for demo-request notification emails to
  `elearning@Zhypility.com`.
- Email is **best-effort, secondary** to the database write — a failed email must
  never cause a successful lead submission to be lost or reported as failed to the
  visitor.
- Sandeep creates the Resend account himself.

## 9. SEO, Content Strategy & Indexing Controls

- Clean URLs, unique per-page titles/meta descriptions, canonical URLs, XML sitemap,
  robots.txt, correct HTTP status codes.
- Next.js Metadata API used throughout; content must be server-rendered and
  crawlable, not client-only.
- Structured data: Organization schema (accurate fields only). SoftwareApplication
  schema only with fields that can be honestly stated — **no invented ratings,
  reviews, or pricing.**
- Initial keyword map prepared directionally (not from a verified volume tool);
  recommend validating further via Search Console / Keyword Planner once live.
- Preview/branch deploys: `noindex` always.
- Google Search Console verification via the HTML-meta-tag method (not a DNS TXT
  record), deferred until after launch approval.
- Future page expansion (platform/solutions/resources pages) is a **proposal for
  separate review**, not current scope.

## 10. Security, Privacy & Spam Protection

- No secrets in client-side code, ever. `DATABASE_URL` / `RESEND_API_KEY` only as
  server-side environment variables.
- Demo form: server-side validation (Zod), honeypot field, basic IP rate-limiting.
  No third-party CAPTCHA unless spam becomes a real problem (Cloudflare Turnstile
  flagged as the free fallback option).
- Never display a success message unless the submission was actually validated,
  stored, and (where applicable) the email attempt completed.
- **Screenshot/content confidentiality rule (standing):** never publish a named
  third party's branding, confidential material, or identifiable personal
  information. (This governed the earlier real-screenshot redaction work; currently
  moot since real screenshots are paused — see Decisions Log.)
- No fabricated product capabilities, testimonials, integrations, statistics,
  certifications, or company addresses — standing rule across the whole project.

## 11. Performance, Accessibility & Responsive Design

- `next/image`, `next/font` for automatic optimization.
- Mobile/tablet/desktop responsive at the breakpoints already established in the
  approved Artifact.
- Semantic HTML, ARIA labels on icon-only controls, keyboard-navigable nav and form.
- Respect `prefers-reduced-motion` everywhere animation is used.
- Performance optimization must never come at the cost of the approved visual
  design quality.

## 12. Analytics & Conversion Tracking

- Privacy-conscious approach required; **no paid analytics service without
  approval.**
- **Open item:** the original recommendation (Vercel Web Analytics + Speed Insights)
  is stale now that hosting is Cloudflare, not Vercel — needs a fresh,
  Cloudflare-appropriate recommendation. See Decisions Needed in
  `PROJECT_STATUS.md`.

## 13. Testing & Quality Assurance

- Build and lint must pass before every commit.
- Manual verification in an actual browser (not just "should work") required before
  reporting a feature as working — established practice, not yet formalized as an
  automated test suite.
- No automated test suite exists yet (confirmed by this audit — see Status report).

## 14. Production Readiness & Domain Launch

- `lms.zhypility.com` connection requires Sandeep's **explicit, separate** launch
  approval — never bundled into any other approval.
- Full homepage design build-out, all 5 pages' final content, Neon/Resend live
  connection, and QA must all be complete before launch is proposed.

## 15. Budget Restrictions & Approval Rules

- Zero mandatory recurring hosting cost — this is why Vercel (Hobby = non-commercial
  only) and then Netlify (account suspended) were ruled out in favor of Cloudflare
  Workers free tier.
- No paid subscriptions, upgrades, automatic overages, or new external accounts
  without Sandeep's explicit, separate approval.
- Standing workflow: **PLAN → REVIEW → APPROVE → IMPLEMENT → TEST → REPORT →
  APPROVE NEXT PHASE.**

## 16. Future Improvements & Post-Launch Optimisation

- Phased SEO expansion (dedicated platform/solutions/resources pages) — proposal
  only, future review.
- Post-launch analytics review and conversion-rate optimization — Phase 9.
- Re-introduce real, approved product screenshots once Sandeep supplies them.
