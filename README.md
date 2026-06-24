# Capital Bull Wave — Next.js

Next.js version of the Capital Bull Wave marketing site (migrated from `hostinger-static-site`).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/insight` | Market Insights |
| `/plans` | Plans & Pricing |
| `/contact` | Contact |

## Getting started

```bash
cd bullwavecapital-nextjs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — Next.js App Router pages
- `src/components/pages/` — Page wrappers with client-side effects
- `src/components/PageEffects.tsx` — Menus, animations, forms, Lucide icons
- `src/content/` — HTML content exported from the static site
- `public/css/`, `public/js/`, `public/image/` — Static assets

## Images

All site images are in `public/image/`:

- `logo.jpg` — logo & favicon
- `img1.png` … `img4.png` — home gallery
- `map.png` — contact page map
- `leadership1.jpg` — insight founder photo

## Animations

CSS animations live in `public/css/` (preloader, scroll reveal, candlesticks, gallery, ticker, plans loader, etc.).

JavaScript interactions are handled in `src/components/PageEffects.tsx`:

| Page | Animations / interactions |
|------|---------------------------|
| Home | Preloader, chart draw, logo fly, scroll reveal, image gallery, page transition, navbar, Lucide icons |
| Services | Scroll progress bar, reveal on scroll, mobile menu, navbar shadow |
| Plans | Page loader, cursor glow, reveal on scroll, price counter, monthly/annual toggle |
| Insight | Mobile menu, scroll reveal, navbar |
| Contact | Scroll reveal, contact form, star ratings |
| About | Mobile menu, navbar scroll |

## Regenerate content from static site

After updating `../hostinger-static-site` HTML:

```bash
python scripts/html-to-content.py
```

## Production build

```bash
npm run build
npm start
```
