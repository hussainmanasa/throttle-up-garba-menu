# Throttle Up — Garba Night menu

A single-page menu card for Garba Night at Throttle Up Sports Lounge.
Next.js 16 static export (`out/`), styled with the Throttle Up palette from
`grand-plaza-menu-nextjs` (near-black `#111111`, logo red `#c82127`, Oswald + Manrope).

## Edit the menu

All items and prices live in `src/data/menu.ts`. Each item has a `diet`
(`"veg"` / `"non-veg"`) that drives the veg / non-veg mark.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
npm run preview    # serve out/ locally
```

## Deploy to Vercel

Import the repo in Vercel; the defaults (framework: Next.js, `npm run build`) work as is.
Once the live address is known, set `url` in `src/data/site.ts` to it.

## QR code

```bash
npm run qr                                   # uses url from src/data/site.ts
npm run qr -- --url https://your-domain.com  # or any other address
```

Writes to `qr/` (not committed):

- `garba-menu.svg`: vector, use for print
- `garba-menu.png`: 2048 px, for WhatsApp / social
- `index.html`: A5 table card with the code. Open in Chrome and print with
  "Background graphics" on and margins "None".

Scan the printed code with a couple of phones before a print run.
