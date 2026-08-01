"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { formatDate, type BlogPost } from "@/lib/blog-data";

type BlogPreviewCardProps = {
  post: BlogPost;
  index?: number;
  featured?: boolean;
};

export function BlogPreviewCard({
  post,
  index,
  featured = false,
}: BlogPreviewCardProps) {
  function handleReadArticleClick() {
    posthog.capture("blog_post_read_article_clicked", {
      post_slug: post.slug,
      post_title: post.title,
      post_category: post.category,
    });
  }

  const number =
    typeof index === "number" ? String(index).padStart(2, "0") : null;

  return (
    <article
      className={`group border-b border-line last:border-b-0 ${
        featured ? "pb-2" : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        onClick={handleReadArticleClick}
        className="grid gap-4 py-6 sm:grid-cols-[72px_minmax(0,1fr)_auto] sm:items-start sm:gap-8"
      >
        {number ? (
          <p
            className={`leading-none text-quiet sm:pt-1 ${
              featured
                ? "featured-title text-3xl"
                : "editorial-title text-2xl"
            }`}
          >
            {number}
          </p>
        ) : (
          <span className="hidden sm:block" />
        )}

        <div className="min-w-0 space-y-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.2em] text-quiet">
            {featured ? (
              <>
                <span className="text-foreground">Featured</span>
                <span aria-hidden="true" className="text-quiet">
                  /
                </span>
              </>
            ) : null}
            <span>{post.category}</span>
            <span aria-hidden="true" className="text-quiet">
              /
            </span>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden="true" className="text-quiet">
              /
            </span>
            <span>{post.readTime}</span>
          </div>

          <h2
            className={
              featured
                ? "featured-title text-2xl leading-snug text-foreground transition-opacity group-hover:opacity-80 sm:text-[1.85rem]"
                : "text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-muted sm:text-[1.45rem] sm:leading-snug"
            }
          >
            {post.title}
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-muted">{post.excerpt}</p>
        </div>

        <span className="inline-flex items-center gap-2 pt-1 text-sm font-medium text-foreground sm:justify-self-end">
          Read
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </Link>
    </article>
  );
}
