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
