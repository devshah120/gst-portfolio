import { Check } from "lucide-react";
import { Button } from "./ui/Button";
import { Reveal, Stagger, StaggerItem } from "./ui/Motion";

const included = [
  "GSTR-1 and GSTR-3B prepared and filed each cycle",
  "GSTR-2B reconciled against purchases before credit is claimed",
  "Supplier follow-up list for invoices missing from your 2B",
  "Annual return and reconciliation statement where applicable",
  "Deadline tracking with reminders ahead of every due date",
];

const forWhom = [
  "Regular taxpayers on the monthly cycle",
  "QRMP taxpayers filing quarterly",
  "Businesses with filings currently overdue",
];

export function FeaturedService() {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] py-24 sm:py-28 lg:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark opacity-70 mask-fade" />
        <div className="absolute -right-40 top-0 size-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(201,162,39,0.11),transparent)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12 xl:gap-24">
        {/* ------------------------------------------------- Content */}
        <div>
          <Reveal>
            <span className="eyebrow text-[#c9a227]">Featured Engagement</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-[2rem] leading-[1.12] text-white sm:text-[2.5rem] lg:text-[3.125rem]">
              GST Compliance,
              <br />
              Without the <span className="text-accent">Complexity.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-7 max-w-xl text-[0.9375rem] leading-relaxed text-white/60 sm:text-base">
              A monthly rhythm that keeps filings current and credit defensible.
              Reconciliation happens before submission, so mismatches are raised
              with suppliers while they can still be corrected — not discovered in
              an annual return a year later.
            </p>
          </Reveal>

          {/* Who it is for */}
          <Reveal delay={0.1} className="mt-10">
            <div className="border-t border-white/[0.09] pt-8">
              <p className="text-[0.625rem] font-medium tracking-[0.22em] text-white/40 uppercase">
                Who it is for
              </p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {forWhom.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/12 px-4 py-2 text-[0.75rem] text-white/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="mt-10">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/services/gst-work" arrow>
                Explore This Service
              </Button>
              <Button href="/contact" variant="light">
                Book a Consultation
              </Button>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------- Inclusions */}
        <div className="lg:pt-2">
          <div className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-8 sm:p-10">
            <Reveal>
              <p className="text-[0.625rem] font-medium tracking-[0.22em] text-white/40 uppercase">
                What is included
              </p>
            </Reveal>
            <Stagger as="ul" className="mt-6 space-y-4">
              {included.map((item) => (
                <StaggerItem as="li" key={item} className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[#c9a227]/40 bg-[#c9a227]/12">
                    <Check aria-hidden className="size-3 text-[#e5c766]" />
                  </span>
                  <span className="text-[0.875rem] leading-relaxed text-white/70">
                    {item}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

        </div>
      </div>
    </section>
  );
}
