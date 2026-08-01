import type { Metadata } from "next";
import Link from "next/link";
import { BlogPreviewCard } from "@/components/blog-preview-card";
import { blogPosts } from "@/lib/blog-data";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Writing about software engineering, learning AI/ML, and experiments that sharpen technical judgment.",
};

const [latestPost, ...remainingPosts] = blogPosts;

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="Publications"
      title="Notes on software engineering, AI systems, and building in public."
      description="Essays and practical writing shaped by real product work across software, AI, and fintech."
    >
      <section className="space-y-2 border-t border-line pt-10">
        <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.32em] text-quiet">
              Index
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              All publications
            </h2>
          </div>

          <Link
            href="/contact"
            className="text-sm font-medium text-foreground hover:text-muted"
          >
            Suggest a topic →
          </Link>
        </div>

        <div>
          {latestPost ? (
            <BlogPreviewCard post={latestPost} index={1} featured />
          ) : null}

          {remainingPosts.map((post, index) => (
            <BlogPreviewCard
              key={post.slug}
              post={post}
              index={index + 2}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
