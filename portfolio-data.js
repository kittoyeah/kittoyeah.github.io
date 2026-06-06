// ── Portfolio data ──────────────────────────────────────────────
window.PROJECTS = [
  {
    id: "sabaihub",
    title: "SabaiHub",
    desc: "Production SaaS platform for Thai massage businesses in Australia, bringing appointment scheduling, staff rostering, customer records, role-based access, and business reporting into one system.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Prisma"],
    tools: ["Next.js", "React", "TypeScript", "Prisma", "Supabase", "PostgreSQL", "Vercel", "Tailwind CSS"],
    image: "https://picsum.photos/seed/sabaihub/1200/800",
    year: "2025",
    badge: "Live in Production",
    summary: {
      what: "Production-grade SaaS for Thai massage businesses in Australia — appointments, rosters, customer records, and reporting in one platform.",
      did: "Solo end-to-end delivery — discovery, requirements, system design, full-stack build, deployment, and live iteration with the operator.",
      result: "Live in 3 months instead of 6+; one platform now replaces four disconnected tools (WhatsApp, paper, spreadsheets, generic bookers)."
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
        "Unified booking dashboard",
        "Digital rostering with staff availability",
        "Real-time revenue analytics",
        "Single source of truth for customer records",
        "Live KPIs for owners across the business"
      ]
    },
    overview: "SabaiHub is a production SaaS platform built for Thai massage businesses in Australia. It brings appointment scheduling, staff rostering, customer records, role-based access, and business reporting into one system, replacing fragmented workflows across messaging apps, paper rosters, spreadsheets, and generic booking tools.",
    problemQuote: "Disconnected tools create missed appointments, roster confusion, duplicated work, poor visibility into business performance, and extra admin work for owners and staff.",
    quoteSupportingOutside: true,
    problemStatement: [
      "Many Thai massage businesses manage daily operations through disconnected tools. Bookings may happen through messaging apps, rosters may be kept on paper, revenue may be tracked in spreadsheets, and customer information may sit across multiple places.",
      "This creates operational problems such as missed appointments, roster confusion, duplicated work, poor visibility into business performance, and extra admin work for owners and staff."
    ],
    solution: [
      "SabaiHub consolidates core shop operations into a single platform. Instead of switching between separate tools for booking, staff management, and reporting, business owners can manage daily workflows in one place.",
      "The product was built and launched to production within 3 months and is used in a live shop environment."
    ],
    keyDeliverables: [
      "Appointment scheduling and booking management",
      "Staff rostering with shift assignment and availability tracking",
      "Customer and business records",
      "Role-based access for owners and staff",
      "Business dashboard with revenue and performance metrics",
      "Production deployment with environment management"
    ],
    myContribution: [
      "I adapted my five-phase delivery framework to SabaiHub: discover, define, design, prepare, then build, test, and deploy with feedback from real shop usage.",
      "The work combined Technical BA practice with software delivery: real user conversations, workflow analysis, MVP scoping, system design, data modelling, specification-driven development, and AI-assisted implementation."
    ],
    workPhases: [
      {
        phase: "Discover",
        detail: "Talked with real users and industry-adjacent stakeholders by role: owner, manager, receptionist, and therapist. Mapped pain around phone bookings, paper rosters, spreadsheets, staff coordination, payment models, and visibility gaps."
      },
      {
        phase: "Define",
        detail: "Turned messy shop operations into MVP scope: appointments, calendar, staff, services, shop setup, roles, permissions, and foundations for payments and reporting. Wrote user stories, acceptance criteria, and release boundaries so future ideas did not overload version one."
      },
      {
        phase: "Design",
        detail: "Researched technical options and tradeoffs: generic booking tools versus custom workflow fit, delivery speed versus data-model complexity, and how tenant, shop, user, staff assignment, role, appointment, service, and payment entities should relate."
      },
      {
        phase: "Prepare",
        detail: "Set up the delivery harness: repo instructions, AI-agent context, specification-driven tasks, auth and permission guardrails, validation patterns, and review loops so AI-assisted development stayed tied to the product model."
      },
      {
        phase: "Build, Test, Deploy",
        detail: "Built and iterated the Next.js, TypeScript, Supabase, PostgreSQL, Prisma, and Vercel product with schema changes, Server Actions, UI flows, targeted testing, deployment, and live feedback from shop usage."
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
        challenge: "Compressing product discovery, design, implementation, testing, and deployment into a 3-month delivery window.",
        approach: "Used a specification-driven workflow to clarify requirements, data models, acceptance criteria, and implementation tasks before build work."
      },
      {
        challenge: "Translating non-technical shop workflows into structured software requirements and usable product features.",
        approach: "Mapped daily shop operations into product flows, feature requirements, and data structures that matched how owners and staff actually work."
      },
      {
        challenge: "Designing for users with varying levels of digital literacy while keeping the system practical for daily business operations.",
        approach: "Kept workflows operationally direct, consolidated related tasks, and iterated against feedback from real shop usage."
      },
      {
        challenge: "Maintaining quality while using AI-assisted development heavily across implementation, debugging, and iteration.",
        approach: "Used AI to accelerate implementation while keeping ownership of requirements, release decisions, testing, deployment, and production iteration."
      }
    ],
    outcomes: [
      "Launched SabaiHub to production within 3 months.",
      "Onboarded Thai massage shops as active production users.",
      "Consolidated appointments, staff operations, and business management into one platform.",
      "Reduced reliance on multiple disconnected tools.",
      "Created a real production case study for AI-assisted software delivery."
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
    desc: "AI-powered platform that gives small businesses a single ABN-based entry point to identify relevant permits, licences, and support programs — replacing fragmented government websites.",
    tags: ["AI", "React", "UX Design", "Gov Tech"],
    tools: ["React", "LLM APIs", "ABN Lookup API", "Figma", "Miro"],
    image: "https://picsum.photos/seed/govtech/1200/800",
    year: "2025",
    badge: "GovHack Runner-up",
    overview: "MyBusiness.gov is an AI-powered civic platform that simplifies the regulatory landscape for Australian small business owners. By entering just an ABN, business owners receive a personalised view of the licences, permits, and government support programs that apply to their specific business type.",
    problemStatement: "Starting or running a small business in Australia means navigating over 10 separate government websites across federal, state, and local levels to understand what licences, permits, and obligations apply to you. Most business owners either miss compliance requirements or spend hours on bureaucratic research that should take minutes.",
    solution: "A unified AI-powered dashboard that takes an ABN as input, identifies the business type and industry, and surfaces the exact government requirements, support programs, and next steps relevant to that specific business — presented in plain English.",
    keyDeliverables: [
      "ABN lookup and business profile identification",
      "AI-driven permit and licence recommendation engine",
      "Plain-language regulatory summary tailored to business type",
      "Government support program discovery module",
      "Responsive web interface optimised for low-digital-literacy users"
    ],
    challenges: [
      "Aggregating and normalising fragmented data across federal, state, and local government sources",
      "Translating complex regulatory language into plain English without losing accuracy",
      "Building a full working prototype as a solo entry within a 48-hour hackathon"
    ],
    approaches: [
      "Used LLM-based intent classification to map business type (from ABN) to relevant regulatory categories",
      "Prioritised the most common business types in Tasmania to scope the prototype feasibly within 48 hours",
      "Applied a UX-first approach — wireframed the user journey before writing any code to validate the core flow"
    ],
    outcomes: [
      "Runner-up at GovHack 2025 in the Red Tape Navigator challenge",
      "Only selected Tasmanian project in the national competition",
      "Built and submitted as a solo entry within the 48-hour hackathon window"
    ]
  },
  {
    id: "regionalmate",
    title: "RegionalMate",
    desc: "AI-powered relocation planning platform helping users evaluate moves from metropolitan to regional Australia — turning fragmented decisions across jobs, housing, schools, and lifestyle into a structured path.",
    tags: ["IBM watsonx", "AI", "UX Research", "React"],
    tools: ["IBM watsonx.ai", "React", "ABS Data APIs", "Figma", "Miro"],
    image: "https://picsum.photos/seed/regional/1200/800",
    year: "2025",
    badge: "IBM Global Top 50",
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
  { title: "GovHack 2025", award: "Runner-up — Red Tape Navigator", date: "Nov 2025" },
  { title: "IBM watsonx.ai Hackathon 2025", award: "Global Top 50 — RegionalMate", date: "Sep 2025" }
];
