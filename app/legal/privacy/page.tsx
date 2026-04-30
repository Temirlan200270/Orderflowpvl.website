import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/config/business";

export const metadata: Metadata = {
  title: "Privacy Policy | IE ABISHEV",
  description: "Privacy policy for IE ABISHEV and orderflowpvl.website.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

        <div className="mt-10 max-w-none space-y-8 text-sm leading-relaxed sm:text-base">
          <section className="space-y-4">
            <p>
              This Privacy Policy outlines how IE ABISHEV (Tax ID / IIN: 830520350723), located
              at 140000, Pavlodar, Estaya 81/1, apt 19, collects and processes data via
              orderflowpvl.website.
            </p>
            <p>
              The operator of this website is{" "}
              <strong className="text-white">{BUSINESS_INFO.name}</strong> (
              <strong className="text-white">IIN {BUSINESS_INFO.iin}</strong>), with registered
              address: {BUSINESS_INFO.address.formatted}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Information we collect</h2>
            <p>
              We may process contact details that you voluntarily provide when you email or call us
              using the links published on this website. We do not operate account registration or
              e-commerce checkout on this site in its current version.
            </p>
            <p>
              Like most websites, hosting infrastructure may generate standard technical logs (for
              example, IP address, user agent, and timestamp) needed for security and reliability.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">How we use information</h2>
            <p>
              Personal data is collected and used{" "}
              <strong className="text-white">solely</strong> for automotive service appointment
              scheduling, workshop coordination, and related B2B communications.
            </p>
            <p>We do not sell personal data to third parties.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Legal basis and compliance</h2>
            <p>
              Processing is carried out in accordance with the laws of the{" "}
              <strong className="text-white">Republic of Kazakhstan</strong>. Where applicable, we
              respect rights of access, correction, and deletion subject to legal requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Retention</h2>
            <p>
              We retain communications only as long as necessary to fulfill the purposes described
              above, comply with legal obligations, and resolve disputes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p>
              Data controller: {BUSINESS_INFO.name}. Email:{" "}
              <a
                href={BUSINESS_INFO.contact.emailMailtoHref}
                className="text-blue-400 hover:underline"
              >
                {BUSINESS_INFO.contact.email}
              </a>
              . Phone:{" "}
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
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date
              at the top of this page will be revised when material changes are made.
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
