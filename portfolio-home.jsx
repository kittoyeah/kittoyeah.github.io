// ── Home Page ─────────────────────────────────────────────────
function HomePage() {
  const projects = window.PROJECTS.slice(0, 3);
  const achievements = window.ACHIEVEMENTS;

  return (
    <div>
      <section style={{
        padding: 'clamp(10rem, 15vw, 12rem) 1.5rem clamp(3rem, 6vw, 6rem)',
        borderBottom: '1px solid var(--color-line)',
        display: 'flex', alignItems: 'center', minHeight: '100vh',
      }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', width: '100%' }}>
          <FadeIn delay={0.1}>
            {/* Tagline */}
            <h1 className="home-hero-title" style={{
              fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600,
              fontSize: 'clamp(2.25rem, 7.5vw, 6rem)', lineHeight: 1.08,
              letterSpacing: '-0.025em', color: 'var(--color-ink)',
              margin: '0 0 2.5rem', textAlign: 'center',
            }}>
              Turning business problems into{' '}
              <span style={{ fontWeight: 300, color: 'var(--color-muted)' }}>working software</span>
            </h1>

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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))', gap: '0.75rem' }}>
                  {achievements.map(a => (
                    <div key={a.title} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', minWidth: 0, padding: '0.625rem 0.875rem', border: '1px solid var(--gold-30)', backgroundColor: 'var(--gold-5)' }}>
                      <IconTrophy size={11} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                      <div style={{ minWidth: 0 }}>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)', margin: 0 }}>{a.award}</p>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--color-label)', margin: '1px 0 0' }}>{a.title} · {a.date}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--color-line)' }}>
                  {[
                    {
                      label: 'Who I am',
                      content: (
                        <div className="hero-bio-wrap" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '15px', color: 'var(--color-ink)', margin: '0 0 2px' }}>Chris Kittichod</p>
                            <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>Technical Business Analyst · Master of IT, University of Tasmania</p>
                            <div className="hero-bio-copy" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '14.5px', color: 'var(--color-ink)', lineHeight: 1.65, margin: '0.75rem 0 0', maxWidth: '39rem' }}>
                              <p style={{ margin: 0 }}>
                                My background spans business analysis, product ownership, Design Thinking, and early-stage product delivery across two startups and one global company.
                              </p>
                              <p style={{ margin: 0 }}>
                                I work as a Technical Business Analyst: understanding business problems, mapping workflows, defining requirements, designing systems, and shaping prototypes that can be tested with real users.
                              </p>
                              <p style={{ margin: 0 }}>
                                I am strengthening my software engineering and AI skills so I can contribute beyond requirements into working products, including agentic AI systems that automate safely inside real-world workflows.
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
                      content: (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65 }}>
                          {[
                            {
                              title: 'Business Analysis',
                              copy: 'Requirements engineering (elicitation, analysis, specification, validation), User-centred design (UX), Design Thinking facilitation, stakeholder interviews, workflow analysis, as-is/to-be mapping, service blueprint, user stories, acceptance criteria, MVP scoping, and UAT.',
                            },
                            {
                              title: 'Software Development',
                              lines: [
                                'System design, application architecture, data modelling, workflow diagrams, process diagrams, and technical feasibility.',
                                'Full-stack development, spec-driven development, harness engineering, testing, deployment, and production iteration.',
                                'TypeScript, React, Next.js, PostgreSQL, Supabase, Prisma, Git/GitHub, and Vercel.',
                              ],
                            },
                            {
                              title: 'AI Workflow Design',
                              badge: 'Learning',
                              copy: 'AI-assisted development, agentic workflow design, context assembly, structured outputs, RAG, human-in-the-loop review, evals, and guardrails for safer automation.',
                            },
                          ].map(item => (
                            <div key={item.title}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                                <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '15px', fontWeight: 500, letterSpacing: '0.01em', color: 'var(--color-ink)', margin: 0 }}>{item.title}</p>
                                {item.badge && (
                                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-label)', border: '1px solid var(--color-line)', padding: '2px 6px' }}>{item.badge}</span>
                                )}
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                                {(item.lines || [item.copy]).map(line => (
                                  <p key={line} style={{ margin: 0, fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.7 }}>{line}</p>
                                ))}
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
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <ToolsMethodsSection />

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

