"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { serviceOptions } from "@/config/content";
import { site } from "@/config/site";
import { EASE } from "./ui/Motion";

type Status = "idle" | "submitting" | "sent" | "error";

const field =
  "peer h-12 w-full rounded-lg border border-[#0b1220]/12 bg-white px-4 text-[0.9375rem] text-[#0b1220] " +
  "outline-none transition-colors duration-300 placeholder:text-[#64748b]/70 " +
  "hover:border-[#0b1220]/25 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20";

const label =
  "mb-2 block text-[0.6875rem] font-medium tracking-[0.16em] text-[#64748b] uppercase";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const payload = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      business: get("business"),
      service: get("service"),
      message: get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        `Something went wrong sending your enquiry. Please email ${site.contact.email} directly or try again.`,
      );
    }
  };

  return (
    <div className="relative">
      <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name <span className="text-[#c9a227]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="email" className={label}>
            Email <span className="text-[#c9a227]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="phone" className={label}>
            Phone <span className="text-[#c9a227]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 00000 00000"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="business" className={label}>
            Business Name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            placeholder="Registered or trade name"
            className={field}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className={label}>
            Service Required
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className={`${field} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%2364748b%22 stroke-width=%221.5%22%3E%3Cpath d=%22M4 6l4 4 4-4%22/%3E%3C/svg%3E')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-11`}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            <option value="Other">Something else</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>
            Message <span className="text-[#c9a227]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="A short note on your business and what you need help with."
            className={`${field} h-auto resize-y py-3.5 leading-relaxed`}
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting" || status === "sent"}
            className="group/btn relative inline-flex h-[3.375rem] w-full items-center justify-center gap-2.5 rounded-xl bg-[#0b1220] px-7 text-[0.9375rem] font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#111827] active:scale-[0.99] disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
          >
            {status === "submitting" ? (
              <>
                <Loader2 aria-hidden className="size-4 animate-spin" />
                Sending…
              </>
            ) : status === "sent" ? (
              <>
                <CheckCircle2 aria-hidden className="size-4 text-[#e5c766]" />
                Enquiry sent
              </>
            ) : (
              <>
                Request Consultation
                <Send
                  aria-hidden
                  className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </>
            )}
          </button>

          <p className="mt-4 text-[0.75rem] leading-relaxed text-[#64748b]">
            Submitting sends your enquiry directly to us. Prefer something
            quicker? Call or send a WhatsApp message instead.
          </p>
        </div>
      </form>

      <AnimatePresence>
        {status === "sent" && (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-5 flex items-start gap-2.5 rounded-lg border border-[#c9a227]/30 bg-[#c9a227]/[0.08] px-4 py-3.5 text-[0.8125rem] leading-relaxed text-[#0b1220]"
          >
            <CheckCircle2 aria-hidden className="mt-0.5 size-4 shrink-0 text-[#a8871c]" />
            Thanks — your enquiry has been sent. We&apos;ll get back to you
            shortly.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            role="alert"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-5 flex items-start gap-2.5 rounded-lg border border-red-500/30 bg-red-500/[0.08] px-4 py-3.5 text-[0.8125rem] leading-relaxed text-[#0b1220]"
          >
            <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0 text-red-600" />
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
