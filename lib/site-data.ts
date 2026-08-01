export const siteConfig = {
  name: "Abdishakour Mohe'd",
  role: "Software Engineer",
  ambition: "Future AI Researcher & ML Engineer",
  heroTitle: "Software Engineer | AI & ML Systems Engineer",
  tagline: "Building fintech, AI, and machine learning systems that solve real-world problems.",
  description:
    "A minimal developer portfolio focused on software engineering, systems thinking, and the path toward AI research and machine learning.",
  email: "a.shakour.mh@gmail.com",
  githubUrl: "https://github.com/Ashakour1",
  linkedInUrl: "https://www.linkedin.com/feed/",
} as const;

export const navigation = [
  { href: "/about", label: "About" },
  // { href: "/products", label: "Products" },
  { href: "/blog", label: "Publications" },
  // { href: "/daily-usage", label: "Tools" },
  { href: "/contact", label: "Contact" },
] as const;

export const focusAreas = [
  {
    title: "Software Engineering",
    description:
      "I build reliable web applications and backend systems with clean, maintainable code.",
  },
  {
    title: "Problem Solving",
    description:
      "I enjoy breaking down complex problems and turning them into simple, practical solutions.",
  },
  {
    title: "AI/ML Journey",
    description:
      "I am currently learning AI and machine learning through study, projects, and hands-on experiments.",
  },
] as const;

export const skillGroups = [
  {
    title: "Programming",
    description:
      "Core languages for shipping products, scripting workflows, and exploring ML tooling.",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Backend / Systems",
    description:
      "Practical engineering skills for APIs, architecture, and reliable system design.",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "System Design", "Performance"],
  },
  {
    title: "AI / ML",
    description:
      "Current learning and applied interests across modeling, experimentation, and ML workflows.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Model Evaluation",
      "Data Pipelines",
    ],
  },
] as const;

export type AboutEntry = {
  title: string;
  subtitle: string;
  description: string;
};

export type EducationEntry = {
  degree: string;
  institution: string;
  date: string;
  description: string;
  location: string;
};

export type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  logo: string;
};

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "Software Engineer",
    company: "Salaam Group",
    period: "2025 - present",
    logo: "/companies/salaamgroup_logo.jpeg",
  },
  {
    title: "CVO & SW Engineer",
    company: "Relia Trusty",
    period: "2024 - July 2024",
    logo: "/companies/relia-trusty.jpg",
  },
  {
    title: "Chief Technology Officer",
    company: "Manzilini",
    period: "2025 - present",
    logo: "/companies/manzilini.jpg",
  },
  {
    title: "Software Developer",
    company: "Heegan Tech",
    period: "2025 - June 2025",
    logo: "/companies/heegan-tech.jpg",
  },
  {
    title: "Chief Development Officer",
    company: "JUTSA",
    period: "2024 - 2025",
    logo: "/companies/jutsa.jpg",
  },
  {
    title: "IT Consultant",
    company: "Hospital Uniso",
    period: "2024 - 2025",
    logo: "/companies/hospital-uniso.jpg",
  },
  {
    title: "Fullstack Developer",
    company: "Matso Org",
    period: "2022 - 2024",
    logo: "/companies/matso-org.jpg",
  },
] as const;

export const educationEntries: EducationEntry[] = [
  {
    degree: "Primary & Secondary",
    institution: "Al Imra Primary and Secondary",
    date: "2012 - 2024",
    description:
      "I completed my education at Al-Imra Primary and Secondary School, where I built a strong academic foundation and developed essential skills that prepared me for future challenges.",
    location: "Mogadishu, Somalia",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Jamhuuriya University of Science and Technology",
    date: "2021 - 2025",
    description:
      "I am currently in my seventh semester at Jamhuuriya University of Science and Technology, pursuing a degree in Computer Science. I have a strong foundation in programming and software development and am a member of the IT and Computer Science department committee.",
    location: "Mogadishu, Somalia",
  },
  {
    degree: "Fullstack Developer",
    institution: "Dalbile Youth Initiative",
    date: "12/2022 - 02/2023",
    description:
      "I graduated from Dalbile Youth and am currently honing my skills as a full-stack developer. I have a solid foundation in HTML, CSS, JavaScript, PHP, and MySQL, which I am actively expanding.",
    location: "Mogadishu, Somalia",
  },
] as const;

export const githubCommitEntries: AboutEntry[] = [
  {
    title: "Product Commits",
    subtitle: "Shipping and Iteration",
    description:
      "Using GitHub to track product work, feature updates, fixes, and ongoing iteration across personal and professional projects.",
  },
  {
    title: "Learning Commits",
    subtitle: "Experiments and Practice",
    description:
      "Maintaining a habit of committing experiments, portfolio improvements, and code written while learning AI, ML, and better engineering workflows.",
  },
] as const;

