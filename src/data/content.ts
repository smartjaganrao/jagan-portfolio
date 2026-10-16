export const profile = {
  name: "Jagadeeswararao B",
  shortName: "Jagan",
  initials: "JB",
  role: "Senior React JS Developer · Frontend Architect",
  domain: "Banking · Fintech · Generative AI",
  tagline:
    "8+ years crafting high-performance React interfaces for banking & fintech — now building the next generation of GenAI and Claude-powered product experiences.",
  summary:
    "Results-driven Senior React JS Developer with 8+ years of experience building scalable, high-performance web applications in Banking, Fintech, and Enterprise domains. Proven expertise in React.js, Redux, TypeScript, and modern JavaScript with a strong record of delivering responsive, accessible UIs that handle high-volume financial transactions. Currently leading frontend development at Capgemini for a major banking client, driving performance improvements and cross-team collaboration. Actively upskilling in Generative AI, LangChain, and LLM-powered applications.",
  location: "Chennai, India",
  email: "smartjaganrao@gmail.com",
  phone: "+91 8122140332",
  availability: "Open to senior frontend & GenAI product roles",
  socials: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/jagadeeswararao-b",
      icon: "linkedin" as const,
    },
    {
      label: "GitHub",
      href: "https://github.com/jagadeeswararao-b",
      icon: "github" as const,
    },
    {
      label: "Email",
      href: "mailto:smartjaganrao@gmail.com",
      icon: "mail" as const,
    },
  ],
  stats: [
    { value: "8+", label: "Years experience" },
    { value: "2M+", label: "Users served" },
    { value: "62→91", label: "Lighthouse gains" },
    { value: "40+", label: "UI components" },
  ],
  languages: [
    { name: "English", level: "Professional" },
    { name: "Tamil", level: "Native" },
    { name: "Marathi", level: "Conversational" },
  ],
  exploring: [
    "Generative AI",
    "Agentic AI",
    "LangChain RAG pipelines",
    "AI-powered Fintech",
    "Claude / LLM product UX",
  ],
}

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#ai", label: "Gen AI" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export const skills = {
  frontend: [
    { name: "React.js / Hooks", level: 96 },
    { name: "TypeScript / JavaScript ES6+", level: 94 },
    { name: "Redux / Redux Toolkit", level: 93 },
    { name: "HTML5 · CSS3 · Bootstrap 5", level: 92 },
    { name: "Responsive · Atomic Design", level: 94 },
    { name: "Context API · React Router", level: 91 },
  ],
  genai: [
    { name: "LangChain · RAG pipelines", level: 88 },
    { name: "Prompt Engineering", level: 90 },
    { name: "Ollama · ChromaDB", level: 85 },
    { name: "CrewAI · Agentic AI", level: 82 },
    { name: "Claude / LLM product UX", level: 87 },
    { name: "AI-powered Fintech apps", level: 84 },
  ],
  engineering: [
    { name: "Jest · React Testing Library", level: 90 },
    { name: "WebDriverIO (E2E)", level: 86 },
    { name: "REST APIs · WebSockets", level: 90 },
    { name: "FastAPI · PHP · Node.js", level: 82 },
    { name: "AWS EC2 · S3 · GitLab CI/CD", level: 84 },
    { name: "MySQL · ChromaDB", level: 83 },
  ],
}

export const skillCloud = [
  "React.js",
  "TypeScript",
  "Redux Toolkit",
  "JavaScript ES6+",
  "LangChain",
  "RAG",
  "Ollama",
  "ChromaDB",
  "Prompt Engineering",
  "CrewAI",
  "Jest",
  "WebDriverIO",
  "FastAPI",
  "WebSockets",
  "AWS",
  "GitLab CI/CD",
  "Bootstrap 5",
  "React Hook Form",
  "Recharts",
  "Razorpay",
  "Figma",
  "Atomic Design",
  "WCAG 2.1 AA",
  "Banking UI",
  "Fintech",
]

export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  category: "Banking" | "Fintech" | "Enterprise" | "AI / GenAI" | "IoT / Mobile"
  metrics: { label: string; value: string }[]
  gradient: string
  featured?: boolean
  year: string
  org?: string
}

