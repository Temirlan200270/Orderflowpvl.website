import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/config/business";

export const metadata: Metadata = {
  title: "Terms of Service | IE ABISHEV",
  description: "Terms of service for IE ABISHEV.",
};

export default function TermsPage() {
  const lastUpdated = "April 2026";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <Link
          href="/"
          className="text-sm font-medium text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          ← Back to home
        </Link>
        <h1 className="mt-10 text-3xl font-semibold tracking-tight text-white">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

        <div className="mt-10 max-w-none space-y-8 text-sm leading-relaxed sm:text-base">
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Acceptance of terms</h2>
            <p>
              By accessing {BUSINESS_INFO.contact.website}, you agree to these Terms of Service. If
              you do not agree, please do not use the website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Description of services</h2>
            <p>
              {BUSINESS_INFO.name} provides professional automotive technical maintenance, ECU
              diagnostics, and suspension-related services under{" "}
              <strong className="text-white">OKED 45201</strong> (maintenance and repair of motor
              vehicles), subject to workshop capacity and technical feasibility.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Appointments and communications</h2>
            <p>
              This website provides informational content and contact methods (
              <a
                href={BUSINESS_INFO.contact.emailMailtoHref}
                className="text-blue-400 hover:underline"
              >
                email
              </a>
              ,{" "}
              <a
                href={BUSINESS_INFO.contact.phoneTelHref}
                className="text-blue-400 hover:underline"
              >
                phone
              </a>
              ). Availability of services is confirmed on a case-by-case basis.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Safety and refusal of service</h2>
            <p className="rounded-md border border-slate-800 bg-slate-900/60 p-4 text-slate-200">
              IE ABISHEV reserves the right to refuse service to vehicles that do not meet our safety
              inspection criteria.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Limitation of liability</h2>
            <p>
              To the extent permitted by applicable law, {BUSINESS_INFO.name} is not liable for any
              indirect or consequential damages arising from use of this website. Workshop liability
              for performed work, if any, is governed by separate service documentation and
              applicable law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Governing law</h2>
            <p>
              These terms are governed by the laws of the{" "}
              <strong className="text-white">Republic of Kazakhstan</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p>
              {BUSINESS_INFO.name} — {BUSINESS_INFO.address.formatted} —{" "}
              <a
                href={BUSINESS_INFO.contact.emailMailtoHref}
                className="text-blue-400 hover:underline"
              >
                {BUSINESS_INFO.contact.email}
              </a>{" "}
              —{" "}
              <a
                href={BUSINESS_INFO.contact.phoneTelHref}
                className="text-blue-400 hover:underline"
              >
                {BUSINESS_INFO.contact.phoneDisplay}
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Changes</h2>
            <p>
              We may update these terms periodically. Continued use of the website after changes
              constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-xs text-slate-500">
            This document is provided for general information and does not constitute legal
            advice. Consult qualified counsel for jurisdiction-specific requirements.
          </section>
        </div>
      </div>
    </div>
  );
}
