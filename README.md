# ZhypLearn Marketing Website

Production marketing website for **ZhypLearn**, the AI-powered Learning Management System
built by Zhypility InfoSolutions.

- **Design reference:** the approved Claude Artifact (gold / white / charcoal, premium AI-first SaaS direction).
- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.
- **Hosting:** Netlify (free plan) — `lms.zhypility.com` stays disconnected until launch is approved.
- **Database:** Neon PostgreSQL (separate project, own credentials — never shared with the Zhypility CRM database).
- **Email:** Resend, for demo-request notifications.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in DATABASE_URL / RESEND_API_KEY once you have them
npm run dev
```

The demo-request form works without `DATABASE_URL`/`RESEND_API_KEY` set — it responds
honestly with "not configured yet" rather than a fake success message.

## Status

Foundation stage: project scaffold, routing, design tokens, SEO plumbing (sitemap, robots,
metadata, Organization schema), and the demo-request API route are in place. The full
homepage design (matching the approved Artifact) has not been built yet — that is the next
milestone.
