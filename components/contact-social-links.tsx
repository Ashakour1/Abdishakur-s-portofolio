"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { SocialIcon } from "@/components/social-icon";
import { socialLinks } from "@/lib/site-data";

export function ContactSocialLinks() {
  return (
    <div className="mt-5 space-y-1">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between gap-4 border-t border-white/10 py-4 text-sm text-slate-200 first:border-t-0 hover:text-white"
          onClick={() =>
            posthog.capture("contact_social_link_clicked", {
              platform: link.label,
              location: "contact_page",
            })
          }
        >
          <span className="inline-flex items-center gap-3">
            <SocialIcon label={link.label} />
            <span>{link.label}</span>
          </span>
          <span className="text-slate-400">Open</span>
        </Link>
      ))}
    </div>
  );
}
