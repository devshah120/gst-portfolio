import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 font-medium tracking-tight " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "active:scale-[0.985] disabled:pointer-events-none disabled:opacity-55";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#c9a227] text-[#0b1220] shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_10px_28px_-14px_rgba(201,162,39,0.85)] " +
    "hover:bg-[#e5c766] hover:shadow-[0_1px_0_rgba(255,255,255,0.45)_inset,0_16px_34px_-14px_rgba(201,162,39,0.95)]",
  outline:
    "border border-[#0b1220]/18 text-[#0b1220] hover:border-[#c9a227] hover:bg-[#c9a227]/[0.07]",
  light:
    "border border-white/22 text-white hover:border-[#c9a227]/70 hover:bg-white/[0.07]",
  ghost: "text-[#0b1220] hover:text-[#a8871c]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[0.8125rem] rounded-lg",
  md: "h-12 px-6 text-[0.875rem] rounded-xl",
  lg: "h-[3.375rem] px-7 text-[0.9375rem] rounded-xl",
};

type Common = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Renders a nudging arrow on hover. */
  arrow?: boolean;
};

type ButtonAsLink = Common & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = Common & {
  href?: undefined;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    arrow = false,
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {/* Inline row so an icon passed alongside the label sits beside it,
          not stacked above it. */}
      <span className="relative inline-flex items-center gap-2.5 whitespace-nowrap">
        {children}
      </span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, children: _c, variant: _v, size: _s, className: _cl, arrow: _a, ...rest } = props;

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {inner}
      </Link>
    );
  }

  const { children: _c, variant: _v, size: _s, className: _cl, arrow: _a, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}
