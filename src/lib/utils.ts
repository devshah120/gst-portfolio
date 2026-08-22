type ClassValue = string | number | bigint | boolean | null | undefined;

/** Minimal class joiner — avoids pulling in clsx/tailwind-merge. */
export function cn(...classes: ClassValue[]) {
  return classes.filter((c): c is string => typeof c === "string" && c.length > 0).join(" ");
}
