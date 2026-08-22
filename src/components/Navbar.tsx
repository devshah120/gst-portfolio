"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { navLinks } from "@/config/content";
import { site, telUrl } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { EASE } from "./ui/Motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  /** The homepage hero is dark, so the navbar starts transparent there only. */
  const overHero = pathname === "/";
  const solid = scrolled || !overHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while the drawer is open. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Close the drawer on route change and on Escape. */
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]) && href !== "/#process";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          solid
            ? "border-b border-white/[0.08] bg-[#0b1220]/85 backdrop-blur-xl shadow-[0_1px_30px_-10px_rgba(0,0,0,0.5)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-8 lg:px-12",
            solid ? "h-[4.5rem]" : "h-[5.5rem]",
          )}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="group flex shrink-0 items-center transition-opacity duration-300 hover:opacity-85"
            aria-label={`${site.name} — ${site.role}, home`}
          >
            {/* Full lockup from sm upward; the mark alone on narrow screens. */}
            <Image
              src="/logo-light.png"
              alt={`${site.name} — ${site.shortRole}`}
              width={1372}
              height={366}
              priority
              className={cn(
                "hidden w-auto sm:block",
                solid ? "h-11" : "h-12",
                "transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              )}
            />
            <Image
              src="/logo-mark-light.png"
              alt=""
              aria-hidden
              width={270}
              height={348}
              priority
              className="h-10 w-auto sm:hidden"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3.5 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors duration-300",
                    isActive(link.href)
                      ? "text-[#e5c766]"
                      : "text-white/70 hover:text-white",
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3.5 -bottom-px h-px bg-[#c9a227]"
                      transition={{ duration: 0.4, ease: EASE }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2.5">
            <a
              href={telUrl}
              className="hidden items-center gap-2 rounded-lg px-3 py-2 text-[0.8125rem] font-medium text-white/70 transition-colors duration-300 hover:text-[#e5c766] lg:inline-flex"
            >
              <Phone aria-hidden className="size-3.5" />
              <span className="tnum">{site.contact.phone}</span>
            </a>

            {/* Hidden on small screens — the drawer carries the CTA there,
                so the wordmark keeps its breathing room. */}
            <Button
              href="/contact"
              size="sm"
              className="hidden md:inline-flex"
              arrow
            >
              Book a Consultation
            </Button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-haspopup="dialog"
              className="grid size-11 place-items-center rounded-lg border border-white/15 text-white transition-colors duration-300 hover:border-[#c9a227]/60 hover:text-[#e5c766] xl:hidden"
            >
              <Menu aria-hidden className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-[#0b1220]/70 backdrop-blur-sm"
            />

            <motion.div
              className="absolute inset-y-0 right-0 flex w-full max-w-[26rem] flex-col overflow-y-auto border-l border-white/10 bg-[#0b1220] shadow-2xl"
              initial={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60"
              />

              <div className="relative flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
                <Image
                  src="/logo-light.png"
                  alt={`${site.name} — ${site.shortRole}`}
                  width={1372}
                  height={366}
                  className="h-10 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="grid size-11 place-items-center rounded-lg border border-white/15 text-white transition-colors duration-300 hover:border-[#c9a227]/60 hover:text-[#e5c766]"
                >
                  <X aria-hidden className="size-5" />
                </button>
              </div>

              <ul className="relative flex-1 px-6 py-4">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: reduce ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: reduce ? 0 : 0.08 + i * 0.05,
                      ease: EASE,
                    }}
                    className="border-b border-white/[0.06] last:border-0"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-4"
                    >
                      <span
                        className={cn(
                          "font-serif text-[1.375rem] transition-colors duration-300",
                          isActive(link.href)
                            ? "text-[#e5c766]"
                            : "text-white group-hover:text-[#e5c766]",
                        )}
                      >
                        {link.label}
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c9a227]"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="relative space-y-3 border-t border-white/[0.08] px-6 py-6">
                <Button href="/contact" size="lg" className="w-full" arrow>
                  Book a Consultation
                </Button>
                <a
                  href={telUrl}
                  className="flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-white/15 text-[0.875rem] font-medium text-white transition-colors duration-300 hover:border-[#c9a227]/60 hover:text-[#e5c766]"
                >
                  <Phone aria-hidden className="size-4" />
                  <span className="tnum">{site.contact.phone}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
