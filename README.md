# E-Perfect Beauty — marketing site

Static marketing site for **E-Perfect Beauty** (Singapore): hero with rotating service videos, services grid (core + other treatments), **full price list** on `pricing.html`, Google reviews carousel, Facebook feed + map, contact page, and a **hardcoded blog** on `blog.html`.

## Tech stack

- **HTML**, **CSS** (`styles.css`), **inline JS** on `index.html` / `contact.html` / `blog.html`
- **Blog**: posts defined in [`js/blog-posts.js`](js/blog-posts.js), rendered by [`js/blog-read.js`](js/blog-read.js) and [`js/blog-render.js`](js/blog-render.js)
- **PWA**: [`manifest.json`](manifest.json)

## Project layout

| Path | Purpose |
|------|---------|
| [`index.html`](index.html) | Home: hero, services (core + other), per-card **View pricing** + WhatsApp, reviews, visit (Elfsight + Maps), footer |
| [`pricing.html`](pricing.html) | Full treatment price list (waxing, hair, facials, makeup, threading, courses, packages); nav + TOC anchors `#waxing`, `#hair`, … |
| [`contact.html`](contact.html) | Contact details and map |
| [`blog.html`](blog.html) | Public blog listing (loads [`js/blog-read.js`](js/blog-read.js)) |
| [`styles.css`](styles.css) | Global styles and components |
| [`js/blog-posts.js`](js/blog-posts.js) | Hardcoded blog post data — edit this file to add or update posts |
| [`js/blog-read.js`](js/blog-read.js) | Loads posts and renders the blog page |
| [`js/blog-render.js`](js/blog-render.js) | Post card rendering |
| [`Assets/`](Assets/) | `favicon.jpg`, hero `.mp4` files, etc. |

## Run locally

From the repo root:

```bash
npx serve .
```

Then open the URL shown (e.g. `http://localhost:3000`). Serving the folder avoids broken relative paths for `styles.css`, `Assets/`, and `manifest.json`.

## Blog posts

Edit [`js/blog-posts.js`](js/blog-posts.js) to add, remove, or update posts. Each post needs `id`, `title`, `authorName`, `createdAt` (ISO date string), and `content` (plain text; separate paragraphs with blank lines). Posts are shown in array order (newest first).

## Documentation

- **[context.md](context.md)** — Full project context: anchors, hero pills ↔ videos, embeds, copy tone, SEO notes.
- **[greppdirectory.md](greppdirectory.md)** — Ripgrep-oriented file and topic index for navigating the codebase.

## Deploying the static site

Host `index.html`, `pricing.html`, `contact.html`, `blog.html`, `styles.css`, `js/`, `Assets/`, `sitemap.xml`, `robots.txt`, and `manifest.json` on any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

**SEO:** [`sitemap.xml`](sitemap.xml) lists the public indexable URLs (home, pricing, contact, blog). [`robots.txt`](robots.txt) points crawlers to the sitemap.

---

© E-Perfect Beauty. Site content and branding are proprietary.