function ToolsMethodsSection() {
  const groups = [
    {
      title: 'Business & Product',
      icon: <IconLayers size={14} style={{ color: 'var(--color-accent)' }} />,
      items: [
        { name: 'Jira', iconUrl: 'https://cdn.simpleicons.org/jira/0052CC' },
        { name: 'Confluence', iconUrl: 'https://cdn.simpleicons.org/confluence/172B4D' },
        { name: 'Microsoft 365', iconUrl: 'https://svgl.app/library/microsoft.svg' },
        { name: 'Figma', iconUrl: 'https://svgl.app/library/figma.svg' },
        { name: 'FigJam', iconUrl: 'https://svgl.app/library/figma.svg' },
        { name: 'Miro', iconUrl: 'https://cdn.simpleicons.org/miro/050038' },
        { name: 'Linear', iconUrl: 'https://cdn.simpleicons.org/linear/5E6AD2' },
        { name: 'Notion', iconUrl: 'https://cdn.simpleicons.org/notion/000000' },
        { name: 'Google Workspace', iconUrl: 'https://svgl.app/library/google.svg' },
      ],
    },
    {
      title: 'Software Development',
      icon: <IconCpu size={14} style={{ color: 'var(--color-accent)' }} />,
      items: [
        { name: 'TypeScript', iconUrl: 'https://svgl.app/library/typescript.svg' },
        { name: 'JavaScript', iconUrl: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
        { name: 'Python', iconUrl: 'https://cdn.simpleicons.org/python/3776AB' },
        { name: 'Node.js', iconUrl: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
        { name: 'React', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Next.js', iconUrl: 'https://svgl.app/library/nextjs_icon_dark.svg' },
        { name: 'PostgreSQL', iconUrl: 'https://svgl.app/library/postgresql.svg' },
        { name: 'Supabase', iconUrl: 'https://svgl.app/library/supabase.svg' },
        { name: 'Prisma', iconUrl: 'https://cdn.simpleicons.org/prisma/2D3748' },
        { name: 'Git', iconUrl: 'https://cdn.simpleicons.org/git/F05032' },
        { name: 'GitHub', iconUrl: 'https://cdn.simpleicons.org/github/181717' },
        { name: 'Vercel', iconUrl: 'https://cdn.simpleicons.org/vercel/000000' },
        { name: 'Playwright', iconUrl: 'https://svgl.app/library/playwright.svg' },
        { name: 'Vitest', iconUrl: 'https://cdn.simpleicons.org/vitest/6E9F18' },
      ],
    },
    {
      title: 'AI Workflow Design',
      icon: <IconBrainCircuit size={14} style={{ color: 'var(--color-accent)' }} />,
      badge: 'Learning',
      items: [
        { name: 'Claude Code', iconUrl: 'https://svgl.app/library/claude-ai-icon.svg' },
        { name: 'Codex', iconUrl: 'https://svgl.app/library/openai.svg' },
        { name: 'AWS Bedrock', iconUrl: 'https://svgl.app/library/aws_dark.svg' },
        { name: 'IBM watsonx.ai', iconUrl: 'https://svgl.app/library/ibm.svg' },
        { name: 'Microsoft Foundry', iconUrl: 'https://svgl.app/library/microsoft.svg' },
      ],
    },
  ];

  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', borderBottom: '1px solid var(--color-line)' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <FadeInView>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', borderBottom: '1px solid var(--color-line)', paddingBottom: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <span className="mono-label"><span style={{ color: 'var(--color-accent)' }}>// </span>Tools & Methods</span>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.65, margin: '0.75rem 0 0', maxWidth: '42rem' }}>
                The practical stack behind the BA, software, and AI workflow work.
              </p>
            </div>
          </div>
        </FadeInView>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 18rem), 1fr))', gap: '1rem' }}>
          {groups.map((group, index) => (
            <FadeInView key={group.title} delay={index * 0.06}>
              <div style={{ height: '100%', border: '1px solid var(--color-line)', background: 'var(--color-surface)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', minHeight: '3.5rem', padding: '1rem 1.1rem 0.9rem', borderBottom: '1px solid var(--color-line)' }}>
                  {group.icon}
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 500, color: 'var(--color-ink)', margin: 0 }}>{group.title}</h3>
                  {group.badge && (
                    <span style={{ marginLeft: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-label)', border: '1px solid var(--color-line)', padding: '2px 6px' }}>{group.badge}</span>
                  )}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(8.75rem, 1fr))', gap: '0.625rem', padding: '0.9rem' }}>
                  {group.items.map(item => (
                    <div key={item.name} style={{ minHeight: '3rem', display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.55rem 0.7rem', border: '1px solid var(--color-line)', background: 'var(--color-brand)' }}>
                      <div style={{ width: '2rem', height: '2rem', border: '1px solid var(--color-line)', background: '#fff', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <img src={item.iconUrl} alt="" width="17" height="17" style={{ objectFit: 'contain', display: 'block', padding: item.iconPadding || 0 }} referrerPolicy="no-referrer" />
                      </div>
                      <span style={{ minWidth: 0, fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.35 }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
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
