# Yash Shah — GST Consultant & Tax Advisor

Premium marketing website built with Next.js 16 (App Router), TypeScript,
Tailwind CSS v4, Framer Motion and Lucide icons. Every page is statically
generated.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

---

## Before going live — replace the placeholders

All business information lives in two files. Nothing needs to be changed
anywhere else. Search the project for `TODO: REPLACE` to find every item.

### `src/config/site.ts`

| Field | What to set |
| --- | --- |
| `url` | The live domain. Used for canonical URLs, sitemap and Open Graph. |
| `contact.phone` / `phoneRaw` | Display number, and the digits-only form for `tel:` links. |
| `contact.email` | The address enquiries are sent to. |
| `contact.whatsapp` | International format, digits only — no `+`, spaces or dashes. |
| `contact.address` | Office address, used in the footer, contact page and structured data. |
| `contact.hours` | Working hours line. |
| `social` | Leave a value empty to hide that link. |

### `src/config/content.ts`

| Export | Notes |
| --- | --- |
| `stats` | **Currently placeholder figures.** Only publish numbers you can substantiate. |
| `credentials` | **Currently placeholder.** Do not publish qualifications that cannot be verified. |
| `highlights` | Short bullets shown in the About section. |
| `testimonials` | **Currently placeholder.** Publish only real testimonials you have permission to use. |
| `services` | Service copy. Each entry generates its own `/services/[slug]` page. |
| `industries`, `pillars`, `process`, `faqs` | Section content. |

### Also review

- `src/app/privacy-policy/page.tsx` and `src/app/terms/page.tsx` — drafted as a
  starting point. Have both reviewed against your actual obligations, and update
  the `updated` date in each.

### Portrait image

`src/components/About.tsx` renders a styled placeholder. To use a real
photograph, drop the file in `public/` and follow the comment in that file to
swap in `next/image`.

---

## Project structure

```
src/
├── app/                     # Routes (App Router)
│   ├── page.tsx             # Homepage
│   ├── about/  services/  industries/  faq/  contact/
│   ├── services/[slug]/     # Generated per service
│   ├── privacy-policy/  terms/
│   ├── not-found.tsx  sitemap.ts  robots.ts  icon.svg
│   ├── layout.tsx           # Fonts, metadata, chrome, structured data
│   └── globals.css          # Design tokens and utilities
├── components/              # Section components
│   └── ui/                  # Button, Counter, SectionHeading, Motion
├── config/                  # site.ts + content.ts  ← edit these
└── lib/                     # schema.ts (JSON-LD), utils.ts
```

## Design system

Tokens are defined in `src/app/globals.css` under `@theme`.

- **Navy** `#0B1220` · **Charcoal** `#111827` — dark sections
- **Off-white** `#F8F7F3` · **White** — light sections
- **Gold** `#C9A227` · **Soft gold** `#E5C766` — accents only, used sparingly
- **Slate** `#64748B` — body copy
- Headings: Playfair Display · Body/UI: Inter

Utility classes worth knowing: `.eyebrow`, `.hairline`, `.bg-grid`,
`.mask-fade`, `.text-accent`, `.link-underline`, `.surface`, `.tnum`.

## Accessibility & motion

- Semantic landmarks, skip link, labelled controls, visible focus rings.
- The mobile drawer traps scroll, closes on Escape and on route change.
- `prefers-reduced-motion` is honoured: animations collapse to zero duration
  rather than changing markup, so server and client render identically.

## Contact form

`ContactForm.tsx` posts to `/api/contact` (`src/app/api/contact/route.ts`),
which sends the enquiry via [Resend](https://resend.com) to the address in
`CONTACT_FORM_TO_EMAIL`. This requires the app to run as a Node server
(`next start`) — it will not work from a static export. See
[`deploy/README.md`](deploy/README.md) for production deployment behind nginx.

Required env vars (see `.env.local`):

| Var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from resend.com |
| `CONTACT_FORM_TO_EMAIL` | Inbox that receives enquiries |

The `from` address in `route.ts` must be on a domain verified in Resend.

## SEO

Per-page metadata, canonical URLs, Open Graph and Twitter cards, a generated
`sitemap.xml` and `robots.txt`, plus JSON-LD for `ProfessionalService`,
`FAQPage`, `Service` and `BreadcrumbList`. All schema values are derived from
the config files, so updating config keeps the markup accurate.
