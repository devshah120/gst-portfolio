import { industries } from "@/config/content";
import { Stagger, StaggerItem } from "./ui/Motion";
import { SectionHeading } from "./ui/SectionHeading";

export function Industries() {
  return (
    <section id="industries" className="relative bg-white py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Industries"
          align="center"
          title={
            <>
              Solutions Tailored to Your <span className="text-accent">Industry</span>
            </>
          }
          description="Compliance questions differ by sector. These are the areas where the practice works most often."
        />

        <Stagger className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#0b1220]/[0.08] bg-[#0b1220]/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ name, icon: Icon, description }) => (
            <StaggerItem key={name} as="article" className="bg-white">
              <div className="group relative h-full min-h-[13rem] overflow-hidden p-7 sm:min-h-[15rem]">
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[#0b1220] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#c9a227] transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />

                <div className="relative flex h-full flex-col">
                  <span className="grid size-11 place-items-center rounded-lg border border-[#0b1220]/[0.09] bg-[#f8f7f3] transition-all duration-500 group-hover:border-[#c9a227]/40 group-hover:bg-[#c9a227]/12">
                    <Icon
                      aria-hidden
                      className="size-5 text-[#0b1220] transition-colors duration-500 group-hover:text-[#e5c766]"
                    />
                  </span>

                  <h3 className="mt-6 text-[1.0625rem] text-[#0b1220] transition-colors duration-500 group-hover:text-white">
                    {name}
                  </h3>

                  {/* Description revealed on hover; always visible on touch/small screens */}
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-[#64748b] transition-all duration-500 group-hover:text-white/60 lg:translate-y-1.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    {description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
