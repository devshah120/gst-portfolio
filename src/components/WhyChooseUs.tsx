import { pillars } from "@/config/content";
import { site } from "@/config/site";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Motion";

/**
 * Asymmetric layout: a sticky editorial column on the left, and a stepped
 * list of pillars on the right where each entry is offset from the last.
 */
export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f3] py-24 sm:py-28 lg:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-50" />

      <div className="relative mx-auto grid max-w-[1400px] gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 xl:gap-28">
        {/* -------------------------------------------- Editorial column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow text-[#0b1220]/55">Why Yash Shah</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-[2rem] leading-[1.12] text-[#0b1220] sm:text-[2.5rem] lg:text-[3.125rem]">
              Why Businesses
              <br />
              Choose <span className="text-accent">{site.name}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-7 max-w-md text-[0.9375rem] leading-relaxed text-[#64748b] sm:text-base">
              Compliance work is judged on two things: whether it was filed on
              time, and whether it holds up when someone examines it. Everything
              here is organised around both.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button href="/contact" arrow>
                Book a Consultation
              </Button>
            </div>
          </Reveal>

          {/* Vertical accent */}
          <Reveal delay={0.26}>
            <div className="mt-14 hidden border-l border-[#c9a227]/40 pl-6 lg:block">
              <p className="font-serif text-[1.25rem] italic leading-relaxed text-[#0b1220]/75">
                &ldquo;The best time to fix a compliance problem is before it becomes
                a notice.&rdquo;
              </p>
              <p className="mt-4 text-[0.6875rem] font-medium tracking-[0.2em] text-[#64748b] uppercase">
                {site.name} · {site.shortRole}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------- Pillars */}
        <ul className="space-y-4 sm:space-y-5">
          {pillars.map(({ title, body, icon: Icon }, i) => (
            <Reveal
              key={title}
              as="li"
              delay={i * 0.08}
              className={
                // Stepped indent so the column does not read as four equal cards
                ["lg:ml-0", "lg:ml-8", "lg:ml-16", "lg:ml-24"][i] ?? "lg:ml-0"
              }
            >
              <div className="group relative overflow-hidden rounded-xl border border-[#0b1220]/[0.08] bg-white p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#c9a227]/35 hover:shadow-[0_24px_50px_-28px_rgba(11,18,32,0.35)] sm:p-8">
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-gradient-to-b from-[#c9a227] to-transparent transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                />

                <div className="flex items-start gap-5 sm:gap-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#0b1220]/[0.09] bg-[#f8f7f3] transition-all duration-500 group-hover:border-[#c9a227]/40 group-hover:bg-[#c9a227]/12">
                    <Icon
                      aria-hidden
                      className="size-[1.375rem] text-[#0b1220] transition-colors duration-500 group-hover:text-[#a8871c]"
                    />
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-[0.875rem] text-[#c9a227] tnum">
                        0{i + 1}
                      </span>
                      <h3 className="text-[1.1875rem] text-[#0b1220] sm:text-[1.25rem]">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-3.5 text-[0.875rem] leading-relaxed text-[#64748b]">
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
