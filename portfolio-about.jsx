// ── About Page ─────────────────────────────────
function AboutPage() {
  const processRail = window.PROCESS_STEPS || [];
  const expertiseGroups = [
    ['Discovery & Alignment', ['Design Thinking tools and workshop facilitation', 'User-centred design (UX)', 'Business process improvement', 'Diagrams and blueprints', 'Stakeholder management']],
    ['Shape & Validate', ['Requirements engineering — elicitation, analysis, specification, and validation', 'User stories and acceptance criteria', 'Rapid prototyping and MVP release']],
    ['Delivery', ['Facilitate user acceptance testing (UAT)', 'User onboarding and manual documentation']],
    ['Agentic Development', ['End-to-end product delivery — discovery to production', 'Spec-driven development — plan, task spec, implement, test', 'Subagent orchestration and scoped delegation', 'Context engineering and prompt design', 'Guardrails and constraint design', 'Output verification and review loops', 'AI coding agents — Claude Code and Codex']],
    ['AI Engineering (Learning)', ['Interface design for AI-powered products and services', 'Multi-agent architecture and deterministic orchestration', 'RAG, source grounding, and citations', 'Structured outputs and schema design', 'Human-in-the-loop review design', 'Evals and guardrails', 'AWS Bedrock and Azure AI', 'LangChain and LangGraph']],
  ];
  return (
    <section className="about-page">
      <div className="page-shell about-stack">
        <FadeIn>
          <header className="about-intro">
            <h1>About</h1>
            <div className="about-intro-copy">
              <p>
                I’m a Technical Business Analyst who starts with the people closest to a process. I map the current workflow, surface constraints, and turn what I learn into structured, testable requirements: data models, user stories, acceptance criteria, and functional specifications a delivery team can build from.
              </p>
              <p>
                I have facilitated more than 20 Design Thinking workshops with large Thai organisations and worked across insurance, health technology, marketplaces, and service operations. Prototypes and UAT keep decisions grounded before and after delivery.
              </p>
              <p>
                I also build. My approach is spec-driven: requirements establish the contract, implementation follows, and testing checks what shipped against what was agreed. I’m currently Business Analyst &amp; Developer at Amigos Interpreters &amp; Translators in Hobart.
              </p>
            </div>
          </header>
        </FadeIn>

        <section className="about-section about-process-section" aria-labelledby="about-process-heading">
          <div className="about-process-head">
            <h2 id="about-process-heading">How I work</h2>
            <p className="about-section-copy">Five steps from discovery to delivery.</p>
          </div>
          <ol className="process-rail" style={{ listStyle: 'none' }}>
            {processRail.map((step, index) => (
              <li key={step.title}>
                <span className="meta-label process-step-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="about-section" aria-labelledby="expertise-heading">
          <div>
            <h2 id="expertise-heading">Specialise in</h2>
            <p className="about-section-copy">An evolving practice across discovery, delivery, and AI-assisted product work.</p>
          </div>
          <div className="expertise-index">
            {expertiseGroups.map(([title, skills]) => (
              <article className="expertise-group" key={title}>
                <h3>{title}</h3>
                <ul>
                  {skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" aria-labelledby="career-heading">
          <div className="career-head">
            <div>
              <h2 id="career-heading">Career path</h2>
              <p className="about-section-copy">Business analysis, facilitation, and hands-on product delivery across Thailand and Tasmania.</p>
            </div>
            <div className="resume-actions">
              <a className="button-link button-link--primary" href="/assets/chris-kittichod-resume.pdf">Resume in PDF <IconArrowUpRight size={13} /></a>
            </div>
          </div>
          <div className="about-content">
            <ExperienceRow
              company="Amigos Interpreters & Translators"
              role="Business Analyst & Developer"
              period="July 2026–Present"
              desc="Building a staff web platform and interpreter mobile app for a Hobart interpreting business, replacing fragmented email and paper processes with connected job matching, compliance, completion, and payment workflows. Combining business analysis, product ownership, and software development to improve operational efficiency, streamline communication, strengthen compliance, and save time for staff and interpreters."
              details={[
                'Working with the owner and interpreter users to map current-state processes, elicit and validate requirements, define future-state workflows, and prioritise scope.',
                'Designing new capabilities including interpreter matching, sequential job offers, compliance monitoring, digital job completion, and automated pay calculation.',
                'Owning end-to-end delivery across discovery, process analysis, solution design, system architecture, implementation, testing, and iteration.',
                'Using agentic, specification-driven development to design relational data models and implement backend services, staff web and mobile interfaces, email workflows, and third-party API integrations.',
              ]}
              tech="Next.js, React, React Native, TypeScript, Supabase Auth, PostgreSQL, Vercel, Expo"
            />
            <ExperienceRow
              company="SabaiHub"
              role="Founder & Product Developer"
              period="Dec 2025–June 2026"
              desc="Built and launched a SaaS platform for Thai massage businesses in Australia, consolidating appointments, staff operations, and business management into one product used in live shop operations."
              details={[
                'Delivered the initial production release within three months and onboarded active business users.',
                'Led delivery from discovery and requirements through solution design, implementation, testing, and deployment.',
                'Translated real business workflows into the system architecture, data model, and application modules.',
                'Used production feedback to resolve issues, refine workflows, and improve reliability.',
                'Applied AI-assisted, specification-driven development to accelerate delivery while retaining product and technical ownership.',
              ]}
            />
            <ExperienceRow
              company="Allianz (Thailand) (Life & Health Insurance)"
              role="IT Business Analyst"
              period="Feb 2023–Dec 2023"
              desc="Worked closely with the Product Owner, a development team, and business-unit users, focusing on enhancing a tablet application and other services for insurance agents and the agent support team, handling projects and initiatives on request."
              details={[
                'Translated business requirements into functional specifications and user stories for a tablet application and related services supporting insurance agents and agent support teams.',
                'Led UX discovery through stakeholder and user interviews, then facilitated Design Thinking workshops to define personas, problem statements, and solution directions across business units to create a shared picture and gain buy-in.',
                'Summarised scope of work, gained domain knowledge, and partnered with designers, business users, and delivery teams to refine scope, shape user interfaces, and support usability testing and UAT.',
              ]}
            />
            <ExperienceRow
              company="Ever Medical Technologies"
              role="Product Owner"
              period="Apr 2022–Nov 2022"
              desc="Health-tech start-up building a hospital information system (HIS) with a leading medical school in Thailand to improve business processes."
              details={[
                'Owned discovery-to-delivery for an outpatient module within a cross-functional Scrum team, working with hospital executives and medical stakeholders to define product scope and priorities.',
                'Mapped as-is and to-be workflows, journey maps, and requirements to translate complex hospital processes and user needs into feasible product concepts and MVP scope.',
                'Collaborated with design, engineering, and medical experts to prioritise backlog items and balance trade-offs across usability, performance, and delivery timelines.',
              ]}
            />
            <ExperienceRow
              company="Seekster"
              role="IT Business Analyst"
              period="Oct 2020–Mar 2022"
              desc="Seekster is a Thai start-up connecting users with trusted service providers for home and office tasks, including cleaning and maintenance."
              details={[
                'Analysed business and user requirements to shape workflows, feature scope, and roadmap inputs for MVP development with product and engineering teams.',
                'Conducted interviews with end users and business stakeholders to identify pain points, synthesise insights, and translate them into actionable product requirements.',
                'Worked closely with product design, engineering, and the CTO to validate feasibility and support delivery across the software development lifecycle.',
              ]}
            />
            <ExperienceRow
              company="Freelance"
              role="Design Thinking Facilitator"
              period="May 2019–Dec 2023"
              details={[
                'Led and delivered 20+ Design Thinking workshops for operational and managerial teams across major Thai corporations and government agencies, including SCG, PTT EP, and Central Group.',
                'Used journey mapping, empathy mapping, and structured facilitation to frame complex problems, align stakeholders, and drive UX-focused solution ideation.',
              ]}
            />
          </div>
        </section>

        <section className="about-section" aria-labelledby="education-heading">
          <div><h2 id="education-heading">Education</h2></div>
          <div className="about-content">
            <ExperienceRow company="University of Tasmania" role="Master of Information Technology and Systems" period="2025–May 2027" desc="Hobart, Tasmania. Building technical fluency in systems, data, prototyping, and AI workflows to strengthen business analysis and product practice." />
            <ExperienceRow company="Thammasat University" role="Bachelor of Political Science — Politics & Government" period="2015–2019" desc="Bangkok, Thailand." />
          </div>
        </section>

        <section className="about-section" aria-labelledby="memberships-heading">
          <div><h2 id="memberships-heading">Community</h2></div>
          <div className="about-content membership-cards">
            <article className="experience-row membership-card">
              <img src="/assets/iiba-logo.png" alt="IIBA" width="110" height="44" loading="lazy" />
              <div><h3>IIBA</h3><p className="experience-desc">International Institute of Business Analysis</p></div>
            </article>
            <article className="experience-row membership-card">
              <img src="/assets/pmi-tasmania-logo.avif" alt="PMI Tasmania" width="130" height="44" loading="lazy" />
              <div><h3>PMI Tasmania</h3><p className="experience-desc">Project Management Institute, Tasmanian Chapter</p></div>
            </article>
          </div>
        </section>

        <section className="about-section" aria-labelledby="contact-heading">
          <div>
            <h2 id="contact-heading">Contact</h2>
            <p className="about-section-copy">Open to internships and graduate roles in technical business analysis, digital business analysis, product ownership, and AI-enabled product delivery.</p>
            <div className="contact-links">
              <ContactLink label="Call 0466 962 259" href="tel:0466962259" />
              <ContactLink label="LinkedIn profile" href="https://www.linkedin.com/in/chris-thiraphadungphong-264415162/" external />
            </div>
          </div>
          <div className="contact-form-wrap"><ContactForm /></div>
        </section>
      </div>
    </section>
  );
}

function ContactLink({ label, href, external }) {
  return (
    <a className="contact-link" href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
      <span>{label}</span><IconExternalLink size={13} />
    </a>
  );
}

function ContactForm() {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (!name || !email || !message) return;
    window.location.href = `mailto:chris.kittichod@gmail.com?subject=Portfolio Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <FormField id="name" label="Name" type="text" placeholder="Chris Kittichod" autoComplete="name" required />
      <FormField id="email" label="Email" type="email" placeholder="name@example.com" autoComplete="email" spellCheck={false} required />
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" id="message" name="message" rows="5" placeholder="What are you working on?" required />
      </div>
      <button className="button-link button-link--primary" type="submit">Send message</button>
    </form>
  );
}

function FormField({ id, label, type, placeholder, autoComplete, spellCheck, required }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input className="form-control" id={id} name={id} type={type} placeholder={placeholder} autoComplete={autoComplete} spellCheck={spellCheck} required={required} />
    </div>
  );
}

window.AboutPage = AboutPage;
