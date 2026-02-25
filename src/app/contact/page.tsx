import LegalPage from "@/components/LegalPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Nexus Card Tech",
};

export default function ContactPage() {
  return (
    <LegalPage title="Contact Us">
      <p>
        We&apos;d love to hear from you. Whether you have questions about TITAN,
        want to discuss partnerships, or need support - get in touch.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">Email</h2>
      <p>
        <a
          href="mailto:hello@nexuscardtech.com"
          className="text-accent hover:underline"
        >
          hello@nexuscardtech.com
        </a>
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        General Enquiries
      </h2>
      <p>
        For product questions, waiting list queries, or press enquiries, email us
        and we&apos;ll respond within 48 hours.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        Data Requests
      </h2>
      <p>
        To request deletion of your data or exercise your privacy rights, email{" "}
        <a
          href="mailto:hello@nexuscardtech.com"
          className="text-accent hover:underline"
        >
          hello@nexuscardtech.com
        </a>{" "}
        with the subject line &quot;Data Request&quot;.
      </p>
    </LegalPage>
  );
}
