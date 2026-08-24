import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { Button } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { services } from "@/config/content";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GST registration and return filing, notice and litigation support, income tax and TDS return filing, tax planning, accounting and book keeping, and digital signature (DSC) services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        crumbs={[{ label: "Services" }]}
        title={
          <>
            Expertise That Covers Your
            <br />
            <span className="text-accent">Compliance</span> Journey.
          </>
        }
        description={`${services.length} areas of work — GST, income tax, accounting and digital signatures — handled under one engagement, so registration, filing and representation stay connected rather than split across advisors.`}
      >
        <Button href="/contact" size="lg" arrow>
          Book a Consultation
        </Button>
      </PageHero>

      {/* Service list — editorial rows rather than a card grid */}
      <section className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Stagger as="ul" className="divide-y divide-[#0b1220]/[0.08] border-y border-[#0b1220]/[0.08]">
            {services.map(({ slug, title, short, icon: Icon, included }, i) => (
              <StaggerItem as="li" key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="group grid gap-6 py-9 transition-colors duration-500 sm:py-11 lg:grid-cols-[auto_1fr_1.1fr_auto] lg:items-start lg:gap-10"
                >
                  {/* Index + icon */}
                  <div className="flex items-center gap-5 lg:w-24">
                    <span className="font-serif text-[0.8125rem] text-[#c9a227] tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid size-11 place-items-center rounded-lg border border-[#0b1220]/[0.09] bg-[#f8f7f3] transition-all duration-500 group-hover:border-[#c9a227]/40 group-hover:bg-[#c9a227]/12">
                      <Icon
                        aria-hidden
                        className="size-5 text-[#0b1220] transition-colors duration-500 group-hover:text-[#a8871c]"
                      />
                    </span>
                  </div>

                  <div>
                    <h2 className="text-[1.375rem] leading-snug text-[#0b1220] transition-colors duration-500 group-hover:text-[#a8871c] sm:text-[1.5rem]">
                      {title}
                    </h2>
                    <p className="mt-3 max-w-md text-[0.875rem] leading-relaxed text-[#64748b]">
                      {short}
                    </p>
                  </div>

                  {/* First three inclusions */}
                  <ul className="space-y-2.5 lg:pt-1">
                    {included.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[0.8125rem] leading-relaxed text-[#64748b]"
                      >
                        <Check
                          aria-hidden
                          className="mt-[0.2rem] size-3.5 shrink-0 text-[#c9a227]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-2 self-center text-[0.75rem] font-medium tracking-[0.08em] text-[#0b1220]/45 uppercase transition-colors duration-500 group-hover:text-[#a8871c]">
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

      <Process />
      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
          ),
        }}
      />
    </>
  );
}
