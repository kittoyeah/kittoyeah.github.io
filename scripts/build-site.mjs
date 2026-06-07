import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { build as viteBuild } from 'vite';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT = path.join(ROOT, '_site');
const TEMP = path.join(ROOT, '.build');
const SITE_URL = 'https://kittoyeah.github.io';
const LAST_MODIFIED = '2026-06-07';
const SOCIAL_IMAGE = `${SITE_URL}/assets/og-portfolio.jpg`;

const sourceFiles = [
  'index.html',
  'google859fbd4b5c9041b1.html',
  'llm.txt',
  'llm-txt',
  'profile.jpg',
];

const appFiles = [
  'portfolio-data.js',
  'portfolio-components.jsx',
  'portfolio-home.jsx',
  'portfolio-about.jsx',
  'portfolio-works.jsx',
  'portfolio-app.jsx',
];

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const canonicalUrl = (routePath) => (
  `${SITE_URL}${routePath === '/' ? '/' : `${routePath.replace(/\/+$/, '')}/`}`
);

const absoluteAssetUrl = (assetPath) => (
  /^https?:\/\//.test(assetPath) ? assetPath : `${SITE_URL}/${assetPath.replace(/^\/+/, '')}`
);

const safeJson = (value) => JSON.stringify(value, null, 2).replaceAll('<', '\\u003c');

function replaceSeoTag(html, key, replacement) {
  const pattern = new RegExp(`<[^>]+data-seo="${key}"[^>]*>`, 'i');
  return html.replace(pattern, replacement);
}

function renderRouteHtml(template, route) {
  const url = canonicalUrl(route.path);
  let html = template.replace(
    /<title data-seo="title">[\s\S]*?<\/title>/i,
    `<title data-seo="title">${escapeHtml(route.title)}</title>`,
  );
  html = replaceSeoTag(html, 'description', `<meta data-seo="description" name="description" content="${escapeHtml(route.description)}" />`);
  html = replaceSeoTag(html, 'robots', `<meta data-seo="robots" name="robots" content="${escapeHtml(route.robots)}" />`);
  html = replaceSeoTag(html, 'canonical', `<link data-seo="canonical" rel="canonical" href="${url}" />`);
  html = replaceSeoTag(html, 'og:type', `<meta data-seo="og:type" property="og:type" content="${route.type}" />`);
  html = replaceSeoTag(html, 'og:title', `<meta data-seo="og:title" property="og:title" content="${escapeHtml(route.title)}" />`);
  html = replaceSeoTag(html, 'og:description', `<meta data-seo="og:description" property="og:description" content="${escapeHtml(route.description)}" />`);
  html = replaceSeoTag(html, 'og:url', `<meta data-seo="og:url" property="og:url" content="${url}" />`);
  html = replaceSeoTag(html, 'twitter:title', `<meta data-seo="twitter:title" name="twitter:title" content="${escapeHtml(route.title)}" />`);
  html = replaceSeoTag(html, 'twitter:description', `<meta data-seo="twitter:description" name="twitter:description" content="${escapeHtml(route.description)}" />`);
  html = html.replace(
    /<script id="page-schema" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="page-schema" type="application/ld+json">\n${safeJson(route.entity)}\n  </script>`,
  );
  return html;
}

function projectEntity(project, routePath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.desc,
    url: canonicalUrl(routePath),
    image: absoluteAssetUrl(project.image),
    creator: { '@id': `${SITE_URL}/#person` },
  };
}

function noteEntity(note, routePath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: note.title,
    description: note.desc,
    url: canonicalUrl(routePath),
    image: absoluteAssetUrl(note.image),
    author: { '@id': `${SITE_URL}/#person` },
    isPartOf: {
      '@type': 'CreativeWork',
      name: 'SabaiHub',
      url: `${SITE_URL}/works/sabaihub/`,
    },
  };
}

async function loadPortfolioData() {
  const source = await readFile(path.join(ROOT, 'portfolio-data.js'), 'utf8');
  const context = vm.createContext({ window: {} });
  vm.runInContext(source, context);
  return {
    projects: context.window.PROJECTS || [],
    buildNotes: context.window.BUILD_NOTES || [],
  };
}

async function copySourceFiles() {
  for (const file of sourceFiles) {
    await cp(path.join(ROOT, file), path.join(OUTPUT, file), { recursive: true });
  }
  await cp(path.join(ROOT, 'assets'), path.join(OUTPUT, 'assets'), { recursive: true });
}

