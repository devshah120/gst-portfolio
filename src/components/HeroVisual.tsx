"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, FileCheck2, ScanLine, ShieldCheck } from "lucide-react";
import { EASE } from "./ui/Motion";

const GOLD = "#c9a227";

/** Monthly filing volume — `value` is the bar height as a percentage. */
const bars = [
  { month: "Apr", value: 52 },
  { month: "May", value: 64 },
  { month: "Jun", value: 47 },
  { month: "Jul", value: 78 },
  { month: "Aug", value: 69 },
  { month: "Sep", value: 92 },
];

const ledger = [
  { icon: FileCheck2, label: "GSTR-1", meta: "Filed" },
  { icon: FileCheck2, label: "GSTR-3B", meta: "Filed" },
  { icon: BadgeCheck, label: "ITR-3", meta: "Verified" },
];

const stats = [
  { value: "100%", label: "On-time" },
  { value: "18L+", label: "ITC Claimed" },
  { value: "240+", label: "Returns" },
];

export function HeroVisual() {
  const reduce = useReducedMotion();

  /** Shared entrance helper — reduced motion collapses the transition only. */
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0 : 0.6,
      delay: reduce ? 0 : delay,
      ease: EASE,
    },
  });

  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      {/* Ambient gold wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -inset-y-16 rounded-[50%] bg-[radial-gradient(closest-side,rgba(201,162,39,0.18),transparent)] blur-2xl"
      />

      {/* Fine rotating ring */}
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
        className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-2.5 backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] sm:p-3"
      >
        {/* Top gold hairline */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#c9a227]/80 to-transparent"
        />

        <div className="relative overflow-hidden rounded-xl bg-[#0a0f1d] p-5 sm:p-6">
          {/* Faint grid inside the card */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:38px_38px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-[radial-gradient(closest-side,rgba(201,162,39,0.22),transparent)] blur-2xl"
          />

          {/* ------------------------------------------------- card header */}
          <motion.div
            {...rise(0.5)}
            className="relative flex items-start justify-between gap-4"
          >
            <div>
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#c9a227]">
                Compliance Dashboard
              </p>
              <p className="mt-2 font-serif text-lg text-white sm:text-xl">
                FY 2025&ndash;26
              </p>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#c9a227]/25 bg-[#c9a227]/10 px-2.5 py-1 text-[0.62rem] font-medium tracking-wide text-[#e3c35c]">
              <ShieldCheck className="size-3" aria-hidden />
              All Filings Current
            </span>
          </motion.div>

          {/* ------------------------------------------------- stat row */}
          <motion.div
            {...rise(0.62)}
            className="relative mt-6 grid grid-cols-3 gap-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2.5"
              >
                <p className="font-serif text-base text-white sm:text-lg">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[0.62rem] tracking-wide text-white/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* ------------------------------------------------- bar chart */}
          <div className="relative mt-6">
            <div className="flex items-end justify-between gap-2 sm:gap-3">
              {bars.map((bar, i) => (
                <div
                  key={bar.month}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div className="flex h-24 w-full items-end sm:h-28">
                    <motion.div
                      className="w-full rounded-t-[3px] bg-gradient-to-t from-[#c9a227]/25 to-[#e3c35c]"
                      initial={{ height: 0 }}
                      animate={{ height: `${bar.value}%` }}
                      transition={{
                        duration: reduce ? 0 : 0.8,
                        delay: reduce ? 0 : 0.75 + i * 0.08,
                        ease: EASE,
                      }}
                    />
                  </div>
                  <span className="text-[0.58rem] tracking-wide text-white/35">
                    {bar.month}
                  </span>
                </div>
              ))}
            </div>

            {/* Trend line drawn over the bars */}
            <svg
              aria-hidden
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full sm:h-28"
            >
              <motion.polyline
                points="8,21 25,15 42,25 58,7 75,13 92,2"
                fill="none"
                stroke={GOLD}
                strokeWidth={0.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.75 }}
                transition={{
                  duration: reduce ? 0 : 1.2,
                  delay: reduce ? 0 : 1.15,
                  ease: EASE,
                }}
              />
            </svg>
          </div>

          {/* ------------------------------------------------- ledger rows */}
          <motion.div
            {...rise(1.3)}
            className="relative mt-6 space-y-2 border-t border-white/[0.07] pt-4"
          >
            {ledger.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2 text-white/70">
                  <row.icon className="size-3.5 text-[#c9a227]" aria-hidden />
                  {row.label}
                </span>
                <span className="flex items-center gap-1.5 text-[0.68rem] tracking-wide text-white/45">
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full bg-[#c9a227]"
                  />
                  {row.meta}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ------------------------------------------------- floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: reduce ? 0 : 0.7,
          delay: reduce ? 0 : 1.5,
          ease: EASE,
        }}
        className="absolute -bottom-5 -left-3 hidden items-center gap-2.5 rounded-xl border border-white/[0.12] bg-[#0b1220]/90 px-3.5 py-2.5 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md sm:flex"
      >
        <ScanLine className="size-4 text-[#c9a227]" aria-hidden />
        <div>
          <p className="text-[0.7rem] font-medium text-white">
            2B Reconciled First
          </p>
          <p className="text-[0.6rem] text-white/40">Before credit is claimed</p>
        </div>
      </motion.div>
    </div>
  );
}
