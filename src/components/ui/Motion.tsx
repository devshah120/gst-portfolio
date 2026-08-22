"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ Reveal */
type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: "div" | "section" | "li" | "article" | "header" | "span";
};

/**
 * Fade-and-rise on scroll. Collapses to a plain fade when the visitor
 * prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.6,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: EASE,
      }}
    >
      {children}
    </Component>
  );
}

/* ---------------------------------------------------------------- Stagger */
export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const staggerParentReduced: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0, delayChildren: 0 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const staggerChildReduced: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0 } },
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
};

/**
 * The variant *names* and the starting frame are identical either way, so the
 * server and client agree; only the transition timing responds to the
 * reduced-motion preference.
 */
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={reduce ? staggerParentReduced : staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={reduce ? staggerChildReduced : staggerChild}
    >
      {children}
    </Component>
  );
}

/* ------------------------------------------------------------- TextReveal */
type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

/**
 * Line-by-line masked rise. Split on "\n" so headline breaks stay authored.
 *
 * `initial` is kept identical on the server and the client — reduced motion is
 * honoured by shortening the transition rather than by changing the starting
 * frame, which would otherwise produce a hydration mismatch.
 */
export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: "108%" }}
            animate={{ y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.85,
              delay: reduce ? 0 : delay + i * 0.11,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
