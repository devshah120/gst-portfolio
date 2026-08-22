import type { Metadata } from "next";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { TrustStats } from "@/components/TrustStats";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a ${site.role} advising businesses, startups and professionals on GST registration, return filing, advisory, audit and compliance.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        crumbs={[{ label: "About" }]}
        title={
          <>
            A Practice Built Around
            <br />
            <span className="text-accent">Getting It Right.</span>
          </>
        }
        description="GST work rewards care taken early. Registrations set up correctly, returns reconciled before filing and positions documented as they are taken — that is what keeps a business out of trouble years later."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg" arrow>
            Book a Consultation
          </Button>
          <Button href="/services" size="lg" variant="light">
            Explore Services
          </Button>
        </div>
      </PageHero>

      <TrustStats />
      <About />
      <WhyChooseUs />
      <Process />
      <CTA />
    </>
  );
}
