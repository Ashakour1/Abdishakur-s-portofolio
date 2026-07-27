"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { SocialIcon } from "@/components/social-icon";
import { siteConfig, socialLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-quiet sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p>{siteConfig.tagline}</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line px-3 py-2 hover:border-line-strong hover:text-foreground"
              onClick={() =>
                posthog.capture("social_link_clicked", {
                  platform: link.label,
                  location: "footer",
                })
              }
            >
              <SocialIcon label={link.label} />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
