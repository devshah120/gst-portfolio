import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { services } from "@/config/content";
import {
  formattedAddress,
  mailtoUrl,
  site,
  telUrl,
  whatsappUrl,
} from "@/config/site";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

const footerServices = services.slice(0, 5);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#0b1220]">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* --------------------------------------------------- Top */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-10 xl:gap-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex transition-opacity duration-300 hover:opacity-85"
              aria-label={`${site.name} — ${site.role}, home`}
            >
              <Image
                src="/logo-light.png"
                alt={`${site.name} — ${site.shortRole}`}
                width={1357}
                height={354}
                className="h-14 w-auto"
              />
            </Link>

            <p className="mt-7 text-[0.875rem] leading-relaxed text-white/50">
              Professional GST, taxation and compliance services for businesses,
              startups and professionals.
            </p>

            <div className="mt-8 flex items-start gap-3 text-[0.8125rem] leading-relaxed text-white/45">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-[#c9a227]" />
              <address className="not-italic">
                {formattedAddress.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <h2 className="text-[0.625rem] font-medium tracking-[0.22em] text-white/40 uppercase">
              Company
            </h2>
            <ul className="mt-6 space-y-3.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-[0.875rem] text-white/60 transition-colors duration-300 hover:text-[#e5c766]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="text-[0.625rem] font-medium tracking-[0.22em] text-white/40 uppercase">
              Services
            </h2>
            <ul className="mt-6 space-y-3.5">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="link-underline text-[0.875rem] text-white/60 transition-colors duration-300 hover:text-[#e5c766]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-[0.625rem] font-medium tracking-[0.22em] text-white/40 uppercase">
              Contact
            </h2>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={telUrl}
                  className="group flex items-center gap-3 text-[0.875rem] text-white/60 transition-colors duration-300 hover:text-[#e5c766]"
                >
                  <Phone aria-hidden className="size-4 shrink-0 text-[#c9a227]" />
                  <span className="link-underline tnum">{site.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={mailtoUrl}
                  className="group flex items-center gap-3 text-[0.875rem] text-white/60 transition-colors duration-300 hover:text-[#e5c766]"
                >
                  <Mail aria-hidden className="size-4 shrink-0 text-[#c9a227]" />
                  <span className="link-underline truncate">
                    {site.contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[0.875rem] text-white/60 transition-colors duration-300 hover:text-[#e5c766]"
                >
                  <MessageCircle
                    aria-hidden
                    className="size-4 shrink-0 text-[#c9a227]"
                  />
                  <span className="link-underline">WhatsApp</span>
                </a>
              </li>
            </ul>

            <p className="mt-7 text-[0.75rem] leading-relaxed text-white/35">
              {site.contact.hours}
            </p>
          </div>
        </div>

        {/* ------------------------------------------------ Bottom */}
        <div aria-hidden className="hairline-dark" />

        <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] text-white/40">
            © {year} {site.name}. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <li>
              <Link
                href="/privacy-policy"
                className="link-underline text-[0.75rem] text-white/40 transition-colors duration-300 hover:text-[#e5c766]"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="link-underline text-[0.75rem] text-white/40 transition-colors duration-300 hover:text-[#e5c766]"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
