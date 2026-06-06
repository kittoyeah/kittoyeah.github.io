# kittoyeah.github.io

Static GitHub Pages portfolio site for Chris Kittichod.

## Deployment

The repository is the GitHub Pages user site:

- repository: `kittoyeah/kittoyeah.github.io`
- URL: `https://kittoyeah.github.io/`
- deploy mode: GitHub Actions workflow in `.github/workflows/deploy.yml`

Any push to `main` runs `node scripts/build-site.mjs` and publishes `_site`.
The build creates crawlable HTML entry points for the homepage, About, Works,
project case studies, and SabaiHub Build Notes.
