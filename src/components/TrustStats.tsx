import { stats } from "@/config/content";
import { Counter } from "./ui/Counter";
import { Reveal } from "./ui/Motion";

export function TrustStats() {
  return (
    <section
      aria-label="Practice at a glance"
      className="relative border-y border-[#0b1220]/[0.07] bg-[#f8f7f3]"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.09}
              className="group relative border-[#0b1220]/[0.07] px-1 py-10 sm:py-14 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0 [&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:last-child)]:border-r sm:px-6 lg:px-8"
            >
              {/* Gold rule that draws in on hover */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#c9a227] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />
              <dd className="font-serif text-[2.75rem] leading-none text-[#0b1220] sm:text-[3.5rem] lg:text-[4rem]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-4 text-[0.8125rem] font-medium tracking-[0.1em] text-[#0b1220] uppercase sm:text-[0.875rem]">
                {stat.label}
              </dt>
              <p className="mt-2.5 max-w-[22ch] text-[0.8125rem] leading-relaxed text-[#64748b]">
                {stat.description}
              </p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
