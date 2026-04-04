import Image from "next/image";
import Link from "next/link";
import { BlogPreviewCard } from "@/components/blog-preview-card";
import { blogPosts } from "@/lib/blog-data";
import { dailyUsageSections, productItems, siteConfig } from "@/lib/site-data";

const featuredPosts = blogPosts.slice(0, 2);
const featuredProducts = productItems.slice(0, 4);
const featuredDailyUsageItems = dailyUsageSections.flatMap((section) =>
  section.items,
).slice(0, 6);

function getInitials(name: string) {
  return name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase();
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-5 py-14 sm:px-6 sm:py-20">
      <section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="fade-up min-w-0 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <Image
                src="/image-prof.jpg"
                alt={siteConfig.name}
                width={96}
                height={96}
                priority
                className="h-16 w-16 shrink-0 rounded-full object-cover sm:h-20 sm:w-20"
              />
              <div className="min-w-0 space-y-2">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
                  {siteConfig.role}
                </p>
                <p className="max-w-sm text-sm leading-6 text-slate-300">
Building products, always learning, and sharing about software engineering, fintech, and AI.                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                <span className="inline-flex flex-wrap items-center gap-3">
                  <span>{siteConfig.name}</span>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 items-center justify-center sm:h-8 sm:w-8"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                    >
                      <path
                        d="M12 1.75L14.42 3.1L17.15 2.74L18.35 5.21L20.75 6.55L20.39 9.28L21.73 11.7L20.39 14.12L20.75 16.85L18.35 18.19L17.15 20.66L14.42 20.3L12 21.65L9.58 20.3L6.85 20.66L5.65 18.19L3.25 16.85L3.61 14.12L2.27 11.7L3.61 9.28L3.25 6.55L5.65 5.21L6.85 2.74L9.58 3.1L12 1.75Z"
                        fill="#1D9BF0"
                      />
                      <path
                        d="M8.15 11.95L10.7 14.45L15.85 9.3"
                        stroke="white"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </h1>
              <p className="max-w-3xl text-lg font-medium text-slate-200 sm:text-xl">
                {siteConfig.heroTitle}
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {siteConfig.tagline}Focused on advancing AI and machine learning through real-world experimentation and intelligent model design.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#products"
              className="inline-flex w-full items-center justify-center border border-line-strong px-5 py-3 text-sm font-medium tracking-[0.01em] text-foreground sm:w-auto"
            >
              See Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center border border-line px-5 py-3 text-sm font-medium tracking-[0.01em] text-foreground sm:w-auto"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <aside className="fade-up fade-up-delay-1 min-w-0 lg:justify-self-end lg:pt-6">
          <dl className="space-y-5 text-sm">
            <div className="flex items-start gap-3 border-b border-line pb-5">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky-500/70" />
              <div className="min-w-0 space-y-1.5">
                <dt className="text-[11px] uppercase tracking-[0.24em] text-quiet">
                  Currently
                </dt>
                <dd className="text-base  leading-7 text-foreground">
                  Software Engineer at Salaam Group
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-1">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky-500/60" />
              <div className="min-w-0 space-y-1.5">
                <dt className="text-[11px] uppercase tracking-[0.24em] text-quiet">
                  Based in
                </dt>
                <dd className="text-base  leading-7 text-foreground">
                  Mogadishu, Somalia
                </dd>
              </div>
            </div>
          </dl>
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

      <section
        id="products"
        className="fade-up fade-up-delay-2 space-y-5 border-t border-white/10 pt-10"
      >
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

          <div className="flex items-start justify-start lg:justify-end">
            <Link
              href="/products"
              className="text-xs font-medium tracking-[0.08em] text-white/45 uppercase hover:text-white/72"
            >
              See all products
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div />
          <div className="min-w-0 max-w-3xl space-y-2">
            {featuredProducts.map((product) => {
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
                    {product.href ? "Visit" : ""}
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
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              Daily Usage
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              A selection of the tools I use every day.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45">
              A quick look at the hardware and software that support my daily
              workflow across development, testing, and focused execution.
            </p>
          </div>

          <div className="flex items-start justify-start lg:justify-end">
            <Link
              href="/daily-usage"
              className="text-xs font-medium tracking-[0.08em] text-white/45 uppercase hover:text-white/72"
            >
              See full setup
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredDailyUsageItems.map((item) => (
            <article key={item.name}>
              <div className="flex items-start gap-3">
                {item.image ? (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/[0.04]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 object-cover"
                      unoptimized={item.image.endsWith(".svg")}
                    />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center">
                    <span className="text-[12px] font-medium uppercase tracking-[0.02em] text-slate-500">
                      {getInitials(item.name)}
                    </span>
                  </div>
                )}

                <div className="min-w-0 pt-0.5">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">
                    {item.category}
                  </p>
                  <h3 className="mt-0.5 text-[1.02rem] font-medium leading-6 text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 max-w-md text-[15px] leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="fade-up fade-up-delay-2 space-y-5 border-t border-white/10 pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              Publications
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Writing about software engineering, AI, fintech, and experiments.
            </h2>
          </div>

          <div className="flex items-start justify-start lg:justify-end">
            <Link
              href="/blog"
              className="text-xs font-medium tracking-[0.08em] text-white/45 uppercase hover:text-white/72"
            >
              See all Publications
            </Link>
          </div>
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
