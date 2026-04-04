"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteConfig } from "@/lib/site-data";
import { ThemeToggle } from "@/components/theme-toggle";

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
    <header className="sticky top-0 z-50  border-line bg-background/95">
      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="min-w-0 text-base font-semibold tracking-[0.01em] text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteConfig.name}
          </Link>

          <div className="flex items-center gap-3">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-x-6 md:flex md:justify-end"
            >
              {navigation.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`py-1 text-sm ${
                      active
                        ? "font-medium text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <ThemeToggle />

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="site-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center border border-line bg-transparent text-foreground transition-colors hover:bg-hover-surface md:hidden"
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
          </div>
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
            className="overflow-hidden border border-line bg-background"
          >
            <div
              className={`flex flex-col transition-transform duration-300 ease-out ${
                isMenuOpen ? "translate-y-0 py-2" : "-translate-y-2 py-0"
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
                    className={`border-b border-line px-4 py-3 text-sm transition-colors last:border-b-0 ${
                      active
                        ? "font-medium text-foreground"
                        : "text-muted hover:text-foreground"
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
