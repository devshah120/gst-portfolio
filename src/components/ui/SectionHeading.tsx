import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Motion";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  /** Content rendered on the right of a left-aligned heading (desktop). */
  aside?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  aside,
}: Props) {
  const isCenter = align === "center";
  const onLight = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-8",
        aside && !isCenter && "lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        className,
      )}
    >
      <div className={cn("max-w-2xl", isCenter && "mx-auto text-center")}>
        <Reveal>
          <span
            className={cn(
              "eyebrow",
              isCenter && "eyebrow-center",
              onLight ? "text-[#0b1220]/55" : "text-white/55",
            )}
          >
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className={cn(
              "mt-5 text-[2rem] leading-[1.12] sm:text-[2.5rem] lg:text-[3.125rem]",
              onLight ? "text-[#0b1220]" : "text-white",
            )}
          >
            {title}
          </h2>
        </Reveal>

        {description && (
          <Reveal delay={0.16}>
            <p
              className={cn(
                "mt-6 text-[0.9375rem] leading-relaxed sm:text-base",
                onLight ? "text-[#64748b]" : "text-white/60",
              )}
            >
              {description}
            </p>
          </Reveal>
        )}
      </div>

      {aside && !isCenter && (
        <Reveal delay={0.2} className="shrink-0">
          {aside}
        </Reveal>
      )}
    </div>
  );
}
