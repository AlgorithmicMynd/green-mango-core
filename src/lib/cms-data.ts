// Mock data mirroring a Sanity schema. Swap with sanityClient.fetch later.
export const hero = {
  eyebrow: "Enterprise AI Platform",
  title: "Enterprise-Grade AI & Automation",
  highlight: "Scalable Solutions for Complex Challenges",
  subtitle:
    "We pair a full-stack engineering approach with next-gen AI to design solutions that scale with your customers and operations.",
  primaryCta: { label: "Get Started", href: "/contact" },
  secondaryCta: { label: "Request a Demo", href: "/contact" },
};

export const trustedLogos = [
  "FORTUNE 500",
  "salesforce",
  "Microsoft",
  "ORACLE",
  "Pfizer",
  "FORTUNE 500",
  "IBM",
  "DELOITTE",
];

export const departments = [
  {
    icon: "Cog",
    title: "Engineering & Platform",
    description:
      "Production-grade systems, distributed services, and developer-first APIs engineered for scale.",
    link: { label: "Learn More", href: "/services#software" },
  },
  {
    icon: "Megaphone",
    title: "Digital Marketing AI",
    description:
      "Campaign intelligence, audience segmentation, and content automation that compound revenue.",
    link: { label: "Learn More", href: "/services#marketing" },
  },
  {
    icon: "TrendingUp",
    title: "Enterprise Sales Solutions",
    description:
      "Pipeline intelligence and CRM integrations that turn signals into closed-won outcomes.",
    link: { label: "Learn More", href: "/services#automation" },
  },
  {
    icon: "Users",
    title: "Global HR Solutions",
    description:
      "Talent intelligence, engagement analytics, and workforce automation across geographies.",
    link: { label: "Learn More", href: "/services#ai" },
  },
];

export const features = [
  "Unified observability across data, models & agents",
  "SOC 2 Type II, HIPAA & ISO 27001 ready",
  "Bring-your-own-cloud with private VPC deployments",
  "Granular RBAC, audit logs & SSO",
  "99.99% uptime SLA with global edge",
  "Composable APIs & SDKs in every major language",
];

export const testimonials = [
  {
    quote:
      "Mango Stack AI cut our enterprise deployment time by 70% while raising model accuracy across the board.",
    author: "VP Engineering",
    company: "Fortune 100 Bank",
  },
  {
    quote:
      "The platform feels like a force multiplier — from data to decisions in days, not quarters.",
    author: "Chief Data Officer",
    company: "Global Retailer",
  },
  {
    quote:
      "Best-in-class governance and the cleanest developer experience we've seen.",
    author: "Director of AI",
    company: "Healthcare Leader",
  },
];

export const navMenus = {
  Products: [
    { label: "Platform", href: "/services#platform", desc: "Unified AI runtime" },
    { label: "API", href: "/services#api", desc: "Composable endpoints" },
    { label: "Integrations", href: "/services#integrations", desc: "100+ connectors" },
  ],
  Solutions: [
    { label: "Custom Software", href: "/services#software", desc: "Finance · Health · Retail" },
    { label: "AI Systems", href: "/services#ai", desc: "Automation · Analytics" },
    { label: "Digital Marketing", href: "/services#marketing", desc: "Growth & Campaigns" },
  ],
  Company: [
    { label: "About Us", href: "/about", desc: "Our mission & team" },
    { label: "Careers", href: "/about#careers", desc: "Join the team" },
    { label: "Contact", href: "/contact", desc: "Get in touch" },
  ],
};

// ─── Services Page ────────────────────────────────────────────────────────────

export const servicesHero = {
  eyebrow: "What We Build",
  title: "End-to-End Software Solutions",
  highlight: "Powered by AI, Built for Scale",
  subtitle:
    "From custom software to intelligent automation — every service is engineered to deliver measurable outcomes for complex enterprises.",
};

