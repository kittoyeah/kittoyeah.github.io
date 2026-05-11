// ── App + Router ──────────────────────────────────────────────
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
  const { path } = useRouter();

  let page = null;
  if (path === '/') {
    page = <HomePage />;
  } else if (path === '/about') {
    page = <AboutPage />;
  } else if (path === '/works' || path === '/works/') {
    page = <WorksPage />;
  } else if (path.startsWith('/works/')) {
    const id = path.slice('/works/'.length);
    page = <ProjectDetailPage id={id} />;
  } else {
    page = <HomePage />;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <main id="main-content" style={{ flex: 1 }}>{page}</main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
