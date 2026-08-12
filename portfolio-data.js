// ── Portfolio data ──────────────────────────────────────────────
window.PROJECTS = [
  {
    id: "amigo",
    title: "Amigo Translator",
    desc: "An operations platform for a Tasmanian interpreting business, replacing fragmented dispatch and paper-based completion workflows with interpreter matching, compliance tracking, mobile job completion, and pay approval.",
    role: "Technical Business Analyst / Product Owner",
    tags: ["Technical Business Analysis", "Product Ownership", "Workflow Design", "Requirements", "Compliance", "Digital Delivery"],
    image: "assets/amigo-thumbnail.png",
    year: "2026",
    badge: "Owner-approved MVP · Tasmania",
    summary: {
      what: "An operations platform for a Tasmanian interpreting business, built around the job lifecycle: dispatch, interpreter matching, completion, compliance, and pay.",
      did: "Worked as an interpreter with first-hand knowledge of the workflow and as Product Lead / Technical BA, working directly with the business owner to map the operations, bound the MVP, and shape the product decisions.",
      result: "An owner-approved MVP that is now being built and validated against the business's real day-to-day workflow."
    },
    beforeAfter: {
      before: [
        "Job dispatch handled over email",
        "Interpreter responses tracked informally",
        "Job completion recorded on paper",
        "Compliance checked manually, case by case",
        "Pay approval assembled by hand from scattered records"
      ],
      after: [
        "Job dispatch and interpreter matching handled in one platform",
        "Interpreter responses tracked in the system",
        "Job completion captured on a mobile app in the field",
        "Compliance status visible against each interpreter and job",
        "Pay approval follows a traceable job-to-pay workflow"
      ]
    },
    overview: [
      "Amigo Translator is an operations platform built for a Tasmanian interpreting business, replacing dispatch and completion work that ran across email, desktop tools, and paper.",
      "I worked on Amigo as an interpreter with first-hand knowledge of the job workflow, and as Product Lead and Technical BA working directly with the business owner to define and shape it."
    ],
    problemQuote: "Dispatching a job and getting it paid should not depend on checking an inbox, a spreadsheet, and a stack of paper.",
    quoteSupportingOutside: true,
    problemStatement: [
      "Operational work in the business ran across email threads, desktop tools, and paper: job dispatch, interpreter responses, job completion, compliance checks, and pay approval each lived in a different place.",
      "That spread made coordination manual and slow, and made it hard to see compliance status or trace a job cleanly from dispatch through to pay."
    ],
    goals: [
      "Replace email- and paper-based dispatch with one shared workflow",
      "Match interpreters to jobs against eligibility and compliance rules",
      "Move job completion onto a mobile app interpreters can use in the field",
      "Give the owner a traceable path from job to pay approval",
      "Bound the MVP to the operational spine, not the whole business"
    ],
    solution: [
      "Amigo bounds the MVP around the operational spine of the business: getting a job dispatched, matched to an eligible interpreter, completed, tracked for compliance, and approved for pay.",
      "The product splits by where the work happens: a desktop web app for staff running dispatch and oversight, and a mobile app for interpreters responding to jobs and completing them in the field."
    ],
    keyDeliverables: [
      "One shared workflow for job dispatch through to completion",
      "Interpreter matching against eligibility and compliance rules",
      "Compliance tracking visible per interpreter and job",
      "Mobile job completion for interpreters in the field",
      "Structured voucher and pay approval workflow",
      "Access boundaries scoped to each role"
    ],
    myContribution: [
      "I worked on Amigo as both an interpreter with first-hand knowledge of the job workflow and as Product Lead / Technical BA, working directly with the business owner to define and shape the MVP.",
      "That dual position meant discovery started from lived experience of dispatch, response, completion, compliance, and pay, then moved into structured requirements, workflow mapping, and MVP boundaries agreed with the owner."
    ],
    workPhases: [
      {
        phase: "Discover",
        detail: "Mapped the job workflow end to end: dispatch, interpreter response, job completion, compliance checks, and pay approval, drawing on first-hand interpreting experience and conversations with the owner."
      },
      {
        phase: "Define",
        detail: "Bounded the MVP around that operational spine rather than attempting to rebuild the whole business at once, working with the owner to agree what the first version needed to cover."
      },
      {
        phase: "Design",
        detail: "Shaped product decisions around where the work actually happens: a staff desktop web app for dispatch and oversight, an interpreter mobile app for response and completion, plus matching, compliance, and pay-approval rules."
      },
      {
        phase: "Deliver",
        detail: "The MVP was approved by the business owner and is now being built and validated against the real dispatch, completion, and pay workflow."
      }
    ],
    modules: [
      { name: "Staff Desktop Web App", wide: true, bullets: ["Job dispatch and oversight", "Interpreter matching against eligibility rules", "Pay approval and voucher review"] },
      { name: "Interpreter Mobile App", bullets: ["Job offers and responses", "Mobile job completion", "Compliance document status"] },
      { name: "Matching & Eligibility", bullets: ["Rules-based interpreter matching", "Eligibility and compliance checks before assignment"] },
      { name: "Compliance Tracking", bullets: ["Compliance status visible per interpreter", "Tracked against each job"] },
      { name: "Voucher & Pay Approval", bullets: ["Structured approval workflow", "Traceable job-to-pay path"] },
      { name: "Privacy Boundaries", wide: true, bullets: ["Access scoped to role", "Client and job information bounded by what each role needs to see"] }
    ],
    skillsDemonstrated: [
      "Technical business analysis",
      "Product ownership",
      "Workflow mapping",
      "Requirements engineering",
      "MVP scoping",
      "Compliance-aware process design",
      "Cross-platform product decisions (web + mobile)",
      "Working directly with a business owner"
    ],
    challengeApproachPairs: [
      {
        challenge: "Operational work was spread across email, desktop tools, and paper, with no single source of truth for a job's status.",
        approach: "Mapped job dispatch, interpreter response, completion, compliance, and pay as one connected workflow before defining any feature."
      },
      {
        challenge: "The business runs on more than one workflow, and rebuilding all of it at once was not realistic.",
        approach: "Bounded the MVP to the operational spine, dispatch through to pay approval, and left other business processes for a later stage."
      },
      {
        challenge: "Interpreter matching has to respect eligibility and compliance rules, not just availability.",
        approach: "Built matching and compliance checks into the assignment step itself, rather than treating compliance as a separate manual check."
      },
      {
        challenge: "Staff and interpreters need different tools for different contexts: an office desk versus a job in the field.",
        approach: "Split the product across a staff desktop web app and an interpreter mobile app, matched to where each role actually works."
      }
    ],
    outcomes: [
      "Operations move through one shared workflow instead of email, desktop tools, and paper, giving the business clearer day-to-day coordination.",
      "Compliance status is visible against each job and interpreter, instead of being checked manually case by case.",
      "Job completion, from dispatch through to pay approval, becomes a traceable path rather than a set of disconnected steps."
    ],
    nextStage: [
      "Amigo's MVP is owner-approved and is now being built and validated directly against the business's real dispatch, completion, and pay workflow."
    ]
  },
  {
    id: "sabaihub",
    title: "SabaiHub",
    desc: "A live operations platform for Thai massage businesses in Australia, bringing bookings, staff, customer records, and reporting into one place.",
    role: "Founder / Product Owner",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Prisma"],
    tools: ["Next.js", "React", "TypeScript", "Prisma", "Supabase", "PostgreSQL", "Vercel", "Tailwind CSS"],
    image: "assets/sabaihub-thumbnail.png",
    year: "2025",
    badge: "Live in Production",
    prototypeUrl: "https://sabaihub.com.au/",
    prototypeWalkthrough: {
      youtubeId: "EmhIAHmPn38",
      description: "A short walkthrough of the SabaiHub product flow, showing how shop operations move from fragmented tools into one working SaaS interface.",
      linkLabel: "Open live product"
    },
    metrics: [
      { value: "2–3", label: "shops live in production" },
      { value: "9", label: "feature modules shipped" },
      { value: "4", label: "roles with scoped access" },
      { value: "61", label: "permissions enforced across the app" }
    ],
    goals: [
      "Put bookings, staff, customers, and reporting in one place",
      "Match the real shop workflow, not a generic calendar",
      "Give each role only what it needs (owner, manager, receptionist, therapist)",
      "Ship a live, usable product, not a prototype"
    ],
    summary: {
      what: "A live operations platform designed around the day-to-day work of Thai massage businesses in Australia.",
      did: "I took the product from user research and workflow mapping through requirements, design, development, deployment, and operator feedback.",
      result: "One place to manage bookings, staff, customers, and reporting, shaped around how the shop actually works."
    },
    sectionLabels: {
      myContribution: "How I Worked"
    },
    beforeAfter: {
      before: [
        "Bookings happening over phone",
        "Rosters kept on paper",
        "Revenue tracked in spreadsheets",
        "Customer info scattered across tools",
        "No visibility into business performance"
      ],
      after: [
        "Bookings managed in one calendar",
        "Staff availability and rosters kept together",
        "Revenue information available in one view",
        "Customer records stored in one place",
        "Business dashboard for owners"
      ]
    },
    overview: [
      "SabaiHub helps Thai massage businesses manage the connected work behind each appointment: customer details, staff availability, services, rosters, payments, and business reporting.",
      "It was designed for a specific operating environment rather than treating the shop as a generic booking calendar. Owners need visibility across the business, while staff need clear access to the information required for their role."
    ],
    problemQuote: "Running the shop should not depend on checking several tools, pieces of paper, and someone’s memory.",
    quoteSupportingOutside: true,
    problemStatement: [
      "Daily operations can be spread across phone calls, paper rosters, spreadsheets, booking tools, and informal messages. Each tool holds only part of the picture.",
      "That fragmentation creates extra checking and repeated data entry. Appointment changes can be missed, staff information can become unclear, and owners have to assemble business information manually."
    ],
    solution: [
      "SabaiHub gives owners and staff one place to coordinate the work around an appointment, from booking and staff availability to customer records and reporting.",
      "Behind that simpler experience is a role-based system that connects each shop, user, staff member, service, appointment, and permission while limiting what each person can access."
    ],
    keyDeliverables: [
      "Manage appointments and changes from one calendar",
      "Coordinate staff rosters, shifts, and availability",
      "Keep customer and business records together",
      "Give owners and staff access appropriate to their responsibilities",
      "Review revenue and business activity from one dashboard",
      "Run the application in a live production environment"
    ],
    myContribution: [
      "I worked across the whole delivery journey: understanding the shop, deciding what the first version needed, designing how the parts connected, building the application, and improving it through operator feedback.",
      "The work combined Technical BA practice with software development: stakeholder conversations, workflow analysis, MVP scoping, requirements engineering, system design, data modelling, specification-driven development, testing, and deployment."
    ],
    workPhases: [
      {
        phase: "Discover",
        detail: "Spoke with people who understand the work of owners, managers, receptionists, and therapists. Mapped how phone bookings, paper rosters, spreadsheets, staff coordination, and payment processes fit together."
      },
      {
        phase: "Define",
        detail: "Separated essential daily operations from future ideas. Defined the MVP around appointments, staff, services, shop setup, roles, permissions, payments, and reporting, supported by user stories and acceptance criteria."
      },
      {
        phase: "Design",
        detail: "Designed how the business concepts should connect in software. Compared generic tools with a shop-specific workflow and modelled relationships between shops, users, staff, roles, services, appointments, and payments."
      },
      {
        phase: "Prepare",
        detail: "Prepared clear specifications, implementation tasks, authentication and permission rules, validation patterns, and review checks so AI-assisted development stayed tied to the agreed product model."
      },
      {
        phase: "Build, Test, Deploy",
        detail: "Built and deployed the application with Next.js, TypeScript, Supabase, PostgreSQL, Prisma, and Vercel. Tested key workflows and refined the product using feedback from real operational use."
      }
    ],
    skillsDemonstrated: [
      "Product discovery",
      "Requirements engineering",
      "Workflow analysis",
      "System design",
      "Data modelling",
      "Role-based access design",
      "AI-assisted software delivery",
      "Specification-driven development",
      "Full-stack product delivery",
      "Production deployment",
      "Testing and iteration with real users"
    ],
    architecture: {
      image: "assets/sabaihub-arch-layers.svg",
      caption: [
        "SabaiHub is one Next.js app, typed end to end. The browser renders role-scoped UI, server actions and API routes handle writes, Prisma is the typed data-access layer, and Supabase provides PostgreSQL and Supabase Auth. The whole thing deploys on Vercel.",
        "Every shop is a tenant. A user belongs to a shop and a role, and every query is scoped by that pairing in the app layer (Prisma), so people only see their shop and what their role needs. Tenant isolation lives in the code, not in database row-level security."
      ]
    },
    modules: [
      { name: "Calendar & Appointments", wide: true, bullets: ["Day and staff calendar, vertical or horizontal", "Book, check-in, complete, cancel, no-show", "Walk-ins and time blocks"] },
      { name: "Payments & Payouts", bullets: ["POS: Stripe, HICAPS, cash, manual card", "Refunds", "Staff commission and daily pay"] },
      { name: "Clients", bullets: ["Customer records", "Treatment notes", "Loyalty points"] },
      { name: "Roster & Schedule", bullets: ["Staff availability and shifts", "Rosters", "Time blocks"] },
      { name: "Services & Catalogue", bullets: ["Services and packages", "Vouchers", "Promotions"] },
      { name: "Reports & Dashboard", bullets: ["Daily activity", "Business analytics", "Audit logs"] },
      { name: "Online Booking", bullets: ["Public booking page", "Business profile", "SMS reminders"] },
      { name: "Staff & Access", wide: true, bullets: ["Staff management", "Role-based access: 4 roles", "61 permissions across the app"] },
      { name: "Settings", bullets: ["Shop setup", "Services configuration", "Business profile"] }
    ],
    tradeoffs: [
      { choice: "Supabase and Postgres over Firebase", why: "The data is relational (shops, staff, appointments, payments). Postgres with Prisma gave proper relational queries and typed access; a document store would have fought the model." },
      { choice: "Prisma schema as the single source of truth", why: "One schema drives types end to end, so the data model and the code cannot drift. The cost is managing migrations, worth it for the safety." },
      { choice: "One integrated app over stitching SaaS tools together", why: "Removing fragmentation was the whole point. Buying separate booking, roster, and reporting tools would have recreated the problem the shop already had." },
      { choice: "Ship the core loop as an MVP first", why: "Booking, staff, records, and reporting had to work together before any nice-to-have. I scoped hard to reach a live product in the time available." }
    ],
    lessons: [
      "A clean data model up front saved more time than any feature did. Getting the shop, role, and appointment relationships right made everything after it easier.",
      "AI-assisted development is fast but only reliable with specs, guardrails, and review. Ownership of the decisions has to stay with me.",
      "Designing for non-technical operators means the boring workflows, not the clever features, decide whether the product actually gets used."
    ],
    requirementsSample: {
      title: "Booking change flow — user story and acceptance criteria",
      story: "As a receptionist, I want to reschedule an appointment when a customer or therapist's availability changes, so the calendar, the customer, and the assigned therapist stay aligned without re-doing the booking from scratch.",
      acceptanceCriteria: [
        "Given an appointment exists, when it is rescheduled, the new time respects the therapist's availability and shift for that day",
        "When the appointment changes, the calendar updates in real time for all roles who can see it",
        "When the appointment is moved, the customer's record keeps one booking history entry with the change logged, not two separate bookings",
        "When a reschedule conflicts with an existing booking, the receptionist sees the conflict before confirming and can choose a different slot",
        "Only users with the receptionist role (or higher) can reschedule; a therapist can see the change but cannot move an appointment on another staff member's behalf"
      ],
      traceNote: "Each acceptance criterion maps to a product rule in the requirements register, and from there to the appointment and availability tables in the Prisma schema and to a test case in the workflow test suite.",
      prioritisation: [
        { item: "Calendar & appointments", basis: "Core loop — the shop cannot run without it. Built first." },
        { item: "Roles & permissions", basis: "Data safety across tenants and roles. Required before any multi-user workflow went live." },
        { item: "Payments (Stripe, HICAPS, cash)", basis: "Revenue path. Foundation shipped with the MVP; full POS coverage iterated next." },
        { item: "Loyalty points and vouchers", basis: "Retention features. Deferred until the core loop was stable." },
        { item: "Online booking page", basis: "Customer-facing channel. Built after in-shop workflows, to avoid splitting focus before the shop itself worked." }
      ]
    },
    challenges: [
      "Compressing product discovery, design, implementation, testing, and deployment into a 3-month delivery window.",
      "Translating non-technical shop workflows into structured software requirements and usable product features.",
      "Designing for users with varying levels of digital literacy while keeping the system practical for daily business operations.",
      "Maintaining quality while using AI-assisted development heavily across implementation, debugging, and iteration."
    ],
    challengeApproachPairs: [
      {
        challenge: "The shop has many connected needs, but the first release could not solve everything.",
        approach: "Used MVP scoping, release boundaries, and acceptance criteria to focus first on the operations that needed to work together."
      },
      {
        challenge: "People describe their work as daily tasks, not software requirements.",
        approach: "Mapped those tasks into user journeys, business rules, feature requirements, and data relationships without losing the original operating context."
      },
      {
        challenge: "The product must remain practical for people with different levels of digital confidence.",
        approach: "Kept common workflows direct, grouped related information, and refined the interface using operator feedback."
      },
      {
        challenge: "AI could accelerate development, but incorrect assumptions could spread quickly through the product.",
        approach: "Used specifications, guardrails, testing, and human review while retaining ownership of requirements, technical decisions, and releases."
      }
    ],
    outcomes: [
      "Delivered a live application rather than stopping at research, requirements, or a prototype.",
      "Connected bookings, staff coordination, customer records, and reporting through one product model.",
      "Created a foundation that can be tested and improved through real operator feedback.",
      "Demonstrated an end-to-end delivery approach spanning business analysis, product decisions, and software development.",
      "Learned how disciplined specifications and review controls make AI-assisted development more reliable."
    ],
    nextStage: [
      "The next stage is to evolve SabaiHub from an operational SaaS platform into a smarter business assistant for Thai massage shops.",
      "The long-term direction is to use SabaiHub as a foundation for practical agentic AI: systems that can retrieve business information, use tools, call APIs, suggest actions, and automate safely inside a real product."
    ],
    plannedImprovements: [
      "AI operations assistant for shop owners",
      "Booking and revenue insights",
      "Customer retention suggestions",
      "Staff performance and roster insights",
      "Policy or FAQ assistant for staff",
      "Automated reporting and weekly business summaries",
      "Human-approved AI actions, such as drafting customer follow-up messages",
      "Audit logs for AI-generated recommendations and actions"
    ]
  },

  {
    id: "connection-copilot",
    title: "Connection Review Copilot",
    desc: "A multi-agent AI architecture for reviewing complex, document-heavy applications: bounded agents under deterministic orchestration, each preparing a source-grounded review for a human to decide on. Built for a utility electricity-connection workflow.",
    role: "Product & AI Architecture",
    tags: ["AWS Bedrock", "Multi-Agent", "RAG", "Next.js"],
    tools: ["AWS Bedrock", "Claude", "AWS Step Functions", "AWS Lambda", "Amazon S3", "Next.js", "TypeScript"],
    image: "assets/connection-copilot-architecture.svg",
    year: "2026",
    badge: "AWS Think Tank 2026 · Prototype",
    summary: {
      what: "A multi-agent AI architecture for AI-assisted review of complex applications, built in a 78-hour AWS Think Tank with a team of three.",
      did: "Architected the orchestration and the six-agent pipeline: set where the deterministic controller ends and the AI begins, defined each agent's input and output contract, and consolidated an early nine-agent design down to six.",
      result: "A production-shaped system on AWS Bedrock: a deterministic orchestrator over six bounded agents, 195+ resources, deployed via infrastructure-as-code. Recognised at the AWS Think Tank."
    },
    overview: "Review-heavy workflows share a shape: assemble data from several systems, apply dense standards, produce a design and a cost estimate, then decide how to respond. Done manually it is slow and opaque. This project is an architecture for turning that review into an AI-assisted pipeline, with a human in control at every step. The example domain is utility electricity-connection review, but the pattern generalises to any document-heavy, standards-bound process.",
    metrics: [
      { value: "195+", label: "AWS resources deployed" },
      { value: "6", label: "Bounded agents (from 9)" },
      { value: "78 hrs", label: "Build span, team of 3" },
      { value: "35,881", label: "Bedrock invocations" }
    ],
    problemStatement: "A simple chatbot does not solve a review workflow. Reviewers need each case understood for them before they even know what to ask. The information lives across multiple systems, the standards are dense, and a wrong call is expensive, so the AI has to prepare the ground without ever making the decision.",
    solution: "The spine is a deterministic orchestrator sitting above the AI: it controls the flow and stays auditable, while six bounded agents each own one phase of review (intake, environmental screen, design prep, schematic, cost build-up, standards check). The AI reasons inside each agent, but the orchestrator decides what runs next, never the model. The other key insight from decomposing the workflow: do not make the user ask first. A review snapshot is generated when a case is submitted or materially changes, so the prepared review is ready the moment a reviewer opens the case, with chat for follow-up. Every AI output is advisory, and a human makes the decision.",
    keyDeliverables: [
      "Internal review queue and case workspace bringing applicant, site, supply, attachments, and history together",
      "Multi-agent pipeline with one bounded agent per review phase under an orchestrator",
      "Precomputed AI review snapshot, ready the moment a case is opened",
      "Global AI copilot for follow-up questions and drafting",
      "Knowledge layer for reference-grounded answers with citations (RAG)",
      "Adapter layer isolating all AWS Bedrock calls, deployed via infrastructure-as-code"
    ],
    engineeringDecisions: [
      "Deterministic orchestration sits above the AI (Step Functions), so every decision is traceable. The AI reasons, but the orchestrator decides what runs next, never the model.",
      "The workflow is decomposed into six bounded agents, one review phase each, with an explicit input and output contract so every step is testable in isolation.",
      "Consolidated a nine-agent first iteration down to six: folded the orchestrator into shared infrastructure and merged overlapping agents. Fewer moving parts, same coverage.",
      "A deliberate split, per agent, between what the AI reasons about and what stays a deterministic rule. Knowing where not to use the model is part of the design.",
      "All Bedrock calls are isolated behind one adapter seam. The UI never calls the model and route handlers never import the AWS SDK directly.",
      "A review snapshot is generated before the user asks, rather than an AI call on every page load, which improved the experience and cut cost.",
      "Hard human-in-the-loop lines on approval and compliance decisions: the places where the AI is never trusted to decide, by design."
    ],
    challenges: [
      "Making AI trustworthy for a regulated, auditable process where a wrong automated decision is unacceptable",
      "Designing an ask-nothing-first experience instead of an empty chatbox",
      "Decomposing a messy, multi-system human workflow into bounded agents with clean contracts"
    ],
    approaches: [
      "Chose deterministic orchestration over autonomous agents so every step is traceable, putting reliability above cleverness",
      "Generated a review snapshot on case submission or change, which also removed wasteful AI calls on each page load",
      "Mapped the human process first, then decided where AI helps, so the AI design followed the workflow rather than the other way around"
    ],
    outcomes: [
      "A working, production-shaped system (real infrastructure and patterns, not a toy demo) built in 78 hours by a team of three",
      "A clean separation of concerns: orchestration, agent framework, and portal shell kept independent from domain configuration, so the platform pattern transfers to other review workflows",
      "Recognised at the AWS Think Tank, with reusable platform patterns spun out for future work"
    ]
  },
  {
    id: "why-i-built-sabaihub",
    type: "article",
    title: "Why I Built SabaiHub",
    desc: "A product discovery story about building a thoughtful end-to-end SaaS application for Thai massage shops in Australia.",
    tags: ["Article", "Business Analysis", "Product Discovery", "SaaS"],
    image: "assets/sabaihub-thumbnail.png",
    year: "2026",
    sectionLabels: {
      overview: "Why This Problem",
      problemStatement: "The Real Problem",
      solution: "How I Approached It",
      challengeApproachPairs: "Challenges + Approaches",
      outcomes: "Outcomes + Lessons",
      nextStage: "What's Next"
    },
    summary: {
      what: "SabaiHub is a live SaaS product for Thai massage shops in Australia, designed around the whole shop journey rather than one isolated booking screen.",
      did: "I used stakeholder mapping, market research, workflow analysis, MVP scoping, and systems thinking to turn a community-specific business problem into a product roadmap and working application.",
      result: "The project proves my BA/PO skills can go beyond Figma prototypes into shipped software, with AI helping accelerate delivery but not replacing product judgement."
    },
    overview: [
      "When people think of Thai businesses in Australia, they probably think of Pad Thai, green curry, tom yum, or the Thai massage place that somehow finds the exact painful spot they have been ignoring for months.",
      "For me, that world is not only a customer experience. It is a community I have been surrounded by, including people who work in the Thai massage industry.",
      "Being close to that community, I kept seeing an opportunity for a more thoughtful end-to-end application: something built specifically for Thai massage shops in Australia, with the whole journey considered and a roadmap that supports this group of users over time.",
      "Before AI, this probably would have ended as a Figma prototype: map the workflow, design the screens, explain the opportunity. With AI-assisted development, I could go further and turn the product reasoning into a live SaaS application."
    ],
    problemQuote: "The problem was not that massage shops simply need a booking app. The problem was managing the shop requires attention to detail across many connected parts.",
    quoteSupportingOutside: true,
    problemStatement: [
      "Running a shop involves appointments, staff availability, services, customer records, rosters, payments, commissions, shop settings, and daily follow-up. Each part needs detail, and each gap creates manual work.",
      "Some shops are still partly paper-based. Paper can work when the business is small and everyone is in the same room, but it creates limits quickly: records are hard to search, rosters are easy to misread, appointment changes can be missed, and payment or commission details need to be recalculated manually.",
      "Other shops are digital but fragmented. They might use one tool for bookings, another for staff coordination, spreadsheets for revenue, chat apps for daily updates, and memory for everything that does not fit neatly anywhere else.",
      "For many owners, the choice is awkward: stay with paper and manual coordination, combine two or three apps and fill the gaps manually, or pay for a dominant platform such as Fresha that can be expensive and may not be designed specifically for this market."
    ],
    solution: [
      "My approach started with stakeholder mapping. I broke the shop into the people who actually keep it running: the owner, manager, receptionist, and therapist. Each role sees a different part of the business."
    ],
    stakeholderNeeds: [
      {
        role: "Owner",
        need: "Needs visibility across revenue, staff performance, payments, and daily operations so the business can run without every decision depending on them."
      },
      {
        role: "Manager",
        need: "Needs coordination tools for appointments, rosters, services, staff availability, and small operational issues before they affect customers."
      },
      {
        role: "Receptionist",
        need: "Needs speed and clarity while creating bookings, changing appointments, checking customer details, and avoiding mistakes during busy shop hours."
      },
      {
        role: "Therapist",
        need: "Needs to know when they are working, what service they are delivering, and the relevant appointment context without seeing the whole business."
      }
    ],
    solutionFollowup: [
      "After that, I looked at the market landscape: paper workflows, spreadsheets, generic booking tools, and larger platforms. Each option had strengths, but each also left gaps. That helped me frame SabaiHub as an end-to-end workflow problem, not a single-feature product.",
      "From there, I mapped the workflow, identified gaps, and defined the MVP around the minimum connected operations: appointments, calendar, staff, services, shop setup, roles, permissions, and the foundation for payments and reporting."
    ],
    challengeApproachPairs: [
      {
        challenge: "The business looks simple from the outside: someone books, someone works, someone pays.",
        approach: "Mapped the hidden workflow behind that simplicity: staff availability, service duration, customer records, shop setup, permissions, payment models, and reporting needs."
      },
      {
        challenge: "Different roles need different levels of visibility and control.",
        approach: "Used stakeholder mapping to separate owner, manager, receptionist, and therapist needs before defining modules and access boundaries."
      },
      {
        challenge: "The product could easily become a pile of unrelated features.",
        approach: "Used MVP scoping and roadmap thinking to keep the first version focused on connected operations, while leaving space for future shop-specific capabilities."
      }
    ],
    outcomes: [
      "SabaiHub became a live product direction around the connected shop workflow, rather than a generic booking-app idea.",
      "The biggest shift was going beyond prototype work. AI-assisted development made it possible to move from Figma-level product thinking into working software.",
      "The lesson is not that AI replaces product judgement. AI is powerful, but it needs a harness: clear requirements, scoped workflows, architecture boundaries, testing, and human review."
    ],
    outcomeLayout: "horizontal",
    nextStage: [
      "This first article is about why SabaiHub exists and how the product problem was framed.",
      "The next article should go one level deeper: how the business workflow became SaaS architecture, including the modules, data model, system boundaries, and technical decisions behind the product."
    ]
  },
  {
    id: "workflow-to-saas-architecture",
    type: "article",
    title: "From Business Workflow to SaaS Architecture",
    desc: "How SabaiHub translated massage-shop operations into product modules, data entities, permissions, and full-stack system boundaries.",
    tags: ["Article", "System Design", "Software Architecture", "Business Analysis"],
    toolsLabel: "Stack Used",
    tools: ["Next.js", "React", "TypeScript", "Prisma", "Supabase", "PostgreSQL", "Vercel"],
    image: "assets/sabaihub-thumbnail.png",
    year: "2026",
    sectionLabels: {
      overview: "The Bridge",
      problemStatement: "Architecture Started With Workflow",
      solution: "Translation Map",
      keyDeliverables: "Architecture Moves",
      engineeringDecisions: "Technical Decisions",
      challengeApproachPairs: "Challenges + Approaches",
      outcomes: "What This Proves",
      nextStage: "What's Next"
    },
    summary: {
      what: "This article explains how SabaiHub moved from business workflow analysis into a structured multi-tenant SaaS architecture.",
      did: "I translated shop operations into entities, modules, page flows, role boundaries, Server Actions, validation, and database relationships.",
      result: "The strongest proof is not the framework choice. It is the conceptual model: tenants, shops, users, staff assignments, roles, services, appointments, and permissions all map back to real operating needs."
    },
    overview: [
      "The first SabaiHub article explained why the product exists. This one goes one level deeper: how a business workflow became software architecture.",
      "The important lesson is that architecture did not start from choosing Next.js, Prisma, or Supabase. Those choices mattered, but they were not the starting point. The starting point was the shop workflow: who uses the system, what they need to do, what data belongs together, and where access must be controlled.",
      "That is the bridge I wanted SabaiHub to prove. A Technical BA should not stop at writing requirements. The stronger version is being able to carry those requirements into system structure."
    ],
    problemQuote: "Good architecture did not start from framework choices. It started from understanding the workflow, then decomposing it into users, shops, staff, services, appointments, permissions, and operational modules.",
    quoteSupportingOutside: true,
    problemStatement: [
      "A massage shop looks simple until the workflow is decomposed. A booking is not only a calendar event. It can involve a shop, client, therapist, service, duration, time, status, payment path, permission rule, and future reporting need.",
      "A staff member is not only a user account. They may belong to one shop or multiple shops, have a role in each shop, appear on the calendar, use different permissions, and follow a payment model.",
      "A business is not only one account. It may have multiple shop locations, different staff assignments, shared business settings, and shop-scoped access rules. That means the architecture needs to separate ownership, location, people, and permissions instead of flattening everything into one simple user table."
    ],
    solution: [
      "I approached the architecture by translating business concepts into system concepts. Each important workflow question had to become a design decision: what entity owns this data, which module changes it, who can see it, and which layer should enforce the rule?"
    ],
    conceptTranslations: [
      {
        concept: "One business can operate multiple shops.",
        architecture: "Tenant and Shop are separate concepts, so the business owner/root organisation is not confused with a physical operating location."
      },
      {
        concept: "Staff access depends on where they work.",
        architecture: "User, StaffAssignment, ShopRole, and permissions model who belongs to which shop and what they can do there."
      },
      {
        concept: "A booking touches several business objects.",
        architecture: "Appointment connects shop, client, service, staff, time, status, and later payment/reporting workflows."
      },
      {
        concept: "Different users need different workflow views.",
        architecture: "Calendar, appointment list, dashboard, staff, services, and settings pages expose different surfaces over the same operational model."
      },
      {
        concept: "Not every product idea belongs in the first release.",
        architecture: "The roadmap distinguishes implemented, partial, and planned capabilities so the schema can support direction without pretending every UI is complete."
      }
    ],
    solutionFollowup: [
      "This is where BA work becomes engineering work. Stakeholder needs turn into roles. Workflow steps turn into pages and modules. Business rules turn into database relationships, validation, permissions, and server-side checks.",
      "That is also why AI-assisted development needs a harness. AI can generate code quickly, but if the conceptual model is weak, it can generate screens that do not respect the business. The useful skill is controlling the model before implementation accelerates."
    ],
    keyDeliverables: [
      "Separated tenant, shop, user, staff assignment, and role concepts so ownership, location, identity, and access are not collapsed into one thing.",
      "Organised the product around operational modules such as appointments, calendar, staff, services, shop settings, payments, and reporting.",
      "Used shop-scoped permissions so logging in is not treated as the same thing as being allowed to act inside a shop.",
      "Kept sensitive mutation logic on the server through Server Actions, validation, auth wrappers, and Prisma/PostgreSQL writes.",
      "Kept roadmap status explicit so future capabilities such as packages, vouchers, reconciliation, and reports are treated honestly."
    ],
    engineeringDecisions: [
      "Used Next.js App Router because it allowed routing, server rendering, Server Actions, and frontend UI to live in one full-stack application structure.",
      "Used PostgreSQL and Prisma because the problem is relational: tenants, shops, users, staff assignments, appointments, services, payments, and permissions depend on clear relationships.",
      "Used Supabase Auth for identity, but kept business authorization in the application model through users, shop assignments, roles, and permission helpers.",
      "Used TypeScript and Zod-style validation patterns to make boundaries more explicit across UI, server actions, queries, and shared contracts.",
      "Used Vercel for deployment, preview builds, environment management, and a practical production release path.",
      "Used specification-driven development to reduce ambiguity before implementation, especially because the product was built with heavy AI-assisted development."
    ],
    challengeApproachPairs: [
      {
        challenge: "The business concepts were connected, but they could not all live in one oversized model.",
        approach: "Separated the domain into entities and modules so the system could express ownership, location, role, appointment, service, and payment concerns clearly."
      },
      {
        challenge: "A valid login did not automatically mean a user should access every shop or action.",
        approach: "Separated authentication from authorization: identity comes from Supabase Auth, while shop access and permissions are enforced through app-level roles and assignments."
      },
      {
        challenge: "AI-assisted coding can move faster than the architecture can be understood.",
        approach: "Used requirements, user stories, acceptance criteria, architecture notes, and code review loops to keep generated work tied to the intended system model."
      },
      {
        challenge: "The architecture is useful but not perfect.",
        approach: "Kept the claim measured: SabaiHub shows strong BA-to-engineering translation, while some modules still need refactoring and clearer boundaries as the product grows."
      }
    ],
    outcomes: [
      "SabaiHub became a clearer architecture story because business workflows map visibly into data entities, modules, permissions, and page flows.",
      "The project gives me a defensible way to explain how BA/PO work can extend into software structure, not only requirements documents.",
      "The architecture is still evolving, but the core lesson is stable: better systems start with better workflow decomposition."
    ],
    outcomeLayout: "horizontal",
    nextStage: [
      "The next article should become the feature-level walkthrough: shipping one feature end-to-end.",
      "The best candidate is the appointment/calendar module because it touches workflow, permissions, date/time logic, staff visibility, UI interaction, server queries, and testing."
    ]
  },
  {
    id: "technical-architecture-of-sabaihub",
    type: "article",
    title: "The Technical Architecture of SabaiHub",
    desc: "How the SabaiHub technology stack, application layers, module boundaries, and deployment shape fit together.",
    tags: ["Build Note", "Technical Architecture", "System Design"],
    image: "assets/sabaihub-thumbnail.png",
    year: "2026",
    "overview": [
        "SabaiHub is one Next.js application, typed end to end: the browser renders role-scoped UI, server actions and API routes handle writes, Prisma is the typed data-access layer, and Supabase provides PostgreSQL and Supabase Auth. The whole thing deploys on Vercel.",
        "This note is about why that particular shape — one app, one schema, one deployable unit — was the right call for a small multi-tenant product, and where the seams actually are."
    ],
    "problemQuote": "The hard part of a shop operations platform is not the booking screen. It is that every shop is many connected parts, and no single model held how they fit together.",
    "quoteSupportingOutside": true,
    "problemStatement": [
        "A Thai massage shop's daily work spans appointments, staff availability, services, customer records, rosters, payments, commissions, and reporting. Each of those is relational: an appointment belongs to a customer, a therapist, and a time slot; a payment belongs to an appointment and an employee.",
        "On top of that, the product is multi-tenant. Every shop is a tenant, and every user belongs to a shop and a role. The architecture had to keep tenants' data apart, keep roles honest, and stay simple enough for one person to run and deploy."
    ],
    "solution": [
        "The application is a single Next.js app. The browser renders views filtered by the signed-in user's shop and role; writes go through server actions and API routes; Prisma types every query against one schema; Supabase hosts PostgreSQL and handles auth; Vercel deploys it.",
        "Tenant isolation lives in the code. A user belongs to a shop and a role, and every query is scoped by that pairing in the app layer (Prisma), so people only ever see their shop and what their role needs. The design decision was deliberate: tenant isolation in the application layer, not in database row-level security.",
        "That trade-off is the one I'd defend first in a review. RLS is a strong backstop and I use Postgres, but putting the enforcement in one typed layer means the scoping rules are visible in code, testable in the normal test pipeline, and changed with a deploy instead of a migration.",
        "The data model follows the workflow, not a generic calendar. Shops, users, staff, roles, services, appointments, and payments are all modelled as relationships, so the calendar is a view over availability and appointments rather than a separate store."
    ],
    "challengeApproachPairs": [
        {
            "challenge": "Relational data with a document-store comfort zone: many developers default to Firebase or similar for speed.",
            "approach": "Chose Supabase and Postgres over Firebase because the domain is relational — shops, staff, appointments, payments. Postgres with Prisma gave proper relational queries and typed access; a document store would have fought the model."
        },
        {
            "challenge": "Keeping the data model and the code from drifting apart as features land quickly.",
            "approach": "Made the Prisma schema the single source of truth. One schema drives types end to end, so a model change is visible to every query at compile time. The cost is managing migrations, worth it for the safety."
        },
        {
            "challenge": "Small shops already use scattered SaaS tools; adding more would recreate the fragmentation the product exists to remove.",
            "approach": "Built one integrated app rather than stitching booking, roster, and reporting tools together. Removing fragmentation was the whole point of the product."
        }
    ],
    "outcomes": [
        "One deployable unit: schema, queries, and UI ship together, which kept iteration fast while the product was live with real shops.",
        "A permission surface that is enforced in one place: 4 roles and 61 permissions scoped consistently across every query and view, not just hidden in the UI.",
        "An architecture a reviewer can interrogate: the tenancy and role rules are in the app layer, visible in code, and covered by the same tests as everything else."
    ],
    "nextStage": [
        "The next architectural step is layering practical agentic AI on top of this model: tool-using agents that can retrieve business information and suggest actions, with the same shop-and-role scoping applied to what an agent can see and do."
    ],
    "sectionLabels": {
        "overview": "The Shape of the System",
        "problemStatement": "The Problem",
        "solution": "How It Fits Together",
        "challengeApproachPairs": "Decisions + Trade-offs",
        "outcomes": "What It Gave Us",
        "nextStage": "What's Next"
    }
  },
  {
    id: "shipping-a-feature-through-the-full-sdlc",
    type: "article",
    title: "Shipping a Feature Through the Full SDLC",
    desc: "An end-to-end feature delivery story from discovery and requirements through implementation, testing, deployment, and iteration.",
    tags: ["Build Note", "SDLC", "Software Delivery"],
    image: "assets/sabaihub-thumbnail.png",
    year: "2026",
    "overview": [
        "Most portfolio sites show a feature as a finished screen. This note shows one feature as a delivery pipeline: how a reschedule flow in SabaiHub went from a messy shop workflow to a user story, acceptance criteria, a schema change, an implementation, a test, and a deployment.",
        "I picked the reschedule flow deliberately — it is the moment where a booking system most often betrays the people using it. A reschedule touches the calendar, the therapist's availability, the customer's record, and the audit trail at the same time.",
        "I use the 'user story → acceptance criteria → schema → implementation → test' chain throughout. Each acceptance criterion below maps to a product rule, from there to a table in the Prisma schema, and from there to a test case."
    ],
    "problemQuote": "A reschedule is not a small edit. It is a change to at least four connected things at once, and it has to stay consistent.",
    "quoteSupportingOutside": true,
    "problemStatement": [
        "In the shops I spoke with, a reschedule meant phone calls, sticky notes, and someone checking a paper roster. When an appointment moved, the calendar, the customer's expectation, and the therapist's availability could all end up disagreeing.",
        "The requirement wasn't 'move a date.' It was: keep the calendar, the customer record, and the assigned therapist aligned after a change, without making the receptionist re-do the booking from scratch."
    ],
    "solution": [
        "I defined the MVP around the operational spine: appointments, calendar, staff, services, shop setup, roles, permissions, and the foundation for payments and reporting. The reschedule flow sat at the centre of the spine.",
        "The user story was written from the receptionist's seat — the person who does this dozens of times in a busy shift: 'As a receptionist, I want to reschedule an appointment when a customer or therapist's availability changes, so the calendar, the customer, and the assigned therapist stay aligned without re-doing the booking from scratch.'",
        "The acceptance criteria then did the real work (the full set is published on the SabaiHub case study): the new time respects the therapist's availability; the calendar updates in real time for every role; the customer keeps one booking-history entry with the change logged rather than two bookings; conflicts surface before confirmation; and only a receptionist (or higher) can move an appointment on someone else's behalf.",
        "From there the flow became concrete: a schema touch in Prisma (appointment fields plus a change log), a server action enforcing the role check and the conflict check before any write, and a workflow test that walks the happy path and the conflict path."
    ],
    "challengeApproachPairs": [
        {
            "challenge": "People describe their work as daily tasks, not software requirements. No one in the shop said 'I need a reschedule endpoint.'",
            "approach": "Mapped the daily task into user journeys, business rules, and data relationships without losing the operating context it came from."
        },
        {
            "challenge": "A reschedule touches the calendar, availability, the customer record, and permissions at once — a 'small edit' would have corrupted at least one of them.",
            "approach": "Turned each invariant into an acceptance criterion first, so the implementation had a checklist instead of an instinct."
        },
        {
            "challenge": "With AI-assisted development doing much of the implementation, the risk was plausible-looking code that subtly violated the rules.",
            "approach": "Specified the task with the criteria, constrained the agent with the role and conflict rules, and verified the diff against the criteria before release. The human retained ownership of the requirements and the release decision."
        }
    ],
    "outcomes": [
        "A flow that ships one consistent mental model: the calendar, the customer record, and the therapist's view never disagree after a reschedule.",
        "A requirements chain that survives review: each acceptance criterion is traceable to a product rule, a schema relationship, and a test case.",
        "A template: the same story-to-criteria-to-schema-to-test chain is now how every feature on SabaiHub is specified."
    ],
    "nextStage": [
        "The next feature will follow the same chain, but with an agentic assistant in the loop: an AI that can propose a reschedule, check the same invariants, and hold it for human approval."
    ],
    "sectionLabels": {
        "overview": "One Feature, Full Pipeline",
        "problemStatement": "The Real Requirement",
        "solution": "Story to Schema to Test",
        "challengeApproachPairs": "Challenges + Approaches",
        "outcomes": "Outcomes",
        "nextStage": "What's Next"
    }
  },
  {
    id: "multi-tenancy-auth-and-data-ownership",
    type: "article",
    title: "Multi-Tenancy, Auth, and Data Ownership",
    desc: "How SabaiHub separates identity, shop access, roles, permissions, tenant boundaries, and data ownership.",
    tags: ["Build Note", "Authentication", "Multi-Tenancy"],
    image: "assets/sabaihub-thumbnail.png",
    year: "2026",
    "overview": [
        "SabaiHub is multi-tenant by design: every shop is a tenant, every user belongs to a shop and a role, and the product enforces what each person can see and do. This note walks through the three layers — identity, tenancy, and data ownership — and where each boundary actually lives in the code.",
        "The short version: identity comes from Supabase Auth, membership is a shop–user pairing with a role, and every query is scoped by that pairing in the application layer (Prisma). Tenant isolation lives in the code, not in database row-level security."
    ],
    "problemQuote": "The privacy question in a multi-tenant shop system is not 'who can log in.' It is: what can a therapist at shop A see of shop B, and what can a therapist see of their own shop?",
    "quoteSupportingOutside": true,
    "problemStatement": [
        "A naive booking app gives every logged-in user the same view. That fails in two directions: across tenants (shop A's therapist reading shop B's customers) and within a tenant (a therapist seeing the owner's revenue figures).",
        "The business need was precise: the owner needs visibility across revenue, staff performance, and daily operations; the manager needs coordination; the receptionist needs speed and clarity; the therapist needs only their own appointments and the context relevant to them.",
        "So the access model had to be a matrix, not a login. Four roles, 61 permissions across the application, and every query scoped by the shop-and-role pairing."
    ],
    "solution": [
        "Identity sits in Supabase Auth. The signed-in user is authenticated once; everything after that is about what that user's shop membership and role allow.",
        "Tenancy is a pairing, not a database. A user belongs to a shop and a role. In Prisma, every query is scoped by that pairing in the app layer, so a therapist's request literally cannot return rows from another shop — the scope is part of the query, not a filter applied afterwards.",
        "Data ownership follows the same pairing. A therapist sees their roster and their appointments. A receptionist sees the shop's calendar but not the owner's revenue analytics. An owner sees the whole business. The permissions (61 of them) are checked consistently across every query and view, not hidden in the UI.",
        "The deliberate trade-off: enforcing tenancy in the application layer rather than RLS. RLS is a fine backstop and Postgres supports it, but app-layer scoping is visible in code, covered by the normal test pipeline, and changed with a deploy. For a product moving as fast as this one, that seam is worth more than defence-in-depth against a bug the tests already catch.",
        "Onboarding a new tenant stays cheap: a shop record, a shop-and-role pairing for its staff, and the scoping applies everywhere without touching shared code."
    ],
    "challengeApproachPairs": [
        {
            "challenge": "Modelling a multi-tenant schema where shops, users, staff, roles, services, appointments, and payments all relate without leaking data across tenants.",
            "approach": "Made the shop the root of the model. Every entity hangs off a shop, every user off a shop-and-role pairing, and queries are scoped from that root."
        },
        {
            "challenge": "Enforcing role-based access consistently across every query and view, not just hiding it in the UI.",
            "approach": "Put the enforcement in the typed data-access layer so scoping is part of every query. The UI then cannot show what a query never returns."
        },
        {
            "challenge": "Non-technical operators sharing one device or one account culture: receptionists hand over screens, therapists check phones between clients.",
            "approach": "Scoped access so handing over a screen never hands over more than the role allows, and kept the permissions granular enough that a busy receptionist is not slowed down by an owner-level view."
        }
    ],
    "outcomes": [
        "Tenant and role boundaries that are enforced in one place and exercised by tests, rather than promised by convention.",
        "An access matrix (4 roles, 61 permissions) that matches how the shop actually works: each role sees only what its daily work needs.",
        "A cheap path to the next tenant: adding a shop is configuration, not code."
    ],
    "nextStage": [
        "The same boundaries will gate agentic AI: any AI assistant that reads business data or suggests actions will be scoped by the same shop-and-role pairing, so an assistant used by a receptionist sees no more than a receptionist can."
    ],
    "sectionLabels": {
        "overview": "Three Layers, One Boundary",
        "problemStatement": "The Access Problem",
        "solution": "Identity, Tenancy, Ownership",
        "challengeApproachPairs": "Challenges + Approaches",
        "outcomes": "Outcomes",
        "nextStage": "What's Next"
    }
  },
  {
    id: "ai-assisted-engineering-workflow",
    type: "article",
    title: "AI-Assisted Engineering Workflow",
    desc: "How specifications, agent context, guardrails, review loops, testing, and release decisions controlled AI-assisted development.",
    tags: ["Build Note", "AI-Assisted Development", "Engineering Workflow"],
    image: "assets/sabaihub-thumbnail.png",
    year: "2026",
    "overview": [
        "SabaiHub was built with heavy AI-assisted development, and this note is about the workflow that made that reliable: specifications, agent context, guardrails, review loops, testing, and release decisions.",
        "The honest framing first: AI accelerated the delivery, it did not replace the product judgement. Before AI, this project would probably have ended as a Figma prototype — map the workflow, design the screens, explain the opportunity. AI-assisted development let me take the product reasoning all the way to a live SaaS application. The requirements were still mine."
    ],
    "problemQuote": "An AI coding agent is like a very fast junior engineer with excellent recall: brilliant when the task is specified, dangerous when it invents scope.",
    "quoteSupportingOutside": true,
    "problemStatement": [
        "Unprompted, an agent will do something plausible-looking and wrong: add a feature nobody asked for, assume a data relationship that does not exist, or skip the role check because it is not in the prompt.",
        "The failure mode I cared about was not slow development. It was incorrect assumptions spreading quickly through generated code. With a multi-tenant product, one wrong assumption about data scoping is a privacy bug in production."
    ],
    "solution": [
        "Spec-driven development: plan, then task spec, then implement, then test. Every task shipped with a specification derived from the requirements — user stories, acceptance criteria, role rules, and the data relationships involved.",
        "Agent context was curated, not dumped. The agent received the relevant slices of the product model: the Prisma schema for the entities it touched, the page flows, the role boundaries, and the validation patterns. It never got an open prompt to 'build the shop app.'",
        "Guardrails were written into the task, not assumed: the shop-and-role scoping rules for every query, the invariant that an appointment change keeps one history entry, and the conflict checks that must run before a write.",
        "Review loops were non-negotiable. Each diff was checked against the task spec before it was accepted — not skimmed, checked. Testing ran in the workflow, and release decisions stayed with me. The pattern is the same one I would use with a fast junior engineer: small tasks, tight specs, review before merge.",
        "Context engineering and prompt design were real work: the difference between a task that needs three review rounds and one that passes clean is usually the specification, not the model."
    ],
    "challengeApproachPairs": [
        {
            "challenge": "AI could accelerate development, but incorrect assumptions could spread quickly through the product.",
            "approach": "Used specifications, guardrails, testing, and human review while retaining ownership of requirements, technical decisions, and releases."
        },
        {
            "challenge": "A task described in one sentence gets a creative interpretation; a task described in requirements gets an implementation.",
            "approach": "Wrote each task spec from the acceptance criteria, so the agent's job was verification against a checklist, not design."
        },
        {
            "challenge": "Reviewing generated code without drowning in it.",
            "approach": "Kept tasks small and scoped, reviewed diffs against criteria, and let the test pipeline carry the regression burden."
        }
    ],
    "outcomes": [
        "A live production product delivered in a compressed window, with requirements, design, and release decisions human-owned throughout.",
        "A repeatable workflow — plan, task spec, implement, test, review — that works for AI agents and would work for any engineer.",
        "A clear boundary the portfolio should keep honest: AI-assisted delivery is a force multiplier for a product decision-maker, not a substitute for one."
    ],
    "nextStage": [
        "The next stage is the same discipline applied to autonomous agents inside the product: scoped tools, human approval on actions, and audit logs for everything an agent does."
    ],
    "sectionLabels": {
        "overview": "The Workflow",
        "problemStatement": "The Failure Mode to Avoid",
        "solution": "Spec, Context, Guardrails, Review",
        "challengeApproachPairs": "Challenges + Approaches",
        "outcomes": "Outcomes",
        "nextStage": "What's Next"
    }
  },
  {
    id: "technical-debt-debugging-and-refactoring",
    type: "article",
    title: "Technical Debt, Debugging, and Refactoring Lessons",
    desc: "What became fragile in SabaiHub, how problems were diagnosed, and where focused refactoring is stronger than rewriting.",
    tags: ["Build Note", "Debugging", "Refactoring"],
    image: "assets/sabaihub-thumbnail.png",
    year: "2026",
    "overview": [
        "Shipping a product in a compressed window with heavy AI assistance creates debt in predictable places. This note is about where SabaiHub got fragile, how problems were diagnosed, and why I believe focused refactoring is almost always stronger than rewriting.",
        "The honest position first: some SabaiHub modules still need refactoring. The product shows strong BA-to-engineering translation, and it also carries the marks of speed — a growing schema, a large permission surface, and code paths that were built once and hardened by use rather than by architecture."
    ],
    "problemQuote": "Technical debt is not a moral failing. It is a pile of deferred decisions, and the art is knowing which ones to pay down and which ones were right to defer.",
    "quoteSupportingOutside": true,
    "problemStatement": [
        "Three kinds of fragility accumulated. First, schema growth: real features landed fast, and each one added relationships to the Prisma model. Second, the permission surface: with 4 roles and 61 permissions, a new query could forget a scope. Third, duplication risk: similar flows built at different times drift apart.",
        "The danger of a growing multi-tenant product is that the failures are silent — a missing scope returns data instead of crashing. Debugging becomes a matter of trusting nothing and verifying everything."
    ],
    "solution": [
        "Diagnosis came first, always. Reproduce the failure, isolate the smallest path that triggers it, and fix at the source rather than patching the symptom. In a multi-tenant system that often meant asking which scope the query was missing, not what the UI did wrong.",
        "Refactoring was chosen over rewriting. Rewriting a working product resets its operating knowledge — every edge case the live shops have already hit. Refactoring keeps the behaviour and pays down the structure. The rule I used: rewrite only when the shape itself is wrong; refactor when the shape is right and the implementation is messy.",
        "The safety net made this possible. Workflow tests covered the core loops, so a refactor could move responsibility from one layer to another and prove the behaviour still held. Without the tests, the honest answer would have been to leave it alone.",
        "AI assistance cut both ways here: it accelerated creating the debt, and it accelerated paying it down — with the same guardrails. Refactoring tasks were specified against the test suite, never against vibes."
    ],
    "challengeApproachPairs": [
        {
            "challenge": "A query or view missing a role scope fails silently, returning data instead of an error.",
            "approach": "Made scoping part of the query at the data-access layer, and covered the boundaries with tests, so a missing scope is a failing test, not a production mystery."
        },
        {
            "challenge": "The product needed to keep moving while the schema grew.",
            "approach": "Let migrations be normal and routine — Prisma made the schema the single source of truth, so each migration was reviewed as a product change, not an incident."
        },
        {
            "challenge": "Deciding between rewriting a messy module and refactoring it.",
            "approach": "Chose refactoring when the behaviour and the model were right; reserved rewriting for shapes that were wrong. The test suite made the refactor option safe and the rewrite option unnecessary."
        }
    ],
    "outcomes": [
        "A product that kept shipping while its structure improved — no 'big rewrite' project, no stopped clock on the roadmap.",
        "A diagnosis habit that carries over: reproduce, isolate, fix at the source. It is the same discipline in code that the BA side applies to workflow problems.",
        "A measured self-assessment the portfolio keeps honest: strong translation of business to software, with named modules still carrying debt that is being paid down deliberately."
    ],
    "nextStage": [
        "The deliberate debt-paydown continues alongside new features: each release pays a little principal, and the tests keep the refactors honest."
    ],
    "sectionLabels": {
        "overview": "Where It Got Fragile",
        "problemStatement": "The Debt in Question",
        "solution": "Diagnose, Refactor, Prove",
        "challengeApproachPairs": "Challenges + Approaches",
        "outcomes": "Outcomes",
        "nextStage": "What's Next"
    }
  },
  {
    id: "what-sabaihub-taught-me-as-an-engineer",
    type: "article",
    title: "What SabaiHub Taught Me as an Engineer",
    desc: "A reflection on delivery strengths, technical gaps, engineering judgement, and the next stage of growth.",
    tags: ["Build Note", "Engineering Growth", "Reflection"],
    image: "assets/sabaihub-thumbnail.png",
    year: "2026",
    "overview": [
        "SabaiHub was the first product I built end to end alone: user research, MVP scoping, data model, full-stack implementation, deployment, and iteration on real operator feedback. This note is a reflection on what that taught me — where the BA side paid off, what engineering-by-doing gave me, and where the edges are.",
        "The framing that matters: this is one progression, not a career switch. Three years of business analysis and product ownership shaped how I built the software, and building the software changed what I can offer as a BA."
    ],
    "problemQuote": "The mix of business analysis and engineering is the point: I framed a messy shop workflow into requirements and a schema, then implemented and shipped it myself rather than handing off a spec.",
    "quoteSupportingOutside": true,
    "problemStatement": [
        "Before SabaiHub, my delivery experience stopped at the handoff: requirements, user stories, acceptance criteria, UAT — then engineering took over. I could read a schema, but I had never owned one.",
        "Building a live product closed that loop. The gap it revealed was not 'could I code' but 'could I carry a product through every decision layer without anyone to hand it to.'"
    ],
    "solution": [
        "The BA side paid off first. Stakeholder conversations, workflow mapping, and MVP scoping came naturally because I had done them for years. The shop's owners, managers, receptionists, and therapists were stakeholders before they were users.",
        "The engineering side came by doing. Deploying a real multi-tenant system taught me what specs cannot: the weight of a migration, the discipline of scoping every query by shop and role, the difference between a feature that is done and one that is usable by someone with limited digital confidence.",
        "The lessons are concrete. A clean data model up front saved more time than any feature did. AI-assisted development is fast but only reliable with specs, guardrails, and review. And the boring workflows — not the clever features — decide whether the product actually gets used.",
        "The gaps are named, too. My engineering strengths are breadth and delivery judgement; my depth in some areas is still learning. The site says it plainly: AI Engineering is a learning track — interface design for AI-powered products, multi-agent architecture, RAG and source grounding, structured outputs, human-in-the-loop review design, evals and guardrails, AWS Bedrock, Azure AI, LangChain, LangGraph."
    ],
    "challengeApproachPairs": [
        {
            "challenge": "Everything depended on me: one person owning research, product, and engineering means no one to catch your blind spot.",
            "approach": "Compensated with process: specifications, guardrails, tests, and review loops replaced the second pair of eyes. The discipline scaled the solo role."
        },
        {
            "challenge": "The BA instinct said 'more discovery'; the delivery reality said 'ship the spine first.'",
            "approach": "Scoped hard to reach a live product in the time available, then iterated on real operator feedback instead of perfecting the plan."
        },
        {
            "challenge": "Being honest about depth on a portfolio that wants to impress.",
            "approach": "Labeled the learning explicitly. The claim is strength where it is real — BA-to-engineering translation — and learning where it is still being built."
        }
    ],
    "outcomes": [
        "Proof that the BA-to-engineering translation is real: a live product whose requirements, model, and code were shaped by one person in one loop.",
        "A delivery capability that no spec handoff ever exercised: migrations, deployments, operator feedback cycles, and production debugging.",
        "A clearer next direction: the same product judgement applied to agentic AI, with the engineering depth being built deliberately."
    ],
    "nextStage": [
        "What's next is the agentic layer on SabaiHub — and the Master of IT, which is the structured version of the learning track this project opened."
    ],
    "sectionLabels": {
        "overview": "The Reflection",
        "problemStatement": "The Gap That Motivated It",
        "solution": "What I Learned",
        "challengeApproachPairs": "Challenges + Approaches",
        "outcomes": "Outcomes",
        "nextStage": "What's Next"
    }
  },
  {
    id: "mybusiness-gov",
    title: "MyBusiness.gov",
    desc: "Proof-of-concept GovHack service concept helping small businesses navigate licences, permits, tax obligations, and support programs across government tiers.",
    role: "Product & UX Lead",
    tags: ["AI", "React", "UX Design", "Gov Tech"],
    tools: ["React", "AI-assisted guidance", "Service Design", "Figma", "Miro"],
    image: "assets/mybusiness-gov-poster.jpg",
    video: {
      webm: "assets/mybusiness-gov-demo.webm",
      mp4: "assets/mybusiness-gov-demo.mp4",
      poster: "assets/mybusiness-gov-poster.jpg"
    },
    prototypeUrl: "https://v0-my-biz.vercel.app/",
    prototypeWalkthrough: {
      youtubeId: "LU496cP-FnY",
      description: "A short walkthrough of the prototype flow: ABN entry, business assessment, jurisdiction questions, and the compliance roadmap concept.",
      linkLabel: "Open live prototype"
    },
    year: "2025",
    badge: "National Runner-up",
    summary: {
      what: "Proof-of-concept GovHack prototype helping small-business owners navigate licences, permits, tax obligations, and support across government tiers.",
      did: "Framed the user problem, shaped the service journey, designed the prototype flow, and delivered a working public-service concept under hackathon constraints.",
      result: "A clickable prototype and walkthrough that show how fragmented government requirements can become a clearer step-by-step business roadmap."
    },
    overview: "MyBusiness.gov is a GovHack proof-of-concept for simplifying the regulatory journey for Australian small-business owners. The prototype explores how one guided entry point could help users understand licences, permits, tax obligations, and support programs without starting from agency structure.",
    problemStatement: "Starting or running a small business in Australia often means moving across federal, state, and local government processes without a clear sequence. Owners can struggle to understand what applies to them, which agency owns each step, and what must be completed before they can operate confidently.",
    solution: "A guided AI-assisted service concept that starts with a business profile, asks a small set of requirement questions, and turns fragmented government obligations into a clearer step-by-step compliance roadmap in plain English.",
    keyDeliverables: [
      "Business profile and guided requirements assessment",
      "Federal, state, and local obligation journey structure",
      "Plain-language compliance roadmap concept",
      "Prototype flow for licence, permit, tax, and support-program guidance",
      "Responsive web interface optimised for low-digital-literacy users"
    ],
    challenges: [
      "Simplifying fragmented government processes across federal, state, and local levels",
      "Translating complex regulatory language into a user-centred journey without presenting the prototype as official advice",
      "Building a coherent proof-of-concept within the 46-hour GovHack weekend"
    ],
    approaches: [
      "Structured the concept around a guided assessment that maps business context to likely obligation categories",
      "Used a Hobart restaurant scenario to keep the prototype specific, testable, and feasible within 46 hours",
      "Applied a UX-first approach — wireframed the user journey before writing any code to validate the core flow"
    ],
    outcomes: [
      "Recognised as a national runner-up at Australia GovHack 2025",
      "Built a public-sector process simplification story grounded in small-business user needs",
      "Submitted a clickable proof-of-concept within the 46-hour GovHack window"
    ]
  },
  {
    id: "regionalmate",
    title: "RegionalMate",
    desc: "AI-powered relocation planning platform helping users evaluate moves from metropolitan to regional Australia — turning fragmented decisions across jobs, housing, schools, and lifestyle into a structured path.",
    tags: ["IBM watsonx", "AI", "UX Research", "React"],
    tools: ["IBM watsonx.ai", "React", "ABS Data APIs", "Figma", "Miro"],
    image: "assets/regionalmate-thumbnail.png",
    year: "2025",
    badge: "IBM Global Top 50",
    prototypeWalkthrough: {
      youtubeId: "fVqGKExg2Ds",
      description: "A short walkthrough of the RegionalMate prototype flow: user profiling, relocation priorities, location comparison, and AI-assisted regional planning.",
      linkLabel: "Watch walkthrough"
    },
    summary: {
      what: "AI-assisted relocation planning concept helping people evaluate regional moves across work, housing, education, lifestyle, and community needs.",
      did: "Used research synthesis, journey thinking, and product framing to turn a scattered relocation decision into a structured prototype experience.",
      result: "Selected as IBM Global Top 50, with a complete end-to-end prototype journey from profiling to personalised relocation plan."
    },
    overview: "RegionalMate is an AI-powered decision support platform designed to help Australians confidently evaluate a move from major cities to regional areas. It aggregates information across five life domains — employment, housing, education, lifestyle, and community — and uses IBM watsonx.ai to generate personalised relocation plans.",
    problemStatement: "The Australian government has incentives and programs to encourage metropolitan-to-regional migration, but the decision to relocate is overwhelming for most people. Information about regional jobs, schools, housing, and lifestyle is scattered across dozens of sources, making it nearly impossible to make a confident, informed decision.",
    solution: "A structured AI-assisted platform that guides users through a profiling process across five life domains, then generates a personalised regional location comparison and action plan — powered by IBM watsonx.ai and real government data sources.",
    keyDeliverables: [
      "User profiling questionnaire across 5 life domains (work, housing, education, lifestyle, community)",
      "AI-powered location comparison engine using IBM watsonx.ai",
      "Personalised relocation score and recommendation report",
      "Regional area fact sheets with housing, employment, and amenity data",
      "Step-by-step relocation action plan generator"
    ],
    challenges: [
      "Designing a coherent user journey that simplifies an inherently complex, multi-variable decision",
      "Sourcing and normalising reliable regional data across employment, housing, and services",
      "Building a compelling, polished prototype within a short hackathon timeframe"
    ],
    approaches: [
      "Conducted primary user research interviews to identify the core decision anxiety before designing any feature",
      "Structured the product around a persona-driven journey — mapping each persona's priorities to different platform entry points",
      "Used IBM watsonx.ai for NLU and recommendation logic, with a data layer pulling from ABS and government APIs"
    ],
    outcomes: [
      "Selected as IBM Global Top 50 at the IBM watsonx.ai Hackathon 2025",
      "Recognised for depth of user research and quality of AI integration",
      "Prototype demonstrated a complete end-to-end user journey from profiling to personalised action plan"
    ]
  }
  ,
  {
    id: "from-design-thinking-to-user-stories",
    type: "article",
    parentId: "ba-practice",
    title: "From Design Thinking to User Stories: Discovery in Practice",
    desc: "How the Design Thinking framework finds the right solution: the five modes, the Double Diamond, and the translation into story maps, user stories, and acceptance criteria.",
    role: "Technical Business Analyst / Product Owner",
    tags: ["Article", "Design Thinking", "Story Mapping", "Requirements Engineering"],
    image: "assets/sabaihub-thumbnail.png",
    year: "2026",
    problemQuote: "The most common failure is not a missing feature; it is a built feature nobody asked for.",
    quoteSupportingOutside: true,
    "overview": [
      "Every user story begins long before it is written. The story on the card is ==the end of a conversation==: who does the work, how it happens today, where it breaks, and what 'better' means to the people involved. This piece is how I run that conversation, using the Design Thinking framework: the Stanford d.school's five modes (Empathize, Define, Ideate, Prototype, Test), with story mapping and requirements on the far side.",
      "I have run this loop in different shapes: facilitating **20+ Design Thinking workshops** for large Thai corporates, shaping MVP roadmaps as a BA and Product Owner, and most recently turning a massage-shop workflow into SabaiHub and an interpreting business into an operations system. __The method holds whether the build is done by a team or by me.__"
    ],
    "problemStatement": [
      "The Design Council's Double Diamond names the root cause: teams **skip the first diamond** (Discover and Define, where the problem itself is explored and agreed) and jump straight into the second, building the solution. 'One of the greatest mistakes is to omit the left-hand diamond and end up solving the wrong problem.'",
      "Design Thinking is the counterweight to that, but only when it runs as ==evidence, not as theatre==. A workshop is not a decision; an interview is not an opinion. The framework works because every mode produces an artifact you can test, trace, and hand over."
    ],
    "solution": [
      "The first mode is **Empathize**. I talk to the people who do the work, with the discipline of an empathy interview: three open questions, a talk split in their favour, and a note-taker capturing verbatims while I listen. I watch the workflow as it exists today. The artifacts are an empathy map (what people say, do, think, and feel) and a journey map of the current state. The contradictions are the gold: ==users who say one thing and do another== mark the real pain.",
      "The second mode is **Define**, where research becomes insight. Insights go on sticky notes, one per note, and are sorted silently into themes through affinity clustering. The outputs are a point-of-view statement, **'[User] needs [X] because [insight]'**, and a set of How Might We questions. HMW is the bridge to solutions: broad enough to allow invention, narrow enough not to smuggle in a solution.",
      "Ideate, Prototype, and Test are the three modes that find the solution. Ideation is structured: brainwriting and Crazy 8s force quantity before critique, then dot voting and an impact/effort grid surface the shortlist. Prototypes match the risk: paper for flow, wireframes for structure, Wizard of Oz for features whose backend does not exist yet. Every prototype is tested with a handful of real users, **observed rather than asked**. The maxim I work by: __prototype as if you know you're right, but test as if you know you're wrong__.",
      "What survives the test still has to pass the IDEO sweet spot: **desirable, feasible, and viable**. Desirability comes from the users; feasibility and viability enter when the prototype meets engineering and cost reality. ==Two out of three is a known failure mode==, and naming it changes what I pass into the backlog.",
      "The validated solution becomes a story map. Jeff Patton's method inherits Design Thinking's journey thinking: the workflow laid out left to right as backbone activities, tasks hanging underneath, and a release slice drawn as the ==walking skeleton==, the thinnest experience that still changes the work. Each step turns into user stories, each story into Given/When/Then acceptance criteria. The traceability runs end to end: ==insight to point-of-view to HMW to prototype to story to criterion to test==.",
      "I do this in my own work. From the Amigo Translator build, the voucher-pay story is a real example: 'As bookings staff, when an interpreter has completed a job on mobile (voucher with actual times, note, signature), I want the job's Voucher tab to show the completion record, let me correct actual times and type travel km/minutes from the internal system, show me the calculated pay before I commit, and let me click Approve to persist an immutable VoucherPay snapshot, so pay moves from spreadsheet guesswork to a reviewed, rate-correct, auditable approval.' The acceptance criteria that follow are **one line per behaviour**: 'Given a job completed via the mobile route, the Voucher tab shows actual start/finish, derived duration, note, signatory name/role, travel inputs, and a preview with Wage/Travel/Total'; and the guards are written down too, 'When staff PATCH times or travel after approval, the update returns 409 with no mutation.' The story carries the user's intent, the criteria make it testable, and ==the link from workflow to test case survives all the way to delivery==."
    ],
    "challengeApproachPairs": [
      {
        "challenge": "Workshops without a decider are theatre: everyone leaves energised and nothing changes.",
        "approach": "The sponsor frames the challenge and closes it. Every session ends with an artifact and a next-steps matrix: one named owner and a date per action, the first step inside a week."
      },
      {
        "challenge": "The loudest voice in the room decides, while the quietest person knows the real workflow.",
        "approach": "Write before you speak, anonymous dot votes, and reverse-seniority round-robin. The grid does the arguing, not the hierarchy."
      },
      {
        "challenge": "Stakeholders propose fixes before the problem is agreed, and the session becomes a design debate.",
        "approach": "Timebox divergence and convergence hard: problem agreement comes before any solution talk, and premature ideas go to the parking lot, visibly."
      },
      {
        "challenge": "Prototype findings evaporate when the build starts; the evidence never reaches the backlog.",
        "approach": "Treat the BA as the translation layer: test results re-rank the backlog, failed hypotheses get killed or descoped, and validated items pass Definition of Ready into delivery. Dual-track agile keeps discovery alive while delivery runs."
      }
    ],
    "outcomes": [
      "A solution chosen on behavioural evidence, not opinions: what users do with a prototype beats what a room says about an idea.",
      "A backlog with end-to-end traceability, from insight to acceptance criterion, so nothing enters the build without a mapped reason.",
      "An MVP cut that protects delivery: the walking skeleton is the thinnest slice that changes how the work happens day to day."
    ],
    "nextStage": [
      "This is the front half of my delivery loop. The back half is ==Spec-Driven Development==: the same discipline applied after the backlog, writing the spec, building against it, and testing against it. __Discovery and delivery, one loop.__"
    ],
    "sectionLabels": {
      "overview": "The Story",
      "problemStatement": "Why Discovery Goes Wrong",
      "solution": "The Framework, In Practice",
      "challengeApproachPairs": "Challenges + Approaches",
      "outcomes": "What It Produces",
      "nextStage": "Where This Fits"
    }
  }
];

const BUILD_NOTE_ORDER = [
  "why-i-built-sabaihub",
  "workflow-to-saas-architecture",
  "multi-tenancy-auth-and-data-ownership",
  "shipping-a-feature-through-the-full-sdlc",
  "technical-architecture-of-sabaihub",
  "ai-assisted-engineering-workflow",
  "technical-debt-debugging-and-refactoring",
  "what-sabaihub-taught-me-as-an-engineer",
  "from-design-thinking-to-user-stories"
];

window.BUILD_NOTES = window.PROJECTS
  .filter(project => project.type === "article")
  .map(note => ({ ...note, parentId: note.parentId || "sabaihub" }))
  .sort((a, b) => BUILD_NOTE_ORDER.indexOf(a.id) - BUILD_NOTE_ORDER.indexOf(b.id));

window.PROJECTS = window.PROJECTS.filter(project => project.type !== "article");

window.ACHIEVEMENTS = [
  { title: "Australia GovHack 2025", award: "Runner-up — Tasmania’s sole nominee", date: "Nov 2025" },
  { title: "IBM watsonx.ai Hackathon 2025", award: "Global Top 50 — RegionalMate", date: "Sep 2025" }
];
