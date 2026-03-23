export const siteConfig = {
  name: "Abdishakour Mohe'd",
  role: "Software Engineer",
  ambition: "Future AI Researcher & ML Engineer",
  heroTitle: "Software Engineer | AI Research & ML Engineer",
  tagline: "Building systems today, exploring intelligence for tomorrow.",
  description:
    "A minimal developer portfolio focused on software engineering, systems thinking, and the path toward AI research and machine learning.",
  email: "your.email@example.com",
  githubUrl: "https://github.com/yourusername",
  linkedInUrl: "https://www.linkedin.com/in/yourname/",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/daily-usage", label: "Daily Usage" },
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

export const experienceEntries: AboutEntry[] = [
  {
    title: "Software Engineer",
    subtitle: "Salaam Group · Current",
    description:
      "Working on product and backend engineering with a focus on reliable delivery, maintainable code, and systems that stay clear as they grow.",
  },
  {
    title: "Product Builder",
    subtitle: "azmai.app · Ongoing",
    description:
      "Building and iterating on product ideas with a practical engineering approach, from planning and UI decisions to implementation and refinement.",
  },
  {
    title: "Product Builder",
    subtitle: "tayseer.online · Ongoing",
    description:
      "Developing web product experiences with an emphasis on clarity, usefulness, and steady iteration based on real product needs.",
  },
  {
    title: "AI Product Exploration",
    subtitle: "scanerai · In Progress",
    description:
      "Exploring product directions closer to AI and intelligent workflows while keeping the engineering side structured, lightweight, and dependable.",
  },
] as const;

export const educationEntries: AboutEntry[] = [
  {
    title: "Self-Directed Learning",
    subtitle: "Software Engineering",
    description:
      "Learning through shipped work, hands-on projects, technical documentation, and continuous practice across frontend, backend, and systems.",
  },
  {
    title: "Ongoing Study",
    subtitle: "AI and Machine Learning",
    description:
      "Studying machine learning fundamentals, model behavior, experimentation, and the engineering systems needed to support intelligent products.",
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
  image: string;
  description: string;
};

export type DailyUsageSection = {
  title: string;
  items: DailyUsageItem[];
};

export const dailyUsageSections: DailyUsageSection[] = [
  {
    title: "Hardware",
    items: [
      {
        name: "MacBook M4 Pro",
        category: "Laptop",
        image: "/daily-usage/macbook-m4-pro.svg",
        description:
          "Primary machine for development, design reviews, and shipping code.",
      },
      {
        name: "iPhone 15 Pro Max",
        category: "Phone",
        image: "/daily-usage/iphone-15-pro-max.svg",
        description:
          "Daily driver for communication, quick captures, and mobile testing.",
      },
      {
        name: 'HP 27" Monitor',
        category: "Display",
        image: "/daily-usage/hp-27-monitor.svg",
        description:
          "27-inch HP monitor for a clean dual-screen workspace.",
      },
      {
        name: "Apple Watch",
        category: "Wearable",
        image: "/daily-usage/apple-watch.svg",
        description:
          "Alerts, timers, and health snapshots to keep me on track.",
      },
      {
        name: "Samsung S25",
        category: "Phone",
        image: "/daily-usage/samsung-s25.svg",
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
        image: "/daily-usage/vs-code.svg",
        description:
          "Typed tooling, GitLens, and Tailwind helpers keep the workflow fast.",
      },
      {
        name: "Postman",
        category: "API Testing",
        image: "/daily-usage/postman.svg",
        description:
          "Testing and debugging APIs during development.",
      },
      {
        name: "Chrome",
        category: "Browser",
        image: "/daily-usage/chrome.svg",
        description:
          "Primary browser for development and testing.",
      },
      {
        name: "Azm",
        category: "Workspace",
        image: "/daily-usage/azm.svg",
        description:
          "Docs, tasks, and quick captures for ideas and meeting notes.",
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
    name: "azmai.app",
    href: "https://azmai.app",
    status: "Live",
    description: "A product I want to highlight as part of my work and ongoing build journey.",
  },
  {
    name: "tayseer.online",
    href: "https://tayseer.online",
    status: "Live",
    description: "Another shipped product that reflects practical execution and product-focused development.",
  },
  {
    name: "scanerai",
    status: "In Progress",
    description: "A product project in my portfolio that reflects my interest in useful software and AI direction.",
  },
  {
    name: "More in progress",
    status: "More",
    description: "More products, ideas, and experiments are in progress and will be added over time.",
  },
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

export type BlogContentBlock =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "code";
      code: string;
      language?: string;
      filename?: string;
      caption?: string;
    }
  | {
      type: "math";
      expression: string;
      label?: string;
      note?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };

export type BlogSection = {
  heading: string;
  blocks: BlogContentBlock[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sample-ml-note",
    title: "A Sample ML Note With Rich Sections",
    date: "2026-03-15",
    category: "AI / ML",
    readTime: "6 min read",
    excerpt:
      "A sample article showing how one post can combine clear writing, code, math, and visuals without losing structure.",
    sections: [
      {
        heading: "Frame one question clearly",
        blocks: [
          {
            type: "paragraph",
            content:
              "The strongest technical notes usually begin with one clear question. Instead of trying to explain an entire topic at once, it is more useful to narrow the scope and make one idea easy to follow.",
          },
          {
            type: "list",
            items: [
              "What exactly am I trying to understand?",
              "What example or experiment makes it concrete?",
              "What changed in my understanding after working through it?",
            ],
          },
        ],
      },
      {
        heading: "Show the core idea through a simple formula",
        blocks: [
          {
            type: "paragraph",
            content:
              "A good math section should make the idea clearer, not heavier. In a technical article, one small formula is often enough to show what is being measured or optimized.",
          },
          {
            type: "math",
            label: "Loss function example",
            expression: "L = 1/N * sum_(i=1)^N (y_i - yhat_i)^2",
            note:
              "This says: compare each prediction with the target value, measure the error across the dataset, and reduce that error over time.",
          },
          {
            type: "paragraph",
            content:
              "That is usually enough for a blog post. The goal is not to prove every detail, but to give the reader an intuitive understanding of what the model is trying to improve.",
          },
        ],
      },
      {
        heading: "Make the idea concrete in code",
        blocks: [
          {
            type: "paragraph",
            content:
              "Code helps when the concept becomes clearer through implementation. Even a very small snippet can turn an abstract explanation into something practical and memorable.",
          },
          {
            type: "code",
            filename: "train-step.py",
            language: "python",
            code: `loss = model(batch_x, batch_y)
loss.backward()
optimizer.step()
optimizer.zero_grad()`,
            caption:
              "A minimal training step example for showing the flow from loss to parameter update.",
          },
        ],
      },
      {
        heading: "Use visuals for flow and structure",
        blocks: [
          {
            type: "paragraph",
            content:
              "Images are most useful when the relationship between steps matters more than the detail inside one step. A loop, pipeline, or system diagram can make structure visible very quickly.",
          },
          {
            type: "image",
            src: "/blog/learning-loop.svg",
            alt: "A loop showing question, experiment, notes, and revision.",
            width: 1200,
            height: 720,
            caption:
              "This simple diagram works well for posts about learning loops, experimentation, or iterative engineering.",
          },
        ],
      },
      {
        heading: "A format that stays useful later",
        blocks: [
          {
            type: "paragraph",
            content:
              "A structured post format is easier to write, easier to revisit, and easier to expand later. It gives room for explanation, evidence, examples, and reflection without turning the article into a wall of text.",
          },
          {
            type: "list",
            items: [
              "Paragraphs for context and reasoning.",
              "Math blocks for core concepts and notation.",
              "Code blocks for implementation details.",
              "Images for systems, loops, and architecture views.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "engineering-for-reliability",
    title: "Engineering for Reliability Before Scale",
    date: "2026-02-12",
    category: "Software Engineering",
    readTime: "4 min read",
    excerpt:
      "Reliable software is usually the result of small engineering habits established early, not last-minute infrastructure fixes.",
    sections: [
      {
        heading: "Reliability starts with boundaries",
        blocks: [
          {
            type: "paragraph",
            content:
              "Many systems become fragile long before traffic becomes a problem. Unclear ownership, rushed abstractions, and inconsistent interfaces make software difficult to reason about even at small scale.",
          },
          {
            type: "paragraph",
            content:
              "The most useful reliability work often looks ordinary: clear service boundaries, predictable error handling, and a bias toward simple operational paths.",
          },
        ],
      },
      {
        heading: "Operational discipline is a product feature",
        blocks: [
          {
            type: "paragraph",
            content:
              "Stable deployments, understandable logs, and realistic monitoring are not separate from product quality. They shape how confidently a team can keep improving the product.",
          },
          {
            type: "paragraph",
            content:
              "I try to treat observability and maintainability as part of the user experience, because broken internal systems eventually become broken external experiences.",
          },
        ],
      },
      {
        heading: "Why this matters for long-term growth",
        blocks: [
          {
            type: "paragraph",
            content:
              "As I move toward AI and ML, this mindset stays useful. Intelligent systems still depend on reliable pipelines, clear evaluation, and infrastructure that behaves predictably under change.",
          },
          {
            type: "paragraph",
            content:
              "Strong engineering fundamentals are not separate from future ML work. They are part of what makes ML systems trustworthy and usable.",
          },
        ],
      },
    ],
  },
  {
    slug: "learning-machine-learning-in-public",
    title: "Learning Machine Learning in Public",
    date: "2026-01-21",
    category: "AI / ML",
    readTime: "5 min read",
    excerpt:
      "Treating the transition into AI and machine learning as an engineering practice creates momentum, clarity, and honest feedback loops.",
    sections: [
      {
        heading: "From curiosity to structure",
        blocks: [
          {
            type: "paragraph",
            content:
              "It is easy to consume AI content passively and mistake that for progress. Real growth starts when learning becomes structured enough to produce artifacts: notes, experiments, repos, and questions worth revisiting.",
          },
          {
            type: "list",
            items: [
              "Keep notes that capture what changed and why.",
              "Turn curiosity into small experiments.",
              "Explain concepts clearly enough that weak assumptions show up.",
            ],
          },
          {
            type: "image",
            src: "/blog/learning-loop.svg",
            alt: "A simple loop showing question, experiment, notes, and revision.",
            width: 1200,
            height: 720,
            caption:
              "A lightweight loop for learning in public: question, experiment, notes, and revision.",
          },
        ],
      },
      {
        heading: "Engineering habits still matter",
        blocks: [
          {
            type: "paragraph",
            content:
              "The same habits that make software projects better also improve ML learning: versioning work, keeping experiments reproducible, documenting tradeoffs, and measuring outcomes instead of relying on impressions.",
          },
          {
            type: "code",
            filename: "experiment-notes.ts",
            language: "ts",
            code: `const run = {
  dataset: "v3-cleaned",
  model: "baseline-mlp",
  metric: "validation_loss",
  learningRate: 0.001,
  result: 0.184,
};`,
            caption:
              "Even a small, structured experiment record makes comparison easier.",
          },
          {
            type: "paragraph",
            content:
              "That continuity is one reason the transition feels natural. Good engineering discipline transfers well into model work.",
          },
        ],
      },
      {
        heading: "A practical path forward",
        blocks: [
          {
            type: "paragraph",
            content:
              "My focus is to keep the path grounded in fundamentals: probability, optimization, model behavior, data quality, and evaluation. I want depth, not just surface familiarity with tools.",
          },
          {
            type: "math",
            label: "Optimization idea",
            expression: "theta_(t+1) = theta_t - eta * gradient(L(theta_t))",
            note:
              "What matters is the habit behind it: define the objective, measure the error, and update with intention.",
          },
          {
            type: "paragraph",
            content:
              "Publishing what I learn helps turn ambition into an accountable process. It keeps the transition real.",
          },
        ],
      },
    ],
  },
  {
    slug: "small-experiments-better-systems",
    title: "Small Experiments, Better Systems",
    date: "2025-11-08",
    category: "Experiments",
    readTime: "4 min read",
    excerpt:
      "Short experiments create faster feedback loops, whether the goal is improving backend architecture or understanding model behavior.",
    sections: [
      {
        heading: "Why small experiments work",
        blocks: [
          {
            type: "paragraph",
            content:
              "Large changes often hide too many variables at once. A smaller experiment narrows the question and makes it easier to see whether the idea actually improved anything.",
          },
          {
            type: "paragraph",
            content:
              "That applies equally to API design, performance tuning, prompt workflows, and early ML projects.",
          },
        ],
      },
      {
        heading: "Experimentation is not randomness",
        blocks: [
          {
            type: "paragraph",
            content:
              "Useful experiments have a clear hypothesis, an observable result, and a reason to keep or discard the change. Without that structure, iteration becomes noise.",
          },
          {
            type: "paragraph",
            content:
              "I prefer experiments that are small enough to reverse and clear enough to teach something concrete.",
          },
        ],
      },
      {
        heading: "The connection to intelligent systems",
        blocks: [
          {
            type: "paragraph",
            content:
              "Machine learning work is full of uncertainty, so feedback quality matters even more. Dataset changes, evaluation choices, and modeling decisions all benefit from disciplined experimentation.",
          },
          {
            type: "paragraph",
            content:
              "Learning to run tighter experiments now sharpens both my software engineering work and the ML direction I am building toward.",
          },
        ],
      },
    ],
  },
];

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export function formatDate(date: string) {
  return dateFormatter.format(new Date(date));
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
