import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  formattedAddress,
  mailtoUrl,
  site,
  telUrl,
  whatsappUrl,
} from "@/config/site";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./ui/Motion";
import { SectionHeading } from "./ui/SectionHeading";

const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: site.contact.phone,
    href: telUrl,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    href: mailtoUrl,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message directly",
    href: whatsappUrl,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 bg-white py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&rsquo;s Talk About Your{" "}
              <span className="text-accent">Business.</span>
            </>
          }
          description="Share a few details and you will hear back with what applies to your situation and how the engagement would work."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-24">
          {/* ---------------------------------------------------- Form */}
          <Reveal>
            <div className="rounded-2xl border border-[#0b1220]/[0.08] bg-[#f8f7f3] p-6 sm:p-8 lg:p-10">
              <ContactForm />
            </div>
          </Reveal>

          {/* ------------------------------------------------- Details */}
          <Reveal delay={0.12}>
            <div className="lg:sticky lg:top-28 lg:self-start">
              {/* Channels */}
              <ul className="divide-y divide-[#0b1220]/[0.08] border-y border-[#0b1220]/[0.08]">
                {channels.map(({ icon: Icon, label, value, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-5 py-6"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#0b1220]/[0.09] bg-[#f8f7f3] transition-all duration-500 group-hover:border-[#c9a227]/40 group-hover:bg-[#c9a227]/12">
                        <Icon
                          aria-hidden
                          className="size-[1.125rem] text-[#0b1220] transition-colors duration-500 group-hover:text-[#a8871c]"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.625rem] font-medium tracking-[0.2em] text-[#64748b] uppercase">
                          {label}
                        </span>
                        <span className="link-underline mt-1.5 block truncate text-[0.9375rem] font-medium text-[#0b1220]">
                          {value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Location */}
              <div className="mt-10 rounded-2xl border border-[#0b1220]/[0.08] bg-[#0b1220] p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c9a227]/30 bg-[#c9a227]/10">
                    <MapPin aria-hidden className="size-[1.125rem] text-[#e5c766]" />
                  </span>
                  <div>
                    <p className="text-[0.625rem] font-medium tracking-[0.2em] text-white/45 uppercase">
                      Location
                    </p>
                    <address className="mt-3 space-y-1 text-[0.875rem] not-italic leading-relaxed text-white/70">
                      {formattedAddress.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                      <span className="block">{site.contact.address.country}</span>
                    </address>
                  </div>
                </div>

                <div aria-hidden className="hairline-dark my-7" />

                <div className="flex items-center gap-3 text-[0.8125rem] text-white/55">
                  <Clock aria-hidden className="size-4 shrink-0 text-[#c9a227]" />
                  {site.contact.hours}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
