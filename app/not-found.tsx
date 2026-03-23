import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-20 sm:px-6">
      <div className="fade-up flex max-w-2xl flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
          Not Found
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          The page you requested does not exist.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
          Try heading back home or use the navigation to continue exploring the
          portfolio.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-white"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
          >
            <path d="M15 18 9 12l6-6" />
          </svg>
          Back home
        </Link>
      </div>
    </main>
  );
}
