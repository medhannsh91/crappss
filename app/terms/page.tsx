"use client";

import Link from "next/link";

const sections = [
  {
    title: "Acceptance of Terms",
    body:
      "By using christinesonapps or creating an account, you agree to these Terms, our Privacy Policy, and any additional policies we post. If you do not agree, do not use the service."
  },
  {
    title: "Who we are",
    body:
      "christinesonapps is operated by Christineson Ventures LLC, located at 502 W 7TH St Ste 100, Erie, Pennsylvania, 16502-1333, United States."
  },
  {
    title: "Eligibility & Accounts",
    body:
      "You must be at least 18, provide accurate information, keep credentials secure, and notify us of unauthorized use. You are responsible for all activity under your account."
  },
  {
    title: "Acceptable Use",
    body:
      "Do not misuse the service, disrupt servers, reverse engineer, attempt to bypass security, or use the service to send spam, malware, or infringing/illegal content."
  },
  {
    title: "Subscriptions & Billing",
    body:
      "Paid features may be offered on subscription terms disclosed at purchase. Fees are non‑refundable except where required by law or where we explicitly state otherwise."
  },
  {
    title: "Intellectual Property",
    body:
      "We retain all rights to christinesonapps, including software, trademarks, and content. You may not copy, modify, or create derivative works except as allowed by these Terms."
  },
  {
    title: "User Content",
    body:
      "You keep ownership of content you upload and grant us a non‑exclusive license to host and process it to provide the service. Do not upload content you lack rights to share."
  },
  {
    title: "Privacy & Data",
    body:
      "We process personal data as described in our Privacy Policy. By using the service, you consent to such processing and to transfers needed to operate the service."
  },
  {
    title: "Third‑Party Services",
    body:
      "Third‑party links, integrations, or downloads are provided as‑is. We are not responsible for third‑party services or their terms."
  },
  {
    title: "Disclaimers",
    body:
      "THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND. We do not guarantee uptime, accuracy, or that the service will meet your needs."
  },
  {
    title: "Limitation of Liability",
    body:
      "To the fullest extent permitted by law, Christineson Ventures LLC is not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or goodwill."
  },
  {
    title: "Indemnification",
    body:
      "You will indemnify and hold Christineson Ventures LLC harmless from claims arising from your misuse of the service or violation of these Terms."
  },
  {
    title: "Termination",
    body:
      "We may suspend or terminate access for any violation of these Terms or for operational/security reasons. You may stop using the service at any time."
  },
  {
    title: "Governing Law & Disputes",
    body:
      "These Terms are governed by the laws of the Commonwealth of Pennsylvania, excluding conflict of laws principles. Disputes will be resolved in the state or federal courts located in Pennsylvania, unless prohibited by law."
  },
  {
    title: "Changes to Terms",
    body:
      "We may update these Terms. Material changes will be posted in the app or on our site. Continued use after changes means you accept the updated Terms."
  },
  {
    title: "Contact",
    body:
      "Email: administrator@christinesonapps.com. Mailing address: Christineson Ventures LLC, 502 W 7TH St Ste 100, Erie, Pennsylvania, 16502-1333, United States."
  }
];

export default function TermsPage() {
  return (
    <div className="page">
      <header style={{ marginBottom: 16 }}>
        <div className="brand" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="brand-mark">C</div>
            <div>
              <div>christinesonapps</div>
              <small style={{ color: "var(--muted)", fontWeight: 600 }}>
                Terms of Service
              </small>
            </div>
          </div>
          <Link href="/" className="nav-btn" prefetch={false}>
            Back to home
          </Link>
        </div>
      </header>

      <section className="card" style={{ padding: 24, marginBottom: 18 }}>
        <h1 style={{ marginTop: 0, marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ color: "var(--muted)", margin: 0 }}>
          Last updated: March 7, 2026
        </p>
      </section>

      <div className="tab-content active" style={{ padding: 0, border: "none", background: "transparent", boxShadow: "none" }}>
        {sections.map((section) => (
          <div key={section.title} className="card" style={{ marginBottom: 14 }}>
            <h3 style={{ margin: "0 0 6px" }}>{section.title}</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
