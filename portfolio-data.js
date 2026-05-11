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
    metrics: [
      { value: "3 months", label: "from build to production" },
      { value: "Live shop", label: "real operating environment" },
      { value: "1 platform", label: "appointments, staff, records, reporting" }
    ],
    beforeAfter: {
      before: [
        "Bookings happening over WhatsApp",
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
      "I owned the full delivery loop: product discovery, workflow analysis, requirements, UX direction, system design, AI-assisted implementation, testing, deployment, and iteration with real users.",
      "The product was delivered through a specification-driven, AI-assisted development workflow, where business needs were translated into clear feature requirements, data models, acceptance criteria, and implementation tasks before being built and released."
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
    engineeringDecisions: [
      "Used Next.js and TypeScript to support a modern full-stack application structure with safer data handling and clearer development boundaries.",
      "Used Supabase and PostgreSQL to support relational business data, authentication, and production-ready storage.",
      "Used Prisma to make database schema management, migrations, and data access easier to structure and maintain.",
      "Used Vercel for fast deployment, preview builds, environment management, and production release.",
      "Designed role-based access so different users, such as owners and staff, could interact with the system according to their responsibilities.",
      "Used specification-driven development to reduce ambiguity before implementation, especially because the product was built with heavy AI-assisted development."
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

window.ACHIEVEMENTS = [
  { title: "GovHack 2025", award: "Runner-up — Red Tape Navigator", date: "Nov 2025" },
  { title: "IBM watsonx.ai Hackathon 2025", award: "Global Top 50 — RegionalMate", date: "Sep 2025" }
];
