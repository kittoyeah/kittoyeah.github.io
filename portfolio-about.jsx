// ── About Page ────────────────────────────────────────────────
function AboutPage() {
  const workSteps = [
    {
      title: 'Discover',
      desc: 'Design Thinking to explore users, business context, and constraints, mapping the workflow as it exists today.',
    },
    {
      title: 'Align',
      desc: 'Create shared problem understanding across stakeholders before committing to a solution.',
    },
    {
      title: 'Shape',
      desc: 'Define data models, user stories, acceptance criteria, MVP scope, and priorities, validating the shape with prototypes.',
    },
    {
      title: 'Validate',
      desc: 'Test assumptions, support UAT, and verify what shipped against the requirements.',
    },
    {
      title: 'Deliver and iterate',
      desc: 'Deliver with Spec-Driven Development and AI-assisted workflows, manage change, gather feedback, and improve.',
    },
  ];

  const writingCount = (window.BUILD_NOTES || []).length;

  return (
    <section style={{ padding: 'clamp(5rem, 9vw, 9rem) 1.5rem 6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>

        {/* Page header */}
        <FadeIn>
          <div style={{ borderBottom: '1px solid var(--color-line)', paddingBottom: '2rem' }}>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.02em', color: 'var(--color-ink)', margin: '0 0 0.75rem' }}>About</h1>
            <p style={{ fontSize: '15.5px', color: 'var(--color-muted)', maxWidth: '100%', lineHeight: 1.7, margin: 0 }}>
              I'm a Technical Business Analyst. I start with Design Thinking, exploring what the business actually needs with the people who know the process best: stakeholders, users, and the team that runs it today. I map the current workflow before anything gets built, then use Requirements Engineering to turn what I've learned into structured, testable requirements: data models, user stories, acceptance criteria, and functional specs a development team can build from directly.
            </p>
            <p style={{ fontSize: '15.5px', color: 'var(--color-muted)', maxWidth: '100%', lineHeight: 1.7, margin: '0.75rem 0 0' }}>
              I validate the shape with prototypes before anything is built. I've facilitated 20+ Design Thinking workshops with large Thai corporates. That's the method behind my work on digital transformation projects across insurance, health technology, and marketplace platforms.
            </p>
            <p style={{ fontSize: '15.5px', color: 'var(--color-muted)', maxWidth: '100%', lineHeight: 1.7, margin: '0.75rem 0 0' }}>
              Alongside the analysis, I do the delivery myself. I spend time learning, in class and by myself, to deepen my technical foundation. My build method is Spec-Driven Development: the spec comes first, written the BA way; the build follows it; and testing checks what shipped against what was specified. I designed, built, and shipped a production multi-tenant SaaS on my own, end to end. Right now I'm building an internal system and mobile app for a business in Hobart, Tasmania.
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
                A practical process for turning ambiguous workflows into requirements, product decisions, and delivery-ready systems.
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
                From Design Thinking facilitation and business analysis in Thailand to hands-on product delivery in Hobart—digital transformation at every stage, one progression, not a career switch.
              </h2>
            </div>
            <div className="two-col-right" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <ExperienceRow company="Amigo Translator" role="Technical Business Analyst / Agentic Engineer" period="2026 – Present"
                desc="Working directly with the owner of a Tasmanian interpreting business, using first-hand knowledge of the job workflow to map dispatch, matching, completion, compliance, and pay, and to define and validate an owner-approved operations MVP." />
              <ExperienceRow company="SabaiHub" role="Founder / Product Owner" period="Dec 2025 – Present"
                desc="Workflow research, product roadmap, and requirements for a live multi-tenant SaaS running real Thai massage businesses in Australia: bookings, staff, customers, and reporting. Carried product decisions through to production delivery." />
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
                Long-form notes on discovery, product decisions, and the delivery behind what I build.
              </h2>
            </div>
            <div className="two-col-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'center' }}>
              <p style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0, maxWidth: '40rem' }}>
                I write about discovery, workflow design, product decisions, system boundaries, delivery trade-offs, and lessons from building real products.
              </p>
              <NavTo to="/writing" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', alignSelf: 'flex-start', padding: '0.8rem 1.1rem', border: '1px solid var(--accent-50)', backgroundColor: 'var(--accent-30)', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.13em', color: 'var(--color-ink)', textDecoration: 'none' }}>
                Read all {writingCount} pieces in Writing
                <IconArrowUpRight size={12} />
              </NavTo>
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
              <ExperienceRow company="University of Tasmania" role="Master of Information Technology and Systems" period="2025 – Present" desc="Hobart, Tasmania, Australia. Building technical fluency—system and data understanding, prototyping, AI workflows—to strengthen BA/PO practice, not replace it." />
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
                Working through a complex digital{' '}
                <span style={{ fontWeight: 300, color: 'var(--color-muted)' }}>workflow?</span>
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
                Currently completing a Master of IT at the University of Tasmania, graduating May 2027.<br />
                Open to internships and graduate roles—Technical BA, Digital BA, Product Owner, AI-enabled product.
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
