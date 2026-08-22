import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Users } from "lucide-react";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process, services } from "@/config/content";
import { site } from "@/config/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return { title: "Service not found" };

  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.short,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const schema = serviceSchema(service.slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        title={service.title}
        description={service.short}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg" arrow>
            Book a Consultation
          </Button>
          <Button href="/services" size="lg" variant="light">
            All Services
          </Button>
        </div>
      </PageHero>

      {/* ------------------------------------------------------- Overview */}
      <section className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-12">
          <div>
            <Reveal>
              <span className="eyebrow text-[#0b1220]/55">Overview</span>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-7 text-[1.0625rem] leading-relaxed text-[#0b1220]/75 sm:text-[1.125rem]">
                {service.overview}
              </p>
            </Reveal>
          </div>

          {/* Who needs it */}
          <Reveal delay={0.14}>
            <div className="rounded-2xl border border-[#0b1220]/[0.08] bg-[#f8f7f3] p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg border border-[#c9a227]/35 bg-[#c9a227]/10">
                  <Users aria-hidden className="size-4 text-[#a8871c]" />
                </span>
                <h2 className="text-[0.625rem] font-medium tracking-[0.22em] text-[#64748b] uppercase">
                  Who Needs This
                </h2>
              </div>

              <ul className="mt-6 space-y-4">
                {service.audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.875rem] leading-relaxed text-[#0b1220]/75"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-[#c9a227]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ What is included */}
      <section className="relative overflow-hidden bg-[#0b1220] py-20 sm:py-24 lg:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60 mask-fade" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Scope"
            tone="light"
            title={
              <>
                What Is <span className="text-accent">Included</span>
              </>
            }
          />

          <Stagger as="ul" className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item, i) => (
              <StaggerItem as="li" key={item} className="bg-[#0b1220]">
                <div className="group flex h-full items-start gap-4 p-7 transition-colors duration-500 hover:bg-white/[0.03]">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-[#c9a227]/40 bg-[#c9a227]/12 transition-colors duration-500 group-hover:bg-[#c9a227]/25">
                    <Check aria-hidden className="size-3 text-[#e5c766]" />
                  </span>
                  <div>
                    <span className="block font-serif text-[0.75rem] text-[#c9a227] tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-[0.875rem] leading-relaxed text-white/70">
                      {item}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* -------------------------------------------------------- Benefits */}
      <section className="relative bg-[#f8f7f3] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Benefits"
            align="center"
            title={
              <>
                What You <span className="text-accent">Get</span>
              </>
            }
          />

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
            {service.benefits.map(({ title, body }, i) => (
              <StaggerItem key={title} as="article">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-[#0b1220]/[0.08] bg-white p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#c9a227]/35 hover:shadow-[0_24px_50px_-28px_rgba(11,18,32,0.3)]">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#c9a227] transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                  <span className="font-serif text-[0.8125rem] text-[#c9a227] tnum">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-[1.25rem] text-[#0b1220]">{title}</h3>
                  <p className="mt-4 text-[0.875rem] leading-relaxed text-[#64748b]">
                    {body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* --------------------------------------------------------- Process */}
      <section className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="How It Works"
            title={
              <>
                From First Call to
                <br />
                <span className="text-accent">Ongoing</span> Support.
              </>
            }
          />

          <Stagger as="ol" className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, title, body }) => (
              <StaggerItem as="li" key={step}>
                <div className="border-t border-[#0b1220]/[0.12] pt-6">
                  <span className="font-serif text-[0.8125rem] tracking-[0.14em] text-[#c9a227] tnum">
                    {step}
                  </span>
                  <h3 className="mt-3 text-[1.1875rem] text-[#0b1220]">{title}</h3>
                  <p className="mt-3.5 text-[0.875rem] leading-relaxed text-[#64748b]">
                    {body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ------------------------------------------------------------- FAQ */}
      {service.faq.length > 0 && (
        <section className="relative bg-[#f8f7f3] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12">
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Common <span className="text-accent">Questions</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <FAQ items={service.faq} bare />
            </Reveal>
          </div>
        </section>
      )}

      {/* --------------------------------------------------------- Related */}
      <section className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Related"
            title={
              <>
                Other <span className="text-accent">Services</span>
              </>
            }
          />

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map(({ slug: rSlug, title, short, icon: Icon }) => (
              <StaggerItem key={rSlug} as="article">
                <Link
                  href={`/services/${rSlug}`}
                  className="group flex h-full flex-col rounded-2xl border border-[#0b1220]/[0.08] bg-[#f8f7f3] p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#c9a227]/35 hover:bg-white hover:shadow-[0_24px_50px_-28px_rgba(11,18,32,0.3)]"
                >
                  <span className="grid size-11 place-items-center rounded-lg border border-[#0b1220]/[0.09] bg-white transition-all duration-500 group-hover:border-[#c9a227]/40 group-hover:bg-[#c9a227]/12">
                    <Icon
                      aria-hidden
                      className="size-5 text-[#0b1220] transition-colors duration-500 group-hover:text-[#a8871c]"
                    />
                  </span>
                  <h3 className="mt-6 text-[1.125rem] text-[#0b1220]">{title}</h3>
                  <p className="mt-3 flex-1 text-[0.8125rem] leading-relaxed text-[#64748b]">
                    {short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.08em] text-[#0b1220]/45 uppercase transition-colors duration-500 group-hover:text-[#a8871c]">
                    Learn More
                    <ArrowUpRight
                      aria-hidden
                      className="size-3.5 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA />

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path: `/services/${service.slug}` },
            ]),
          ),
        }}
      />
    </>
  );
}
