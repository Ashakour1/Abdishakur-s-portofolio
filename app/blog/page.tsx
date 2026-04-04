import type { Metadata } from "next";
import Link from "next/link";
import { BlogPreviewCard } from "@/components/blog-preview-card";
import { blogPosts } from "@/lib/blog-data";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about software engineering, learning AI/ML, and experiments that sharpen technical judgment.",
};

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="Blogs "
      title="Thoughts on software engineering, AI, and fintech innovation."
      description=" A collection of essays and practical guides shaped by real product work across software, AI, and fintech."
    >
      {/* <section className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Writing Focus
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Writing shaped by real product work across software, AI, and fintech.
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-8 text-slate-300">
          <p>
            I write about backend systems, reliability, product execution, and
            the decisions that help software stay useful as it grows.
          </p>
          <p>
            The blog also covers AI systems, fintech products, and practical
            technical ideas worth documenting clearly.
          </p>
        </div>
      </section> */}

      {/* Latest section intentionally hidden for now. */}

      <section className="border-t border-white/10 pt-10">
        <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              All Posts
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {blogPosts.length} articles so far.
            </h2>
          </div>

          <Link
            href="/contact"
            className="text-sm font-medium text-slate-100 hover:text-white"
          >
            Contact me
          </Link>
        </div>

        <div className="pt-2">
          {blogPosts.map((post) => (
            <BlogPreviewCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
