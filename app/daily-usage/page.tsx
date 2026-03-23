import type { Metadata } from "next";
import { DailyUsageCard } from "@/components/daily-usage-card";
import { PageShell } from "@/components/page-shell";
import { dailyUsageSections } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Daily Usage",
  description:
    "A minimal overview of the tools used daily for development, AI/ML learning, and productivity.",
};

export default function DailyUsagePage() {
  return (
    <PageShell
      eyebrow="Daily Usage"
      title="The devices and tools behind my daily workflow."
      description="A practical look at the hardware and software I use most often for development, testing, communication, and focused execution."
    >
      {dailyUsageSections.map((section) => (
        <section key={section.title} className="border-t border-white/10 pt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
                Daily Use
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {section.title}
              </h2>
            </div>

            <p className="text-sm text-slate-400">
              {section.items.length} {section.items.length === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="grid gap-x-10 md:grid-cols-2">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="border-t border-white/10 first:border-t-0"
              >
                <DailyUsageCard item={item} />
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="border-t border-white/10 pt-10">
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
          Workflow
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          A setup built around clarity, speed, and low friction.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
          I prefer a setup that stays dependable and lightweight. The goal is
          not to use more tools, but to keep a small set of devices and
          software that support focused work every day.
        </p>
      </section>
    </PageShell>
  );
}
