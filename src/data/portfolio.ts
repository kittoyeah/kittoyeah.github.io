export type SiteConfig = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  primaryCta: { label: "Contact me"; href: string };
  secondaryCta: { label: "See selected work"; href: "#work" };
};

export type FeaturedWork = {
  id: string;
  kind: "product" | "project";
  title: string;
  role: string;
  period?: string;
  summary: string;
  problem: string;
  actions: string[];
  result: string;
  evidence: string[];
  tools: string[];
  coverImage: string;
  links?: { label: string; href: string }[];
};

export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type EvidenceAsset = {
  id: string;
  title: string;
  type: "resume" | "slides" | "doc" | "photo";
  href: string;
  thumbnail?: string;
  note?: string;
};

export type ContactLink = {
  label: "LinkedIn" | "GitHub" | "Email";
  href: string;
  priority: number;
};

export type SectionLink = {
  id: "summary" | "work" | "skills" | "evidence" | "contact";
  number: string;
  label: string;
};

export type HeroSignal = {
  label: string;
  value: string;
};

export const siteConfig: SiteConfig = {
  name: "Chris Kittichod",
  role: "Software Engineer",
  tagline:
    "Software engineer building practical products and agentic AI workflows that solve real problems.",
  summary:
    "I combine product analysis, user research, and hands-on implementation to turn messy operational problems into working software. Based in Hobart, Tasmania, I am moving from framing digital solutions to shipping them in production for real teams and customers.",
  // Replace this with the exact public profile URL before launch if needed.
  primaryCta: {
    label: "Contact me",
    href: "https://www.linkedin.com/in/chris-kittichod/",
  },
  secondaryCta: { label: "See selected work", href: "#work" },
};

export const sectionLinks: SectionLink[] = [
  { id: "summary", number: "01", label: "Summary" },
  { id: "work", number: "02", label: "Work" },
  { id: "skills", number: "03", label: "Skills" },
  { id: "evidence", number: "04", label: "Evidence" },
  { id: "contact", number: "05", label: "Contact" },
];

export const heroSignals: HeroSignal[] = [
  { label: "Current base", value: "Hobart, Tasmania" },
  { label: "Live product reach", value: "2 active massage shops" },
  { label: "Workshop delivery", value: "20+ design thinking sessions" },
  { label: "Career focus", value: "Early-career software engineering roles" },
];