export const projects: Project[] = [
  {
    id: "digital-banking",
    title: "Digital Banking Portal",
    subtitle: "Retail customer dashboard for 2M+ active users",
    description:
      "End-to-end redesign and performance optimization of a retail banking portal — account management, fund transfers (NEFT/RTGS/IMPS), and product discovery. Architected a 40+ component Atomic Design library, Redux Toolkit state, and Lighthouse score 62→91.",
    tags: ["React", "Redux Toolkit", "TypeScript", "Jest", "WebDriverIO", "AWS S3"],
    category: "Banking",
    metrics: [
      { label: "Users", value: "2M+" },
      { label: "Lighthouse", value: "91" },
      { label: "Dev speed", value: "+35%" },
    ],
    gradient: "from-violet-500/35 via-indigo-500/15 to-cyan-400/20",
    featured: true,
    year: "2024 – Present",
    org: "Capgemini · Major Private Bank",
  },
  {
    id: "trade-finance",
    title: "Trade Finance & LC System",
    subtitle: "Multi-step Letter of Credit workflow for corporate banking",
    description:
      "Complex 15+ step LC issuance wizard with conditional fields, real-time validation (React Hook Form + Yup), WebSocket document tracking, and Recharts trade analytics. 92% unit test coverage; 28% fewer production defects.",
    tags: ["React", "TypeScript", "WebSockets", "Recharts", "Figma", "Jest"],
    category: "Banking",
    metrics: [
      { label: "Form steps", value: "15+" },
      { label: "Coverage", value: "92%" },
      { label: "Defects", value: "−28%" },
    ],
    gradient: "from-cyan-400/30 via-blue-500/15 to-violet-500/25",
    featured: true,
    year: "2023",
    org: "Capgemini · Corporate Banking",
  },
  {
    id: "loan-origination",
    title: "Loan Origination System",
    subtitle: "Legacy jQuery/PHP → modern React SPA",
    description:
      "Front-end revamp for Home, Personal & Business loans. Page load 4.2s → 1.1s, credit score gauges, RBAC for RMs/Credit/Branch officers, responsive layouts (+45% mobile), Razorpay fee collection.",
    tags: ["React", "Context API", "Bootstrap 5", "Razorpay", "RBAC"],
    category: "Fintech",
    metrics: [
      { label: "Load time", value: "1.1s" },
      { label: "Mobile", value: "+45%" },
      { label: "From", value: "4.2s" },
    ],
    gradient: "from-emerald-400/25 via-teal-500/15 to-cyan-400/20",
    featured: true,
    year: "2022 – 2023",
    org: "Capgemini · Retail Lending",
  },
  {
    id: "ai-trading",
    title: "AI Trading Signals Platform",
    subtitle: "React + FastAPI + LangChain side project",
    description:
      "Exploratory GenAI platform combining React UI with FastAPI and LangChain for trading signal workflows — prompt systems, retrieval patterns, and fintech-oriented AI product UX.",
    tags: ["React", "FastAPI", "LangChain", "RAG", "Fintech AI"],
    category: "AI / GenAI",
    metrics: [
      { label: "Stack", value: "Full AI" },
      { label: "Focus", value: "Signals" },
      { label: "Domain", value: "Markets" },
    ],
    gradient: "from-pink-500/30 via-violet-500/20 to-amber-400/15",
    year: "Side project",
    org: "Personal · Exploring",
  },
  {
    id: "finsight",
    title: "FinSight Finance Dashboard",
    subtitle: "Personal finance intelligence UI",
    description:
      "Side project dashboard for personal finance visibility — charts, structured money views, and a foundation for AI-assisted insights in everyday financial decision-making.",
    tags: ["React", "Dashboards", "Fintech", "Charts"],
    category: "AI / GenAI",
    metrics: [
      { label: "Type", value: "Dashboard" },
      { label: "Domain", value: "PFM" },
      { label: "UI", value: "Data-dense" },
    ],
    gradient: "from-amber-400/25 via-orange-500/15 to-rose-500/20",
    year: "Side project",
    org: "Personal",
  },
  {
    id: "vending",
    title: "Smart Vending Platform",
    subtitle: "Admin portal for 50+ machines across locations",
    description:
      "React admin for product catalog, inventory, ad scheduling, real-time alerts, sales dashboards, and Razorpay cashless payments — PHP/Python APIs on AWS EC2.",
    tags: ["React", "PHP", "Python", "MySQL", "Razorpay", "AWS EC2"],
    category: "Enterprise",
    metrics: [
      { label: "Machines", value: "50+" },
      { label: "Payments", value: "Razorpay" },
      { label: "Realtime", value: "Alerts" },
    ],
    gradient: "from-indigo-400/25 via-violet-500/15 to-slate-400/15",
    year: "2021",
    org: "Srushty Global",
  },
  {
    id: "health-kiosk",
    title: "Digital Health Kiosk Suite",
    subtitle: "IoT height, weight & BP kiosks with WebSockets",
    description:
      "React UIs for sensor-driven health kiosks, wireless screen mirroring over local Wi-Fi, and C# desktop bridge for browser-to-device messaging.",
    tags: ["React", "WebSockets", "C#", "IoT", "Python"],
    category: "IoT / Mobile",
    metrics: [
      { label: "Sensors", value: "HWB+" },
      { label: "Link", value: "Wi-Fi" },
      { label: "Bridge", value: "C#" },
    ],
    gradient: "from-teal-400/25 via-cyan-500/15 to-blue-500/20",
    year: "2018 – 2020",
    org: "Srushty Global",
  },
  {
    id: "mamaope",
    title: "Mamaope Live Audio",
    subtitle: "5-channel stethoscope streaming for doctors",
    description:
      "Native Android app for real-time multi-channel heart/lung audio over Wi-Fi P2P — device discovery, secure connection, playback, recording, and export.",
    tags: ["Android", "Java", "Wi-Fi P2P", "Audio APIs"],
    category: "IoT / Mobile",
    metrics: [
      { label: "Channels", value: "5" },
      { label: "Mode", value: "Live" },
      { label: "Users", value: "Clinicians" },
    ],
    gradient: "from-rose-400/25 via-pink-500/15 to-violet-500/20",
    year: "2020",
    org: "Srushty Global",
  },
]

