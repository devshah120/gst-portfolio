import { Quote, Star } from "lucide-react";
import { testimonials } from "@/config/content";
import { Stagger, StaggerItem } from "./ui/Motion";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="relative bg-white py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Client Feedback"
          align="center"
          title={
            <>
              What Working Together <span className="text-accent">Looks Like</span>
            </>
          }
        />

        {/* Horizontal snap carousel on mobile, grid from md up */}
        <Stagger className="no-scrollbar -mx-5 mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:gap-8">
          {testimonials.map((t, i) => (
            <StaggerItem
              key={i}
              as="article"
              className="w-[85vw] max-w-sm shrink-0 snap-center sm:w-[70vw] md:w-auto md:max-w-none"
            >
              <figure className="group relative flex h-full flex-col rounded-2xl border border-[#0b1220]/[0.08] bg-[#f8f7f3] p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#c9a227]/35 hover:bg-white hover:shadow-[0_24px_50px_-28px_rgba(11,18,32,0.3)] sm:p-8">
                <Quote
                  aria-hidden
                  className="absolute right-7 top-7 size-8 text-[#c9a227]/14 transition-colors duration-500 group-hover:text-[#c9a227]/25"
                />

                <div
                  className="flex gap-1"
                  role="img"
                  aria-label={`Rated ${t.rating} out of 5`}
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      aria-hidden
                      className={
                        s < t.rating
                          ? "size-3.5 fill-[#c9a227] text-[#c9a227]"
                          : "size-3.5 text-[#0b1220]/15"
                      }
                    />
                  ))}
                </div>

                <blockquote className="mt-6 flex-1">
                  <p className="font-serif text-[1.125rem] leading-relaxed text-[#0b1220] sm:text-[1.1875rem]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <figcaption className="mt-8 border-t border-[#0b1220]/[0.08] pt-6">
                  <p className="text-[0.9375rem] font-medium text-[#0b1220]">
                    {t.author}
                  </p>
                  <p className="mt-1 text-[0.8125rem] text-[#64748b]">{t.role}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-8 text-center text-[0.75rem] text-[#64748b] md:hidden">
          Swipe to read more
        </p>
      </div>
    </section>
  );
}
