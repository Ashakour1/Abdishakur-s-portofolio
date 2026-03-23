"use client";

import type { FormEvent } from "react";
import { startTransition, useState } from "react";
import { siteConfig } from "@/lib/site-data";

export function ContactForm() {
  const [status, setStatus] = useState(
    "This form opens your email client with the message prefilled.",
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name || "a new contact"}`,
    );
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    );

    startTransition(() => {
      setStatus("Opening your email client.");
    });

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white outline-none placeholder:text-slate-500 focus:border-white/25 sm:text-sm"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white outline-none placeholder:text-slate-500 focus:border-white/25 sm:text-sm"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-slate-300">
        <span>Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white outline-none placeholder:text-slate-500 focus:border-white/25 sm:text-sm"
          placeholder="Tell me a bit about what you want to build or discuss."
        />
      </label>

      <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-400">{status}</p>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-[#0A192F] hover:bg-slate-200 sm:w-auto"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
