// ── App + Router ──────────────────────────────────────────────
const SITE_URL = 'https://kittoyeah.github.io';
const DEFAULT_SEO = {
  title: 'Chris Kittichod | Software Engineer',
  description: 'Software engineer in Hobart shipping full-stack web and AI products, with a business-analysis background that means building the right thing, not just building it.',
  type: 'website',
  robots: 'index, follow',
};

function canonicalUrl(path) {
  return `${SITE_URL}${path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`}`;
}

function absoluteAssetUrl(assetPath) {
  return /^https?:\/\//.test(assetPath)
    ? assetPath
    : `${SITE_URL}/${assetPath.replace(/^\/+/, '')}`;
}

function pageSeo(path) {
  if (path === '/') return { ...DEFAULT_SEO, path };
  if (path === '/about') {
    return {
      ...DEFAULT_SEO,
      path,
      title: 'About Chris Kittichod | Software Engineer',
      description: 'How Chris Kittichod works across discovery, requirements, system design, prototyping, software delivery, testing, and iteration.',
      type: 'profile',
    };
  }
  if (path === '/works') {
    return {
      ...DEFAULT_SEO,
      path,
      title: 'Selected Work | Chris Kittichod',
      description: 'Case studies covering business analysis, system design, full-stack delivery, and AI-assisted product development.',
    };
  }

  const buildNotePrefix = '/works/sabaihub/build-notes/';
  if (path.startsWith(buildNotePrefix)) {
    const id = path.slice(buildNotePrefix.length);
    const note = (window.BUILD_NOTES || []).find(item => item.id === id);
    if (note) {
      const isComplete = Boolean(note.summary && note.overview);
      return {
        ...DEFAULT_SEO,
        path,
        title: `${note.title} | SabaiHub Build Notes`,
        description: note.desc,
        type: 'article',
        robots: isComplete ? 'index, follow' : 'noindex, follow',
        entity: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: note.title,
          description: note.desc,
          url: canonicalUrl(path),
          image: absoluteAssetUrl(note.image),
          author: { '@id': `${SITE_URL}/#person` },
          isPartOf: { '@type': 'CreativeWork', name: 'SabaiHub', url: `${SITE_URL}/works/sabaihub/` },
        },
      };
    }
  }

  if (path.startsWith('/works/')) {
    const id = path.slice('/works/'.length);
    const project = (window.PROJECTS || []).find(item => item.id === id && !item.hidden);
    if (project) {
      return {
        ...DEFAULT_SEO,
        path,
        title: `${project.title} Case Study | Chris Kittichod`,
        description: project.desc,
        entity: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.desc,
          url: canonicalUrl(path),
          image: absoluteAssetUrl(project.image),
          creator: { '@id': `${SITE_URL}/#person` },
        },
      };
    }
  }

  return {
    ...DEFAULT_SEO,
    path,
    title: 'Page Not Found | Chris Kittichod',
    description: 'The requested portfolio page could not be found.',
    robots: 'noindex, nofollow',
  };
}

function setSeoValue(selector, value, attribute = 'content') {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function usePageSeo(path) {
  React.useEffect(() => {
    const seo = pageSeo(path);
    const url = canonicalUrl(path);
    document.title = seo.title;
    setSeoValue('[data-seo="description"]', seo.description);
    setSeoValue('[data-seo="robots"]', seo.robots);
    setSeoValue('[data-seo="canonical"]', url, 'href');
    setSeoValue('[data-seo="og:type"]', seo.type);
    setSeoValue('[data-seo="og:title"]', seo.title);
    setSeoValue('[data-seo="og:description"]', seo.description);
    setSeoValue('[data-seo="og:url"]', url);
    setSeoValue('[data-seo="twitter:title"]', seo.title);
    setSeoValue('[data-seo="twitter:description"]', seo.description);

    const schema = document.getElementById('page-schema');
    if (schema) {
      const entity = seo.entity || (
        path === '/about'
          ? {
              '@context': 'https://schema.org',
              '@type': 'ProfilePage',
              name: 'About Chris Kittichod',
              url,
              mainEntity: { '@id': `${SITE_URL}/#person` },
            }
          : path === '/works'
            ? {
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                name: 'Selected Work by Chris Kittichod',
                url,
              }
            : {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Chris Kittichod',
                url: SITE_URL,
              }
      );
      schema.textContent = JSON.stringify(entity);
    }
  }, [path]);
}

function Root() {
  return (
    <RouterProvider>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </RouterProvider>
  );
}

function AppInner() {
  const { path, navigate } = useRouter();
  usePageSeo(path);

  let page = null;
  if (path === '/') {
    page = <HomePage />;
  } else if (path === '/about') {
    page = <AboutPage />;
  } else if (path === '/works' || path === '/works/') {
    page = <WorksPage />;
  } else if (path.startsWith('/works/sabaihub/build-notes/')) {
    const id = path.slice('/works/sabaihub/build-notes/'.length);
    page = <ProjectDetailPage
      id={id}
      collection={window.BUILD_NOTES || []}
      backTo="/works/sabaihub"
      backLabel="Back to SabaiHub"
      disablePrevNext
    />;
  } else if (path.startsWith('/works/')) {
    const id = path.slice('/works/'.length);
    page = <ProjectDetailPage id={id} />;
  } else {
    page = <NotFoundPage onBack={() => navigate('/')} />;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <main id="main-content" style={{ flex: 1 }}>{page}</main>
      <Footer />
      <SearchFab />
      <CommandPalette />
    </div>
  );
}

function NotFoundPage({ onBack }) {
  return (
    <section style={{ padding: 'clamp(8rem, 14vw, 12rem) 1.5rem 6rem', minHeight: '70vh' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: '1rem' }}>404</span>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--color-ink)', margin: '0 0 1rem' }}>Page not found</h1>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, margin: '0 0 2rem' }}>This portfolio page does not exist or has moved.</p>
        <button type="button" onClick={onBack} style={{ padding: '0.8rem 1rem', border: '1px solid var(--accent-50)', background: 'var(--accent-30)', color: 'var(--color-ink)', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', cursor: 'pointer' }}>
          Back home
        </button>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
