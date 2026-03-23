import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  aside?: ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  aside,
}: PageShellProps) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-5 py-14 sm:px-6 sm:py-20">
      <section className="fade-up space-y-6">
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
          {eyebrow}
        </p>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div className="min-w-0 space-y-4">
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          </div>

          {aside ? (
            <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-sm leading-7 text-slate-300">
              {aside}
            </div>
          ) : null}
        </div>
      </section>

      <div className="fade-up fade-up-delay-1 flex flex-col gap-6">{children}</div>
    </main>
  );
}
