import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { dailyUsageSections } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Daily Usage",
  description:
    "A minimal overview of the tools used daily for development, AI/ML learning, and productivity.",
};

function getInitials(name: string) {
  return name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase();
}

export default function DailyUsagePage() {
  return (
    <PageShell
      eyebrow="Daily Usage"
      title="The devices and tools behind my daily workflow."
      description="A practical look at the hardware and software I use most often for development, testing, communication, and focused execution."
    >
      {dailyUsageSections.map((section) => (
        <section
          key={section.title}
          className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.72fr_1.28fr]"
        >
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              {section.title}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {section.title === "Software"
                ? "The software I rely on to build, test, and ship."
                : "The hardware setup behind my everyday workflow."}
            </h2>
            <p className="text-sm text-slate-400">
              {section.items.length} {section.items.length === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="space-y-5">
            {section.items.map((item) => (
              <article key={item.name} className="pb-2">
                <div className="flex items-start gap-3">
                  {item.image ? (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/[0.04]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        className="h-14 w-14 object-cover"
                        unoptimized={item.image.endsWith(".svg")}
                      />
                    </div>
                  ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center">
                      <span className="text-[12px] font-medium uppercase tracking-[0.02em] text-slate-500">
                        {getInitials(item.name)}
                      </span>
                    </div>
                  )}

                  <div className="min-w-0 pt-0.5">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">
                      {item.category}
                    </p>
                    <h3 className="mt-0.5 text-[1.02rem] font-medium leading-6 text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 max-w-3xl text-[15px] leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
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
