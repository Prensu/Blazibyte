# Blazibyte Pvt. Ltd. — Official Website

Production-ready marketing website for **Blazibyte Pvt. Ltd.**, a creative agency in Mahalaxmisthan, Lalitpur, Nepal.

Built with the stack most commonly used for TypeScript SPA projects by companies in Nepal:

- **React 18 + TypeScript** (strict mode)
- **Vite 5** — dev server & production bundler
- **Tailwind CSS 4** — CSS-first configuration (no `tailwind.config.js`), via the `@tailwindcss/vite` plugin
- **Framer Motion 11** — animations (scroll reveals, carousel, counters, hover lifts)
- **React Router 6** — client-side routing
- **Zod** — contact-form validation (Nepali phone rules)
- **pnpm** — package manager
- ESLint + Prettier (with the Tailwind class-sorting plugin)

## Requirements

- Node.js **18.18+** (Node 20 LTS recommended)
- pnpm 9 or 10 (`corepack enable` or `npm install -g pnpm`)

## Getting started

```bash
pnpm install       # install dependencies
pnpm dev           # start dev server → http://localhost:3000
```

## Scripts

| Script              | What it does                                    |
| ------------------- | ----------------------------------------------- |
| `pnpm dev`          | Start the Vite dev server (hot reload)          |
| `pnpm build`        | Type-check + production build into `dist/`      |
| `pnpm preview`      | Preview the production build locally            |
| `pnpm typecheck`    | Run the TypeScript compiler only                |
| `pnpm lint`         | Run ESLint on all `.ts`/`.tsx` files            |
| `pnpm format`       | Format the codebase with Prettier               |

## Pages

| Route        | Page                                            |
| ------------ | ----------------------------------------------- |
| `/`          | Home (hero, services, process, about, portfolio)|
| `/about`     | About Us (story, mission/vision, why us, stats) |
| `/services`  | Our Services (all 8 services + process)         |
| `/portfolio` | Our Portfolio (filterable by category)          |
| `/team`      | Our Team (+ join-us callout)                    |
| `/contact`   | Contact Us (info cards + WhatsApp form)         |

A **Testimonials carousel** and a **CTA banner** render on _every_ page just before the footer (see `src/components/layout/Layout.tsx`).

## Folder structure

```
src/
├─ App.tsx                 # Route definitions
├─ main.tsx                # Entry point
├─ config/site.ts          # ⭐ Company info, phones, socials, nav links
├─ data/                   # ⭐ Editable content (services, portfolio, team, testimonials, stats, process)
├─ types/                  # Shared TypeScript interfaces
├─ lib/                    # Motion variants, utilities
├─ hooks/                  # useScrolled, usePageMeta
├─ styles/index.css        # ⭐ Tailwind v4 entry + all design tokens (@theme)
├─ components/
│  ├─ ui/                  # Button, Container, SectionHeading, Reveal, AnimatedCounter, icons
│  ├─ layout/              # Navbar, Footer, Layout, ScrollToTop, WhatsAppButton
│  ├─ sections/            # Hero, ServicesPreview, ProcessSection, AboutPreview, PortfolioPreview, Testimonials, CtaBanner
│  └─ shared/              # PageHeader, ServiceCard, PortfolioCard, TeamCard
└─ pages/                  # One file per route + NotFoundPage
```

## Updating content (no code knowledge needed)

- **Contact details / social links / nav** → `src/config/site.ts`
- **Services** → `src/data/services.ts`
- **Portfolio projects** → `src/data/portfolio.ts` (replace gradient placeholders with real thumbnails when ready)
- **Team members** → `src/data/team.ts` (currently sample entries — add real names/photos)
- **Testimonials** → `src/data/testimonials.ts` (currently sample quotes — replace with real client feedback)
- **Stats & “why choose us”** → `src/data/stats.ts`

## Deployment

`pnpm build` outputs a static site into `dist/` — deploy it to Vercel, Netlify, Cloudflare Pages or any static host.

Because this is a single-page app with client-side routing, configure a **SPA fallback** (rewrite all routes to `/index.html`):

- **Vercel/Netlify**: enabled automatically for Vite projects (Netlify: add `/* /index.html 200` in `_redirects` if needed)
- **cPanel/Apache** (common with Nepali hosts): add an `.htaccess` rewrite to `index.html`

## Notes

- **Tailwind v4**: there is no `tailwind.config.js`/`postcss.config.js`. All design tokens (brand colors, fonts, shadows) live in `src/styles/index.css` inside the `@theme` block, and content detection is automatic. Tailwind v4 targets modern browsers (Chrome 111+, Safari 16.4+, Firefox 128+).
- The contact form opens WhatsApp with a prefilled message (no backend needed). When you're ready for a real backend/CMS, the form in `src/pages/ContactPage.tsx` is the only thing to wire up.
- Sample content (team, testimonials, portfolio, stats) is clearly marked with `NOTE:` comments in `src/data/`.

## Adding your images (drop-in, no code changes)

All local images live in `src/assets/`. The code auto-detects them — just drop the files in:

```
src/assets/
├─ my-logo.png          → real logo, replaces the “B” placeholder in navbar + footer
│                          (any extension works: .png / .svg / .webp / .jpg)
├─ brands/              → client logos → auto-appear in the “Trusted by” marquee on Home
│    angan.jpeg, cakery.jpeg, cameo.jpeg, ...   (any file names, any extensions)
└─ teams/               → team photos → file name MUST match the member id:
     sundar-tamang.jpg,  saloni-shah.jpg,  ishan-kc.jpg,
     sahil-shrestha.jpg, rohit-maharjan.jpg, umanga-shrestha.jpg,
     khusi-bista.jpg,    bidya-chapagain.jpg, samir-maharjan.jpg
```

Notes:

- Any image extension works (`.jpg`, `.jpeg`, `.png`, `.webp`) — only the name before the dot matters for team photos. Use lowercase file names.
- A member without a matching photo automatically shows an initials avatar.
- The “Trusted by” marquee is hidden until `src/assets/brands/` has at least one image.
- Restart `pnpm dev` after adding new files so Vite picks them up.

## Videos (Cloudinary)

Videos are streamed from Cloudinary (cloud: `dothc374l`) via public delivery URLs —
**no API key or secret is needed in this codebase.** See `src/lib/cloudinary.ts`.

- Hero video + portfolio videos are defined in `src/components/sections/Hero.tsx` and `src/data/portfolio.ts`.
- To add a video: upload in the Cloudinary dashboard, copy its public ID (including the `v123.../` version prefix), and add an item in `src/data/portfolio.ts` using the `video("v.../public_id")` helper.
- `.mov` uploads are automatically delivered as web-safe `.mp4`.

## Contact form validation (Zod)

The contact form (`src/pages/ContactPage.tsx`) is validated with Zod — schema in `src/lib/validation.ts`:

- **Name** — 3–50 letters
- **Phone (no email)** — Nepali formats: `98XXXXXXXX` / `97XXXXXXXX` / `96XXXXXXXX`, optional `+977`, or landline `01-XXXXXXX`
- **Company / Business Name** — required, 2–60 characters
- **Service** — required select
- **Message** — 10–1000 characters

Errors show inline under each field; a valid submit opens WhatsApp with the message pre-filled.
