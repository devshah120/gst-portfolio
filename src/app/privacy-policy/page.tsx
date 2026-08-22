import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects information submitted through this website.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

/* TODO: REVIEW — have this reviewed against your obligations before publishing. */
const updated = "21 August 2026";

const sections = [
  {
    heading: "Information collected",
    body: (
      <>
        <p>
          Information is collected only when you choose to provide it — typically
          through the enquiry form on this website, or when you contact by phone,
          email or WhatsApp. That may include your name, email address, phone
          number, business name and whatever you write in your message.
        </p>
        <p>
          The website does not require you to create an account, and does not ask
          for financial account details, identity documents or tax credentials
          through any form on this site.
        </p>
      </>
    ),
  },
  {
    heading: "How information is used",
    body: (
      <>
        <p>
          Information you submit is used to respond to your enquiry, to understand
          your requirements, and — if an engagement follows — to carry out the work
          you have asked for.
        </p>
        <p>
          It is not sold, rented or traded, and it is not used to send marketing
          material you have not asked to receive.
        </p>
      </>
    ),
  },
  {
    heading: "Enquiry form",
    body: (
      <p>
        The enquiry form on this website composes a message in your own email
        client. Nothing is stored on this website when you use it — the message is
        sent directly from you to {site.contact.email}. If this is later replaced
        with a server-side form, this section will be updated to describe how
        submissions are stored.
      </p>
    ),
  },
  {
    heading: "Confidentiality",
    body: (
      <p>
        Information shared in the course of an engagement — financial records,
        registration details, correspondence — is treated as confidential. It is
        used only for the work you have engaged for, and is disclosed to third
        parties only where you have authorised it or where the law requires it.
      </p>
    ),
  },
  {
    heading: "Cookies and analytics",
    body: (
      <p>
        This website does not set advertising or tracking cookies of its own. If
        analytics or other third-party tooling is added in future, this section will
        be updated to say what is collected and how it can be opted out of.
      </p>
    ),
  },
  {
    heading: "External links",
    body: (
      <p>
        This site links to WhatsApp and may link to other external services. Once
        you follow such a link you are governed by that service&rsquo;s own privacy
        practices, which are outside the control of this website.
      </p>
    ),
  },
  {
    heading: "Retention",
    body: (
      <p>
        Correspondence and engagement records are retained for as long as is needed
        to provide the service and to meet professional and statutory record-keeping
        obligations, after which they are securely disposed of.
      </p>
    ),
  },
  {
    heading: "Your choices",
    body: (
      <p>
        You may ask what information is held about you, ask for it to be corrected,
        or ask for it to be deleted where there is no legal or professional
        obligation to retain it. Write to {site.contact.email} with your request.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        This policy may be updated from time to time. The date at the top of this
        page shows when it was last revised.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about this policy can be sent to {site.contact.email} or{" "}
        {site.contact.phone}.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      crumbLabel="Privacy Policy"
      title="Privacy Policy"
      description="What information this website collects, how it is used, and the choices available to you."
      updated={updated}
      sections={sections}
    />
  );
}
