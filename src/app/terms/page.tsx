import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms governing the use of the ${site.name} website and the basis on which information is provided.`,
  alternates: { canonical: "/terms" },
};

/* TODO: REVIEW — have this reviewed against your obligations before publishing. */
const updated = "21 August 2026";

const sections = [
  {
    heading: "About these terms",
    body: (
      <p>
        These terms govern your use of this website. By browsing it or sending an
        enquiry through it, you accept them. If you do not accept them, please do
        not use the site.
      </p>
    ),
  },
  {
    heading: "Information is general",
    body: (
      <>
        <p>
          Everything on this website is general information about GST, taxation and
          compliance. It is not advice on your particular circumstances, and it
          should not be relied on as a substitute for advice specific to your
          business.
        </p>
        <p>
          Tax law changes frequently. Thresholds, rates, due dates and procedures
          described here may have been amended after this page was written.
        </p>
      </>
    ),
  },
  {
    heading: "No professional relationship",
    body: (
      <p>
        Reading this website, or sending an enquiry through it, does not by itself
        create a professional engagement. An engagement begins only when its scope,
        terms and fees have been agreed in writing between us.
      </p>
    ),
  },
  {
    heading: "Enquiries",
    body: (
      <p>
        Enquiries sent through this website are answered as promptly as possible, but
        no response time is guaranteed. Where a matter is time-sensitive — a notice
        with a deadline, for instance — please call rather than relying on email.
      </p>
    ),
  },
  {
    heading: "Client responsibilities",
    body: (
      <p>
        Where an engagement is in place, the accuracy and completeness of the records
        you provide remain your responsibility. Filings are prepared from the
        information supplied; incomplete or inaccurate records affect the outcome and
        may create liabilities that cannot be anticipated.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    body: (
      <p>
        No liability is accepted for any loss arising from reliance on the general
        information published on this website. Liability in respect of work carried
        out under an engagement is governed by the terms of that engagement.
      </p>
    ),
  },
  {
    heading: "Intellectual property",
    body: (
      <p>
        The content, design and layout of this website belong to {site.name} unless
        stated otherwise. You may read and share it for personal or business
        reference, but not republish it commercially without permission.
      </p>
    ),
  },
  {
    heading: "External links",
    body: (
      <p>
        Links to external websites and services are provided for convenience. Their
        content is not controlled or endorsed here, and no responsibility is accepted
        for it.
      </p>
    ),
  },
  {
    heading: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India, and the courts at{" "}
        {site.contact.address.city} have exclusive jurisdiction over any dispute
        arising from them.
      </p>
    ),
  },
  {
    heading: "Changes",
    body: (
      <p>
        These terms may be revised from time to time. The date at the top of this
        page shows when they were last updated. Questions can be sent to{" "}
        {site.contact.email}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      crumbLabel="Terms & Conditions"
      title="Terms & Conditions"
      description="The basis on which information on this website is provided, and the terms that apply to its use."
      updated={updated}
      sections={sections}
    />
  );
}
