// ── Home Page ─────────────────────────────────────────────────
function HomePage() {
  const featuredProjectIds = ['amigo', 'sabaihub', 'connection-copilot'];
  const projects = featuredProjectIds
    .map(id => window.PROJECTS.find(project => project.id === id))
    .filter(Boolean);
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
                            <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>Technical Business Analyst / Product Owner · Master of IT, University of Tasmania</p>
                            <div className="hero-bio-copy" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '14.5px', color: 'var(--color-ink)', lineHeight: 1.65, margin: '0.75rem 0 0', maxWidth: '39rem' }}>
                              <p style={{ margin: 0 }}>
                                I turn ambiguous business needs and messy operational workflows into clear valuable requirements, prototypes, and working MVP software — digital transformation, delivered end to end.
                              </p>
                              <p style={{ margin: 0 }}>
                                Three years in business analysis and product ownership across insurance, health technology, and multi-tenant platform in Thailand.
                              </p>
                              <p style={{ margin: 0 }}>
                                Currently pursuing Master's in IT to equip more technical skills while gaining hands-on experience by building products & projects by myself.
                              </p>
                              <p style={{ margin: 0 }}>
                                • Built & launched SabaiHub - a SaaS for Thai massage shops in Australia
                              </p>
                              <p style={{ margin: 0 }}>
                                • Building internal system & mobile app for a Tasmanian business and its vendors.
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
                              title: 'Discovery & Alignment',
                              lines: [
                                '• Design Thinking Tools and Workshop Facilitation',
                                '• User-centred Design (UX)',
                                '• Business Process Improvement',
                                '• Diagrams & Blueprints',
                                '• Stakeholders Management',
                              ],
                            },
                            {
                              title: 'Shape & Validate (Product Shaping)',
                              lines: [
                                '• Requirements Engineering (elicitation, analysis, specification, validation)',
                                '• User Stories, Acceptance Criteria',
                                '• Rapid Prototyping - MVP release',
                              ],
                            },
                            {
                              title: 'Delivery',
                              lines: [
                                '• Facilitate User Acceptance Test (UAT)',
                                '• User Onboarding & Manual Documentation',
                              ],
                            },
                            {
                              title: 'Agentic Development (AI-assisted delivery)',
                              lines: [
                                '• End-to-End Product Delivery (discovery > requirements > prototype > production)',
                                '• Spec-Driven Development (plan > task spec > implement > test)',
                                '• Subagent Orchestration & Scoped Delegation',
                                '• Context Engineering & Prompt Design',
                                '• Guardrails & Constraint Design',
                                '• Output Verification & Review Loops',
                                '• AI Coding Agents (Claude Code, Codex)',
                              ],
                            },
                            {
                              title: 'AI Engineering (Learning)',
                              lines: [
                                '• Interface Design for AI-powered products/services',
                                '• Multi-agent architecture, deterministic orchestration',
                                '• RAG, source grounding, citations',
                                '• Structured outputs, schema design',
                                '• Human-in-the-loop review design',
                                '• Evals and guardrails',
                                '• AWS Bedrock, Azure AI',
                                '• LangChain, LangGraph',
                              ],
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
                          <p style={{ fontSize: '14px', color: 'var(--color-ink)', margin: 0 }}>Open to <span style={{ color: 'var(--color-muted)' }}>internships and graduate roles — Technical BA · Digital BA · Product Owner · AI-enabled product</span></p>
                          <p style={{ fontSize: '14px', color: 'var(--color-ink)', margin: 0 }}>Summer availability <span style={{ color: 'var(--color-muted)' }}>Nov '26 – Feb '27</span></p>
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

                {/* Recruiter actions */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <NavTo to="/works" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1.1rem', border: '1px solid var(--accent-50)', backgroundColor: 'var(--accent-30)', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-ink)', textDecoration: 'none' }}>
                    View case studies
                    <IconArrowUpRight size={12} />
                  </NavTo>
                  <a href="/resume.txt" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1.1rem', border: '1px solid var(--color-line)', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-muted)', textDecoration: 'none' }}>
                    View resume
                    <IconArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <HowIWorkSection />

      {/* Works preview */}
      <section style={{ padding: 'clamp(3rem, 7vw, 7rem) 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <FadeInView>
            <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--color-line)', paddingBottom: '2rem' }}>
              <span className="mono-label"><span style={{ color: 'var(--color-accent)' }}>// </span>Selected Product Work</span>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.65, margin: '0.75rem 0 0', maxWidth: '42rem' }}>
                Evidence of discovery, product decisions, workflow design, and technical delivery.
              </p>
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

function HowIWorkSection() {
  const steps = [
    {
      title: 'Discover',
      copy: 'Design Thinking to explore users, business context, and constraints, mapping the workflow as it exists today.',
    },
    {
      title: 'Align',
      copy: 'Create shared problem understanding across stakeholders before committing to a solution.',
    },
    {
      title: 'Shape',
      copy: 'Define data models, user stories, acceptance criteria, MVP scope, and priorities, validating the shape with prototypes.',
    },
    {
      title: 'Validate',
      copy: 'Test assumptions, support UAT, and verify what shipped against the requirements.',
    },
    {
      title: 'Deliver',
      copy: 'Deliver with Spec-Driven Development and AI-assisted workflows, manage change, gather feedback, and improve.',
    },
  ];

  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', borderBottom: '1px solid var(--color-line)' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <FadeInView>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', borderBottom: '1px solid var(--color-line)', paddingBottom: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <span className="mono-label"><span style={{ color: 'var(--color-accent)' }}>// </span>How I Work</span>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.65, margin: '0.75rem 0 0', maxWidth: '42rem' }}>
                A practical path from ambiguous workflows to digital transformation — a solution a delivery team can build and users can validate.
              </p>
            </div>
          </div>
        </FadeInView>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 11rem), 1fr))', gap: '0.75rem' }}>
          {steps.map((step, index) => (
            <FadeInView key={step.title} delay={index * 0.05}>
              <div style={{ height: '100%', padding: '1rem', border: '1px solid var(--color-line)', background: 'var(--color-surface)' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--color-accent)' }}>{String(index + 1).padStart(2, '0')}</span>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 500, color: 'var(--color-ink)', margin: '0.7rem 0 0.45rem' }}>{step.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>{step.copy}</p>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-label)', lineHeight: 1.8, margin: '1.5rem 0 0', paddingTop: '1.5rem', borderTop: '1px solid var(--color-line)' }}>
            Selected toolkit: Jira · Confluence · Figma · Miro · SQL · TypeScript · React · Next.js · PostgreSQL · Supabase · AWS Bedrock
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1.25rem' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-label)' }}>Professional memberships</span>
            <img src="assets/iiba-logo.png" alt="IIBA logo" style={{ height: '26px', width: 'auto' }} />
            <img src="assets/pmi-tasmania-logo.avif" alt="PMI Tasmania logo" style={{ height: '26px', width: 'auto' }} />
          </div>
        </FadeInView>
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
      {project.role && (
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-label)', margin: '0 0 0.6rem' }}>{project.role}</p>
      )}
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
