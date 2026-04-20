export type SiteConfig = {
  name: string;
  role: string;
  location: string;
  heroTitleLead: string;
  heroTitleAccent: string;
  tagline: string;
  summary: string;
  availability: string;
  primaryCta: { label: "Contact me"; href: string };
  secondaryCta: { label: string; href: string };
};

export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  accent?: string;
  label: string;
};

export type ProblemCard = {
  id: string;
  icon: "ops" | "gov" | "research";
  title: string;
  pains: string[];
  gains: string[];
};

export type CaseChecklist = string[];

export type FeaturedWork = {
  id: string;
  kind: "product" | "project";
  tag: string;
  title: string;
  role: string;
  period?: string;
  summary: string;
  problem: string;
  actions: string[];
  result: string;
  evidence: string[];
  checklist: CaseChecklist;
  tools: string[];
  coverImage: string;
  preview: "sabaihub" | "govhack" | "relocation";
  links?: { label: string; href: string }[];
};

export type SkillCard = {
  id: string;
  icon: "translate" | "build" | "ai" | "deliver";
  title: string;
  summary: string;
  items: string[];
  badge?: "Popular" | "Current focus";
};

export type EvidenceAsset = {
  id: string;
  title: string;
  type: "resume" | "slides" | "doc" | "photo";
  href: string;
  note?: string;
};

export type ContactLink = {
  label: "LinkedIn" | "GitHub" | "Email";
  href: string;
  value: string;
  priority: number;
};

export type SectionLink = {
  id: "summary" | "work" | "skills" | "evidence" | "faq" | "contact";
  number: string;
  label: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
};

export const siteConfig: SiteConfig = {
  name: "Chris Kittichod",
  role: "Software Engineer",
  location: "Hobart, Tasmania",
  heroTitleLead: "Shipping software that solves",
  heroTitleAccent: "real operational problems",
  tagline:
    "Software engineer building practical products and agentic AI workflows that solve real problems.",
  summary:
    "I combine product analysis, user research, and hands-on implementation to turn messy operational problems into working software — moving from framing digital solutions to shipping them in production.",
  availability: "Open to internship, graduate, and early-career software roles",
  primaryCta: {
    label: "Contact me",
    href: "https://www.linkedin.com/in/chris-kittichod/",
  },
  secondaryCta: { label: "See selected work", href: "#work" },
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Evidence", href: "#evidence" },
  { label: "FAQ", href: "#faq" },
];

export const sectionLinks: SectionLink[] = [
  { id: "summary", number: "01", label: "Summary" },
  { id: "work", number: "02", label: "Work" },
  { id: "skills", number: "03", label: "Skills" },
  { id: "evidence", number: "04", label: "Evidence" },
  { id: "faq", number: "05", label: "FAQ" },
  { id: "contact", number: "06", label: "Contact" },
];

export const stats: Stat[] = [
  { value: "2", accent: " shops", label: "Live on SabaiHub in production" },
  { value: "20", accent: "+", label: "Design thinking workshops delivered" },
  { value: "Top ", accent: "50", label: "IBM watsonx.ai Hackathon 2025" },
  { value: "Spirit", label: "of GovHack award, Tasmania 2025" },
  { value: "EN", accent: " / TH", label: "Bilingual product & delivery" },
];

export const problems: ProblemCard[] = [
  {
    id: "ops",
    icon: "ops",
    title: "Messy operational workflows",
    pains: [
      "Paper rosters and WhatsApp juggling",
      "Generic salon tools that don't fit the shop",
      "Spreadsheets doing the job of software",
    ],
    gains: [
      "Multi-tenant SaaS used by live shops",
      "Scheduling, staff, and payouts in one place",
    ],
  },
  {
    id: "gov",
    icon: "gov",
    title: "Fragmented public services",
    pains: [
      "Permits scattered across agencies",
      "Policy copy with no clear next step",
      "Small businesses abandoning the flow",
    ],
    gains: [
      "AI-guided permit journey concept",
      "Only Tasmanian nominee + Spirit of GovHack",
    ],
  },
  {
    id: "research",
    icon: "research",
    title: "Ambiguous user decisions",
    pains: [
      "Relocation data that compares poorly",
      "Decisions made with too little signal",
      "Concepts that skip the real framing",
    ],
    gains: [
      "Research-led relocation platform concept",
      "Top 50 at IBM watsonx.ai Hackathon 2025",
    ],
  },
];

