import Link from "next/link";
import { SocialIcon } from "@/components/social-icon";
import { siteConfig, socialLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-medium text-slate-100">{siteConfig.name}</p>
          <p>{siteConfig.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/10 px-3 py-2 hover:border-white/20 hover:text-white"
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
