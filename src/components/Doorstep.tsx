import { Check, House, MapPin } from "lucide-react";
import { doorstep } from "@/config/content";
import { whatsappUrl } from "@/config/site";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Motion";

/**
 * Doorstep-service banner. A dark inset panel on a light section, so it reads
 * as a distinct offer rather than another content block.
 */
export function Doorstep() {
  return (
    <section className="relative bg-[#f8f7f3] pb-24 sm:pb-28 lg:pb-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-[#0b1220] px-7 py-11 sm:px-12 sm:py-14 lg:px-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-grid-dark opacity-60" />
              <div className="absolute -right-32 top-1/2 size-[32rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,162,39,0.12),transparent)] blur-3xl" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
              <div>
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#c9a227]/30 bg-[#c9a227]/12">
                    <House aria-hidden className="size-[1.375rem] text-[#e5c766]" />
                  </span>
                  <div>
                    <span className="eyebrow text-[#c9a227]">At Your Premises</span>
                    <h2 className="mt-2 text-[1.625rem] leading-tight text-white sm:text-[2rem]">
                      {doorstep.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-6 max-w-lg text-[0.9375rem] leading-relaxed text-white/60">
                  {doorstep.body}
                </p>

                <div className="mt-9">
                  <Button href={whatsappUrl} external variant="light">
                    <MapPin aria-hidden className="size-4" />
                    Request a Visit
                  </Button>
                </div>
              </div>

              <ul className="space-y-4 lg:border-l lg:border-white/10 lg:pl-12">
                {doorstep.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3.5 text-[0.875rem] leading-relaxed text-white/70"
                  >
                    <Check
                      aria-hidden
                      className="mt-[0.2rem] size-4 shrink-0 text-[#c9a227]"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
