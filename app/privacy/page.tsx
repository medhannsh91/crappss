"use client";

import Link from "next/link";

const sections = [
  {
    title: "Overview",
    body:
      "This Privacy Policy explains how christinesonapps, operated by Christineson Ventures LLC, collects, uses, and protects your information when you use our app and site."
  },
  {
    title: "Who we are",
    body:
      "christinesonapps is provided by Christineson Ventures LLC (formerly Fitsii LLC), 502 W 7TH St Ste 100, Erie, Pennsylvania, 16502-1333, United States. Contact: administrator@christinesonapps.com."
  },
  {
    title: "Information we collect",
    body:
      "Account data (name, email), usage data (device info, app interactions, diagnostics), and optional support or feedback you provide. Email account credentials use provider OAuth where possible; passwords, if used, are stored securely."
  },
  {
    title: "How we use information",
    body:
      "To operate the app, sync mail, provide support, improve performance, prevent abuse, and comply with legal obligations. Aggregated analytics are used to understand product usage."
  },
  {
    title: "Legal bases (EEA/UK users)",
    body:
      "We rely on contract (providing the service), legitimate interests (security, improvement), consent (where required for certain analytics or marketing), and legal obligations."
  },
  {
    title: "Cookies and tracking",
    body:
      "We use necessary cookies for authentication and session continuity. Optional analytics cookies may be used; where required, we will request consent."
  },
  {
    title: "Sharing",
    body:
      "We do not sell personal data. We share data with service providers (hosting, analytics, error reporting, email delivery) bound by confidentiality, and when required by law or to protect rights and safety."
  },
  {
    title: "Data retention",
    body:
      "We keep personal data only as long as needed for the purposes above, then delete or anonymize it. Support records are retained for a reasonable period to resolve issues and improve service."
  },
  {
    title: "Security",
    body:
      "We use encryption in transit, limited access controls, and routine monitoring. No method is perfect; keep your credentials secure and notify us of any suspected breach."
  },
  {
    title: "International transfers",
    body:
      "Data may be processed in the United States and other countries. Where required, we use appropriate safeguards for cross-border transfers."
  },
  {
    title: "Your rights",
    body:
      "Depending on your region, you may request access, correction, deletion, portability, or restriction, and may object to certain processing. To exercise rights, contact administrator@christinesonapps.com."
  },
  {
    title: "Children",
    body:
      "christinesonapps is not directed to children under 16, and we do not knowingly collect data from them. If you believe a child has provided data, contact us to delete it."
  },
  {
    title: "Third-party links and services",
    body:
      "Links or integrations may lead to third-party services with their own policies. We are not responsible for their practices."
  },
  {
    title: "Changes to this policy",
    body:
      "We may update this Privacy Policy. Material changes will be posted in the app or on our site. Continued use after changes means you accept the updated policy."
  },
  {
    title: "Contact",
    body:
      "Email: administrator@christinesonapps.com. Mailing address: Christineson Ventures LLC, 502 W 7TH St Ste 100, Erie, Pennsylvania, 16502-1333, United States."
  }
];

export default function PrivacyPage() {
  return (
    <div className="page">
      <header style={{ marginBottom: 16 }}>
        <div className="brand" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="brand-mark">C</div>
            <div>
              <div>christinesonapps</div>
              <small style={{ color: "var(--muted)", fontWeight: 600 }}>
                Privacy Policy
              </small>
            </div>
          </div>
          <Link href="/" className="nav-btn" prefetch={false}>
            Back to home
          </Link>
        </div>
      </header>

      <section className="card" style={{ padding: 24, marginBottom: 18 }}>
        <h1 style={{ marginTop: 0, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: "var(--muted)", margin: 0 }}>
          Last updated: March 7, 2026
        </p>
      </section>

      <div
        className="tab-content active"
        style={{ padding: 0, border: "none", background: "transparent", boxShadow: "none" }}
      >
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
