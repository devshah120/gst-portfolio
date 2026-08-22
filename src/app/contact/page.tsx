import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/config/content";
import { site, telUrl, whatsappUrl } from "@/config/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} to discuss GST registration, return filing, advisory, audit or business compliance requirements.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Contact" }]}
        title={
          <>
            Let&rsquo;s Talk About
            <br />
            Your <span className="text-accent">Business.</span>
          </>
        }
        description="Send across a short note on what you need help with. You will get a direct answer on what applies to your situation and how the engagement would work."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={telUrl} size="lg" arrow>
            Call {site.contact.phone}
          </Button>
          <Button href={whatsappUrl} external size="lg" variant="light">
            Chat on WhatsApp
          </Button>
        </div>
      </PageHero>

      <Contact />

      {/* A short FAQ pulled from the main set, most relevant to enquiries */}
      <section className="relative bg-[#f8f7f3] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="eyebrow eyebrow-center text-[#0b1220]/55">
              Before You Write
            </span>
            <h2 className="mt-5 text-[1.75rem] leading-[1.15] text-[#0b1220] sm:text-[2.25rem]">
              Quick <span className="text-accent">Answers</span>
            </h2>
          </div>

          <div className="mt-12">
            <FAQ items={faqs.slice(-3)} bare />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        }}
      />
    </>
  );
}
