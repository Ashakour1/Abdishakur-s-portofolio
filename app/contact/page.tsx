import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ContactSocialLinks } from "@/components/contact-social-links";
import { PageShell } from "@/components/page-shell";
import { MailIcon } from "@/components/social-icon";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact form and social links for connecting about software engineering and AI/ML work.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Open to conversations around software engineering and AI/ML."
      description="If you want to talk about product work, backend systems, engineering ideas, or the path into machine learning, send a message. The form opens your email client with everything prefilled."
    >
      <section className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:gap-12">
        <article className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Send a message
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Use the form or email directly.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Share your name, email, and a short message. Your default email app
            will open with everything prefilled.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </article>

        <div className="min-w-0 space-y-10 md:pt-1">
          <article className="border-t border-white/10 pt-6">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              Direct contact
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Prefer email first? Use the address below.
            </p>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-flex items-center gap-3 break-all text-base font-medium text-white hover:text-slate-200 sm:break-normal"
            >
              <MailIcon />
              {siteConfig.email}
            </Link>
          </article>

          <article className="border-t border-white/10 pt-6">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              Social links
            </p>
            <ContactSocialLinks />
          </article>

          <article className="border-t border-white/10 pt-6">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              Best for
            </p>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
              <p>Software engineering discussions</p>
              <p>Product and backend ideas</p>
              <p>AI/ML learning and collaboration</p>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
