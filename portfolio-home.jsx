// ── Home Page ─────────────────────────────────────────────────
function HomePage() {
  const projects = window.PROJECTS.slice(0, 3);
  const achievements = window.ACHIEVEMENTS;

  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: 'clamp(10rem, 15vw, 12rem) 1.5rem clamp(3rem, 6vw, 6rem)',
        borderBottom: '1px solid var(--color-line)',
        display: 'flex', alignItems: 'center', minHeight: '100vh',
      }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', width: '100%' }}>
          <FadeIn delay={0.1}>
            {/* Tagline */}
            <h2 className="home-hero-title" style={{
              fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600,
              fontSize: 'clamp(2.25rem, 7.5vw, 6rem)', lineHeight: 1.08,
              letterSpacing: '-0.025em', color: 'var(--color-ink)',
              margin: '0 0 2.5rem', textAlign: 'center',
            }}>
              Turning business problems into{' '}
              <span style={{ fontWeight: 300, color: 'var(--color-muted)' }}>working software</span>
            </h2>

            <div className="hero-layout">
              {/* ── Left: photo ── */}
              <div className="hero-photo-col">
                <img
                  src="profile.jpg"
                  alt="Chris Kittichod"
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                    borderRadius: '4px',
                  }}
                />
              </div>

              {/* ── Right: content ── */}
              <div className="hero-right-col" style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ borderTop: '1px solid var(--color-line)' }}>
                  {[
                    {
                      label: 'Who I am',
                      content: (
                        <div className="hero-bio-wrap" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '15px', color: 'var(--color-ink)', margin: '0 0 2px' }}>Chris Kittichod</p>
                            <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>Master's of IT · University of Tasmania</p>
                            <div className="hero-bio-copy" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '14.5px', color: 'var(--color-ink)', lineHeight: 1.65, margin: '0.75rem 0 0', maxWidth: '39rem' }}>
                              <p style={{ margin: 0 }}>
                                An aspiring product engineer with a background in business analysis, product ownership, and Design Thinking.
                              </p>
                              <p style={{ margin: 0 }}>
                                I build by understanding the problem first, then designing the right system around the people who will use it.
                              </p>
                              <p style={{ margin: 0 }}>
                                I'm growing towards AI Engineering by strengthening my full-stack skills and learning to design agentic AI systems that automate safely inside real products.
                              </p>
                            </div>
                          </div>
                          <img src="profile.jpg" alt="Chris Kittichod" className="hero-avatar-inline"
                            style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0, border: '1px solid var(--color-line)' }} />
                        </div>
                      ),
                    },
                    {
                      label: 'Specialise in',
                      content: <p style={{ fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>Requirements engineering, system design, spec-driven &amp; agentic development</p>,
                    },
                    {
                      label: 'Highlights',
                      content: (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                          {achievements.map(a => (
                            <div key={a.title} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%', padding: '0.5rem 0.875rem', border: '1px solid var(--gold-30)', backgroundColor: 'var(--gold-5)' }}>
                              <IconTrophy size={10} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                              <div>
                                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)', margin: 0 }}>{a.award}</p>
                                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--color-label)', margin: '1px 0 0' }}>{a.title} · {a.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ),
                    },
                    {
                      label: 'Looking ahead',
                      content: (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <p style={{ fontSize: '14px', color: 'var(--color-ink)', margin: 0 }}>Summer Internship <span style={{ color: 'var(--color-muted)' }}>Nov '26 – Feb '27</span></p>
                          <p style={{ fontSize: '14px', color: 'var(--color-ink)', margin: 0 }}>Graduating <span style={{ color: 'var(--color-muted)' }}>May '27</span></p>
                        </div>
                      ),
                    },
                  ].map(({ label, content }, i, arr) => (
                    <div key={label} className="hero-info-row" style={{
                      display: 'flex', alignItems: 'flex-start', gap: '1.5rem',
                      padding: '0.875rem 0',
                      borderBottom: i < arr.length - 1 ? '1px solid var(--color-line)' : 'none',
                    }}>
                      <span className="hero-info-label" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent)', minWidth: '7rem', paddingTop: '3px', flexShrink: 0 }}>{label}</span>
                      <div className="hero-info-content" style={{ flex: 1, minWidth: 0 }}>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Journey link */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <NavTo to="/about" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1.1rem', border: '1px solid var(--accent-50)', backgroundColor: 'var(--accent-30)', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-ink)', textDecoration: 'none' }}>
                    Read my journey
                    <IconArrowUpRight size={12} />
                  </NavTo>
                </div>

                {/* Status bar */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--color-line)', display: 'flex', flexWrap: 'wrap', gap: '1rem 2.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <span style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%', animation: 'pulse 2s infinite', flexShrink: 0 }} />
                    <span>Open to Opportunities</span>
                  </div>
                  <span>Hobart, Tasmania · Remote</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Works preview */}
      <section style={{ padding: 'clamp(3rem, 7vw, 7rem) 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <FadeInView>
            <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--color-line)', paddingBottom: '2rem' }}>
              <span className="mono-label"><span style={{ color: 'var(--color-accent)' }}>// </span>Works</span>
            </div>
          </FadeInView>

          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
            {projects.map((project, i) => (
              <FadeInView key={project.id} delay={i * 0.08} className={i === 0 ? 'span-2' : ''}>
                <ProjectCardHome project={project} featured={i === 0} />
              </FadeInView>
            ))}
          </div>

          <FadeInView>
            <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--color-line)', display: 'flex', justifyContent: 'center' }}>
              <NavTo to="/works" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                padding: '0.875rem 2rem',
                border: '1px solid var(--accent-50)', color: 'var(--color-accent)',
                fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
                textTransform: 'uppercase', letterSpacing: '0.15em',
                textDecoration: 'none', transition: 'background 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-brand)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--color-accent)'; }}>
                View all works <IconArrowUpRight size={13} />
              </NavTo>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}

function ProjectCardHome({ project, featured }) {
  const [hov, setHov] = React.useState(false);
  return (
    <NavTo to={`/works/${project.id}`} style={{ display: 'block', textDecoration: 'none' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {/* Image */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        border: '1px solid var(--color-line)', background: 'var(--color-surface)',
        aspectRatio: featured ? '16 / 7' : '16 / 9', marginBottom: '1.25rem',
      }}>
        <img src={project.image} alt={project.title} referrerPolicy="no-referrer"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hov ? 'scale(1.02)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--brand-60) 0%, transparent 60%)' }} />
        {project.badge && (
          <div style={{
            position: 'absolute', top: '0.75rem', left: '0.75rem',
            display: 'flex', alignItems: 'center', gap: '0.375rem',
            padding: '0.25rem 0.625rem',
            background: 'var(--brand-90)', border: '1px solid var(--gold-40)',
            backdropFilter: 'blur(4px)', whiteSpace: 'nowrap',
          }}>
            <IconTrophy size={9} style={{ color: 'var(--color-gold)' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>{project.badge}</span>
          </div>
        )}
        <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', opacity: hov ? 1 : 0, transition: 'opacity 0.3s' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.625rem', background: 'var(--brand-90)', border: '1px solid var(--color-line)', backdropFilter: 'blur(4px)' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted)' }}>View Case Study</span>
            <IconArrowUpRight size={9} style={{ color: 'var(--color-muted)' }} />
          </div>
        </div>
      </div>

      {/* Meta */}
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

window.HomePage = HomePage;
