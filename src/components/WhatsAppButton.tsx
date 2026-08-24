"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { site, whatsappUrl, whatsappUrlFor } from "@/config/site";
import { EASE } from "./ui/Motion";

/**
 * Floating WhatsApp entry point. The button reveals itself once the visitor
 * starts scrolling and opens a small chat panel — quick replies and a free
 * text field, each of which hands off to WhatsApp with the message prefilled.
 */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const reduce = useReducedMotion();
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Escape closes the panel. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* A click anywhere outside dismisses it, as chat widgets are expected to. */
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, [open]);

  /* Once the panel settles, put the cursor in the field on pointer devices. */
  useEffect(() => {
    if (!open) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 380);
    return () => window.clearTimeout(t);
  }, [open]);

  const send = (message: string) => {
    const text = message.trim();
    if (!text) return;
    window.open(whatsappUrlFor(text), "_blank", "noopener,noreferrer");
    setDraft("");
    setOpen(false);
  };

  const initials = site.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end sm:bottom-7 sm:right-7"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      {/* ------------------------------------------------------------ panel */}
      <AnimatePresence>
        {visible && open && (
          <motion.div
            id={panelId}
            role="dialog"
            aria-label="Chat with Yash Shah on WhatsApp"
            initial={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : 12, scale: reduce ? 1 : 0.97 }}
            transition={{ duration: 0.38, ease: EASE }}
            style={{ transformOrigin: "bottom right" }}
            className="mb-3 w-[min(21rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-[rgb(11_18_32/0.08)] bg-white shadow-[0_26px_70px_-24px_rgba(11,18,32,0.45)]"
          >
            {/* Header */}
            <div className="relative flex items-start gap-3 bg-navy px-4 py-4 text-white">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60"
              />
              <span
                aria-hidden
                className="relative grid size-10 flex-none place-items-center rounded-full border border-[#c9a227]/40 bg-[#111827] font-serif text-[0.95rem] text-[#e5c766]"
              >
                {initials}
              </span>

              <div className="relative min-w-0 flex-1">
                <p className="truncate font-serif text-[1.0625rem] leading-tight">
                  {site.name}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-[0.6875rem] text-white/65">
                  <span
                    aria-hidden
                    className="size-1.5 flex-none rounded-full bg-[#25d366]"
                  />
                  <span className="truncate">{site.chat.status}</span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="relative -mr-1 -mt-1 grid size-8 flex-none place-items-center rounded-full text-white/60 transition-colors duration-300 hover:bg-white/10 hover:text-white"
              >
                <X aria-hidden className="size-4" />
              </button>
            </div>

            {/* Greeting */}
            <div className="bg-cream px-4 py-5">
              <motion.p
                initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: reduce ? 0 : 0.14, ease: EASE }}
                className="max-w-[15.5rem] rounded-2xl rounded-tl-md bg-white px-4 py-3 text-[0.8125rem] leading-relaxed text-[#111827] shadow-[0_1px_2px_rgb(11_18_32/0.04),0_8px_24px_-14px_rgb(11_18_32/0.18)]"
              >
                {site.chat.greeting}
              </motion.p>
            </div>

            {/* Quick replies */}
            <div className="border-t border-[rgb(11_18_32/0.07)] px-4 pb-3 pt-4">
              <p className="text-[0.625rem] font-medium uppercase tracking-[0.18em] text-slate-body">
                Quick start
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {site.chat.quickReplies.map((reply, i) => (
                  <motion.button
                    key={reply}
                    type="button"
                    onClick={() => send(`Hello Yash, I need help with: ${reply}.`)}
                    initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.32,
                      delay: reduce ? 0 : 0.2 + i * 0.045,
                      ease: EASE,
                    }}
                    className="rounded-full border border-[rgb(11_18_32/0.1)] px-3 py-1.5 text-[0.75rem] text-[#111827] transition-colors duration-300 hover:border-gold hover:bg-gold/10 hover:text-navy"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(draft);
              }}
              className="flex items-center gap-2 border-t border-[rgb(11_18_32/0.07)] px-3 py-3"
            >
              <input
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={site.chat.placeholder}
                aria-label="Your message"
                className="min-w-0 flex-1 rounded-full border border-[rgb(11_18_32/0.1)] bg-white px-4 py-2.5 text-[0.8125rem] text-[#111827] outline-none transition-colors duration-300 placeholder:text-slate-body/70 focus:border-gold"
              />
              <button
                type="submit"
                disabled={!draft.trim()}
                aria-label="Send on WhatsApp"
                className="grid size-10 flex-none place-items-center rounded-full bg-navy text-[#e5c766] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-charcoal enabled:hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send aria-hidden className="size-4" />
              </button>
            </form>

            {/* Footnote — the honest bit: this hands off to WhatsApp. */}
            <p className="border-t border-[rgb(11_18_32/0.07)] bg-cream px-4 py-2.5 text-center text-[0.625rem] text-slate-body">
              Continues in WhatsApp ·{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-medium text-navy"
              >
                {site.contact.phone}
              </a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --------------------------------------------------------- launcher */}
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close chat" : "Chat on WhatsApp"}
            initial={{ opacity: 0, scale: reduce ? 1 : 0.85, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reduce ? 1 : 0.85, y: reduce ? 0 : 12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="group relative grid size-14 place-items-center rounded-full bg-[#0b1220] text-white shadow-[0_14px_38px_-12px_rgba(11,18,32,0.75)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:bg-[#111827] active:scale-95 sm:size-[3.75rem]"
          >
            {/* Gold ring */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full border border-[#c9a227]/40 transition-colors duration-400 group-hover:border-[#c9a227]"
            />
            {/* Quiet pulse — CSS-driven, stilled while the panel is open */}
            {!open && (
              <span
                aria-hidden
                className="absolute inset-0 animate-ping rounded-full border border-[#c9a227]/30 [animation-duration:2.8s] motion-reduce:hidden"
              />
            )}

            <span aria-hidden className="relative grid size-6 place-items-center">
              <AnimatePresence initial={false} mode="wait">
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: reduce ? 0 : -70, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: reduce ? 0 : 70, scale: 0.7 }}
                    transition={{ duration: 0.26, ease: EASE }}
                    className="absolute"
                  >
                    <X className="size-6 text-[#e5c766]" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ opacity: 0, rotate: reduce ? 0 : 70, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: reduce ? 0 : -70, scale: 0.7 }}
                    transition={{ duration: 0.26, ease: EASE }}
                    className="absolute"
                  >
                    <MessageCircle className="size-6 text-[#e5c766] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
                  </motion.span>
                )}
              </AnimatePresence>
            </span>

            {/* Tooltip — pointer devices only, and only while closed */}
            {!open && (
              <span
                aria-hidden
                className="pointer-events-none absolute right-[calc(100%+0.875rem)] top-1/2 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-lg bg-[#0b1220] px-3.5 py-2 text-[0.75rem] font-medium text-white opacity-0 shadow-lg transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100 lg:block"
              >
                Chat on WhatsApp
                <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#0b1220]" />
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
