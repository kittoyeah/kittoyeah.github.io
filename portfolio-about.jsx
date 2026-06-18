// ── About Page ────────────────────────────────────────────────
function AboutPage() {
  const workSteps = [
    {
      title: 'Discover & Define',
      desc: 'Find the right problem and turn ambiguity into a plan: business context, users, workflows, success metrics, PRDs, user stories, acceptance criteria, and MVP scope.',
    },
    {
      title: 'Design',
      desc: 'Shape the system: architecture, system boundaries, data models, API design, component structure, and testing strategy.',
    },
    {
      title: 'Build',
      desc: 'Implement full-stack features with spec-driven, AI-assisted development inside a controlled harness: project context, rules, guardrails, and review workflows.',
    },
    {
      title: 'Test & Verify',
      desc: 'Run automated tests, verify behaviour, and check against real-user flows.',
    },
    {
      title: 'Ship & Iterate',
      desc: 'Deploy safely, gather feedback, and iterate in production.',
    },
  ];

  const writingIds = [
    'workflow-to-saas-architecture',
    'technical-architecture-of-sabaihub',
    'multi-tenancy-auth-and-data-ownership',
    'shipping-a-feature-through-the-full-sdlc',
    'ai-assisted-engineering-workflow',
    'technical-debt-debugging-and-refactoring',
  ];
  const writingNotes = writingIds
    .map(id => (window.BUILD_NOTES || []).find(note => note.id === id))
    .filter(Boolean);

  return (
    <section style={{ padding: 'clamp(5rem, 9vw, 9rem) 1.5rem 6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>

        {/* Page header */}
        <FadeIn>
          <div style={{ borderBottom: '1px solid var(--color-line)', paddingBottom: '2rem' }}>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.02em', color: 'var(--color-ink)', margin: '0 0 0.75rem' }}>About</h1>
            <p style={{ fontSize: '15.5px', color: 'var(--color-muted)', maxWidth: '100%', lineHeight: 1.7, margin: 0 }}>
              I am a software engineer who turns business problems into working software.
            </p>
            <p style={{ fontSize: '15.5px', color: 'var(--color-muted)', maxWidth: '100%', lineHeight: 1.7, margin: '0.75rem 0 0' }}>
              My strength is shipping software end-to-end: turning a messy real-world workflow into a clean data model, a working system, and a deployed product. The business-analysis instinct means I build the right thing, not just a working thing.
            </p>
          </div>
        </FadeIn>

        {/* How I Work */}
        <FadeInView>
          <div className="two-col-section" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="two-col-left">
              <span className="mono-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>// </span>How I Work
              </span>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 300, fontSize: 'clamp(1.4rem, 3vw, 1.875rem)', color: 'var(--color-muted)', lineHeight: 1.35, margin: 0 }}>
                An end-to-end process for turning ambiguity into tested software.
              </h2>
            </div>
            <div className="two-col-right" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
              {workSteps.map((step, index) => (
                <div key={step.title} style={{ display: 'grid', gridTemplateColumns: '3.25rem 1fr', gap: '1rem', padding: '1rem 0', borderTop: index === 0 ? '1px solid var(--color-line)' : 'none', borderBottom: '1px solid var(--color-line)' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--color-accent)', paddingTop: '0.2rem' }}>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: '1rem', color: 'var(--color-ink)', margin: '0 0 0.35rem' }}>{step.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
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
                Building software people can actually use, sharpened by years in business analysis getting the problem right first.
              </h2>
            </div>
            <div className="two-col-right" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <ExperienceRow company="SabaiHub" role="Founder & Software Engineer" period="Dec 2025 – Present"
                desc="Sole engineer behind a production multi-tenant SaaS that runs Thai massage businesses in Australia: bookings, staff, customers, and reporting. Designed the Postgres data model with tenant isolation and role-based access, built the full stack on Next.js, Prisma, and Supabase, and shipped it live to real shops." />
              <ExperienceRow company="Allianz (Thailand)" role="IT Business Analyst" period="Feb 2023 – Dec 2023"
                desc="Translated business needs into the functional specs the development team built from for a tablet application used by insurance agents. Led Design Thinking workshops and stakeholder alignment across business units." />
              <ExperienceRow company="Ever Medical Technologies" role="Product Owner" period="Apr 2022 – Nov 2022"
                desc="Owned an outpatient module from discovery to delivery for a hospital information system, working with engineers in a Scrum team to ship it alongside hospital executives and medical stakeholders." />
              <ExperienceRow company="Seekster" role="IT Business Analyst" period="Oct 2020 – Mar 2022"
                desc="Shaped workflows, feature scope, and MVP roadmap inputs for Thailand's leading home services marketplace, working closely with the CTO and product/engineering teams." />
              <ExperienceRow company="Freelance" role="Design Thinking Facilitator" period="May 2019 – Dec 2023"
                desc="Led 20+ Design Thinking workshops for SCG, PTT EP, Central Group, and government agencies. Used journey mapping, empathy mapping, and structured facilitation." />
            </div>
          </div>
        </FadeInView>

        <hr style={{ border: 'none', borderTop: '1px solid var(--color-line)', opacity: 0.4, margin: 0 }} />

        {/* Writing */}
        <FadeInView>
          <div className="two-col-section" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="two-col-left">
              <span className="mono-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>// </span>Writing
              </span>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 300, fontSize: 'clamp(1.4rem, 3vw, 1.875rem)', color: 'var(--color-muted)', lineHeight: 1.35, margin: 0 }}>
                Long-form notes on the decisions, architecture, and delivery behind what I build.
              </h2>
            </div>
            <div className="two-col-right">
              <div style={{ border: '1px solid var(--color-line)', background: 'var(--color-surface)' }}>
                {writingNotes.map((note, i) => (
                  <NavTo key={note.id} to={`/works/sabaihub/build-notes/${note.id}`}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1rem 1.1rem', borderTop: i === 0 ? 'none' : '1px solid var(--color-line)', textDecoration: 'none' }}>
                    <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '15.5px', color: 'var(--color-ink)', lineHeight: 1.4 }}>{note.title}</span>
                    <IconArrowUpRight size={13} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                  </NavTo>
                ))}
              </div>
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
                Open to software engineering, full-stack, and AI internships.
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
