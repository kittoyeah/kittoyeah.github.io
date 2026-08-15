// ── Home Page ────────────────────────────────
function HomePage() {
  const featuredProjectIds = ['amigo', 'sabaihub', 'connection-copilot'];
  const projects = featuredProjectIds
    .map(id => window.PROJECTS.find(project => project.id === id))
    .filter(Boolean);
  const achievements = window.ACHIEVEMENTS || [];

  return (
    <div>
      <section className="home-hero">
        <div className="page-shell">
          <FadeIn>
            <div className="hero-split">
              <div className="hero-copy">
                <h1 className="home-hero-title">
                  Turning business problems into <span>working software</span>
                </h1>
                <p className="meta-label hero-role" style={{ color: 'var(--color-accent)' }}>
                  <span>Technical Business Analyst · Product Owner</span>
                  <span>Master of Information Technology and Systems · University of Tasmania</span>
                </p>
                <div className="hero-actions">
                  <NavTo to="/works" className="button-link button-link--primary">
                    View my projects <IconArrowUpRight size={13} />
                  </NavTo>
                  <a className="button-link" href="/assets/chris-kittichod-resume.pdf">
                    Open resume PDF <IconArrowUpRight size={13} />
                  </a>
                </div>
                <section className="hero-who" aria-labelledby="who-i-am-heading">
                  <div className="hero-who-heading">
                    <h2 id="who-i-am-heading">Who I am</h2>
                  </div>
                  <div className="hero-who-copy">
                    <p className="hero-name"><strong>Chris Kittichod</strong></p>
                    <p>I turn ambiguous business needs and messy operational workflows into clear, valuable requirements, prototypes, and working MVP software — digital transformation, delivered end to end.</p>
                    <p>Three years in business analysis and product ownership across insurance, health technology, and multi-tenant platforms in Thailand.</p>
                    <p>Currently pursuing a Master’s in IT to build deeper technical skills while gaining hands-on experience by building products and projects myself.</p>
                    <ul>
                      <li>Built and launched SabaiHub — a SaaS for Thai massage shops in Australia.</li>
                      <li>Building an internal system and mobile app for a Tasmanian business and its vendors.</li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="hero-proof">
                <img
                  className="hero-portrait"
                  src="/profile.jpg"
                  alt="Chris Kittichod"
                  width="768"
                  height="960"
                />
                {achievements.length > 0 && (
                  <div className="proof-list" aria-label="Selected recognition">
                    {achievements.map(achievement => (
                      <div className="proof-item" key={achievement.title}>
                        <IconTrophy size={14} style={{ color: 'var(--color-proof)' }} />
                        <div>
                          <p className="proof-award">{achievement.award}</p>
                          <p className="proof-meta">{achievement.title} · {achievement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <HowIWorkSection />

      <section className="content-section content-section--roomy" aria-labelledby="selected-work-heading">
        <div className="page-shell">
          <div className="section-head">
            <h2 id="selected-work-heading">Highlighted Projects</h2>
            <p>Evidence of discovery, product decisions, workflow design, and technical delivery.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className={index === 0 ? 'span-2' : ''}>
                <ProjectCardHome project={project} />
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-xl)' }}>
            <NavTo to="/works" className="button-link">
              View all projects <IconArrowUpRight size={13} />
            </NavTo>
          </div>
        </div>
      </section>
    </div>
  );
}

function HowIWorkSection() {
  const steps = window.PROCESS_STEPS || [];

  return (
    <section className="content-section" aria-labelledby="how-i-work-heading">
      <div className="page-shell">
        <div className="section-head">
          <h2 id="how-i-work-heading">How I work</h2>
          <p>A practical path from an ambiguous workflow to a solution a delivery team can build and users can validate.</p>
        </div>

        <ol className="work-steps" style={{ listStyle: 'none' }}>
          {steps.map((step, index) => (
            <li className="work-step" key={step.title}>
              <span className="meta-label process-step-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>

        <p className="toolkit-line">
          Selected toolkit: Jira · Confluence · Figma · Miro · SQL · TypeScript · React · Next.js · PostgreSQL · Supabase · AWS Bedrock
        </p>
      </div>
    </section>
  );
}

function ProjectCardHome({ project }) {
  return (
    <NavTo to={`/works/${project.id}`} className="project-card-link">
      <div className="project-card-media">
        <img src={project.image} alt="" referrerPolicy="no-referrer" loading="lazy" />
      </div>
      <div className="project-card-meta">
        <h3>{project.title}</h3>
        <span className="meta-label">{project.year}</span>
      </div>
      {project.role && <p className="meta-label" style={{ marginTop: 'var(--space-2xs)' }}>{project.role}</p>}
      <p>{project.desc}</p>
      <div className="tag-list" aria-label={`${project.title} tags`}>
        {project.tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
    </NavTo>
  );
}

window.HomePage = HomePage;
