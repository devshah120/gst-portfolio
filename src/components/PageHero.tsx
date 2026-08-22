import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./ui/Motion";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Breadcrumb trail, excluding Home which is prepended automatically. */
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark opacity-60 mask-fade" />
        <div className="absolute -right-32 -top-24 size-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(201,162,39,0.12),transparent)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0b1220]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Breadcrumbs */}
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.75rem] text-white/40">
              <li>
                <Link
                  href="/"
                  className="link-underline transition-colors duration-300 hover:text-[#e5c766]"
                >
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight aria-hidden className="size-3 text-white/25" />
                  {c.href && i < crumbs.length - 1 ? (
                    <Link
                      href={c.href}
                      className="link-underline transition-colors duration-300 hover:text-[#e5c766]"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white/70">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <span className="eyebrow text-[#c9a227]">{eyebrow}</span>
        </Reveal>

        <Reveal delay={0.14}>
          <h1 className="mt-6 max-w-4xl text-[2.25rem] leading-[1.1] text-white sm:text-[3rem] lg:text-[3.75rem]">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-2xl text-[1rem] leading-relaxed text-white/60 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}

        {children && (
          <Reveal delay={0.28} className="mt-10">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