export const featuredWork: FeaturedWork[] = [
  {
    id: "sabaihub",
    kind: "product",
    tag: "Production SaaS",
    title: "SabaiHub",
    role: "Founder and Agentic Engineer",
    period: "2025 — Present",
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
    checklist: [
      "Multi-tenant architecture from day one",
      "Live usage in two operating shops",
      "End-to-end ownership: discovery to deploy",
      "Agentic AI workflow for faster iteration",
    ],
    tools: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
    coverImage: "/assets/covers/sabaihub.svg",
    preview: "sabaihub",
    links: [
      { label: "Product note", href: "/assets/docs/sabaihub-product-note.md" },
      { label: "GitHub", href: "https://github.com/kittoyeah" },
    ],
  },
  {
    id: "mybusiness-gov",
    kind: "project",
    tag: "Hackathon · Award",
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
    checklist: [
      "Only Tasmanian nominee, GovHack 2025",
      "Spirit of GovHack regional award",
      "Public-sector problem framing",
      "AI-guided user journey concept",
    ],
    tools: [
      "Requirements analysis",
      "Service design",
      "Journey mapping",
      "AI solution framing",
    ],
    coverImage: "/assets/covers/mybusiness-gov.svg",
    preview: "govhack",
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
    tag: "Hackathon · Top 50",
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
    checklist: [
      "Top 50, IBM watsonx.ai Hackathon 2025",
      "Research-led framing under time pressure",
      "Journey maps and requirement synthesis",
      "Decision-support focus, not data dump",
    ],
    tools: [
      "Problem discovery",
      "Journey mapping",
      "Requirements gathering",
      "Concept prototyping",
    ],
    coverImage: "/assets/covers/regional-relocation.svg",
    preview: "relocation",
    links: [
      {
        label: "Project summary",
        href: "/assets/docs/regional-relocation-platform.md",
      },
    ],
  },
];

export const skillGroups: SkillCard[] = [
  {
    id: "translate",
    icon: "translate",
    title: "Product to engineering translation",
    summary:
      "Turning messy workflows and competing needs into a practical, shippable scope.",
    items: [
      "Requirements analysis",
      "Technical scoping",
      "User story shaping",
      "MVP definition",
    ],
  },
  {
    id: "build",
    icon: "build",
    title: "Software delivery foundations",
    summary: "Modern web tooling, aimed at shipping something useful, not chasing novelty.",
    items: ["TypeScript", "React", "Next.js", "Astro", "Prisma", "PostgreSQL"],
  },
  {
    id: "ai",
    icon: "ai",
    title: "Agentic AI workflows",
    summary:
      "Using AI as a force multiplier across research, implementation, debugging, and iteration.",
    items: [
      "Claude Code",
      "Codex",
      "Prompt-driven prototyping",
      "AI-assisted testing",
    ],
    badge: "Current focus",
  },
  {
    id: "deliver",
    icon: "deliver",
    title: "Communication and delivery",
    summary:
      "Aligning stakeholders and moving ideas into buildable execution from a business-analysis background.",
    items: [
      "Design thinking",
      "Workshop facilitation",
      "Stakeholder management",
      "Backlog shaping",
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
    title: "Regional relocation brief",
    type: "doc",
    href: "/assets/docs/regional-relocation-platform.md",
    note: "Research-led framing from the IBM watsonx.ai challenge.",
  },
  {
    id: "facilitation-profile",
    title: "Facilitation & delivery notes",
    type: "slides",
    href: "/assets/docs/facilitation-and-delivery-notes.md",
    note: "Background for workshop, discovery, and communication work.",
  },
];

export const faqs: FAQItem[] = [
  {
    q: "What roles are you looking for?",
    a: "Internship, graduate, and early-career software engineering roles. I'm especially drawn to product-minded teams where discovery and delivery sit close together.",
  },
  {
    q: "Where are you based and can you relocate?",
    a: "I'm based in Hobart, Tasmania. I'm open to remote work across Australia and willing to relocate for the right role.",
  },
  {
    q: "How do you actually use AI in your work?",
    a: "I use agentic AI workflows like Claude Code and Codex for prototyping, implementation, debugging, and documentation — as a force multiplier, not a replacement for engineering judgement.",
  },
  {
    q: "Do you have production experience?",
    a: "Yes. SabaiHub is a live multi-tenant SaaS I built from scratch, now used by two operating massage shops, with full-stack ownership from discovery to deployment.",
  },
  {
    q: "Can I see source code or deeper writeups?",
    a: "GitHub is linked in the nav and footer. The evidence section has product notes, hackathon summaries, and delivery docs you can download.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.primaryCta.href,
    value: "linkedin.com/in/chris-kittichod",
    priority: 1,
  },
  {
    label: "GitHub",
    href: "https://github.com/kittoyeah",
    value: "github.com/kittoyeah",
    priority: 2,
  },
  {
    label: "Email",
    href: "mailto:chris.kittichod@gmail.com",
    value: "chris.kittichod@gmail.com",
    priority: 3,
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Work",
    links: [
      { label: "SabaiHub", href: "#work" },
      { label: "MyBusiness.gov", href: "#work" },
      { label: "Regional Relocation", href: "#work" },
    ],
  },
  {
    title: "Profile",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/chris-kittichod/",
        external: true,
      },
      { label: "GitHub", href: "https://github.com/kittoyeah", external: true },
      { label: "Email", href: "mailto:chris.kittichod@gmail.com" },
    ],
  },
  {
    title: "Documents",
    links: [
      { label: "Resume", href: "/assets/docs/chris-kittichod-resume.md" },
      {
        label: "SabaiHub product note",
        href: "/assets/docs/sabaihub-product-note.md",
      },
      {
        label: "GovHack summary",
        href: "/assets/docs/mybusiness-govhack-summary.md",
      },
    ],
  },
];
