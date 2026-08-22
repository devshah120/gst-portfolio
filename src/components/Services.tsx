import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/content";
import { Button } from "./ui/Button";
import { Stagger, StaggerItem } from "./ui/Motion";
import { SectionHeading } from "./ui/SectionHeading";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8f7f3] py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-60" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Expertise That Covers
              <br />
              Your <span className="text-accent">Compliance</span> Journey.
            </>
          }
          description="Registration through to litigation support, handled under one engagement so nothing falls between advisors."
          aside={
            <Button href="/services" variant="outline" arrow>
              View All Services
            </Button>
          }
        />

        <Stagger className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#0b1220]/[0.08] bg-[#0b1220]/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ slug, title, short, icon: Icon }) => (
            <StaggerItem key={slug} as="article" className="bg-white">
              <Link
                href={`/services/${slug}`}
                className="group relative flex h-full flex-col p-7 transition-colors duration-500 hover:bg-[#0b1220] sm:p-8"
              >
                {/* Gold rule on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#c9a227] to-[#e5c766] transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />

                <span className="grid size-12 place-items-center rounded-xl border border-[#0b1220]/[0.09] bg-[#f8f7f3] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-[#c9a227]/40 group-hover:bg-[#c9a227]/12">
                  <Icon
                    aria-hidden
                    className="size-[1.375rem] text-[#0b1220] transition-colors duration-500 group-hover:text-[#e5c766]"
                  />
                </span>

                <h3 className="mt-7 text-[1.1875rem] leading-snug text-[#0b1220] transition-colors duration-500 group-hover:text-white">
                  {title}
                </h3>

                <p className="mt-3.5 flex-1 text-[0.8125rem] leading-relaxed text-[#64748b] transition-colors duration-500 group-hover:text-white/55">
                  {short}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.08em] text-[#0b1220]/45 uppercase transition-colors duration-500 group-hover:text-[#e5c766]">
                  Learn More
                  <ArrowUpRight
                    aria-hidden
                    className="size-3.5 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
