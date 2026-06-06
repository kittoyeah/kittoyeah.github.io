// ── Works Page ────────────────────────────────────────────────
function WorksPage() {
  const projects = window.PROJECTS;
  return (
    <section style={{ padding: 'clamp(5rem, 9vw, 9rem) 1.5rem 6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid var(--color-line)', paddingBottom: '2rem' }}>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.02em', color: 'var(--color-ink)', margin: 0 }}>Works</h1>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10.5px', color: 'var(--color-label)' }}>Click to open work</span>
          </div>
        </FadeIn>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
          {projects.map((project, i) => (
            <FadeInView key={project.id} delay={i * 0.08} className={i === 0 ? 'span-2' : ''}>
              <WorksCard project={project} featured={i === 0} />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorksCard({ project, featured }) {
  const [hov, setHov] = React.useState(false);
  return (
    <NavTo to={`/works/${project.id}`} style={{ display: 'block', textDecoration: 'none' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{
        position: 'relative', overflow: 'hidden',
        border: '1px solid var(--color-line)', background: 'var(--color-surface)',
        aspectRatio: featured ? '16 / 7' : '16 / 9', marginBottom: '1.25rem',
      }}>
        <img src={project.image} alt={project.title} referrerPolicy="no-referrer"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hov ? 'scale(1.02)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--brand-60) 0%, transparent 60%)' }} />
        {project.badge && (
          <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.375rem', padding: '0.25rem 0.625rem', background: 'var(--brand-90)', border: '1px solid var(--gold-40)', backdropFilter: 'blur(4px)', whiteSpace: 'nowrap' }}>
            <IconTrophy size={9} style={{ color: 'var(--color-gold)' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>{project.badge}</span>
          </div>
        )}
        <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', opacity: hov ? 1 : 0, transition: 'opacity 0.3s' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.625rem', background: 'var(--brand-90)', border: '1px solid var(--color-line)', backdropFilter: 'blur(4px)' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted)' }}>{project.type === 'article' ? 'Open Article' : 'Open Case Study'}</span>
            <IconArrowUpRight size={9} style={{ color: 'var(--color-muted)' }} />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
        <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: featured ? '1.25rem' : '1.1rem', letterSpacing: '-0.01em', color: hov ? 'var(--color-accent)' : 'var(--color-ink)', transition: 'color 0.3s', margin: 0 }}>{project.title}</h3>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10.5px', color: 'var(--color-label)' }}>{project.year}</span>
      </div>
      <p style={{ fontSize: featured ? '15px' : '14.5px', color: 'var(--color-muted)', lineHeight: 1.65, margin: '0 0 1rem', maxWidth: 'none', width: '100%' }}>{project.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.tags.map(t => (
          <span key={t} style={{ padding: '2px 8px', border: '1px solid var(--color-line)', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', color: 'var(--color-label)' }}>{t}</span>
        ))}
      </div>
    </NavTo>
  );
}

// ── Project Detail ────────────────────────────────────────────
const SECTIONS = [
  { key: 'summary', label: 'TL;DR', field: 'summary' },
  { key: 'tools', label: 'Tech Stack', field: 'tools' },
  { key: 'overview', label: 'Overview', field: 'overview' },
  { key: 'metrics', label: 'Metrics', field: 'metrics' },
  { key: 'problemStatement', label: 'Problem', field: 'problemStatement' },
  { key: 'solution', label: 'Solution', field: 'solution' },
  { key: 'beforeAfter', label: 'Before / After', field: 'beforeAfter' },
  { key: 'keyDeliverables', label: 'Key Features', field: 'keyDeliverables' },
  { key: 'myContribution', label: 'My Contribution', field: 'myContribution' },
  { key: 'skillsDemonstrated', label: 'Skills Demonstrated', field: 'skillsDemonstrated' },
  { key: 'engineeringDecisions', label: 'Engineering Decisions', field: 'engineeringDecisions' },
  { key: 'challengeApproachPairs', label: 'Challenges + Approaches', field: 'challengeApproachPairs' },
  { key: 'challenges', label: 'Challenges', field: 'challenges' },
  { key: 'approaches', label: 'Approaches', field: 'approaches' },
  { key: 'outcomes', label: 'Outcomes', field: 'outcomes' },
  { key: 'buildNotes', label: 'Build Notes', field: 'buildNotes' },
  { key: 'nextStage', label: "What's Next", field: 'nextStage' },
];

const TECH_STACK_ICONS = {
  'Next.js': { url: 'https://svgl.app/library/nextjs_icon_dark.svg', darkLogo: true },
  React: { url: 'https://svgl.app/library/react_dark.svg', darkLogo: true },
  TypeScript: { url: 'https://svgl.app/library/typescript.svg' },
  Prisma: { url: 'https://svgl.app/library/prisma.svg' },
  Supabase: { url: 'https://svgl.app/library/supabase.svg' },
  PostgreSQL: { url: 'https://svgl.app/library/postgresql.svg' },
  Vercel: { url: 'https://svgl.app/library/vercel_dark.svg', darkLogo: true },
  'Tailwind CSS': { url: 'https://svgl.app/library/tailwindcss.svg' },
};

function ProjectDetailPage({ id, collection = window.PROJECTS, backTo = "/works", backLabel = "Back to Works", disablePrevNext = false }) {
  const { navigate } = useRouter();
  const project = collection.find(p => p.id === id);

  React.useEffect(() => {
    if (!project) navigate(backTo);
  }, [project]);

  if (!project) return null;

  const idx = collection.findIndex(p => p.id === id);
  const prev = disablePrevNext ? null : (collection[idx - 1] || null);
  const next = disablePrevNext ? null : (collection[idx + 1] || null);
  const buildNotes = project.id === 'sabaihub' ? (window.BUILD_NOTES || []).filter(note => note.parentId === 'sabaihub') : [];
  const visibleSections = SECTIONS.filter(({ field }) => {
    if (field === 'buildNotes') return buildNotes.length > 0;
    if (field === 'nextStage' && project.id === 'sabaihub') return false;
    const value = project[field];
    if (field === 'challenges' && project.challengeApproachPairs) return false;
    if (field === 'approaches' && project.challengeApproachPairs) return false;
    return Array.isArray(value) ? value.length > 0 : Boolean(value);
  });
  const sectionLabel = (key, fallback) => project.sectionLabels?.[key] || fallback;

  const scrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 112;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ padding: 'clamp(4.5rem, 8vw, 8rem) 1.5rem 8rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>

        {/* Back */}
        <FadeIn>
          <div style={{ marginBottom: '3rem' }}>
            <NavTo to={backTo} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-ink)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}>
              <IconArrowLeft size={12} /> {backLabel}
            </NavTo>
          </div>
        </FadeIn>

        {/* Hero */}
        <FadeIn delay={0.05}>
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--color-label)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{project.year}</span>
              {project.badge && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', padding: '0.25rem 0.625rem', border: '1px solid var(--gold-40)', backgroundColor: 'var(--gold-5)', whiteSpace: 'nowrap' }}>
                  <IconTrophy size={9} style={{ color: 'var(--color-gold)' }} />
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>{project.badge}</span>
                </div>
              )}
            </div>
            <h1 className="project-hero-title" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 'clamp(2.25rem, 6vw, 3.75rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--color-ink)', margin: '0 0 1.5rem' }}>{project.title}</h1>
            <p className="project-hero-desc" style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--color-muted)', lineHeight: 1.65, maxWidth: '38rem', margin: 0 }}>{project.desc}</p>
          </div>
        </FadeIn>

        {/* Cover image */}
        <FadeIn delay={0.1}>
          <div style={{ aspectRatio: '16 / 7', border: '1px solid var(--color-line)', overflow: 'hidden', marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
            <img src={project.image} alt={project.title} referrerPolicy="no-referrer"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </FadeIn>

        {/* Content + TOC */}
        <div className="detail-layout" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* TOC sidebar */}
          <aside className="toc-sidebar" style={{ display: 'none' }}>
            <div style={{ position: 'sticky', top: '7rem' }}>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-label)', margin: '0 0 1rem' }}>Contents</p>
              {visibleSections.map(({ key, label }) => (
                <TocLink key={key} label={sectionLabel(key, label)} onClick={() => scrollTo(key)} />
              ))}
            </div>
          </aside>

          <MobileToc
            sections={visibleSections}
            getLabel={sectionLabel}
            onSelect={scrollTo}
          />

          {/* Main content */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {project.summary && (
              <CaseSection id="summary" label="TL;DR" compact>
                <Summary summary={project.summary} />
              </CaseSection>
            )}

            {project.tools && (
              <CaseSection id="tools" label={sectionLabel('tools', project.toolsLabel || "Tech Stack")}>
                <TechStackList tools={project.tools} />
              </CaseSection>
            )}

            {project.overview && (
              <CaseSection id="overview" label={sectionLabel('overview', 'Overview')}>
                <TextBlock content={project.overview} />
              </CaseSection>
            )}

            {project.metrics && (
              <CaseSection id="metrics" label="Metrics" compact>
                <MetricStrip metrics={project.metrics} />
              </CaseSection>
            )}

            <SectionDivider />

            {project.problemStatement && (
              <CaseSection id="problemStatement" label={sectionLabel('problemStatement', 'Problem')} emphasis>
                {project.problemQuote ? (
                  <PullQuote quote={project.problemQuote} supporting={project.problemStatement} supportingOutside={project.quoteSupportingOutside} />
                ) : (
                  <TextBlock content={project.problemStatement} variant="quote" />
                )}
              </CaseSection>
            )}

            {project.solution && (
              <CaseSection id="solution" label={sectionLabel('solution', 'Solution')}>
                <TextBlock content={project.solution} />
                {project.conceptTranslations && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <ConceptTranslationTable items={project.conceptTranslations} />
                  </div>
                )}
                {project.stakeholderNeeds && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <StakeholderNeedTable items={project.stakeholderNeeds} />
                  </div>
                )}
                {project.solutionFollowup && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <TextBlock content={project.solutionFollowup} />
                  </div>
                )}
              </CaseSection>
            )}

            {project.beforeAfter && (
              <CaseSection id="beforeAfter" label="Before / After" compact>
                <BeforeAfter pairs={project.beforeAfter} />
              </CaseSection>
            )}

            {project.keyDeliverables && (
              <CaseSection id="keyDeliverables" label={sectionLabel('keyDeliverables', 'Key Features')}>
                <CardGrid items={project.keyDeliverables} />
              </CaseSection>
            )}

            {project.myContribution && (
              <CaseSection id="myContribution" label={sectionLabel('myContribution', 'My Contribution')}>
                <TextBlock content={project.myContribution} />
                {project.workPhases && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <WorkPhaseList phases={project.workPhases} />
                  </div>
                )}
              </CaseSection>
            )}

            {project.skillsDemonstrated && (
              <CaseSection id="skillsDemonstrated" label="Skills Demonstrated">
                <TagList items={project.skillsDemonstrated} />
              </CaseSection>
            )}

            {project.engineeringDecisions && (
              <CaseSection id="engineeringDecisions" label={sectionLabel('engineeringDecisions', 'Engineering Decisions')}>
                <LineList items={project.engineeringDecisions} />
              </CaseSection>
            )}

            {project.challengeApproachPairs ? (
              <CaseSection id="challengeApproachPairs" label={sectionLabel('challengeApproachPairs', 'Challenges + Approaches')}>
                <ChallengeApproachGrid pairs={project.challengeApproachPairs} />
              </CaseSection>
            ) : (
              <>
                {project.challenges && (
                  <CaseSection id="challenges" label={sectionLabel('challenges', 'Challenges')}>
                    <NumberedList items={project.challenges} />
                  </CaseSection>
                )}

                {project.approaches && (
                  <CaseSection id="approaches" label={sectionLabel('approaches', 'Approaches')}>
                    <LineList items={project.approaches} />
                  </CaseSection>
                )}
              </>
            )}

            <SectionDivider />

            {project.outcomes && (
              <CaseSection id="outcomes" label={sectionLabel('outcomes', 'Outcomes')} emphasis>
                <OutcomeList items={project.outcomes} layout={project.outcomeLayout} />
              </CaseSection>
            )}

            {buildNotes.length > 0 && (
              <CaseSection id="buildNotes" label="Build Notes">
                <BuildNotesList notes={buildNotes} />
              </CaseSection>
            )}

            {project.nextStage && project.id !== 'sabaihub' && (
              <CaseSection id="nextStage" label={sectionLabel('nextStage', "What's Next")}>
                <TextBlock content={project.nextStage} />
                {project.plannedImprovements && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <CardGrid items={project.plannedImprovements} />
                  </div>
                )}
              </CaseSection>
            )}
          </div>
        </div>

        {/* Prev / Next */}
        {!disablePrevNext && (
          <div style={{ marginTop: '5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--color-line)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {prev ? <PrevNextCard project={prev} dir="prev" /> : <div />}
            {next ? <PrevNextCard project={next} dir="next" /> : <div />}
          </div>
        )}

      </div>
    </div>
  );
}

