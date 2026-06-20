// ── Portfolio data ──────────────────────────────────────────────
window.PROJECTS = [
  {
    id: "sabaihub",
    title: "SabaiHub",
    desc: "A live operations platform for Thai massage businesses in Australia, bringing bookings, staff, customer records, and reporting into one place.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Prisma"],
    tools: ["Next.js", "React", "TypeScript", "Prisma", "Supabase", "PostgreSQL", "Vercel", "Tailwind CSS"],
    image: "assets/sabaihub-thumbnail.png",
    year: "2025",
    badge: "Live in Production",
    prototypeWalkthrough: {
      youtubeId: "EmhIAHmPn38",
      description: "A short walkthrough of the SabaiHub product flow, showing how shop operations move from fragmented tools into one working SaaS interface.",
      linkLabel: "Watch walkthrough"
    },
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
    tags: ["AWS Bedrock", "Multi-Agent", "RAG", "Next.js"],
    tools: ["AWS Bedrock", "Claude", "AWS Step Functions", "AWS Lambda", "Amazon S3", "Next.js", "TypeScript"],
    image: "assets/connection-copilot-architecture.svg",
    year: "2026",
    badge: "AWS Think Tank 2026",
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
    image: "https://picsum.photos/seed/why-sabaihub/1200/800",
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
    image: "https://picsum.photos/seed/sabaihub-architecture/1200/800",
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
    image: "https://picsum.photos/seed/sabaihub-technical-architecture/1200/800",
    year: "2026"
  },
  {
    id: "shipping-a-feature-through-the-full-sdlc",
    type: "article",
    title: "Shipping a Feature Through the Full SDLC",
    desc: "An end-to-end feature delivery story from discovery and requirements through implementation, testing, deployment, and iteration.",
    tags: ["Build Note", "SDLC", "Software Delivery"],
    image: "https://picsum.photos/seed/sabaihub-full-sdlc/1200/800",
    year: "2026"
  },
  {
    id: "multi-tenancy-auth-and-data-ownership",
    type: "article",
    title: "Multi-Tenancy, Auth, and Data Ownership",
    desc: "How SabaiHub separates identity, shop access, roles, permissions, tenant boundaries, and data ownership.",
    tags: ["Build Note", "Authentication", "Multi-Tenancy"],
    image: "https://picsum.photos/seed/sabaihub-multi-tenancy/1200/800",
    year: "2026"
  },
  {
    id: "ai-assisted-engineering-workflow",
    type: "article",
    title: "AI-Assisted Engineering Workflow",
    desc: "How specifications, agent context, guardrails, review loops, testing, and release decisions controlled AI-assisted development.",
    tags: ["Build Note", "AI-Assisted Development", "Engineering Workflow"],
    image: "https://picsum.photos/seed/sabaihub-ai-workflow/1200/800",
    year: "2026"
  },
  {
    id: "technical-debt-debugging-and-refactoring",
    type: "article",
    title: "Technical Debt, Debugging, and Refactoring Lessons",
    desc: "What became fragile in SabaiHub, how problems were diagnosed, and where focused refactoring is stronger than rewriting.",
    tags: ["Build Note", "Debugging", "Refactoring"],
    image: "https://picsum.photos/seed/sabaihub-technical-debt/1200/800",
    year: "2026"
  },
  {
    id: "what-sabaihub-taught-me-as-an-engineer",
    type: "article",
    title: "What SabaiHub Taught Me as an Engineer",
    desc: "A reflection on delivery strengths, technical gaps, engineering judgement, and the next stage of growth.",
    tags: ["Build Note", "Engineering Growth", "Reflection"],
    image: "https://picsum.photos/seed/sabaihub-engineering-lessons/1200/800",
    year: "2026"
  },
  {
    id: "mybusiness-gov",
    title: "MyBusiness.gov",
    desc: "Proof-of-concept GovHack service concept helping small businesses navigate licences, permits, tax obligations, and support programs across government tiers.",
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
  },
  {
    id: "allianz-tablet",
    title: "Insurance Agent Platform",
    hidden: true,
    desc: "UX overhaul and feature expansion of a tablet application for insurance agents and support teams at Allianz Thailand, driven by Design Thinking workshops and cross-functional stakeholder alignment.",
    tags: ["Product Analysis", "UX Research", "Design Thinking", "Agile"],
    tools: ["Figma", "Miro", "Jira", "Confluence", "Design Thinking methods"],
    image: "https://picsum.photos/seed/insurance/1200/800",
    year: "2023",
    overview: "A full discovery-to-delivery engagement at Allianz Thailand to overhaul and extend a tablet application used by insurance agents and their support teams. The project spanned stakeholder research, Design Thinking facilitation, functional specification writing, and UAT support across multiple business units.",
    problemStatement: "Allianz Thailand's agent-facing tablet application had accumulated feature requests and usability complaints from both agents in the field and internal support staff. There was no unified understanding of priorities, personas, or the root problems to solve — different business units had conflicting views on what the product should do.",
    solution: "A structured discovery process anchored in Design Thinking — aligning stakeholders around shared personas and problem statements before any feature decisions were made. This was followed by rigorous functional specification writing and close collaboration with the development team through delivery and UAT.",
    keyDeliverables: [
      "Stakeholder interview program across IT, business, agents, and support teams",
      "Empathy maps and persona definitions for primary user groups",
      "Design Thinking workshop series to build shared problem ownership",
      "Full functional specification documents for prioritised features",
      "User stories and acceptance criteria for the development team",
      "UAT facilitation and usability testing support"
    ],
    challenges: [
      "Aligning stakeholders from different business units who had conflicting priorities and no shared language for the problems",
      "Operating without a single product owner — decisions required consensus across IT, business, and field operations",
      "Translating field agent workflows (often informal and undocumented) into formal software requirements"
    ],
    approaches: [
      "Used structured Design Thinking facilitation — empathy mapping and How Might We sessions — to create psychological safety and surface unspoken problems",
      "Built a shared persona library that became the decision-making reference point across all subsequent feature discussions",
      "Maintained a living specification document updated collaboratively with the development team throughout delivery"
    ],
    outcomes: [
      "Achieved stakeholder alignment across 4 business units that had previously operated in silos",
      "Delivered a prioritised feature roadmap with full functional specifications, ready for development sprint planning",
      "Improved agent satisfaction scores based on UAT feedback compared to the previous version"
    ]
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
  "what-sabaihub-taught-me-as-an-engineer"
];

window.BUILD_NOTES = window.PROJECTS
  .filter(project => project.type === "article")
  .map(note => ({ ...note, parentId: "sabaihub" }))
  .sort((a, b) => BUILD_NOTE_ORDER.indexOf(a.id) - BUILD_NOTE_ORDER.indexOf(b.id));

window.PROJECTS = window.PROJECTS.filter(project => project.type !== "article");

window.ACHIEVEMENTS = [
  { title: "Australia GovHack 2025", award: "Runner-up — Tasmania’s sole nominee", date: "Nov 2025" },
  { title: "IBM watsonx.ai Hackathon 2025", award: "Global Top 50 — RegionalMate", date: "Sep 2025" }
];
