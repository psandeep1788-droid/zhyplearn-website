# ZhypLearn — Project Master Plan

**Governing workflow for the entire project:**
PLAN → REVIEW → APPROVE → IMPLEMENT → TEST → REPORT → APPROVE NEXT PHASE.

No phase begins without the previous one being reported and approved. This document,
along with `MASTER_REQUIREMENTS.md`, `PROJECT_STATUS.md`, `ACCEPTANCE_CRITERIA.md`,
and `DECISIONS_LOG.md`, is the single source of truth for the project.

The proposed phase sequence below matches what was requested — no change to it is
recommended; it's a sensible, risk-reducing order (foundation and infrastructure
proven before investing in the full visual build, QA before launch, launch gated
separately from everything else).

---

### Phase 0 — Requirements Reconciliation & Project Audit
*This document and its companions. Status: in progress, this is the deliverable.*

### Phase 1 — Project Foundation & Deployment
Next.js scaffold, routing, design tokens, SEO plumbing, security conventions,
Cloudflare Workers deployment. **Status: done**, live and verified at the UAT URL.

### Phase 2 — Database, Demo Form & Email Infrastructure
Connect real Neon + Resend accounts (Sandeep creates them); verify a real
submission saves and notifies correctly. **Status: blocked on account creation.**

### Phase 3 — Premium Homepage Implementation
Port the full approved Artifact design into the real Next.js site, section by
section. **Status: implemented and deployed to UAT (2026-10-25)** — see
`ACCEPTANCE_CRITERIA.md` for the full checklist. Outstanding: Sandeep's own
visual review, and final product screenshots to replace the placeholder frames.

### Phase 4 — Supporting Pages & Content
Final, reviewed copy for About, Contact, Privacy. **Not started.**

### Phase 5 — SEO & Content Optimisation
Fix the Cloudflare production-detection gap, validate structured data, finalize
keyword-informed copy. **Not started.**

### Phase 6 — QA
Functional, visual, accessibility, mobile, security, and performance testing
against `ACCEPTANCE_CRITERIA.md`. **Not started.**

### Phase 7 — Production Readiness
Final review against every acceptance criterion; Sandeep's end-to-end review of
the live UAT site. **Not started.**

### Phase 8 — Production Launch
Connect `lms.zhypility.com` — **only** after Sandeep's explicit, separate approval.
**Not started; no DNS touched.**

### Phase 9 — Post-Launch Analytics & Optimisation
Revisit analytics approach (see Decisions Needed), monitor, iterate. **Not started.**

---

## Unscheduled / Deferred Items (Pre-UAT Design Checklist, 2026-10-25)
Reconciled against a third-party technical checklist Sandeep supplied; full
classification and rationale in `DECISIONS_LOG.md`. None of these are assigned
to a phase above, and none should be started without a separate approval:
- Embedded calendar scheduling tool (replacing the current form) — needs a
  tool decision and a new third-party account
- Interactive course-preview widgets / feature calculators
- Audience-specific landing pages per cohort (beyond the homepage's existing
  Solutions section)
- Pricing/billing toggle, tier-limit transparency, enterprise funnel branching
  — blocked entirely on an undefined pricing model
- Product Handoff to the LMS login portal (real URLs, session parameters) —
  documented, not implemented; blocked on the product team's login URL and
  session/auth design

**Added from the stakeholder audit reconciliation (2026-10-25)** — full
register and rationale in `DECISIONS_LOG.md` → "Stakeholder Audit
Reconciliation":
- Global nav mega-menu ("Product" consolidating Platform/AI Capabilities/In
  Action) — real IA/component build, not a copy change
- A dedicated "Resources" nav section — no content exists yet to populate it
- "Pricing" nav item — same blocker as the pricing/billing item above
- Customer logo ribbon under the hero — blocked on confirmed client
  authorization, none exists yet
- Higher-fidelity illustrative mockups in place of the current labelled
  placeholders — a polish option, current placeholders already meet the
  "premium, clearly labelled" bar you approved
- CRM/lead-management integration, mandatory corporate-email verification —
  **not recommended**, conflicts with your explicit decisions to keep the
  custom form and not block personal emails
- Interactive WebXR fallback — not applicable; no live WebXR content exists
  to need a fallback

**Added from the third stakeholder document (2026-10-25)** — full detail in
`DECISIONS_LOG.md` → "Third Stakeholder Document Reconciliation":
- Parent-organization (Zhypility InfoSolutions) logo ribbon under the hero —
  lower risk than the earlier client-logo proposal (no third-party
  authorization needed), but still a new design element needing a placement
  decision
- "Platform Management" section rename — "Admin Control Center" deferred
  pending clarification (keep it purely descriptive); "**Core LMS**"
  **rejected** — would brand a marketing-site section as the actual LMS
  product, conflicting with the project's own not-the-application-itself
  boundary

---

## Immediate Next Step (pending this audit's approval)
Resume Phase 2 (account creation, already in motion) and/or begin Phase 3 (homepage
build-out) — **whichever Sandeep approves first.** Both can proceed in parallel
without conflict once approved, since they touch different parts of the codebase.
