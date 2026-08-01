"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import posthog from "posthog-js";

export function ContactForm() {
  const [status, setStatus] = useState(
    "Your message will be delivered to my inbox.",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setIsSubmitting(true);
    setStatus("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus(result.error || "Could not send your message. Try again.");
        return;
      }

      posthog.capture("contact_form_submitted", {
        has_name: name.length > 0,
        has_message: message.length > 0,
        message_length: message.length,
      });

      form.reset();
      setStatus("Message sent. I'll get back to you soon.");
    } catch {
      setStatus("Could not send your message. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-muted">
          <span>Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            disabled={isSubmitting}
            className="w-full border border-line bg-surface px-4 py-3 text-base text-foreground outline-none placeholder:text-quiet focus:border-line-strong disabled:opacity-60 sm:text-sm"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2 text-sm text-muted">
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            disabled={isSubmitting}
            className="w-full border border-line bg-surface px-4 py-3 text-base text-foreground outline-none placeholder:text-quiet focus:border-line-strong disabled:opacity-60 sm:text-sm"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-muted">
        <span>Message</span>
        <textarea
          name="message"
          required
          rows={6}
          disabled={isSubmitting}
          className="w-full border border-line bg-surface px-4 py-3 text-base text-foreground outline-none placeholder:text-quiet focus:border-line-strong disabled:opacity-60 sm:text-sm"
          placeholder="Tell me a bit about what you want to build or discuss."
        />
      </label>

      <div className="flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-quiet">{status}</p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center border border-line-strong px-5 py-3 text-sm font-medium tracking-[0.01em] text-foreground disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
