import type { Metadata } from "next";
import Link from "next/link";
import { BlogPreviewCard } from "@/components/blog-preview-card";
import { PageShell } from "@/components/page-shell";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about software engineering, learning AI/ML, and experiments that sharpen technical judgment.",
};

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Writing about software engineering, AI learning, and product experimentation."
      description="A small collection of notes on building software, learning in public, and documenting lessons that are worth keeping."
    >
      <section className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Writing Focus
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Notes shaped by real engineering work and steady AI/ML study.
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-8 text-slate-300">
          <p>
            I write about software engineering, backend thinking, product work,
            and the habits that help systems stay reliable as they grow.
          </p>
          <p>
            I also use the blog to document my learning path into AI and
            machine learning, including experiments, questions, and lessons from
            building in public.
          </p>
        </div>
      </section>

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
