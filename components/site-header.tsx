"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteConfig } from "@/lib/site-data";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A192F]/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="min-w-0 text-sm font-semibold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteConfig.name}
          </Link>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-white/20 hover:bg-white/[0.03] md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="relative h-4 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-200 ease-out ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-4 bg-current transition-opacity duration-200 ease-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-4 bg-current transition-transform duration-200 ease-out ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-x-1 md:flex md:justify-end"
          >
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b px-3 py-2 text-sm ${
                    active
                      ? "border-white/70 text-white"
                      : "border-transparent text-slate-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div
          className={`grid transition-all duration-300 ease-out md:hidden ${
            isMenuOpen
              ? "mt-4 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav
            id="site-menu"
            aria-label="Mobile primary"
            className="overflow-hidden rounded-lg"
          >
            <div
              className={`flex flex-col transition-transform duration-300 ease-out ${
                isMenuOpen ? "translate-y-0 pt-3" : "-translate-y-2 pt-0"
              }`}
            >
              {navigation.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`border-b border-white/10 py-3 text-sm transition-colors ${
                      active
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