function TocLink({ label, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button type="button" onClick={onClick}
      style={{ display: 'block', width: '100%', textAlign: 'left', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: hov ? 'var(--color-ink)' : 'var(--color-muted)', background: 'none', border: 'none', borderLeft: `2px solid ${hov ? 'var(--color-accent)' : 'transparent'}`, paddingLeft: '0.75rem', paddingTop: '0.25rem', paddingBottom: '0.25rem', cursor: 'pointer', transition: 'color 0.2s, border-color 0.2s', marginBottom: '0.25rem' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {label}
    </button>
  );
}

function MobileToc({ sections, getLabel, onSelect }) {
  const [open, setOpen] = React.useState(false);

  const selectSection = (key) => {
    setOpen(false);
    window.setTimeout(() => onSelect(key), 0);
  };

  return (
    <nav className="mobile-toc" aria-label="Page contents">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(value => !value)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '0.9rem 1rem',
          border: '1px solid var(--color-line)',
          background: 'var(--color-surface)',
          color: 'var(--color-ink)',
          cursor: 'pointer',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <IconMenu size={15} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Contents</span>
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--color-accent)' }}>{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div style={{ border: '1px solid var(--color-line)', borderTop: 'none', background: 'var(--color-brand)' }}>
          {sections.map(({ key, label }, index) => (
            <button
              key={key}
              type="button"
              onClick={() => selectSection(key)}
              style={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '2rem 1fr',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                border: 'none',
                borderTop: index === 0 ? 'none' : '1px solid var(--color-line)',
                background: 'transparent',
                color: 'var(--color-muted)',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: 'var(--color-accent)' }}>{String(index + 1).padStart(2, '0')}</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', lineHeight: 1.45 }}>{getLabel(key, label)}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function TextBlock({ content, variant }) {
  const items = Array.isArray(content) ? content : [content];
  const baseStyle = {
    color: 'var(--color-muted)',
    fontSize: '16px',
    lineHeight: 1.75,
    margin: 0,
  };
  const quoteStyle = variant === 'quote'
    ? { borderLeft: '4px solid var(--accent-40)', paddingLeft: '1.5rem' }
    : {};

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((item, i) => (
        <p key={i} style={{ ...baseStyle, ...quoteStyle }}>{item}</p>
      ))}
    </div>
  );
}

function Summary({ summary }) {
  const rows = [
    { label: 'What it is',  text: summary.what,   accent: 'var(--color-accent)' },
    { label: 'My role',     text: summary.did,    accent: 'var(--color-accent)' },
    { label: 'The result',  text: summary.result, accent: 'var(--color-gold)'  },
  ].filter(r => r.text);
  return (
    <div style={{ border: '1px solid var(--accent-40)', background: 'linear-gradient(135deg, var(--color-surface), var(--gold-5))' }}>
      {rows.map((row, i) => (
        <div key={row.label} className="summary-row" style={{
          display: 'grid', gridTemplateColumns: '8rem 1fr', gap: '1.25rem',
          padding: '1.1rem 1.25rem',
          borderBottom: i < rows.length - 1 ? '1px solid var(--color-line)' : 'none',
          alignItems: 'baseline',
        }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            color: row.accent, paddingTop: '4px',
          }}>{row.label}</span>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500,
            fontSize: 'clamp(15px, 1.4vw, 17px)', lineHeight: 1.55,
            color: 'var(--color-ink)', margin: 0,
          }}>{row.text}</p>
        </div>
      ))}
    </div>
  );
}