export type ExperienceItem = {
  company: string
  role: string
  period: string
  client?: string
  projects: {
    name: string
    period: string
    summary: string
    points: string[]
    stack: string
  }[]
}

export const experience: ExperienceItem[] = [
  {
    company: "Capgemini Technology Services India Limited",
    role: "Consultant – Senior React JS Developer",
    period: "Feb 2022 – Present",
    client: "Major Indian Private Sector Bank (BFS Domain)",
    projects: [
      {
        name: "Digital Banking Portal – Retail Customer Dashboard",
        period: "Jan 2024 – Present",
        summary:
          "End-to-end redesign and performance optimization of a retail banking portal serving 2M+ active users.",
        points: [
          "Architected React component library with 40+ reusable UI components using Atomic Design — 35% faster delivery across teams",
          "Redux Toolkit with normalized state for real-time balances & transactions — 60% better data consistency",
          "NEFT/RTGS/IMPS fund transfer flows with optimistic UI + rollback — 40% lower perceived latency",
          "React.lazy, Suspense, code splitting — Lighthouse performance 62 → 91",
          "WCAG 2.1 AA accessibility for RBI compliance; mentored 3 junior developers",
        ],
        stack: "React.js, Redux Toolkit, TypeScript, REST APIs, Jest, WebDriverIO, GitLab CI/CD, AWS S3",
      },
      {
        name: "Trade Finance & LC Management System",
        period: "Apr 2023 – Dec 2023",
        summary:
          "Multi-step Letter of Credit issuance and trade finance workflow for corporate banking clients.",
        points: [
          "15+ step LC wizard with conditional fields and Yup validation (React Hook Form)",
          "WebSocket document upload & tracking for 3–5 day LC processing cycles",
          "Recharts analytics for monthly volumes and currency exposure",
          "92% unit test coverage; 28% reduction in production defects",
          "Pixel-perfect delivery from Figma with UX designers",
        ],
        stack: "React.js, Redux, TypeScript, WebSockets, React Hook Form, Recharts, Jest, Figma",
      },
      {
        name: "Mobile-Responsive Loan Origination System (LOS)",
        period: "Feb 2022 – Mar 2023",
        summary:
          "Legacy jQuery/PHP loan origination revamped to a modern React SPA for Home, Personal & Business loans.",
        points: [
          "Migration cut average page load from 4.2s to 1.1s",
          "Animated credit score gauges + bureau API historical trends",
          "RBAC for Relationship Managers, Credit Officers, Branch Managers",
          "Responsive desktop/tablet/mobile layouts — 45% increase in mobile usage",
          "Razorpay SDK for loan processing fee collection",
        ],
        stack: "React.js, Context API, JavaScript ES6+, Bootstrap 5, Jest, REST APIs, Razorpay SDK",
      },
    ],
  },
  {
    company: "Srushty Global Solution Pvt Ltd",
    role: "Senior Software Engineer",
    period: "Aug 2018 – Feb 2022",
    projects: [
      {
        name: "Smart Vending Machine – Automated Retail Platform",
        period: "Jan 2021 – Nov 2021",
        summary: "Admin portal for 50+ vending machines across locations.",
        points: [
          "Product catalog, inventory, and digital advertisement scheduling",
          "REST APIs (PHP/Python) + Razorpay for cashless transactions",
          "Real-time inventory alerts and sales reporting dashboards",
        ],
        stack: "React.js, PHP, Python, MySQL, Razorpay, AWS EC2",
      },
      {
        name: "Digital Health Kiosk Suite",
        period: "Sep 2018 – Dec 2020",
        summary: "IoT health kiosks for height, weight, and blood pressure.",
        points: [
          "React UIs integrated with hardware sensors via WebSockets",
          "Wireless screen mirroring for mobile-to-kiosk sharing over Wi-Fi",
          "C# desktop bridge for browser-to-device messaging",
        ],
        stack: "React.js, JavaScript, HTML/CSS, Python, PHP, C#, WebSockets, MySQL",
      },
      {
        name: "Mamaope – 5-Channel Live Audio Streaming",
        period: "Jan 2020 – Mar 2020",
        summary: "Native Android stethoscope streaming for clinicians.",
        points: [
          "Real-time 5-channel heart & lung audio over Wi-Fi",
          "Device discovery, secure connection, multi-channel playback, record & export",
        ],
        stack: "Native Android (Java), Wi-Fi P2P, Audio APIs",
      },
    ],
  },
  {
    company: "Vendan Technologies Pvt Ltd",
    role: "Web Developer",
    period: "Mar 2018 – Jul 2018",
    projects: [
      {
        name: "Client business websites",
        period: "Mar 2018 – Jul 2018",
        summary: "Responsive business sites with SEO and PHP backends.",
        points: [
          "Mobile-first layouts and SEO optimization",
          "On-time delivery with progress reviews and requirement alignment",
        ],
        stack: "HTML, CSS, Bootstrap, JavaScript, jQuery, PHP",
      },
    ],
  },
  {
    company: "SA EON Softtech Pvt Ltd",
    role: "Web Designer",
    period: "Jun 2017 – Feb 2018",
    projects: [
      {
        name: "College & real estate websites",
        period: "Jun 2017 – Feb 2018",
        summary: "Designed and deployed client websites with hosting and SEO.",
        points: [
          "3 client websites including college and real estate promotions",
          "Hosting, domain configuration, and SEO for client properties",
        ],
        stack: "HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, Photoshop",
      },
    ],
  },
]