export const featuredWork: FeaturedWork[] = [
  {
    id: "sabaihub",
    kind: "product",
    title: "SabaiHub",
    role: "Founder and Agentic Engineer",
    period: "2025 - Present",
    summary:
      "A production SaaS platform for Thai massage businesses in Australia, built to replace fragmented booking, staff, and business operations workflows.",
    problem:
      "Thai massage businesses often rely on a patchwork of generic salon tools, spreadsheets, and manual coordination that do not reflect how their shops actually run day to day.",
    actions: [
      "Scoped the product around appointments, staff operations, payouts, and shop management instead of treating booking as an isolated feature.",
      "Built the product with Next.js, TypeScript, Prisma, Supabase, and PostgreSQL while owning discovery, delivery, testing, and deployment.",
      "Used agentic AI workflows to accelerate prototyping, documentation, implementation, and iteration without outsourcing product judgment.",
    ],
    result:
      "Launched a working SaaS product in roughly three months and validated it with live usage in operational shop environments.",
    evidence: [
      "Production product launched and used by 2 live shops.",
      "End-to-end ownership across product framing, engineering, QA, and release.",
      "Multi-tenant architecture with scheduling, staff, and business-management capability.",
    ],
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
    coverImage: "/assets/covers/sabaihub.svg",
    links: [
      {
        label: "Product note",
        href: "/assets/docs/sabaihub-product-note.md",
      },
      {
        label: "GitHub profile",
        href: "https://github.com/kittoyeah",
      },
    ],
  },
  {
    id: "mybusiness-gov",
    kind: "project",
    title: "MyBusiness.gov",
    role: "Solution Designer and Product Strategist",
    period: "GovHack 2025",
    summary:
      "An AI-assisted concept for simplifying complex permit and licensing journeys for small businesses navigating multiple government processes.",
    problem:
      "Small business owners face fragmented licensing and permit flows across agencies, which creates friction, duplicated effort, and uncertainty about the next required step.",
    actions: [
      "Analysed multi-step government permit processes and mapped the friction points that made them hard for small businesses to navigate.",
      "Shaped an AI-powered concept that turned policy and process complexity into a clearer user path.",
      "Presented the work as a concise, user-centred solution rather than a purely technical hackathon prototype.",
    ],
    result:
      "The project became the only nominated entry from Tasmania and was recognised with the Spirit of GovHack award in the region.",
    evidence: [
      "Only nominated Tasmanian project in GovHack 2025.",
      "Recognised as Spirit of GovHack in Tasmania.",
      "Strong proof of structured problem framing, public-sector context, and communication clarity.",
    ],
    tools: [
      "Requirements analysis",
      "User research",
      "Service design",
      "Journey mapping",
      "AI solution framing",
    ],
    coverImage: "/assets/covers/mybusiness-gov.svg",
    links: [
      {
        label: "Achievement note",
        href: "/assets/docs/mybusiness-govhack-summary.md",
      },
    ],
  },
  {
    id: "regional-relocation",
    kind: "project",
    title: "Regional Relocation Platform",
    role: "Research-Led Product Builder",
    period: "IBM watsonx.ai Hackathon 2025",
    summary:
      "A relocation platform concept designed to reduce the information and planning gap for people moving from metropolitan areas to regional communities.",
    problem:
      "Relocating from a major city to a regional area involves fragmented location, lifestyle, and service information that is difficult to compare or act on confidently.",
    actions: [
      "Conducted user research and business process analysis to understand relocation pain points and decision criteria.",
      "Created journey maps and requirement framing to convert complex location-based data needs into a more usable concept.",
      "Positioned the concept around user clarity and real decision support instead of raw data aggregation.",
    ],
    result:
      "The project placed in the top 50 of the IBM watsonx.ai Hackathon 2025 and demonstrated strong product framing under time pressure.",
    evidence: [
      "Selected in the top 50 of the hackathon.",
      "Clear demonstration of research synthesis and opportunity framing.",
      "Strong example of turning ambiguity into a usable product direction.",
    ],
    tools: [
      "Problem discovery",
      "Journey mapping",
      "Requirements gathering",
      "Concept prototyping",
      "AI-enabled ideation",
    ],
    coverImage: "/assets/covers/regional-relocation.svg",
    links: [
      {
        label: "Project summary",
        href: "/assets/docs/regional-relocation-platform.md",
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Product to engineering translation",
    summary:
      "I am strongest when the work starts messy: unclear workflows, competing needs, and technical tradeoffs that still need a practical decision.",
    items: [
      "Requirements analysis",
      "Technical scoping",
      "User story shaping",
      "Feasibility framing",
      "MVP definition",
    ],
  },
  {
    title: "Software delivery foundations",
    summary:
      "I build with modern web tooling and focus on shipping something coherent, testable, and useful rather than chasing stack novelty.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Astro",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "GitHub Actions",
    ],
  },
  {
    title: "Agentic AI workflows",
    summary:
      "I use AI as a force multiplier for research, implementation, debugging, documentation, and iteration while keeping the product and engineering decisions accountable.",
    items: [
      "Codex",
      "Claude Code",
      "Prompt-driven prototyping",
      "AI-assisted testing",
      "Workflow automation",
    ],
  },
  {
    title: "Communication and delivery",
    summary:
      "My background in business analysis and product ownership makes me effective at aligning stakeholders and moving ideas into buildable execution.",
    items: [
      "Design thinking",
      "Workshop facilitation",
      "Stakeholder management",
      "Backlog shaping",
      "Cross-functional delivery",
    ],
  },
];

export const evidenceAssets: EvidenceAsset[] = [
  {
    id: "resume",
    title: "Resume draft",
    type: "resume",
    href: "/assets/docs/chris-kittichod-resume.md",
    note: "Current software-engineering focused resume draft.",
  },
  {
    id: "sabaihub-note",
    title: "SabaiHub product note",
    type: "doc",
    href: "/assets/docs/sabaihub-product-note.md",
    note: "Condensed product context, scope, and outcomes.",
  },
  {
    id: "govhack-summary",
    title: "GovHack concept summary",
    type: "slides",
    href: "/assets/docs/mybusiness-govhack-summary.md",
    note: "Short narrative of the public-sector problem and response.",
  },
  {
    id: "relocation-summary",
    title: "Regional relocation project brief",
    type: "doc",
    href: "/assets/docs/regional-relocation-platform.md",
    note: "Research-led framing from the IBM watsonx.ai challenge.",
  },
  {
    id: "facilitation-profile",
    title: "Facilitation and delivery notes",
    type: "slides",
    href: "/assets/docs/facilitation-and-delivery-notes.md",
    note: "Background evidence for workshop, discovery, and communication work.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.primaryCta.href,
    priority: 1,
  },
  {
    label: "GitHub",
    href: "https://github.com/kittoyeah",
    priority: 2,
  },
  {
    label: "Email",
    href: "mailto:chris.kittichod@gmail.com",
    priority: 3,
  },
];