async function buildApplicationBundle() {
  await mkdir(TEMP, { recursive: true });
  const sources = await Promise.all(
    appFiles.map(file => readFile(path.join(ROOT, file), 'utf8')),
  );
  const entryPath = path.join(TEMP, 'portfolio-entry.jsx');
  const entry = [
    "import React from 'react';",
    "import { createRoot } from 'react-dom/client';",
    'const ReactDOM = { createRoot };',
    ...sources,
  ].join('\n\n');

  await writeFile(entryPath, entry);
  await viteBuild({
    configFile: false,
    root: ROOT,
    publicDir: false,
    logLevel: 'warn',
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    build: {
      outDir: OUTPUT,
      emptyOutDir: false,
      minify: 'oxc',
      sourcemap: false,
      lib: {
        entry: entryPath,
        formats: ['iife'],
        name: 'PortfolioApp',
        fileName: () => 'assets/portfolio.js',
      },
    },
  });
}

async function writeRoute(template, route) {
  const outputPath = route.path === '/'
    ? path.join(OUTPUT, 'index.html')
    : path.join(OUTPUT, route.path.slice(1), 'index.html');
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderRouteHtml(template, route));
}

async function writeDiscoveryFiles(indexableRoutes) {
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...indexableRoutes.map(route => [
      '  <url>',
      `    <loc>${canonicalUrl(route.path)}</loc>`,
      `    <lastmod>${LAST_MODIFIED}</lastmod>`,
      '  </url>',
    ].join('\n')),
    '</urlset>',
    '',
  ].join('\n');

  const robots = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
  ].join('\n');

  const notFound = `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Not Found | Chris Kittichod</title>
  <script>
    var requestedRoute = window.location.pathname + window.location.search + window.location.hash;
    window.location.replace('/?route=' + encodeURIComponent(requestedRoute));
  </script>
</head>
<body>
  <p>Redirecting to the portfolio...</p>
</body>
</html>
`;

  await writeFile(path.join(OUTPUT, 'sitemap.xml'), sitemap);
  await writeFile(path.join(OUTPUT, 'robots.txt'), robots);
  await writeFile(path.join(OUTPUT, '404.html'), notFound);
  await writeFile(path.join(OUTPUT, '.nojekyll'), '');
}

async function build() {
  await rm(OUTPUT, { recursive: true, force: true });
  await rm(TEMP, { recursive: true, force: true });
  await mkdir(OUTPUT, { recursive: true });
  await copySourceFiles();
  await buildApplicationBundle();

  const template = await readFile(path.join(ROOT, 'index.html'), 'utf8');
  const { projects, buildNotes } = await loadPortfolioData();
  const visibleProjects = projects.filter(project => !project.hidden);

  const routes = [
    {
      path: '/',
      title: 'Chris Kittichod | Technical Business Analyst',
      description: 'Technical Business Analyst in Hobart turning business problems into working software through requirements engineering, system design, and full-stack delivery.',
      type: 'website',
      robots: 'index, follow',
      entity: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Chris Kittichod',
        url: `${SITE_URL}/`,
      },
    },
    {
      path: '/about',
      title: 'About Chris Kittichod | Technical Business Analyst',
      description: 'How Chris Kittichod works across discovery, requirements, system design, prototyping, software delivery, testing, and iteration.',
      type: 'profile',
      robots: 'index, follow',
      entity: {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: 'About Chris Kittichod',
        url: `${SITE_URL}/about/`,
        mainEntity: { '@id': `${SITE_URL}/#person` },
      },
    },
    {
      path: '/works',
      title: 'Selected Work | Chris Kittichod',
      description: 'Case studies covering business analysis, system design, full-stack delivery, and AI-assisted product development.',
      type: 'website',
      robots: 'index, follow',
      entity: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Selected Work by Chris Kittichod',
        url: `${SITE_URL}/works/`,
        hasPart: visibleProjects.map(project => ({
          '@type': 'CreativeWork',
          name: project.title,
          url: `${SITE_URL}/works/${project.id}/`,
        })),
      },
    },
    ...visibleProjects.map(project => {
      const routePath = `/works/${project.id}`;
      return {
        path: routePath,
        title: `${project.title} Case Study | Chris Kittichod`,
        description: project.desc,
        type: 'website',
        robots: 'index, follow',
        entity: projectEntity(project, routePath),
      };
    }),
    ...buildNotes.map(note => {
      const routePath = `/works/sabaihub/build-notes/${note.id}`;
      const isComplete = Boolean(note.summary && note.overview);
      return {
        path: routePath,
        title: `${note.title} | SabaiHub Build Notes`,
        description: note.desc,
        type: 'article',
        robots: isComplete ? 'index, follow' : 'noindex, follow',
        entity: noteEntity(note, routePath),
      };
    }),
  ];

  for (const route of routes) {
    await writeRoute(template, route);
  }
  await writeDiscoveryFiles(routes.filter(route => route.robots.startsWith('index')));
  await rm(TEMP, { recursive: true, force: true });

  console.log(`Built ${routes.length} routes in ${OUTPUT}`);
  console.log(`Social image: ${SOCIAL_IMAGE}`);
}

await build();