export const servicesList = [
  {
    id: "software",
    icon: "Code2",
    tag: "Core Service",
    title: "Custom Software Solutions",
    description:
      "We design and develop bespoke software tailored to your business workflows. From greenfield builds to legacy modernisation, we ship production-ready systems that scale.",
    bullets: [
      "Full-stack web & mobile applications",
      "Microservices & distributed architecture",
      "API design, integration & documentation",
      "Cloud-native deployments (AWS, GCP, Azure, Cloudflare)",
      "DevOps, CI/CD & infrastructure automation",
    ],
    cta: { label: "Discuss Your Project", href: "/contact" },
  },
  {
    id: "automation",
    icon: "Zap",
    tag: "Efficiency",
    title: "Advanced Automation",
    description:
      "Eliminate repetitive operations and unlock capacity across every department. Our automation layer integrates across your existing toolstack with zero-disruption rollouts.",
    bullets: [
      "Business process automation (RPA)",
      "Workflow orchestration & scheduling",
      "Data pipelines & ETL automation",
      "Cross-platform integrations (Salesforce, SAP, HubSpot, etc.)",
      "Automated reporting & compliance workflows",
    ],
    cta: { label: "See Automation in Action", href: "/contact" },
  },
  {
    id: "ai",
    icon: "Brain",
    tag: "Intelligence",
    title: "Artificial Intelligence Systems",
    description:
      "We build and deploy AI models that go beyond prototypes — with governance, observability, and production reliability baked in from day one.",
    bullets: [
      "LLM fine-tuning & RAG pipelines",
      "Computer vision & NLP systems",
      "Predictive analytics & forecasting",
      "AI agents & autonomous workflows",
      "MLOps: model versioning, monitoring & retraining",
    ],
    cta: { label: "Explore AI Solutions", href: "/contact" },
  },
  {
    id: "marketing",
    icon: "Megaphone",
    tag: "Growth",
    title: "Digital Marketing Services",
    description:
      "AI-powered campaigns, data-driven targeting, and content intelligence that drives real pipeline — not vanity metrics.",
    bullets: [
      "SEO strategy & technical optimisation",
      "Paid media management (Google, Meta, LinkedIn)",
      "Content marketing & AI-assisted copywriting",
      "Marketing automation & lead nurturing",
      "Analytics, attribution & conversion optimisation",
    ],
    cta: { label: "Grow Your Pipeline", href: "/contact" },
  },
];

// ─── About Page ───────────────────────────────────────────────────────────────

export const aboutHero = {
  eyebrow: "Who We Are",
  title: "Built by Engineers,",
  highlight: "Driven by Impact",
  subtitle:
    "Mango Stack AI was founded on one belief: the best technology should be accessible to every business, regardless of size.",
};

export const aboutMission = {
  headline: "Our Mission",
  body: "We exist to close the gap between enterprise-grade technology and ambitious businesses. By combining deep engineering expertise with AI-native thinking, we help our clients move faster, operate smarter, and scale further than they thought possible.",
};

export const aboutValues = [
  {
    icon: "Shield",
    title: "Built to Last",
    description:
      "We build for production, not demos. Every system is architected for reliability, security, and long-term maintainability.",
  },
  {
    icon: "Zap",
    title: "Speed with Precision",
    description:
      "We move fast without breaking things. Rapid iteration, tight feedback loops, and engineering discipline — always together.",
  },
  {
    icon: "Globe",
    title: "Global Mindset",
    description:
      "Our clients span continents. We design solutions that work across geographies, time zones, and regulatory frameworks.",
  },
  {
    icon: "Handshake",
    title: "Partners, Not Vendors",
    description:
      "We embed into your team, understand your context, and take ownership of outcomes — not just deliverables.",
  },
];

export const aboutStats = [
  { value: "70%", label: "Avg. deployment time reduction" },
  { value: "50+", label: "Enterprise clients served" },
  { value: "99.99%", label: "Platform uptime SLA" },
  { value: "4", label: "Core service divisions" },
];

export const aboutTeam = {
  headline: "Leadership",
  lead: {
    name: "Harsh Shukla",
    role: "Founder & CEO",
    bio: "Harsh brings deep expertise in enterprise software engineering, AI systems, and digital strategy. He founded Mango Stack AI to deliver the kind of thoughtful, scalable technology that transforms how businesses operate.",
    contact: "harsh.shukla@mangostackai.com",
    phone: "+91 9315507269",
  },
};

// ─── Contact Page ─────────────────────────────────────────────────────────────

export const contactHero = {
  eyebrow: "Get In Touch",
  title: "Let's Build Something",
  highlight: "Remarkable Together",
  subtitle:
    "Whether you have a specific project in mind or just want to explore what's possible — our team is ready to talk.",
};

export const contactDetails = {
  email: "harsh.shukla@mangostackai.com",
  phone: "+91 9315507269",
  website: "www.mangostackai.com",
  responseTime: "We typically respond within 24 hours.",
};

export const contactReasons = [
  { icon: "Code2", label: "Custom Software Development" },
  { icon: "Zap", label: "Process Automation" },
  { icon: "Brain", label: "AI & ML Integration" },
  { icon: "Megaphone", label: "Digital Marketing" },
  { icon: "MessageCircle", label: "General Enquiry" },
];