export const education = [
  {
    degree: "Bachelor of Computer Science & Technology",
    school: "K.C.G College of Technology, Chennai, Tamil Nadu",
    period: "2014 – 2017",
    detail: "Aggregate: 60%",
  },
  {
    degree: "Diploma in Computer Science Engineering",
    school: "PSB Polytechnic College, Tamil Nadu",
    period: "2011 – 2014",
    detail: "Aggregate: 76.11%",
  },
]

export const certifications = [
  {
    title: "React JS Certification",
    org: "Online Course",
    status: "Completed" as const,
  },
  {
    title: "Full Stack Web Development",
    org: "Online Course",
    status: "Completed" as const,
  },
  {
    title: "Generative AI & LangChain",
    org: "Self-directed · Colab, Ollama, ChromaDB, CrewAI",
    status: "Completed" as const,
  },
  {
    title: "AWS Cloud Fundamentals",
    org: "Cloud fundamentals track",
    status: "In Progress" as const,
  },
]

export const services = [
  {
    title: "Senior React & Banking UI",
    description:
      "Enterprise-grade React architecture for high-volume financial products — Atomic Design systems, performance, accessibility, and RBI-ready polish.",
    icon: "layout",
    deliverables: ["Component libraries", "Redux Toolkit", "WCAG 2.1 AA", "Lighthouse 90+"],
  },
  {
    title: "Fintech Product Interfaces",
    description:
      "Loan flows, trade finance wizards, payments (Razorpay), and real-time dashboards that feel trustworthy under pressure.",
    icon: "spark",
    deliverables: ["Multi-step forms", "Realtime UX", "Charts", "RBAC"],
  },
  {
    title: "GenAI & Claude Experiences",
    description:
      "LangChain RAG, agentic workflows, prompt systems, and LLM-powered fintech UI — bridging classic frontend craft with modern AI.",
    icon: "bot",
    deliverables: ["RAG UIs", "Agent panels", "Streaming chat", "Eval loops"],
  },
  {
    title: "Frontend Leadership",
    description:
      "Mentorship, code reviews, CI/CD alignment, and cross-team delivery — the same practices used leading bank frontend work at Capgemini.",
    icon: "globe",
    deliverables: ["Reviews", "Pairing", "Standards", "Delivery"],
  },
]

