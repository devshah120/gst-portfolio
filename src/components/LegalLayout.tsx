import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Reveal } from "./ui/Motion";

type Section = { heading: string; body: ReactNode };

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  updated: string;
  sections: Section[];
  crumbLabel: string;
};

export function LegalLayout({
  eyebrow,
  title,
  description,
  updated,
  sections,
  crumbLabel,
}: Props) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        crumbs={[{ label: crumbLabel }]}
        title={title}
        description={description}
      />

      <section className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16 lg:px-12">
          {/* Contents */}
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[0.625rem] font-medium tracking-[0.22em] text-[#64748b] uppercase">
              Contents
            </p>
            <ol className="mt-6 space-y-3 border-l border-[#0b1220]/[0.1] pl-5">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#section-${i + 1}`}
                    className="link-underline text-[0.8125rem] text-[#64748b] transition-colors duration-300 hover:text-[#0b1220]"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>

            <p className="mt-8 border-t border-[#0b1220]/[0.08] pt-6 text-[0.75rem] text-[#64748b]">
              Last updated: {updated}
            </p>
          </nav>

          {/* Body */}
          <div className="max-w-2xl">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 0.04}>
                <div
                  id={`section-${i + 1}`}
                  className="scroll-mt-28 border-b border-[#0b1220]/[0.08] py-8 first:pt-0 last:border-0"
                >
                  <h2 className="flex items-baseline gap-4 text-[1.375rem] text-[#0b1220]">
                    <span className="font-serif text-[0.8125rem] text-[#c9a227] tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.heading}
                  </h2>
                  <div className="mt-5 space-y-4 text-[0.9375rem] leading-relaxed text-[#64748b]">
                    {s.body}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