function BeforeAfter({ pairs }) {
  const cols = [
    { label: 'Before', items: pairs.before, accent: 'var(--color-gold)',   tint: 'var(--gold-5)',     symbol: '−' },
    { label: 'After',  items: pairs.after,  accent: 'var(--color-accent)', tint: 'transparent',       symbol: '+' },
  ];
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      border: '1px solid var(--color-line)', background: 'var(--color-surface)',
    }}>
      {cols.map((col, i) => (
        <div key={col.label} style={{
          padding: '1.5rem 1.25rem',
          borderRight: i === 0 ? '1px solid var(--color-line)' : 'none',
          borderLeft: i === 1 ? '3px solid var(--color-accent)' : 'none',
          background: col.tint === 'transparent' ? 'transparent'
            : `linear-gradient(135deg, var(--color-surface), ${col.tint})`,
        }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
            textTransform: 'uppercase', letterSpacing: '0.14em', color: col.accent,
          }}>{col.label}</span>
          <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0',
            display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {col.items.map((item, j) => (
              <li key={j} style={{
                fontSize: '14.5px', color: i === 0 ? 'var(--color-muted)' : 'var(--color-ink)',
                lineHeight: 1.6, paddingLeft: '1.25rem', position: 'relative',
              }}>
                <span aria-hidden="true" style={{
                  position: 'absolute', left: 0, top: '1px', color: col.accent,
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', fontWeight: 600,
                }}>{col.symbol}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MetricStrip({ metrics }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', border: '1px solid var(--gold-30)', background: 'linear-gradient(135deg, var(--color-surface), var(--gold-5))' }}>
      {metrics.map((metric, i) => (
        <div key={metric.value + metric.label} style={{ position: 'relative', padding: '1.55rem', borderRight: i < metrics.length - 1 ? '1px solid var(--color-line)' : 'none', minHeight: '9rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
          <span aria-hidden="true" style={{ position: 'absolute', top: '-2.2rem', right: '0.75rem', fontFamily: 'Space Grotesk, sans-serif', fontSize: '6.5rem', fontWeight: 600, lineHeight: 1, color: i === 0 ? 'var(--color-gold)' : 'var(--color-accent)', opacity: 0.08 }}>{i + 1}</span>
          <span style={{ position: 'relative', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 'clamp(2.25rem, 5.4vw, 3.45rem)', lineHeight: 0.95, letterSpacing: '-0.03em', color: i === 0 ? 'var(--color-gold)' : 'var(--color-accent)' }}>{metric.value}</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', lineHeight: 1.5, marginTop: '1rem' }}>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

function PullQuote({ quote, supporting, supportingOutside = false }) {
  const supportItems = Array.isArray(supporting) ? supporting : [supporting];
  return (
    <div>
      <div style={{ position: 'relative', border: '1px solid var(--accent-40)', borderLeft: '6px solid var(--color-accent)', background: 'linear-gradient(135deg, var(--color-surface), var(--gold-5))', padding: 'clamp(1.5rem, 4vw, 2.4rem)', overflow: 'hidden' }}>
        <span aria-hidden="true" style={{ position: 'absolute', top: '-1rem', right: '1rem', fontFamily: 'Space Grotesk, sans-serif', fontSize: '7.5rem', lineHeight: 1, color: 'var(--color-accent)', opacity: 0.18 }}>“</span>
        <p style={{ position: 'relative', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: 'clamp(1.2rem, 2.6vw, 1.6rem)', lineHeight: 1.42, color: 'var(--color-ink)', margin: 0, maxWidth: '44rem' }}>{quote}</p>
        {!supportingOutside && (
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1.5rem', maxWidth: '44rem' }}>
            {supportItems.map((item, i) => (
              <p key={i} style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0 }}>{item}</p>
            ))}
          </div>
        )}
      </div>
      {supportingOutside && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', maxWidth: '44rem' }}>
          {supportItems.map((item, i) => (
            <p key={i} style={{ fontSize: '16px', color: 'var(--color-muted)', lineHeight: 1.75, margin: 0 }}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

function CardGrid({ items }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
      {items.map((item, i) => (
        <div key={i} style={{ position: 'relative', display: 'flex', gap: '0.9rem', padding: '1.35rem 1.25rem 1.25rem', border: `1px solid ${i % 2 === 0 ? 'var(--accent-30)' : 'var(--gold-30)'}`, background: 'var(--color-surface)', overflow: 'hidden', minHeight: '8rem' }}>
          <span aria-hidden="true" style={{ position: 'absolute', top: '-0.65rem', left: '0.7rem', color: i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-gold)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '3rem', fontWeight: 600, lineHeight: 1, opacity: 0.48 }}>0{i + 1}</span>
          <p style={{ position: 'relative', fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.6, margin: '2rem 0 0' }}>{item}</p>
        </div>
      ))}
    </div>
  );
}

function StakeholderNeedTable({ items }) {
  return (
    <div style={{ borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(8rem, 0.28fr) 1fr',
        gap: '1.25rem',
        padding: '0 0 0.65rem',
        borderBottom: '1px solid var(--color-line)',
      }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-label)' }}>Stakeholder</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-label)' }}>What they need</span>
      </div>
      {items.map((item, i) => (
        <div key={item.role} style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(8rem, 0.28fr) 1fr',
          gap: '1.25rem',
          padding: '0.95rem 0',
          borderTop: i === 0 ? 'none' : '1px solid var(--color-line)',
          alignItems: 'baseline',
        }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-accent)' }}>{item.role}</span>
          <p style={{ fontSize: '15.5px', color: 'var(--color-muted)', lineHeight: 1.65, margin: 0 }}>{item.need}</p>
        </div>
      ))}
    </div>
  );
}

function WorkPhaseList({ phases }) {
  return (
    <div style={{ borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}>
      {phases.map((item, i) => (
        <div key={item.phase} className="work-phase-row" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(9rem, 0.3fr) 1fr',
          gap: '1.25rem',
          padding: '1rem 0',
          borderTop: i === 0 ? 'none' : '1px solid var(--color-line)',
          alignItems: 'baseline',
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--color-accent)' }}>0{i + 1}</span>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.35 }}>{item.phase}</span>
          </div>
          <p style={{ fontSize: '15.5px', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0 }}>{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

function ConceptTranslationTable({ items }) {
  return (
    <div style={{ borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(12rem, 0.38fr) 1fr',
        gap: '1.25rem',
        padding: '0 0 0.65rem',
        borderBottom: '1px solid var(--color-line)',
      }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-label)' }}>Workflow concept</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-label)' }}>Architecture shape</span>
      </div>
      {items.map((item, i) => (
        <div key={item.concept} style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(12rem, 0.38fr) 1fr',
          gap: '1.25rem',
          padding: '1rem 0',
          borderTop: i === 0 ? 'none' : '1px solid var(--color-line)',
          alignItems: 'baseline',
        }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.45, margin: 0 }}>{item.concept}</p>
          <p style={{ fontSize: '15.5px', color: 'var(--color-muted)', lineHeight: 1.65, margin: 0 }}>{item.architecture}</p>
        </div>
      ))}
    </div>
  );
}

function BuildNotesList({ notes }) {
  return (
    <div>
      <p style={{ fontSize: '16px', color: 'var(--color-muted)', lineHeight: 1.75, margin: '0 0 1.25rem' }}>
        Deeper notes on the product decisions, architecture, and delivery workflow behind SabaiHub.
      </p>
      <div style={{ border: '1px solid var(--color-line)', background: 'var(--color-surface)' }}>
        {notes.map((note, i) => (
          <NavTo key={note.id} to={`/works/sabaihub/build-notes/${note.id}`}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1rem 1.1rem', borderTop: i === 0 ? 'none' : '1px solid var(--color-line)', textDecoration: 'none' }}>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '15.5px', color: 'var(--color-ink)', lineHeight: 1.4 }}>{note.title}</span>
            <IconArrowUpRight size={13} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
          </NavTo>
        ))}
      </div>
    </div>
  );
}

function TagList({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {items.map(item => (
        <span key={item} style={{ padding: '0.375rem 0.75rem', border: '1px solid var(--color-line)', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item}</span>
      ))}
    </div>
  );
}

function TechStackList({ tools }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(132px, 1fr))', gap: '0.75rem' }}>
      {tools.map(tool => {
        const icon = TECH_STACK_ICONS[tool];
        return (
          <div key={tool} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 0.875rem', border: '1px solid var(--accent-30)', background: 'var(--color-surface)' }}>
            <div style={{ width: '28px', height: '28px', border: '1px solid var(--color-line)', background: 'var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {icon ? (
                <img src={icon.url} alt="" width="17" height="17" style={{ objectFit: 'contain', display: 'block' }} className={icon.darkLogo ? 'icon-dark-invert' : ''} referrerPolicy="no-referrer" />
              ) : (
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--color-label)' }}>{tool.slice(0, 2).toUpperCase()}</span>
              )}
            </div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: 1.3 }}>{tool}</span>
          </div>
        );
      })}
    </div>
  );
}

function NumberedList({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid var(--color-line)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--color-muted)', flexShrink: 0, marginTop: '2px' }}>{i + 1}</span>
          <p style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0 }}>{item}</p>
        </li>
      ))}
    </ul>
  );
}

