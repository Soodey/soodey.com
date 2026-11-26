# AGENTS.md — Soodey.com

Read `docs/CONVENTIONS.md` before making changes.

## Quick Rules
1. **Only `site/` is deployed** to `soodey.com` via Cloudflare Workers Static Assets (`site/wrangler.jsonc` serving Astro 5 + Tailwind CSS v4 `site/dist/`). Never deploy `archive/`, `docs/`, or `lab/`.
2. **Homepage `/` stays minimal** — WebGL splash + single link to `/gallery/`. List new public tools, toys, and sections in `site/src/data/gallery.ts`.
3. **Adding recipes:** Add a JSON file to `site/src/content/recipes/<slug>.json` and its hero image to `site/public/recipes/<slug>/`. Do not hand-code standalone recipe HTML files.
4. **Private friend/family pages** (`/zool_baby/`, `/karla_baby/`, or future personal gags) must stay unlinked on `/` and `/gallery/` and keep `noindex, nofollow` in `<meta>`, `site/public/robots.txt`, and `site/public/_headers`.
5. **Always verify** changes by running `npm run build` inside `site/` before finishing.
