import type { Metadata } from "next";
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
      title="Software engineering today, with a steady move into AI and machine learning."
      description="I am a Software Engineer at Salaam Group, based in Mogadishu, Somalia. My work is centered on reliable products, backend thinking, and practical execution, while I continue building toward AI and machine learning."
    >
      <section className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Introduction
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Building dependable software while growing into intelligent systems.
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-8 text-slate-300">
          <p>
            I enjoy building software that is reliable, clear, and useful in
            real-world work. My background is grounded in software engineering,
            backend systems, and product execution that stays practical and
            maintainable.
          </p>
          <p>
            At the same time, I am intentionally moving deeper into AI and
            machine learning. I am interested in models, experimentation,
            evaluation, and the engineering systems that make intelligent tools
            actually useful.
          </p>
          <p>
            The common thread in all of it is problem-solving: understanding
            the real problem, designing the right system, and building
            solutions that hold up over time.
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
              key={entry.title + entry.subtitle}
              className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
            >
              <div className="space-y-2">
                <div>
                  <h3 className="text-base font-semibold text-white">{entry.title}</h3>
                  <p className="text-sm text-slate-400">{entry.subtitle}</p>
                </div>
                <p className="max-w-3xl text-sm leading-7 text-slate-300">
                  {entry.description}
                </p>
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
              key={entry.title + entry.subtitle}
              className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
            >
              <div className="space-y-2">
                <div>
                  <h3 className="text-base font-semibold text-white">{entry.title}</h3>
                  <p className="text-sm text-slate-400">{entry.subtitle}</p>
                </div>
                <p className="max-w-3xl text-sm leading-7 text-slate-300">
                  {entry.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 pt-10">
        <div className="border border-white/10 bg-white/[0.02] px-5 py-8 sm:px-8">
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
      </section>
    </PageShell>
  );
}
