"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { process } from "@/config/content";
import { Reveal } from "./ui/Motion";
import { SectionHeading } from "./ui/SectionHeading";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden bg-[#0b1220] py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark opacity-60 mask-fade" />
        <div className="absolute left-1/2 top-0 size-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,162,39,0.09),transparent)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Process"
          tone="light"
          align="center"
          title={
            <>
              Simple Process.
              <br />
              Clear <span className="text-accent">Outcomes.</span>
            </>
          }
          description="How an engagement runs, from the first conversation to an ongoing filing rhythm."
        />

        <div ref={ref} className="relative mt-20">
          {/* Connecting rail — vertical on mobile */}
          <div
            aria-hidden
            className="absolute bottom-2 left-[1.4375rem] top-2 w-px bg-white/[0.09] lg:hidden"
          >
            <motion.span
              className="block h-full w-full origin-top bg-gradient-to-b from-[#c9a227] to-[#c9a227]/25"
              style={{ scaleY: reduce ? 1 : lineScale }}
            />
          </div>

          {/* Connecting rail — horizontal on desktop */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-[1.4375rem] hidden h-px bg-white/[0.09] lg:block"
          >
            <motion.span
              className="block h-full w-full origin-left bg-gradient-to-r from-[#c9a227] to-[#c9a227]/25"
              style={{ scaleX: reduce ? 1 : lineScale }}
            />
          </div>

          <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
            {process.map(({ step, title, body, icon: Icon }, i) => (
              <Reveal
                key={step}
                as="li"
                delay={i * 0.1}
                className="relative pl-16 lg:pl-0"
              >
                {/* Node */}
                <span className="absolute left-0 top-0 grid size-12 place-items-center rounded-full border border-[#c9a227]/35 bg-[#0b1220] lg:relative lg:mb-8">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-[#c9a227]/10"
                  />
                  <Icon aria-hidden className="relative size-5 text-[#e5c766]" />
                </span>

                <div className="lg:pr-6">
                  <span className="font-serif text-[0.8125rem] tracking-[0.14em] text-[#c9a227] tnum">
                    {step}
                  </span>
                  <h3 className="mt-2.5 text-[1.375rem] text-white">{title}</h3>
                  <p className="mt-4 text-[0.875rem] leading-relaxed text-white/55">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
