import Link from "next/link";
import { BlogPreviewCard } from "@/components/blog-preview-card";
import { blogPosts, productItems, siteConfig } from "@/lib/site-data";

const featuredPosts = blogPosts.slice(0, 2);

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-5 py-14 sm:px-6 sm:py-20">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="fade-up min-w-0 space-y-8">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              {siteConfig.role}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="max-w-3xl text-lg font-medium text-slate-200 sm:text-2xl">
              {siteConfig.heroTitle}
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {siteConfig.tagline} I build dependable software today while
              steadily deepening my work in machine learning, experimentation,
              and intelligent systems.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-[#0A192F] hover:bg-slate-200 sm:w-auto"
            >
              View Blog
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/[0.14] px-5 py-3 text-sm font-medium text-white hover:border-white/25 hover:bg-white/[0.03] sm:w-auto"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <aside className="fade-up fade-up-delay-1 min-w-0 pt-2 text-sm lg:justify-self-end lg:pt-0">
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-slate-400">Currently</p>
              <p className="text-base leading-7 text-white">
                Software Engineer at Salaam Group
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-slate-400">Based in</p>
              <p className="text-base leading-7 text-white">Mogadishu, Somalia</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="fade-up fade-up-delay-1 border-t border-white/10 pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="min-w-0 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              What I Do
            </p>
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              I build reliable software and I am growing into AI and machine
              learning.
            </h2>
          </div>

          <div className="min-w-0 space-y-5 text-sm leading-8 text-slate-300">
            <p>
              As a Software Engineer at Salaam Group, I work on web
              applications and backend systems that are practical, reliable, and
              easy to maintain.
            </p>

            <div className="space-y-3 border-l border-white/10 pl-5">
              <p>Building clean and dependable software.</p>
              <p>Solving real problems with simple technical solutions.</p>
              <p>Learning AI and machine learning through study and projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up fade-up-delay-2 space-y-5 border-t border-white/10 pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="min-w-0 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              Products
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Products I have built and continue to grow.
            </h2>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              A small selection of products, experiments, and work in progress.
            </p>
          </div>

          <div className="min-w-0 max-w-3xl space-y-2">
            {productItems.map((product) => {
              const metaText = product.href
                ? product.href.replace(/^https?:\/\//, "")
                : "Currently in progress";

              const content = (
                <article className="grid gap-3 py-3 md:grid-cols-[1fr_auto] md:items-start md:gap-6">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                        {product.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                        {product.status}
                      </span>
                    </div>

                    <p className="text-[11px] tracking-[0.1em] text-white/35">
                      {metaText}
                    </p>

                    <p className="text-sm leading-6 text-slate-300">
                      {product.description}
                    </p>

                    <div className="h-px w-8 bg-white/10" />
                  </div>

                  <div className="pt-0.5 text-sm text-slate-400 md:text-right">
                    {product.href ? "Visit" : "Soon"}
                  </div>
                </article>
              );

              if (!product.href) {
                return <div key={product.name}>{content}</div>;
              }

              return (
                <Link
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="fade-up fade-up-delay-2 space-y-5 border-t border-white/10 pt-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              Blog
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Writing about software engineering, learning, and experiments.
            </h2>
          </div>

          <Link
            href="/blog"
            className="text-sm font-medium text-slate-100 hover:text-white"
          >
            View all posts
          </Link>
        </div>

        <div className="space-y-1">
          {featuredPosts.map((post) => (
            <BlogPreviewCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
