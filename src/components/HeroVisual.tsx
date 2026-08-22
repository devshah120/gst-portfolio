"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import { EASE } from "./ui/Motion";

const ledger = [
  { label: "GSTR-1", period: "Outward supplies", state: "Filed" },
  { label: "GSTR-3B", period: "Summary return", state: "Filed" },
  { label: "GSTR-2B", period: "Credit reconciled", state: "Matched" },
  { label: "GSTR-9", period: "Annual return", state: "Scheduled" },
];

/**
 * Abstract compliance visual for the hero — a layered, dashboard-style
 * composition rather than stock photography.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();

  /** Idle drift for the floating cards; disabled under reduced motion. */
  const float = (distance: number, duration: number) => ({
    animate: reduce ? undefined : { y: [0, -distance, 0] },
    transition: reduce
      ? undefined
      : { duration, repeat: Infinity, ease: "easeInOut" as const },
  });

  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      {/* Ambient gold wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -inset-y-16 rounded-[50%] bg-[radial-gradient(closest-side,rgba(201,162,39,0.18),transparent)] blur-2xl"
      />

      {/* Fine rotating ring — always rendered so SSR and client agree; the
          rotation itself is what the motion preference switches off. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 hidden size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#c9a227]/15 sm:block"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={
          reduce
            ? undefined
            : { duration: 90, repeat: Infinity, ease: "linear" }
        }
      />

      {/* Primary panel */}
      <motion.div
        initial={{ opacity: 0, y: 34, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: reduce ? 0 : 0.9,
          delay: reduce ? 0 : 0.35,
          ease: EASE,
        }}
        className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.075] to-white/[0.02] p-6 backdrop-blur-md sm:p-7"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-dark opacity-70"
        />
        {/* Top gold hairline */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/70 to-transparent"
        />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.625rem] font-medium tracking-[0.24em] text-white/45">
                COMPLIANCE OVERVIEW
              </p>
              <p className="mt-2.5 font-serif text-xl text-white sm:text-[1.375rem]">
                Financial Year Status
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-3 py-1.5 text-[0.625rem] font-medium tracking-[0.12em] text-[#e5c766]">
              {/* The ping is pure CSS, so the global reduced-motion rule
                  already neutralises it — no conditional render needed. */}
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c9a227] opacity-70 motion-reduce:hidden" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[#e5c766]" />
              </span>
              ON TRACK
            </span>
          </div>

          <div aria-hidden className="hairline-dark my-6" />

          {/* Ledger rows */}
          <ul className="space-y-1">
            {ledger.map((row, i) => (
              <motion.li
                key={row.label}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: reduce ? 0 : 0.55,
                  delay: reduce ? 0 : 0.7 + i * 0.11,
                  ease: EASE,
                }}
                className="group flex items-center justify-between gap-4 rounded-lg px-3 py-3 transition-colors duration-300 hover:bg-white/[0.04]"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.04]">
                    <FileCheck2 aria-hidden className="size-3.5 text-[#c9a227]" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[0.8125rem] font-medium text-white/90">
                      {row.label}
                    </p>
                    <p className="truncate text-[0.6875rem] text-white/40">
                      {row.period}
                    </p>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-[0.6875rem] font-medium text-white/55">
                  <CheckCircle2 aria-hidden className="size-3.5 text-[#c9a227]" />
                  {row.state}
                </span>
              </motion.li>
            ))}
          </ul>

          <div aria-hidden className="hairline-dark my-6" />

          {/* Mini bar chart — filings across the year */}
          <div className="flex items-end justify-between gap-1.5 sm:gap-2">
            {[38, 54, 44, 68, 58, 80, 62, 92, 74, 86, 70, 100].map((h, i) => (
              <motion.span
                key={i}
                className="w-full origin-bottom rounded-sm bg-gradient-to-t from-[#c9a227]/25 to-[#c9a227]/70"
                style={{ height: `${h * 0.5}px` }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{
                  duration: reduce ? 0 : 0.7,
                  delay: reduce ? 0 : 1.15 + i * 0.045,
                  ease: EASE,
                }}
              />
            ))}
          </div>
          <p className="mt-3 pb-1 text-right text-[0.625rem] tracking-[0.16em] text-white/30">
            FILINGS COMPLETED · APR — MAR
          </p>
        </div>
      </motion.div>

      {/* Floating card — input tax credit */}
      <motion.div
        initial={{ opacity: 0, y: 22, x: -14 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          duration: reduce ? 0 : 0.8,
          delay: reduce ? 0 : 1.05,
          ease: EASE,
        }}
        className="absolute -bottom-10 -left-3 z-10 sm:-bottom-11 sm:-left-8 lg:-left-14"
      >
        <motion.div
          {...float(9, 7)}
          className="flex items-center gap-3.5 rounded-xl border border-white/[0.12] bg-[#0f1729]/90 px-4 py-3.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md sm:px-5"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c9a227]/25 bg-[#c9a227]/10">
            <ShieldCheck aria-hidden className="size-5 text-[#e5c766]" />
          </span>
          <div>
            <p className="text-[0.625rem] tracking-[0.16em] text-white/40">
              INPUT TAX CREDIT
            </p>
            <p className="mt-1 text-[0.8125rem] font-medium text-white">
              Reconciled with 2B
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating card — notices */}
      <motion.div
        initial={{ opacity: 0, y: -18, x: 14 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          duration: reduce ? 0 : 0.8,
          delay: reduce ? 0 : 1.25,
          ease: EASE,
        }}
        className="absolute -right-2 -top-10 z-10 sm:-right-6 sm:-top-12 lg:-right-10"
      >
        <motion.div
          {...float(7, 8.5)}
          className="rounded-xl border border-white/[0.12] bg-[#0f1729]/90 px-4 py-3.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md sm:px-5"
        >
          <div className="flex items-center gap-2">
            <ArrowUpRight aria-hidden className="size-3.5 text-[#c9a227]" />
            <p className="text-[0.625rem] tracking-[0.16em] text-white/40">
              OPEN NOTICES
            </p>
          </div>
          <p className="mt-1.5 font-serif text-2xl leading-none text-white tnum">
            00
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
