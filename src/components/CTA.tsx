"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { Button } from "./ui/Button";
import { EASE, Reveal } from "./ui/Motion";

export function CTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0b1220]">
      {/* Animated background lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="absolute left-1/2 top-1/2 size-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,162,39,0.13),transparent)] blur-3xl" />

        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent"
            style={{ top: `${28 + i * 22}%` }}
            initial={{ x: "-100%", opacity: 0 }}
            animate={
              reduce
                ? { opacity: 0.4, x: 0 }
                : { x: ["-100%", "100%"], opacity: [0, 1, 0] }
            }
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: 9 + i * 2.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 2.2,
                  }
            }
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow eyebrow-center text-[#c9a227]">
              Next Step
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 text-[2.125rem] leading-[1.1] text-white sm:text-[3rem] lg:text-[3.75rem]">
              Let&rsquo;s Simplify Your GST &amp;{" "}
              <span className="text-accent">Tax Compliance.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-xl text-[0.9375rem] leading-relaxed text-white/60 sm:text-base">
              Have a question about GST, taxation or business compliance?
              Let&rsquo;s discuss your requirements.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="/contact" size="lg" arrow className="w-full sm:w-auto">
                Book a Consultation
              </Button>
              <Button
                href={whatsappUrl}
                external
                size="lg"
                variant="light"
                className="w-full sm:w-auto"
              >
                <MessageCircle aria-hidden className="size-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
