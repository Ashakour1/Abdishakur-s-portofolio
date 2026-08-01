export type BlogContentBlock =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "subheading";
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
      type: "markdown";
      content: string;
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
    slug: "stop-writing-bigger-ai-prompts-start-building-smarter-ai-projects",
    title: "Stop Writing Bigger AI Prompts. Start Building Smarter AI Projects.",
    date: "2026-08-01",
    category: "AI Engineering",
    readTime: "9 min read",
    excerpt:
      "Why I believe the future of AI-assisted software development is Project Engineering, not Prompt Engineering.",
    sections: [
      {
        heading: "The real problem isn't prompts",
        blocks: [
          {
            type: "paragraph",
            content:
              "Artificial Intelligence has become an integral part of modern software development. Today, developers use AI to generate code, debug applications, design APIs, review pull requests, write documentation, and accelerate development across the entire software lifecycle.",
          },
          {
            type: "paragraph",
            content:
              "Despite these advancements, one challenge remains surprisingly common.",
          },
          {
            type: "paragraph",
            content: "Every new AI session feels like starting over.",
          },
          {
            type: "paragraph",
            content:
              "Developers repeatedly explain the project's purpose, architecture, completed features, technical decisions, and current objectives before the AI can contribute meaningfully. As projects grow, prompts become increasingly long, context becomes fragmented, and productivity begins to decline.",
          },
          {
            type: "paragraph",
            content:
              "For a long time, I believed the solution was writing better prompts.",
          },
          {
            type: "paragraph",
            content: "I no longer think that's the problem.",
          },
          {
            type: "paragraph",
            content:
              "The real issue isn't the quality of our prompts. It's the lack of structured project context.",
          },
        ],
      },
      {
        heading: "AI should understand the project, not the conversation",
        blocks: [
          {
            type: "paragraph",
            content:
              "Imagine a senior software engineer joining your team. You wouldn't ask them to read months of chat history before writing their first line of code.",
          },
          {
            type: "paragraph",
            content: "Instead, you would provide:",
          },
          {
            type: "list",
            items: [
              "A brief overview of the project.",
              "The product roadmap.",
              "The current development milestone.",
              "Access to the codebase.",
              "The task they're responsible for.",
            ],
          },
          {
            type: "paragraph",
            content:
              "Within minutes, they understand where the project stands and what needs to happen next. This is exactly how AI should work.",
          },
          {
            type: "paragraph",
            content:
              "Instead of depending on previous conversations, AI should begin by understanding the project itself.",
          },
        ],
      },
      {
        heading: "From Prompt Engineering to Project Engineering",
        blocks: [
          {
            type: "paragraph",
            content:
              "Prompt Engineering has helped developers get better results from AI. However, prompts alone cannot manage long-term software development.",
          },
          {
            type: "paragraph",
            content:
              "Software projects evolve over weeks, months, and sometimes years. During that time, requirements change, new features are added, bugs are fixed, and priorities shift. Trying to capture all of that inside a single prompt quickly becomes impossible.",
          },
          {
            type: "paragraph",
            content:
              "Instead of making prompts larger, we should make projects easier to understand. I call this approach Project Engineering.",
          },
          {
            type: "paragraph",
            content:
              "The prompt becomes the instruction. The project becomes the context.",
          },
        ],
      },
      {
        heading: "A simple project structure",
        blocks: [
          {
            type: "paragraph",
            content:
              "To support this workflow, every project includes a small planning directory.",
          },
          {
            type: "code",
            language: "text",
            filename: "project/",
            caption:
              "A roadmap plus one plan per milestone. Nothing else to maintain.",
            code: `project/
├── plans/
│   ├── roadmap.md
│   ├── plan-01-foundation.md
│   ├── plan-02-authentication.md
│   ├── plan-03-core-features.md
│   ├── plan-04-integrations.md
│   └── plan-05-deployment.md
├── backend/
├── frontend/
└── README.md`,
          },
          {
            type: "paragraph",
            content:
              "There is no complex AI memory system. No prompt archive. No dozens of documents to maintain. Just a roadmap and one implementation plan for each major milestone.",
          },
          {
            type: "paragraph",
            content:
              "Simple systems are easier to maintain, easier to understand, and far more likely to stay up to date.",
          },
        ],
      },
      {
        heading: "The roadmap becomes the source of truth",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every development session begins with the roadmap. Its purpose isn't to describe implementation details. Its purpose is to answer four simple questions:",
          },
          {
            type: "list",
            items: [
              "What is this project?",
              "What has already been completed?",
              "What is currently being developed?",
              "What comes next?",
            ],
          },
          {
            type: "paragraph",
            content: "A roadmap might look like this:",
          },
          {
            type: "markdown",
            filename: "plans/roadmap.md",
            caption:
              "Within seconds, both the developer and the AI understand the current state of the project.",
            content: `# Project Roadmap

## Progress

| Plan | Status |
|------|--------|
| Foundation | ✅ Completed |
| Authentication | 🚧 In Progress |
| Core Features | ⏳ Pending |
| Deployment | ⏳ Pending |

Current Plan: Authentication
Next Plan: Core Features`,
          },
        ],
      },
      {
        heading: "Every plan has a clear objective",
        blocks: [
          {
            type: "paragraph",
            content:
              "While the roadmap provides the big picture, each plan describes a single milestone.",
          },
          {
            type: "markdown",
            filename: "plans/plan-02-authentication.md",
            caption:
              "Enough context to continue the next session without rebuilding the story from scratch.",
            content: `# Authentication

Status: In Progress

## Objective

Build a secure authentication system.

### Phase 1 — Database
✅ Completed

- Users
- Roles

### Phase 2 — Backend
🚧 In Progress

- Login
- Registration
- JWT Authentication

### Phase 3 — Frontend
⏳ Pending

- Login Screen
- Registration Screen`,
          },
          {
            type: "paragraph",
            content:
              "The objective is not to document every implementation detail. The objective is to give enough context so the next development session can continue without unnecessary explanation.",
          },
        ],
      },
      {
        heading: "The prompt becomes remarkably simple",
        blocks: [
          {
            type: "paragraph",
            content:
              "Because the project already contains the necessary context, the prompt becomes almost effortless.",
          },
          {
            type: "code",
            language: "text",
            filename: "session-prompt.txt",
            caption:
              "The project explains what needs to be built. The prompt explains what to do next.",
            code: `Read roadmap.md.

Open the active plan.

Review the current phase.

Create a short implementation plan.

Implement the current phase.

Update the plan and roadmap.`,
          },
        ],
      },
      {
        heading: "A consistent development workflow",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every development session follows the same sequence.",
          },
          {
            type: "code",
            language: "text",
            filename: "workflow",
            caption:
              "Consistency is what makes this workflow effective across stacks and project sizes.",
            code: `Developer Request
      │
      ▼
Read roadmap.md
      │
      ▼
Open active plan
      │
      ▼
Understand current phase
      │
      ▼
Create implementation plan
      │
      ▼
Implement
      │
      ▼
Update plan
      │
      ▼
Update roadmap`,
          },
          {
            type: "paragraph",
            content:
              "The process remains consistent regardless of the technology stack or project size.",
          },
        ],
      },
      {
        heading: "Building continuity into AI-assisted development",
        blocks: [
          {
            type: "paragraph",
            content:
              "One of the greatest challenges in AI-assisted software development is maintaining continuity between work sessions.",
          },
          {
            type: "paragraph",
            content:
              "Without a structured workflow, every conversation begins by reconstructing the project's context. Developers spend valuable time repeating information that already exists somewhere inside the project.",
          },
          {
            type: "paragraph",
            content:
              "By introducing a roadmap and feature-specific implementation plans, that context becomes part of the project rather than part of the conversation. This provides several important benefits.",
          },
          {
            type: "subheading",
            content: "Continuous Development",
          },
          {
            type: "paragraph",
            content:
              "Every session begins with a clear understanding of where the project currently stands, allowing development to continue naturally instead of restarting from scratch.",
          },
          {
            type: "subheading",
            content: "Better Collaboration",
          },
          {
            type: "paragraph",
            content:
              "Developers, teammates, and AI assistants all work from the same source of truth. Everyone understands the project's current state without relying on previous conversations.",
          },
          {
            type: "subheading",
            content: "Smaller, More Effective Prompts",
          },
          {
            type: "paragraph",
            content:
              "Because the project contains the context, prompts become concise, focused, and easier to maintain.",
          },
          {
            type: "subheading",
            content: "Clear Project Visibility",
          },
          {
            type: "paragraph",
            content:
              "The roadmap provides an immediate overview of completed work, active development, and upcoming milestones.",
          },
          {
            type: "subheading",
            content: "Documentation That Evolves With the Project",
          },
          {
            type: "paragraph",
            content:
              "Plans are updated as work progresses, ensuring documentation remains relevant throughout the project's lifecycle.",
          },
          {
            type: "paragraph",
            content:
              "This workflow doesn't replace good engineering practices. It reinforces them.",
          },
        ],
      },
      {
        heading: "Agentic AI is more than code generation",
        blocks: [
          {
            type: "paragraph",
            content:
              "Many discussions describe Agentic AI as an AI capable of using tools or executing commands. Those capabilities are valuable, but they're only part of the picture.",
          },
          {
            type: "paragraph",
            content:
              "A capable engineering agent should first understand the project. It should know the project's direction. It should understand the active milestone. It should recognize completed work. It should continue development rather than restart it.",
          },
          {
            type: "paragraph",
            content: "Only then should it begin writing code.",
          },
          {
            type: "paragraph",
            content:
              "When AI works this way, it stops behaving like a chatbot. It starts behaving like another software engineer on the team.",
          },
        ],
      },
      {
        heading: "Final thoughts",
        blocks: [
          {
            type: "paragraph",
            content:
              "The biggest improvement in my development workflow didn't come from discovering a better prompt. It came from changing how I organize my projects.",
          },
          {
            type: "paragraph",
            content:
              "Instead of asking AI to remember everything, I let the project provide the context. The roadmap provides direction. Each plan defines a milestone. Each milestone is broken into manageable phases. The prompt simply tells the AI where to begin.",
          },
          {
            type: "paragraph",
            content:
              "I believe the future of AI-assisted software development won't be defined by the size of our prompts. It will be defined by how well we structure our projects.",
          },
          {
            type: "paragraph",
            content:
              "When AI can understand a project's direction before writing code, it stops acting like a code generator and starts contributing like a software engineer.",
          },
          {
            type: "paragraph",
            content: "Less prompting. Better planning. Smarter projects.",
          },
        ],
      },
    ],
  },
  {
    slug: "my-machine-learning-journey-begins",
    title: "My Machine Learning Journey Begins",
    date: "2025-01-15",
    category: "Machine Learning",
    readTime: "3 min read",
    excerpt:
      "I've just started my journey in Machine Learning, and I'm excited to share this new chapter of my academic and professional growth.",
    sections: [
      {
        heading: "A new chapter begins",
        blocks: [
          {
            type: "image",
            src: "/machine-learning-journey.jpg",
            alt: "Machine learning journey cover image",
            width: 1200,
            height: 848,
          },
          {
            type: "paragraph",
            content:
              "I've just started my journey in Machine Learning, and I'm excited to share this new chapter of my academic and professional growth.",
          },
          {
            type: "paragraph",
            content:
              "This marks the beginning of my Master's program in Machine Learning. I'm embarking on this path with enthusiasm and determination to deepen my understanding of machine learning algorithms, neural networks, and the powerful tools that drive modern AI technology.",
          },
          {
            type: "paragraph",
            content:
              "Throughout this journey, I'll be exploring fundamental concepts in supervised and unsupervised learning, deep learning architectures, model optimization, and practical applications. I'm looking forward to working with Python, TensorFlow, PyTorch, and other essential tools in the machine learning ecosystem.",
          },
          {
            type: "paragraph",
            content:
              "This is just the start, and I'm committed to sharing my learning experiences, challenges, and discoveries along the way. Stay tuned for updates as I progress through this exciting educational journey.",
          },
        ],
      },
    ],
  },
  {
    slug: "the-advice-i-would-give-learn-hard-skills",
    title: "The Advice I Would Give: Learn Hard Skills",
    date: "2026-01-29",
    category: "Personal Development",
    readTime: "8 min read",
    excerpt:
      "If I were to give someone advice, I would advise them to learn hard skills because they build real value and long-term personal growth.",
    sections: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "Many people search for motivation, shortcuts, or external validation. However, true growth rarely comes from these sources. It comes from committing to something difficult, staying consistent, and improving step by step. Learning hard skills represents this commitment. It is not an easy path, but it is a meaningful one. Hard skills are built through effort, repetition, and discipline. They require patience and focus, and they reward those who stay consistent. This is why they play such an important role in shaping both personal and professional identity. In a world where quick fixes and instant gratification are constantly promoted, choosing to invest in hard skills is a counter-cultural decision. It's a decision to prioritize long-term value over short-term comfort, to choose difficulty over ease, and to build something that lasts.",
          },
        ],
      },
      {
        heading: "Building Real Value",
        blocks: [
          {
            type: "image",
            src: "/blog/building-real-value.png",
            alt: "Value illustration",
            width: 1200,
            height: 848,
          },
          {
            type: "paragraph",
            content:
              "Real value is not created by intention alone. When you learn hard skills, you gain the ability to produce results. This ability separates those who only talk from those who can actually deliver. Value built through skills is long-lasting. It does not depend on trends, opinions, or external praise. Instead, it grows stronger over time as knowledge deepens and experience increases. People with real skills are trusted because their value is visible and reliable. Consider the difference between someone who claims to be a programmer and someone who can actually build software. The distinction is clear: one has the skill, the other only has the desire. These outcomes speak louder than any resume or self-description. They are proof of ability, not just promise of potential.",
          },
        ],
      },
      {
        heading: "The Role of Hard Skills in Personal Growth",
        blocks: [
          {
            type: "paragraph",
            content:
              "Learning hard skills is not only about ability. Throughout the learning process, individuals face challenges, confusion, and moments of doubt. These experiences build resilience and mental strength. Each obstacle becomes a lesson. Each failure becomes feedback. Over time, this process reshapes how a person thinks, works, and responds to difficulties. Growth becomes part of identity, not just a goal. A programmer learns to break complex problems into smaller, manageable pieces. A designer learns to see the world through the lens of aesthetics and functionality. A data analyst learns to question assumptions and seek evidence. These mental frameworks extend beyond the specific skill and influence how you approach all challenges in life.",
          },
        ],
      },
      {
        heading: "Discipline and Consistency",
        blocks: [
          {
            type: "image",
            src: "/blog/consistency.png",
            alt: "Discipline illustration",
            width: 1200,
            height: 848,
          },
          {
            type: "paragraph",
            content:
              "One of the most powerful outcomes of learning hard skills is discipline. Progress requires showing up even when motivation is low. This teaches consistency, structure, and responsibility. Discipline gained through learning hard skills often extends into other areas of life. Time management improves. Focus becomes sharper. Goals become clearer. These changes create a foundation for long-term success. The daily practice of working on a hard skill creates a routine that becomes automatic. This discipline is transferable. The same focus and commitment that helps you master coding can help you maintain a healthy lifestyle, build better relationships, or pursue any other meaningful goal. Discipline is a muscle that grows stronger with use, and learning hard skills is one of the best ways to exercise it.",
          },
        ],
      },
      {
        heading: "Patience, Persistence, and Resilience",
        blocks: [
          {
            type: "paragraph",
            content:
              "Hard skills cannot be rushed. They demand patience and persistence. Progress may feel slow, but every step forward matters. This teaches an important life lesson: meaningful results take time. Resilience grows as challenges are faced repeatedly. Instead of avoiding difficulty, individuals begin to approach it with confidence. This mindset is one of the most valuable outcomes of the learning process. In our fast-paced world, we're conditioned to expect immediate results. Social media shows us overnight successes, but reality is different. Learning a hard skill teaches you that progress is often invisible until it suddenly becomes obvious. You might spend weeks feeling like you're not improving, then suddenly realize you've made a significant leap forward. This experience builds patience and helps you trust the process, even when results aren't immediately visible.",
          },
        ],
      },
      {
        heading: "Confidence Built on Reality",
        blocks: [
          {
            type: "paragraph",
            content:
              "Confidence built on appearance or comparison is fragile. Confidence built on ability is stable. As skills develop and progress becomes visible, self-confidence grows naturally. This confidence is quiet and grounded. It does not need validation from others. It comes from knowing that effort has been invested and progress has been earned. There's a profound difference between confidence that comes from external validation and confidence that comes from genuine competence. The latter is unshakeable because it's based on something real: your actual ability to perform. When you've spent hundreds of hours practicing, when you've overcome countless obstacles, when you've built something with your own hands, you know what you're capable of. This knowledge creates a deep, quiet confidence that doesn't need to be announced or defended.",
          },
        ],
      },
      {
        heading: "A Mindset of Continuous Growth",
        blocks: [
          {
            type: "paragraph",
            content:
              "Hard skills are never finished. There is always room to improve, refine, and expand understanding. This encourages lifelong learning and prevents stagnation. A person who adopts this mindset remains adaptable and open to change. Growth becomes a habit rather than a destination. No matter how skilled you become, there's always more to learn. A master programmer can always learn a new language or framework. A skilled designer can always explore new styles and techniques. This constant opportunity for growth keeps the mind sharp and prevents complacency. This combination of continuous growth and humility is powerful. It keeps you curious, open-minded, and always moving forward.",
          },
        ],
      },
      {
        heading: "The Compound Effect of Hard Skills",
        blocks: [
          {
            type: "image",
            src: "/blog/the-compound-effect-of-hard-skills.png",
            alt: "Compound effect illustration",
            width: 1200,
            height: 848,
          },
          {
            type: "paragraph",
            content:
              "One of the most powerful aspects of learning hard skills is the compound effect. Each skill you learn makes the next one easier. The problem-solving abilities you develop while learning to code help you learn data analysis. The attention to detail you develop while learning design helps you in any creative pursuit. The mathematical thinking you develop while learning machine learning helps you understand complex systems. These skills build on each other, creating a foundation of competence that grows stronger over time.",
          },
        ],
      },
      {
        heading: "Overcoming the Fear of Starting",
        blocks: [
          {
            type: "image",
            src: "/blog/overcoming-the-fear-of starting.png",
            alt: "Overcoming fear illustration",
            width: 1200,
            height: 848,
          },
          {
            type: "paragraph",
            content:
              "Many people are intimidated by hard skills. They see the complexity, the time commitment, and the difficulty, and they decide it's not for them. But this fear is often based on misconceptions. You don't need to be a genius to learn hard skills. You don't need to have a natural talent. You just need to start, and then keep going. The first step is always the hardest, but it's also the most important. Once you begin, momentum builds. Each small win creates motivation for the next step. The key is to start small, be consistent, and trust the process. Remember: every expert was once a beginner.",
          },
        ],
      },
      {
        heading: "Practical Steps to Get Started",
        blocks: [
          {
            type: "paragraph",
            content:
              "If you're convinced that learning hard skills is valuable, the next question is: how do you start? First, choose a skill that genuinely interests you or solves a real problem in your life. Second, find quality learning resources. This might be online courses, books, tutorials, or mentors. Third, create a consistent practice schedule. Even 30 minutes a day is better than sporadic long sessions. Fourth, build projects. Theory is important, but application is where real learning happens. Finally, be patient with yourself. Learning is a process, not an event. Celebrate small wins, learn from failures, and keep moving forward.",
          },
        ],
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            type: "paragraph",
            content:
              "If I were to give someone advice, I would advise them to learn hard skills because they build real value and long-term personal growth. Hard skills shape character, strengthen discipline, and develop resilience. They prepare individuals for a future that demands real ability and continuous improvement. Choosing to learn hard skills is choosing to invest in yourself. It is a long-term decision that pays dividends in confidence, clarity, and personal strength. In a world that often values quick fixes and easy solutions, choosing the difficult path of learning hard skills is a powerful act of self-investment. It's not the easy choice, but it's the meaningful one. It's the choice that builds something real, something lasting, something that can't be taken away. So if you're at a crossroads, wondering what to invest your time in, consider learning a hard skill. Start today. Start small. But start. Your future self will thank you.",
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
