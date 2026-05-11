// ── About Page ────────────────────────────────────────────────
function AboutPage() {
  return (
    <section style={{ padding: 'clamp(5rem, 9vw, 9rem) 1.5rem 6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>

        {/* Page header */}
        <FadeIn>
          <div style={{ borderBottom: '1px solid var(--color-line)', paddingBottom: '2rem' }}>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.02em', color: 'var(--color-ink)', margin: '0 0 0.75rem' }}>About</h1>
            <p style={{ fontSize: '15.5px', color: 'var(--color-muted)', maxWidth: '40rem', lineHeight: 1.7, margin: 0 }}>
              IT professional turned agentic AI engineer — blending product thinking, business analysis, and hands-on software delivery.
            </p>
          </div>
        </FadeIn>

        {/* Technical Arsenal */}
        <FadeInView>
          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: '3rem' }}>
              <span style={{ color: 'var(--color-accent)' }}>// </span>Technical Arsenal
            </span>
            <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem 3rem' }}>
              <SkillGroup
                icon={<IconBrainCircuit size={14} style={{ color: 'var(--color-accent)' }} />}
                title="AI & Agentic"
                skills={[
                  { name: 'AWS Bedrock', iconUrl: 'https://svgl.app/library/aws_dark.svg' },
                  { name: 'Claude / Codex', iconUrl: 'https://svgl.app/library/claude-ai-icon.svg' },
                  { name: 'IBM watsonx.ai', iconUrl: 'https://svgl.app/library/ibm.svg' },
                  { name: 'Microsoft Foundry', iconUrl: 'https://svgl.app/library/microsoft.svg' },
                ]}
              />
              <SkillGroup
                icon={<IconCpu size={14} style={{ color: 'var(--color-accent)' }} />}
                title="Engineering"
                skills={[
                  { name: 'Next.js / React', iconUrl: 'https://svgl.app/library/nextjs_icon_dark.svg' },
                  { name: 'TypeScript', iconUrl: 'https://svgl.app/library/typescript.svg' },
                  { name: 'PostgreSQL', iconUrl: 'https://svgl.app/library/postgresql.svg' },
                  { name: 'Supabase / Prisma', iconUrl: 'https://svgl.app/library/supabase.svg' },
                ]}
              />
              <SkillGroup
                icon={<IconLayers size={14} style={{ color: 'var(--color-accent)' }} />}
                title="Product & Design"
                skills={[
                  { name: 'Figma', iconUrl: 'https://svgl.app/library/figma.svg' },
                  { name: 'Jira / Linear', iconUrl: 'https://cdn.simpleicons.org/jira/0052CC' },
                  { name: 'Confluence', iconUrl: 'https://cdn.simpleicons.org/confluence/172B4D' },
                  { name: 'Design Thinking', iconUrl: 'https://svgl.app/library/google.svg' },
                ]}
              />
            </div>
          </div>
        </FadeInView>

        <hr style={{ border: 'none', borderTop: '1px solid var(--color-line)', opacity: 0.4, margin: 0 }} />

        {/* Career Path */}
        <FadeInView>
          <div className="two-col-section" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="two-col-left">
              <span className="mono-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>// </span>Career Path
              </span>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 300, fontSize: 'clamp(1.4rem, 3vw, 1.875rem)', color: 'var(--color-muted)', lineHeight: 1.35, margin: 0 }}>
                From business analysis to agentic engineering.
              </h2>
            </div>
            <div className="two-col-right" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <ExperienceRow company="SabaiHub" role="Founder & AI/Product Engineer" period="Dec 2025 – Present"
                desc="Designed and shipped a production SaaS platform for Thai massage shops in Australia, owning product direction, data model decisions, implementation workflow, deployment, and production iteration." />
              <ExperienceRow company="Allianz (Thailand)" role="IT Business Analyst" period="Feb 2023 – Dec 2023"
                desc="Translated business requirements into functional specs for a tablet application used by insurance agents. Led Design Thinking workshops and stakeholder alignment across business units." />
              <ExperienceRow company="Ever Medical Technologies" role="Product Owner" period="Apr 2022 – Nov 2022"
                desc="Owned outpatient module discovery-to-delivery for a hospital information system, working with hospital executives and medical stakeholders in a Scrum team." />
              <ExperienceRow company="Seekster" role="IT Business Analyst" period="Oct 2020 – Mar 2022"
                desc="Shaped workflows, feature scope, and MVP roadmap inputs for Thailand's leading home services marketplace, working closely with the CTO and product/engineering teams." />
              <ExperienceRow company="Freelance" role="Design Thinking Facilitator" period="May 2019 – Dec 2023"
                desc="Led 20+ Design Thinking workshops for SCG, PTT EP, Central Group, and government agencies. Used journey mapping, empathy mapping, and structured facilitation." />
            </div>
          </div>
        </FadeInView>

        <hr style={{ border: 'none', borderTop: '1px solid var(--color-line)', opacity: 0.4, margin: 0 }} />

        {/* Education */}
        <FadeInView>
          <div className="two-col-section" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="two-col-left">
              <span className="mono-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>// </span>Education
              </span>
            </div>
            <div className="two-col-right" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <ExperienceRow company="University of Tasmania" role="Master of Information Technology and Systems" period="2025 – Present" desc="Hobart, Tasmania, Australia." />
              <ExperienceRow company="Thammasat University" role="Bachelor of Political Science — Politics & Government" period="2015 – 2019" desc="Bangkok, Thailand." />
            </div>
          </div>
        </FadeInView>

        <hr style={{ border: 'none', borderTop: '1px solid var(--color-line)', opacity: 0.4, margin: 0 }} />

        {/* Contact */}
        <FadeInView>
          <div className="contact-section" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div className="contact-left">
              <span className="mono-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>// </span>Contact
              </span>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--color-ink)', margin: '0 0 2rem' }}>
                Ready to build something{' '}
                <span style={{ fontWeight: 300, color: 'var(--color-muted)' }}>meaningful?</span>
              </h2>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'chris.kittichod@gmail.com', href: 'mailto:chris.kittichod@gmail.com' },
                  { label: '0466 962 259', href: 'tel:0466962259' },
                  { label: 'LinkedIn Profile', href: 'https://linkedin.com/in/chris-kittichod', external: true },
                ].map(link => (
                  <ContactLink key={link.label} {...link} />
                ))}
              </div>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--color-label)', lineHeight: 1.7, marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-line)' }}>
                Currently completing a Master of IT at the University of Tasmania.<br />
                Open to AI engineering roles, product-focused engineering, and agentic AI projects.
              </p>
            </div>
            <div className="contact-form-wrap" style={{ background: 'var(--color-surface)', padding: '2.5rem', border: '1px solid var(--color-line)' }}>
              <ContactForm />
            </div>
          </div>
        </FadeInView>

      </div>
    </section>
  );
}

