"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, FileSpreadsheet, MessageCircle, Scale } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { Button } from "./ui/Button";
import { EASE, TextReveal } from "./ui/Motion";

const trustPoints = [
  { icon: FileSpreadsheet, label: "GST Compliance" },
  { icon: Scale, label: "Tax Advisory" },
  { icon: CalendarCheck, label: "Business Support" },
];

export function Hero() {
  const reduce = useReducedMotion();

  /**
   * `initial` stays identical between server and client render; reduced motion
   * is honoured by collapsing the transition, not by changing the first frame.
   */
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0 : 0.7,
      delay: reduce ? 0 : delay,
      ease: EASE,
    },
  });

  return (
    <section className="relative overflow-hidden bg-[#0b1220] pt-32 pb-20 sm:pt-36 lg:pb-28 lg:pt-44">
      {/* Background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark mask-fade" />
        <div className="absolute -left-40 top-1/4 size-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(201,162,39,0.10),transparent)] blur-3xl" />
        <div className="absolute -right-32 -top-24 size-[42rem] rounded-full bg-[radial-gradient(closest-side,rgba(201,162,39,0.13),transparent)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0b1220]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <motion.span {...fade(0.05)} className="eyebrow text-[#c9a227]">
            GST • Income Tax •Account & Book Keeping • Digital Signature
          </motion.span>

          <h1 className="mt-7 font-serif text-[2.5rem] leading-[1.08] text-white sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem]">
            <TextReveal text={"GST & Income Tax Compliance,"} delay={0.15} />
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={{ y: "108%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: reduce ? 0 : 0.85,
                  delay: reduce ? 0 : 0.37,
                  ease: EASE,
                }}
              >
                Handled With <span className="text-accent">Precision.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            {...fade(0.5)}
            className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-white/60 sm:text-lg"
          >
            Helping businesses stay compliant, reduce tax complexity and make
            confident financial decisions.
          </motion.p>

          <motion.div
            {...fade(0.62)}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Button href="/contact" size="lg" arrow className="w-full sm:w-auto">
              Book a Consultation
            </Button>
            <Button
              href="/services"
              size="lg"
              variant="light"
              className="w-full sm:w-auto"
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div {...fade(0.76)} className="mt-14">
            <div aria-hidden className="hairline-dark mb-7 max-w-lg" />
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {trustPoints.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 text-[0.8125rem] font-medium tracking-wide text-white/55"
                >
                  <Icon aria-hidden className="size-4 text-[#c9a227]" />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.a
            {...fade(0.86)}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-8 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-white/50 transition-colors duration-300 hover:text-[#e5c766] lg:hidden"
          >
            <MessageCircle aria-hidden className="size-4" />
            Prefer WhatsApp? Message directly
          </motion.a>
        </div>
      </div>
    </section>
  );
}
