import { Check, CircleCheckBig, Clock3, FileText, TrendingUp } from "lucide-react";
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

const dashboard = [
  { label: "GST Return", value: "Organized", icon: FileText },
  { label: "Filing", value: "Complete", icon: CircleCheckBig },
  { label: "Documents", value: "Verified", icon: Check },
  { label: "Compliance", value: "On Track", icon: TrendingUp },
];

export function FeaturedService() {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] py-24 sm:py-28 lg:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark opacity-70 mask-fade" />
        <div className="absolute -right-40 top-0 size-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(201,162,39,0.11),transparent)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 xl:gap-28">
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

          {/* What is included */}
          <div className="mt-12">
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
              <Button href="/services/gst-return-filing" arrow>
                Explore This Service
              </Button>
              <Button href="/contact" variant="light">
                Book a Consultation
              </Button>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------- Visual */}
        <Reveal delay={0.1} y={32}>
          <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(201,162,39,0.13),transparent)] blur-2xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-md">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/70 to-transparent"
              />

              {/* Panel header */}
              <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] px-6 py-5 sm:px-7">
                <div>
                  <p className="text-[0.625rem] tracking-[0.22em] text-white/40">
                    CURRENT CYCLE
                  </p>
                  <p className="mt-2 font-serif text-lg text-white">
                    Monthly Compliance
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-3 py-1.5 text-[0.625rem] font-medium tracking-[0.1em] text-[#e5c766]">
                  <Clock3 aria-hidden className="size-3" />
                  IN ORDER
                </span>
              </div>

              {/* Rows */}
              <ul className="divide-y divide-white/[0.06]">
                {dashboard.map(({ label, value, icon: Icon }) => (
                  <li
                    key={label}
                    className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-300 hover:bg-white/[0.03] sm:px-7"
                  >
                    <span className="text-[0.875rem] text-white/70">{label}</span>
                    <span className="inline-flex items-center gap-2.5 text-[0.8125rem] font-medium text-white">
                      <Icon aria-hidden className="size-4 text-[#c9a227]" />
                      {value}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Panel footer */}
              <div className="border-t border-white/[0.08] px-6 py-6 sm:px-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[0.625rem] tracking-[0.22em] text-white/40">
                      CREDIT MATCHED
                    </p>
                    <p className="mt-2 font-serif text-3xl leading-none text-white tnum">
                      100<span className="text-[#c9a227]">%</span>
                    </p>
                  </div>
                  <p className="max-w-[18ch] pr-14 text-right text-[0.6875rem] leading-relaxed text-white/35 sm:pr-0">
                    Illustrative panel — not live data.
                  </p>
                </div>
                <div
                  aria-hidden
                  className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/[0.07]"
                >
                  <span className="block h-full w-full rounded-full bg-gradient-to-r from-[#a8871c] to-[#e5c766]" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
