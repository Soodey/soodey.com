# Soodey.com — Repository & Site Conventions

## Top-Level Structure

- `site/` — **The only directory built and deployed to Cloudflare Workers Static Assets** (`soodey.com`). Built with **Astro 5 + Tailwind CSS v4** (`output: 'static'` → `site/dist/`).
- `archive/` — Historical 2015–2025 site snapshots & old pages (stripped of third-party vendor bloat). Preserved in git, **never deployed**.
- `docs/` — Architecture notes, plans, and conventions. **Never deployed.**
- `lab/` — Scratchpads, proof-of-concepts, and experiments. **Never deployed.**

## Commands (run inside `site/`)

- `npm run dev` — Local Astro dev server (`http://localhost:4321`)
- `npm run build` — Static production build into `site/dist/`
- `npm run preview` — Preview built `site/dist/`
- `npx wrangler deploy` — Deploy `site/dist/` to Cloudflare Workers Static Assets (`soodey.com` & `www.soodey.com`)

## Site Architecture

- `/` ([src/pages/index.astro](../site/src/pages/index.astro)) — Full-viewport WebGL volumetric void splash with morphing anthology glyphs and a single link into `/gallery/`.
- `/gallery/` ([src/pages/gallery/index.astro](../site/src/pages/gallery/index.astro)) — Curated visual gallery powered by [src/data/gallery.ts](../site/src/data/gallery.ts). Add new public tools, toys, jokes, or sections there.
- `/recipes/` — Astro Content Collection ([src/content.config.ts](../site/src/content.config.ts)):
  1. Drop the hero image into `site/public/recipes/<slug>/<slug>.jpg`.
  2. Add `site/src/content/recipes/<slug>.json`.
  3. Astro automatically generates `/recipes/<slug>/`, updates `/recipes/`, emits Schema.org `Recipe` JSON-LD + Open Graph/Twitter tags, and wires unit toggles, checkboxes, Cook Mode wake lock, and print mode.
- `/toys/*` & `/please_god/` — Interactive standalone Astro pages sharing `BaseLayout.astro` (`<ClientRouter />` view transitions + minimal `← Gallery` header).

## Public vs. Unlisted Pages

- **Public pages** live under `site/src/pages/` and are listed in `site/src/data/gallery.ts`.
- **Private/unlisted friend pages** (`/zool_baby/`, `/karla_baby/`, or future personal gags) live in `site/public/<slug>/` and MUST:
  1. Stay unlinked on `/` and `/gallery/`.
  2. Include `<meta name="robots" content="noindex, nofollow">`.
  3. Be disallowed in `site/public/robots.txt`.
  4. Carry `X-Robots-Tag: noindex, nofollow` in `site/public/_headers`.
