import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogContentBlockView } from "@/components/blog-content-block";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const articleMonthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

function createSectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatArticleMonth(date: string) {
  return articleMonthFormatter.format(new Date(date));
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const sections = post.sections.map((section) => ({
    ...section,
    id: createSectionId(section.heading),
  }));

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 py-14 sm:px-6 sm:py-20">
      <Link
        href="/blog"
        className="fade-up inline-flex text-[11px] uppercase tracking-[0.28em] text-white/45 hover:text-white"
      >
        Back to blog
      </Link>

      <article className="mt-8">
        <header className="fade-up fade-up-delay-1 pt-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.24em] text-white/35">
            <span>{formatArticleMonth(post.date)}</span>
            <span>{post.category}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="editorial-title mt-7 max-w-5xl text-4xl leading-[0.96] text-white sm:text-7xl">
            {post.title}
          </h1>

          <p className="mt-8 max-w-4xl text-base leading-8 text-white/72 sm:mt-10 sm:text-[1.35rem] sm:leading-9">
            {post.excerpt}
          </p>
        </header>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div className="min-w-0 space-y-12">
            <div className="fade-up fade-up-delay-2 space-y-14">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="editorial-title text-3xl leading-tight text-white sm:text-[2.15rem]">
                    {section.heading}
                  </h2>
                  <div className="mt-5 max-w-3xl space-y-5">
                    {section.blocks.map((block, index) => (
                      <BlogContentBlockView
                        key={`${section.id}-${block.type}-${index}`}
                        block={block}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="fade-up fade-up-delay-2 pt-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                Continue
              </p>
              <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-white">
                Read more notes or start a conversation.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                If this article was useful, you can explore more writing on
                engineering and AI/ML, or reach out directly through the
                contact page.
              </p>

              <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap">
                <Link
                  href="/blog"
                  className="inline-flex w-full items-center justify-center border border-line-strong px-5 py-3 font-medium tracking-[0.01em] text-foreground sm:w-auto"
                >
                  More articles
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center border border-line px-5 py-3 font-medium tracking-[0.01em] text-foreground sm:w-auto"
                >
                  Contact Me
                </Link>
              </div>
            </section>
          </div>

          <aside className="fade-up fade-up-delay-1 text-sm lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-3 text-white/68">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                In this article
              </p>
              <div className="space-y-2">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="grid grid-cols-[22px_1fr] gap-2 leading-6 text-white/68 hover:text-white"
                  >
                    <span className="text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section.heading}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
