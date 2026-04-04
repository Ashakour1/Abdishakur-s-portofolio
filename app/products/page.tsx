import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { productItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Products, experiments, and software projects I have built and continue to grow.",
};

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow="Products"
      title="Products, experiments, and software I am building."
      description="A broader look at the products I have launched, the tools I continue to improve, and the ideas I am turning into real software."
    >
      <section className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Product Work
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            A mix of live products, shipped tools, and ongoing experiments.
          </h2>
        </div>

        <div className="space-y-2">
          {productItems.map((product) => {
            const metaText = product.href
              ? product.href.replace(/^https?:\/\//, "")
              : "Currently in progress";

            const content = (
              <article className="grid gap-3 border-b border-white/10 py-4 last:border-b-0 md:grid-cols-[1fr_auto] md:items-start md:gap-6">
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

                  <p className="max-w-2xl text-sm leading-6 text-slate-300">
                    {product.description}
                  </p>
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
      </section>
    </PageShell>
  );
}
