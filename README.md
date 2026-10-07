# vetrina.

Sito vetrina per attività locali — React 19 + Vite + Tailwind CSS + Three.js (scena 3D nell'hero).

## Sviluppo

```bash
npm install
npm run dev
```

## Build di produzione

```bash
npm run build   # output in dist/
```

La cartella `public/` include `_headers` (CSP e security headers per Cloudflare Pages/Netlify), `robots.txt` e `favicon.svg`.

## Deploy

Cloudflare Pages: build command `npm run build`, output directory `dist`.
