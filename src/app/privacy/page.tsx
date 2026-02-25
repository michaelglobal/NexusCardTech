import LegalPage from "@/components/LegalPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Nexus Card Tech",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Last updated: 25 February 2026</p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        1. Information We Collect
      </h2>
      <p>
        When you sign up for our waiting list, we collect your email address and
        optionally your name. We do not collect any other personal information
        through this website.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        2. How We Use Your Information
      </h2>
      <p>
        We use your email address solely to notify you about TITAN product
        updates, launch dates, and pre-order availability. We will not sell,
        rent, or share your personal information with third parties for marketing
        purposes.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        3. Data Storage
      </h2>
      <p>
        Your information is stored securely using Supabase, a hosted database
        service with encryption at rest and in transit. Access to your data is
        restricted to authorised Nexus Card Tech personnel only.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        4. Your Rights
      </h2>
      <p>
        You may request deletion of your data at any time by contacting us. We
        will remove your information from our systems within 30 days of your
        request.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        5. Cookies
      </h2>
      <p>
        This website does not use cookies or tracking technologies.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        6. Changes to This Policy
      </h2>
      <p>
        We may update this privacy policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        7. Contact
      </h2>
      <p>
        If you have questions about this privacy policy, please contact us at{" "}
        <a
          href="mailto:hello@nexuscardtech.com"
          className="text-accent hover:underline"
        >
          hello@nexuscardtech.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
