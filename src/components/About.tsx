import { Check, UserRound } from "lucide-react";
import { credentials, highlights } from "@/config/content";
import { site } from "@/config/site";
import { Button } from "./ui/Button";
import { Reveal, Stagger, StaggerItem } from "./ui/Motion";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  // Unfilled credentials are omitted rather than shown as placeholders.
  const shown = credentials.filter((c) => c.value.trim());

  return (
    <section id="about" className="relative bg-white py-24 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12 xl:gap-24">
        {/* ------------------------------------------------ Portrait */}
        <Reveal className="relative">
          <div className="relative mx-auto max-w-md lg:mx-0 lg:sticky lg:top-28">
            {/* Offset gold frame */}
            <span
              aria-hidden
              className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border border-[#c9a227]/35 sm:-bottom-5 sm:-right-5"
            />

            {/*
              PORTRAIT PLACEHOLDER
              Replace this block with:
              <Image src="/yash-shah.jpg" alt="Yash Shah, GST Consultant" fill className="object-cover" priority />
              inside the relative wrapper below.
            */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#0b1220]">
              <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-80" />
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(201,162,39,0.16),transparent_65%)]"
              />
              <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                <span className="grid size-20 place-items-center rounded-full border border-[#c9a227]/30 bg-[#c9a227]/[0.08]">
                  <UserRound aria-hidden className="size-9 text-[#c9a227]" />
                </span>
                <p className="mt-7 font-serif text-2xl text-white">{site.name}</p>
                <p className="mt-2.5 text-[0.6875rem] font-medium tracking-[0.24em] text-[#c9a227]">
                  {site.role.toUpperCase()}
                </p>
                <p className="mt-8 max-w-[24ch] text-[0.6875rem] leading-relaxed tracking-wide text-white/35">
                  Portrait placeholder — add a professional photograph here.
                </p>
              </div>
            </div>

            {/* Credentials strip — two columns, hairline dividers */}
            <dl className="relative mt-10 grid grid-cols-2 border-t border-[#0b1220]/[0.08]">
              {shown.map((c, i) => (
                <div
                  key={c.label}
                  className={[
                    "py-5",
                    // Gutter, plus a rule down the middle for the right column
                    i % 2 === 0 ? "pr-6" : "border-l border-[#0b1220]/[0.08] pl-6",
                    // Rule under every row except the last one
                    Math.floor(i / 2) < Math.floor((shown.length - 1) / 2)
                      ? "border-b border-[#0b1220]/[0.08]"
                      : "",
                  ].join(" ")}
                >
                  <dt className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-[#64748b]">
                    {c.label}
                  </dt>
                  <dd className="mt-1.5 text-[0.9375rem] font-medium leading-snug text-[#0b1220]">
                    {c.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* ------------------------------------------------- Content */}
        <div className="lg:pt-6">
          <SectionHeading
            eyebrow="About"
            title={
              <>
                More Than Compliance.
                <br />A <span className="text-accent">Partner</span> for Your
                Business.
              </>
            }
          />

          <div className="mt-8 max-w-2xl space-y-6 text-[0.9375rem] leading-relaxed text-[#64748b] sm:text-base">
            <Reveal delay={0.1}>
              <p>
                Most businesses do not need more tax jargon. They need someone who
                understands how the business actually runs — how it invoices, where
                it buys from, which states it operates in — and translates that into
                filings that hold up when they are examined.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                That is the work: registrations set up correctly, returns reconciled
                before they are filed, credit claimed only where it is supported, and
                notices answered within their deadlines. When a decision has tax
                consequences, you hear about it before it is made rather than after.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p>
                You deal with one person throughout. No account handovers, no chasing
                for status, no discovering in March what should have been raised in
                June.
              </p>
            </Reveal>
          </div>

          {/* Highlights */}
          <Stagger as="ul" className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <StaggerItem as="li" key={item} className="flex items-start gap-3.5">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10">
                  <Check aria-hidden className="size-3 text-[#a8871c]" />
                </span>
                <span className="text-[0.875rem] leading-relaxed text-[#0b1220]/80">
                  {item}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Signature */}
          <Reveal delay={0.15} className="mt-14">
            <div className="flex flex-wrap items-end justify-between gap-8 border-t border-[#0b1220]/[0.08] pt-8">
              <div>
                <p
                  aria-hidden
                  className="font-serif text-[2rem] italic leading-none text-[#0b1220]"
                >
                  {site.name}
                </p>
                <span
                  aria-hidden
                  className="mt-3 block h-px w-32 bg-gradient-to-r from-[#c9a227] to-transparent"
                />
                <p className="mt-3 text-[0.6875rem] font-medium tracking-[0.2em] text-[#64748b] uppercase">
                  {site.role}
                </p>
              </div>

              <Button href="/about" variant="outline" arrow>
                Know More About Yash
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