export const toolGroups = [
  {
    title: "Development",
    description:
      "Daily tools for writing, reviewing, and shipping software with speed and consistency.",
    tools: ["VS Code", "Git", "GitHub", "Next.js", "Tailwind CSS", "Postman"],
  },
  {
    title: "AI / ML",
    description:
      "The stack I use for learning, experimenting, and building practical ML workflows.",
    tools: ["Python", "Jupyter", "PyTorch", "TensorFlow", "scikit-learn"],
  },
  {
    title: "Productivity",
    description:
      "Lightweight tools that keep projects organized without adding unnecessary process.",
    tools: ["Notion", "Linear", "Raycast", "Slack", "iTerm"],
  },
] as const;

export type DailyUsageItem = {
  name: string;
  category: string;
  image?: string;
  description: string;
};

export type DailyUsageSection = {
  title: string;
  items: DailyUsageItem[];
};

export const dailyUsageSections: DailyUsageSection[] = [
  {
    title: "Daily use",
    items: [
      {
        name: "MacBook M4 Pro",
        category: "Laptop",
        image: "/Mac.m4",
        description:
          "Mobile powerhouse for development on the go and travel days.",
      },
      {
        name: "iPhone 15 Pro Max",
        category: "Phone",
        image: "/apple.iphone15",
        description:
          "Everyday driver for communication, quick captures, and testing mobile flows.",
      },
      {
        name: 'HP 27" Monitor',
        category: "Display",
        image: "/hp.monitor",
        description:
          "27-inch HP monitor for a clean dual-screen workspace.",
      },
      {
        name: 'Omni Book 32"',
        category: "Display",
        description:
          "Large-format 32-inch screen when I need extra room for design and dashboards.",
        image: "/hp.omnibook",
      },
      {
        name: "Apple Watch",
        category: "Wearable",
        image: "/apple.watch",
        description:
          "Keeps me on schedule with alerts, timers, and quick fitness check-ins.",
      },
      {
        name: "Apple Pro",
        category: "Audio",
        description: "Noise-cancelling buds for focus time and calls anywhere.",
        image: "/apple.airpods",
      },
      {
        name: "Samsung S25",
        category: "Phone",
        image: "",
        description:
          "Android device for testing apps and mobile development.",
      },
    ],
  },
  {
    title: "Software",
    items: [
      {
        name: "VS Code",
        category: "Editor",
        image: "/vscode.jpg",
        description:
          "Main editor with TypeScript tooling, GitLens, and Tailwind helpers.",
      },
      {
        name: "Azm",
        category: "Workspace",
        description: "Docs, tasks, and quick captures for ideas and meeting notes.",
        image: "/azm_logo.png",
      },
      {
        name: "Xcode",
        category: "IDE",
        description: "IDE for iOS and macOS app development and testing.",
        image: "/xcode.jpg",
      },
      {
        name: "Postman",
        category: "API Testing",
        image: "/postman.jpg",
        description:
          "Testing and debugging APIs during development.",
      },
      {
        name: "Chrome",
        category: "Browser",
        image: "/chrome.svg",
        description: "Primary browser for development and testing.",
      },
      {
        name: "GitHub",
        category: "Version Control",
        image: "",
        description:
          "Source code management and collaboration platform.",
      },
      {
        name: "Visual Studio Code",
        category: "Editor",
        image: "/vs.png",
        description: "C# and .NET development with powerful extensions.",
      },
      {
        name: "Android Studio",
        category: "IDE",
        image: "/android.studio",
        description: "Comprehensive IDE for Android app development and testing.",
      },
      {
        name: "PyCharm",
        category: "IDE",
        image: "/pycharm.png",
        description: "Python development with intelligent code assistance.",
      },
      {
        name: "word",
        category: "Document",
        image: "/word.png",
        description: "Document creation and editing for various purposes.",
      },
      {
        name: "cursor",
        category: "Editor",
        image: "/cursor.svg",
        description: "AI-powered coding assistant to boost productivity.",
      },
    ],
  },
] as const;

export type ProductItem = {
  name: string;
  href?: string;
  status: string;
  description: string;
};

export const productItems: ProductItem[] = [
  {
    name: "Azmai",
    href: "https://azmai.app",
    status: "Live",
    description: "My Ai workspace for notes, tasks, and quick captures. A product project that reflects my focus on practical software and user-focused design.",
  },
  {
    name: "Tayseer",
    href: "https://tayseer.online",
    status: "Live",
    description: "Tayseer is business ai management for, automated invoice generation, expense tracking, and financial insights. It is a product project that reflects my interest in building useful software for businesses.",
  },
  {
    name: "Scaner AI",
    status: "Completed",
    description: "A product project in my portfolio that reflects my interest in useful software and AI direction.",
  },
  {
    name: "Relia Pay",
    status: "Shipped",
    description: "A payment gateway for tailored in east africa, built with a focus on reliability and user experience. It is a product project that reflects my commitment to building practical software that solves real problems.",
  },
  {
    name: "SentryX",
    status: "Shipped",
    description: "SentryX is an AI-driven CLI tool that scans code for secrets, enforces security rules, and prevents leaks before they happen.",
  }
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.githubUrl,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedInUrl,
  },
] as const;