function ContactLink({ label, href, external }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
      style={{ fontSize: '14px', paddingBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: hov ? 'var(--color-ink)' : 'var(--color-muted)', borderBottom: `1px solid ${hov ? 'var(--accent-50)' : 'var(--color-line)'}`, transition: 'color 0.2s, border-color 0.2s' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <span>{label}</span>
      <IconExternalLink size={13} style={{ opacity: hov ? 1 : 0.3, color: hov ? 'var(--color-accent)' : 'inherit', transition: 'opacity 0.2s, color 0.2s' }} />
    </a>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();
    if (!name || !email || !message) return;
    window.location.href = `mailto:chris.kittichod@gmail.com?subject=Portfolio Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }} onSubmit={handleSubmit}>
      {[
        { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name…', autoComplete: 'name' },
        { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com…', autoComplete: 'email', spellCheck: false },
      ].map(field => (
        <FormField key={field.id} {...field} />
      ))}
      <div>
        <label htmlFor="message" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-label)', display: 'block', marginBottom: '0.5rem' }}>Message</label>
        <TextareaField id="message" placeholder="What are you working on?…" />
      </div>
      <SubmitButton />
    </form>
  );
}

function FormField({ id, label, type, placeholder, autoComplete, spellCheck }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div>
      <label htmlFor={id} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-label)', display: 'block', marginBottom: '0.5rem' }}>{label}</label>
      <input id={id} name={id} type={type} placeholder={placeholder} autoComplete={autoComplete} spellCheck={spellCheck}
        style={{ width: '100%', background: 'var(--color-brand)', border: 'none', borderBottom: `1px solid ${focused ? 'var(--color-accent)' : 'var(--color-line)'}`, padding: '0.625rem 0', fontSize: '14px', color: 'var(--color-ink)', transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box', boxShadow: focused ? '0 1px 0 var(--color-accent)' : 'none' }}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
    </div>
  );
}

function TextareaField({ id, placeholder }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <textarea id={id} name={id} rows={4} placeholder={placeholder} autoComplete="off"
      style={{ width: '100%', background: 'var(--color-brand)', border: 'none', borderBottom: `1px solid ${focused ? 'var(--color-accent)' : 'var(--color-line)'}`, padding: '0.625rem 0', fontSize: '14px', color: 'var(--color-ink)', resize: 'vertical', fontFamily: 'inherit', transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box', boxShadow: focused ? '0 1px 0 var(--color-accent)' : 'none' }}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
  );
}

function SubmitButton() {
  const [hov, setHov] = React.useState(false);
  return (
    <button type="submit"
      style={{ width: '100%', padding: '1rem', border: '1px solid var(--accent-50)', color: hov ? 'var(--color-brand)' : 'var(--color-accent)', background: hov ? 'var(--color-accent)' : 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', cursor: 'pointer', transition: 'background-color 0.2s, color 0.2s, border-color 0.2s' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      Send Message
    </button>
  );
}

window.AboutPage = AboutPage;