export const processSteps = [
  { step: "01", title: "Discover", text: "Map domain rules, users, and compliance constraints." },
  { step: "02", title: "Architect", text: "Component systems, state strategy, and performance budgets." },
  { step: "03", title: "Build", text: "Ship React modules with tests, a11y, and CI quality gates." },
  { step: "04", title: "Elevate", text: "GenAI layers, observability, and continuous UX refinement." },
]

export const aiCapabilities = [
  {
    title: "LangChain & RAG",
    body: "Retrieval pipelines with ChromaDB, grounded answers, and knowledge surfaces suited to fintech workflows.",
  },
  {
    title: "Prompt engineering",
    body: "Structured prompts, evaluation habits, and product UX that makes model behavior legible to operators.",
  },
  {
    title: "Agentic AI exploration",
    body: "Hands-on with CrewAI and multi-step agent patterns — designing control planes humans can trust.",
  },
  {
    title: "Local & cloud LLMs",
    body: "Ollama for local iteration; API-backed models for production-shaped experiments.",
  },
  {
    title: "AI × Fintech product UI",
    body: "Where banking-grade React craft meets generative features — signals, insights, and copilots.",
  },
  {
    title: "Claude-class experiences",
    body: "Streaming interfaces, tool-aware panels, and premium dark UI systems for AI-native products.",
  },
]

export const testimonials = [
  {
    quote:
      "Jagadeeswararao elevates banking frontend work to product excellence — Atomic Design libraries, performance discipline, and mentoring that lifts entire teams.",
    name: "Engineering peers",
    title: "Capgemini · BFS programs",
  },
  {
    quote:
      "Complex LC workflows and loan journeys shipped pixel-perfect from Figma, with test coverage and realtime reliability enterprise clients expect.",
    name: "Delivery stakeholders",
    title: "Banking & Fintech domain",
  },
  {
    quote:
      "He pairs deep React expertise with a clear path into GenAI — LangChain, RAG, and product thinking for the next wave of fintech experiences.",
    name: "Product collaborators",
    title: "AI & platform initiatives",
  },
]
