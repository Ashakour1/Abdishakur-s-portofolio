import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { educationEntries, experienceEntries } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Introduction, experience, education, and next steps in software engineering and AI/ML growth.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Me"
      title="Software engineer building across systems, AI, and fintech."
      description="I am a Software Engineer based in Mogadishu, Somalia, focused on reliable products, backend systems, AI-driven tools, and practical fintech software."
    >
      <section className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Introduction
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Building reliable software across backend systems, AI, and fintech products.
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-8 text-slate-300">
          <p>
            I work on software that needs to be practical, dependable, and
            useful beyond the first release. My background is rooted in
            software engineering, backend systems, and product execution that
            stays clear as complexity grows.
          </p>
          <p>
            I am particularly interested in AI and fintech, where strong
            engineering decisions shape how products perform, scale, and create
            trust for the people using them.
          </p>
          <p>
            What ties my work together is a focus on building systems that are
            understandable, maintainable, and built around real problems rather
            than unnecessary complexity.
          </p>
        </div>
      </section>

      <section className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Experiences
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Work across current engineering and products I am building.
          </h2>
        </div>

        <div className="space-y-6">
          {experienceEntries.map((entry) => (
            <article
              key={entry.title + entry.company + entry.period}
              className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl">
                  <Image
                    src={entry.logo}
                    alt={`${entry.company} logo`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-xl object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">{entry.title}</h3>
                    <p className="text-sm text-slate-400">{entry.company}</p>
                  </div>
                  <p className="text-sm text-slate-300">{entry.period}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Education
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            The learning path behind how I work and where I am heading.
          </h2>
        </div>

        <div className="space-y-6">
          {educationEntries.map((entry) => (
            <article
              key={entry.degree + entry.institution + entry.date}
              className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
            >
              <div className="space-y-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-white">{entry.degree}</h3>
                    <p className="text-sm text-slate-400">{entry.institution}</p>
                  </div>
                  <div className="text-sm text-slate-400 sm:text-right">
                    <p>{entry.date}</p>
                    <p>{entry.location}</p>
                  </div>
                </div>
                <p className="max-w-3xl text-sm leading-7 text-slate-300">
                  {entry.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className=" border-white/10 pt-10">
        <div className="border  border-white/10   px-5 py-8 sm:px-8">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Next Step
          </p>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            If you want to follow my work, start with the blog or reach out.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            I write about software engineering, product thinking, and my growth
            into AI and machine learning. If you want to connect, the contact
            page is the best place to start.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex w-full items-center justify-center border border-line-strong px-5 py-3 text-sm font-medium tracking-[0.01em] text-foreground sm:w-auto"
            >
              View Blog
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center border border-line px-5 py-3 text-sm font-medium tracking-[0.01em] text-foreground sm:w-auto"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
