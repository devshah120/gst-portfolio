import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Industries } from "@/components/Industries";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/config/content";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "GST and tax compliance support for e-commerce, retail, manufacturing, IT and SaaS, traders, startups, professionals and service businesses.",
  alternates: { canonical: "/industries" },
};

/** Sector-specific compliance points, kept alongside the industry list. */
const detail: Record<string, string[]> = {
  "E-commerce": [
    "TCS credit reconciled against marketplace statements",
    "Registration in every state a warehouse operates from",
    "Returns and refunds adjusted in the correct tax period",
  ],
  Retail: [
    "Mixed-rate baskets classified correctly at the point of billing",
    "Branch transfers documented with the right delivery challans",
    "Daily summaries reconciled against monthly outward supply",
  ],
  Manufacturing: [
    "Job work movements tracked within the prescribed timelines",
    "Credit on capital goods claimed and reversed on schedule",
    "Inverted duty refund claims prepared and filed",
  ],
  "IT & SaaS": [
    "LUT filed so exports move without upfront tax",
    "Place of supply established for overseas and domestic clients",
    "Refund of accumulated credit on zero-rated supply",
  ],
  Traders: [
    "E-way bills issued against the correct consignment values",
    "Supplier filings monitored so credit is not lost",
    "Stock movement records aligned with outward supply",
  ],
  Startups: [
    "Structure chosen with funding plans in mind",
    "Founder remuneration and reimbursements handled cleanly",
    "Compliance records maintained to a diligence standard",
  ],
  Professionals: [
    "Service classification and SAC codes confirmed",
    "Turnover monitored against registration thresholds",
    "Presumptive taxation compared against regular assessment",
  ],
  "Service Businesses": [
    "Time of supply established for milestone billing",
    "Reverse charge exposure identified in vendor contracts",
    "Advance receipts reported in the correct period",
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        crumbs={[{ label: "Industries" }]}
        title={
          <>
            Solutions Tailored to
            <br />
            Your <span className="text-accent">Industry.</span>
          </>
        }
        description="The rules are the same everywhere; what changes is which parts of them matter to you. These are the sectors the practice works with most often, and what tends to come up in each."
      >
        <Button href="/contact" size="lg" arrow>
          Discuss Your Sector
        </Button>
      </PageHero>

      <Industries />

      {/* Detailed sector breakdown */}
      <section className="relative overflow-hidden bg-[#f8f7f3] py-20 sm:py-24 lg:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-50" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="In Practice"
            title={
              <>
                What Comes Up
                <br />
                In Each <span className="text-accent">Sector.</span>
              </>
            }
          />

          <Stagger as="ul" className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
            {industries.map(({ name, icon: Icon }) => (
              <StaggerItem as="li" key={name}>
                <div className="group h-full rounded-2xl border border-[#0b1220]/[0.08] bg-white p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#c9a227]/35 hover:shadow-[0_24px_50px_-28px_rgba(11,18,32,0.28)] sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#0b1220]/[0.09] bg-[#f8f7f3] transition-all duration-500 group-hover:border-[#c9a227]/40 group-hover:bg-[#c9a227]/12">
                      <Icon
                        aria-hidden
                        className="size-5 text-[#0b1220] transition-colors duration-500 group-hover:text-[#a8871c]"
                      />
                    </span>
                    <h3 className="text-[1.1875rem] text-[#0b1220]">{name}</h3>
                  </div>

                  <ul className="mt-6 space-y-3.5 border-t border-[#0b1220]/[0.08] pt-6">
                    {(detail[name] ?? []).map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[0.875rem] leading-relaxed text-[#64748b]"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-[#c9a227]"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="mt-14 max-w-2xl text-[0.875rem] leading-relaxed text-[#64748b]">
              Working in something not listed here? The underlying approach does not
              change — the compliance position is worked out from how your business
              actually operates.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
            ]),
          ),
        }}
      />
    </>
  );
}
