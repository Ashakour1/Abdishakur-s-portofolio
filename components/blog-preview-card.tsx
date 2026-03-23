import Link from "next/link";
import { formatDate, type BlogPost } from "@/lib/site-data";

type BlogPreviewCardProps = {
  post: BlogPost;
};

export function BlogPreviewCard({ post }: BlogPreviewCardProps) {
  return (
    <article className="group border-b border-white/10 py-6 last:border-b-0 last:pb-0">
      <div className="grid gap-4 md:grid-cols-[0.3fr_1fr] md:gap-8 lg:grid-cols-[0.3fr_1fr_auto] lg:items-start">
        <div className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
          <p>{post.category}</p>
          <p>{formatDate(post.date)}</p>
          <p>{post.readTime}</p>
        </div>

        <div className="min-w-0 space-y-3">
          <Link href={`/blog/${post.slug}`} className="block">
            <h2 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-slate-100">
              {post.title}
            </h2>
          </Link>
          <p className="text-sm leading-7 text-slate-300">{post.excerpt}</p>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-medium text-slate-100 hover:text-white md:pt-1 lg:justify-self-end"
        >
          Read
        </Link>
      </div>
    </article>
  );
}
