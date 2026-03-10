# kittoyeah.github.io

One-page Astro portfolio site for Chris Kittichod.

## Stack

- Astro
- TypeScript
- Tailwind CSS v4
- Playwright

## Commands

```bash
npm install
npm run dev
npm run check
npm run lint
npm run test
npm run build
```

## Content and asset updates

Update the following before treating the site as final:

- `src/data/portfolio.ts`
  - Replace the LinkedIn URL with the exact public profile URL if needed.
  - Swap any summary, role, or evidence copy.
- `public/assets/docs/`
  - Replace Markdown notes with final PDFs, slides, images, or downloadable files.
- `public/assets/covers/`
  - Replace placeholder SVG cover art with real screenshots or thumbnails when available.

## Deployment

The repo is configured for GitHub Pages as a root site:

- repo name: `kittoyeah.github.io`
- site URL: `https://kittoyeah.github.io`
- workflow: `.github/workflows/deploy.yml`
