import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Doorstep } from "@/components/Doorstep";
import { FAQ } from "@/components/FAQ";
import { FeaturedService } from "@/components/FeaturedService";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TrustStats } from "@/components/TrustStats";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <About />
      <Services />
      <FeaturedService />
      <Industries />
      <WhyChooseUs />
      <Doorstep />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
