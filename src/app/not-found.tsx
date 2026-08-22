import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/config/content";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#0b1220] pt-32 pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark opacity-60 mask-fade" />
        <div className="absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,162,39,0.11),transparent)] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow eyebrow-center text-[#c9a227]">Error 404</span>

          <p className="mt-8 font-serif text-[5rem] leading-none text-white/10 tnum sm:text-[7rem]">
            404
          </p>

          <h1 className="mt-4 text-[2rem] leading-[1.12] text-white sm:text-[2.75rem]">
            This Page Could Not
            <br />
            Be <span className="text-accent">Found.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-[0.9375rem] leading-relaxed text-white/55">
            The link may be out of date, or the page may have moved. Everything else
            is still where it was.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg" arrow className="w-full sm:w-auto">
              Back to Home
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="light"
              className="w-full sm:w-auto"
            >
              Get in Touch
            </Button>
          </div>

          <nav aria-label="Site sections" className="mt-14">
            <div aria-hidden className="hairline-dark mb-7" />
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-[0.8125rem] text-white/45 transition-colors duration-300 hover:text-[#e5c766]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
