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
section. **Status: not started** (explicitly gated until this audit is approved).

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

## Immediate Next Step (pending this audit's approval)
Resume Phase 2 (account creation, already in motion) and/or begin Phase 3 (homepage
build-out) — **whichever Sandeep approves first.** Both can proceed in parallel
without conflict once approved, since they touch different parts of the codebase.