function ChallengeApproachGrid({ pairs }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {pairs.map((pair, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', border: '1px solid var(--color-line)', background: 'var(--color-surface)' }}>
          <div style={{ padding: '1.25rem', borderRight: '1px solid var(--color-line)', background: 'linear-gradient(135deg, var(--color-surface), var(--gold-5))' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Challenge 0{i + 1}</span>
            <p style={{ fontSize: '15.5px', color: 'var(--color-muted)', lineHeight: 1.7, margin: '0.85rem 0 0' }}>{pair.challenge}</p>
          </div>
          <div style={{ position: 'relative', padding: '1.25rem', borderLeft: '3px solid var(--color-accent)' }}>
            <span aria-hidden="true" style={{ position: 'absolute', left: '-0.7rem', top: '50%', transform: 'translateY(-50%)', width: '1.25rem', height: '1.25rem', border: '1px solid var(--accent-40)', background: 'var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', fontSize: '11px' }}>→</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Approach</span>
            <p style={{ fontSize: '15.5px', color: 'var(--color-ink)', lineHeight: 1.7, margin: '0.85rem 0 0' }}>{pair.approach}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function LineList({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((item, i) => (
        <li key={i} style={{ borderLeft: '2px solid var(--accent-30)', paddingLeft: '1.25rem', paddingTop: '0.25rem', paddingBottom: '0.25rem' }}>
          <p style={{ fontSize: '15.5px', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0 }}>{item}</p>
        </li>
      ))}
    </ul>
  );
}

function OutcomeList({ items, layout = 'grid' }) {
  if (layout === 'horizontal') {
    return (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', padding: '1rem 1.1rem', border: '1px solid var(--accent-30)', background: 'var(--color-surface)' }}>
            <span style={{ color: i === 0 ? 'var(--color-gold)' : 'var(--color-accent)', marginTop: '2px', flexShrink: 0, fontSize: '15px' }}>✦</span>
            <p style={{ fontSize: '15.5px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>{item}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul style={{ listStyle: 'none', padding: '1.4rem', margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', border: '1px solid var(--gold-30)', background: 'linear-gradient(135deg, var(--color-surface), var(--gold-5))' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.85rem', border: `1px solid ${i === 0 ? 'var(--gold-40)' : 'var(--accent-30)'}`, background: 'var(--brand-60)' }}>
          <span style={{ color: i === 0 ? 'var(--color-gold)' : 'var(--color-accent)', marginTop: '2px', flexShrink: 0, fontSize: '18px' }}>✦</span>
          <p style={{ fontSize: '15.5px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>{item}</p>
        </li>
      ))}
    </ul>
  );
}

function SectionDivider() {
  return (
    <div aria-hidden="true" style={{ width: '4rem', height: '1px', background: 'var(--accent-30)', marginTop: '-2rem', marginBottom: '-2rem' }} />
  );
}

function CaseSection({ id, label, children, compact = false, emphasis = false }) {
  return (
    <FadeInView>
      <div id={id} style={{ scrollMarginTop: '7rem', padding: emphasis ? '0.25rem 0' : 0 }}>
        <span className="mono-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
          <span style={{ color: 'var(--color-accent)' }}>// </span>{label}
        </span>
        <div style={{ marginTop: compact ? '-0.25rem' : 0 }}>{children}</div>
      </div>
    </FadeInView>
  );
}

function PrevNextCard({ project, dir }) {
  const [hov, setHov] = React.useState(false);
  return (
    <NavTo to={`/works/${project.id}`}
      style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.5rem', border: `1px solid ${hov ? 'var(--accent-50)' : 'var(--color-line)'}`, textDecoration: 'none', transition: 'border-color 0.2s', textAlign: dir === 'next' ? 'right' : 'left' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-label)', display: 'flex', alignItems: 'center', gap: '0.375rem', justifyContent: dir === 'next' ? 'flex-end' : 'flex-start' }}>
        {dir === 'prev' ? <><IconArrowLeft size={10} /> Previous</> : <>Next <IconArrowUpRight size={10} /></>}
      </span>
      <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '15px', color: hov ? 'var(--color-accent)' : 'var(--color-ink)', transition: 'color 0.2s', margin: 0 }}>{project.title}</p>
    </NavTo>
  );
}

window.WorksPage = WorksPage;
window.ProjectDetailPage = ProjectDetailPage;
