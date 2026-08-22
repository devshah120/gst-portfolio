import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs, services } from "@/config/content";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about GST registration, return filing frequency, notices, ongoing compliance and booking a consultation.",
  alternates: { canonical: "/faq" },
};

/** Service-specific questions, grouped under their service. */
const serviceFaqs = services.filter((s) => s.faq.length > 0);

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        crumbs={[{ label: "FAQ" }]}
        title={
          <>
            Questions,
            <br />
            <span className="text-accent">Answered</span> Plainly.
          </>
        }
        description="Registration thresholds, filing frequency, notices and what an ongoing engagement covers — without the section references."
      >
        <Button href="/contact" size="lg" arrow>
          Ask Something Else
        </Button>
      </PageHero>

      {/* General questions */}
      <section className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12">
          <SectionHeading
            eyebrow="General"
            className="lg:sticky lg:top-28 lg:self-start"
            title={
              <>
                About the <span className="text-accent">Practice</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <FAQ items={faqs} bare />
          </Reveal>
        </div>
      </section>

      {/* Service-specific questions */}
      <section className="relative overflow-hidden bg-[#f8f7f3] py-20 sm:py-24 lg:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-50" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="By Service"
            title={
              <>
                Questions About
                <br />
                Specific <span className="text-accent">Services.</span>
              </>
            }
          />

          <div className="mt-14 space-y-14">
            {serviceFaqs.map((s) => (
              <Reveal key={s.slug}>
                <div className="grid gap-6 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
                  <div>
                    <h3 className="text-[1.25rem] text-[#0b1220]">{s.title}</h3>
                    <a
                      href={`/services/${s.slug}`}
                      className="link-underline mt-3 inline-block text-[0.75rem] font-medium tracking-[0.08em] text-[#a8871c] uppercase"
                    >
                      View service
                    </a>
                  </div>
                  <FAQ items={s.faq} bare />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "FAQ", path: "/faq" },
            ]),
          ),
        }}
      />
    </>
  );
}
