import LegalPage from "@/components/LegalPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Nexus Card Tech",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>Last updated: 25 February 2026</p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        1. Acceptance of Terms
      </h2>
      <p>
        By accessing and using the Nexus Card Tech website, you agree to be
        bound by these Terms of Service. If you do not agree, please do not use
        the website.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        2. Waiting List
      </h2>
      <p>
        Signing up for the waiting list does not constitute a purchase or
        pre-order. It registers your interest in the TITAN product. We are under
        no obligation to contact you or offer you a product as a result of your
        sign-up.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        3. Intellectual Property
      </h2>
      <p>
        All content on this website - including text, graphics, logos, and
        software - is the property of Nexus Card Tech and is protected by
        applicable intellectual property laws. You may not reproduce, distribute,
        or create derivative works without our written permission.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        4. Product Information
      </h2>
      <p>
        Product specifications, features, and pricing described on this website
        are subject to change without notice. We make reasonable efforts to
        ensure accuracy but do not guarantee that all information is complete or
        current.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        5. Limitation of Liability
      </h2>
      <p>
        Nexus Card Tech shall not be liable for any indirect, incidental, or
        consequential damages arising from your use of this website or reliance
        on any information provided.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        6. Governing Law
      </h2>
      <p>
        These terms are governed by and construed in accordance with the laws of
        England and Wales.
      </p>

      <h2 className="text-xl font-semibold text-text-primary pt-4">
        7. Contact
      </h2>
      <p>
        For questions regarding these terms, contact us at{" "}
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
