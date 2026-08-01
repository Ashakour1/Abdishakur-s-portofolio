import { ImageResponse } from "next/og";
import { blogPosts, formatDate, getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-data";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Publication preview";

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const isFeatured = blogPosts[0]?.slug === slug;

  const title = post?.title ?? "Publication";
  const category = post?.category ?? "Writing";
  const date = post ? formatDate(post.date) : "";
  const readTime = post?.readTime ?? "";
  const excerpt = post?.excerpt ?? siteConfig.description;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#071525",
          color: "#ffffff",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(125, 211, 252, 0.12) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            opacity: 0.35,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            background: "#ffffff",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            {isFeatured ? (
              <span style={{ color: "#ffffff" }}>Featured</span>
            ) : null}
            {isFeatured ? <span>/</span> : null}
            <span>{category}</span>
            {date ? <span>/</span> : null}
            {date ? <span>{date}</span> : null}
            {readTime ? <span>/</span> : null}
            {readTime ? <span>{readTime}</span> : null}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: title.length > 70 ? 52 : 64,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 600,
              maxWidth: 980,
            }}
          >
            {title}
          </div>

          <div
            style={{
              display: "flex",
              width: 72,
              height: 2,
              background: "rgba(255,255,255,0.85)",
            }}
          />

          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.68)",
              maxWidth: 860,
            }}
          >
            {excerpt.length > 160 ? `${excerpt.slice(0, 157)}...` : excerpt}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 18,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Publications
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 600,
              }}
            >
              {siteConfig.name}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            {siteConfig.role}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
