"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/config/content";
import { Button } from "./ui/Button";
import { EASE, Reveal } from "./ui/Motion";
import { SectionHeading } from "./ui/SectionHeading";

type Props = {
  items?: { q: string; a: string }[];
  /** Hides the section heading when embedded inside another page. */
  bare?: boolean;
  className?: string;
};

export function FAQ({ items = faqs, bare = false, className }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const uid = useId();

  const list = (
    <ul className="divide-y divide-[#0b1220]/[0.08] border-y border-[#0b1220]/[0.08]">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const buttonId = `${uid}-button-${i}`;

        return (
          <li key={item.q}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left sm:py-7"
              >
                <span
                  className={
                    "font-serif text-[1.0625rem] leading-snug transition-colors duration-300 sm:text-[1.1875rem] " +
                    (isOpen
                      ? "text-[#0b1220]"
                      : "text-[#0b1220]/80 group-hover:text-[#0b1220]")
                  }
                >
                  {item.q}
                </span>

                <span
                  aria-hidden
                  className={
                    "mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                    (isOpen
                      ? "rotate-45 border-[#c9a227] bg-[#c9a227] text-[#0b1220]"
                      : "border-[#0b1220]/15 text-[#0b1220]/55 group-hover:border-[#c9a227]/60 group-hover:text-[#a8871c]")
                  }
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: reduce ? 0.15 : 0.45,
                    ease: EASE,
                    opacity: { duration: reduce ? 0.15 : 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 pr-10 text-[0.9375rem] leading-relaxed text-[#64748b]">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );

  if (bare) {
    return <div className={className}>{list}</div>;
  }

  return (
    <section id="faq" className="relative bg-[#f8f7f3] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions,
                <br />
                <span className="text-accent">Answered</span> Plainly.
              </>
            }
            description="Common questions about registration, filing and ongoing compliance."
          />

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-xl border border-[#0b1220]/[0.08] bg-white p-6">
              <p className="text-[0.9375rem] font-medium text-[#0b1220]">
                Something else on your mind?
              </p>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-[#64748b]">
                Send the question across and you will get a direct answer, not a
                brochure.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="outline" size="sm" arrow>
                  Get in Touch
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>{list}</Reveal>
      </div>
    </section>
  );
}
