"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const SECTIONS = ["features", "support", "download", "license"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function HomePage() {
  const [active, setActive] = useState<SectionId>("features");

  // Activate section based on hash on first paint and keep URL hash in sync.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && SECTIONS.includes(hash as SectionId)) {
      setActive(hash as SectionId);
    }

    const onHashChange = () => {
      const next = window.location.hash.replace("#", "");
      if (next && SECTIONS.includes(next as SectionId)) {
        setActive(next as SectionId);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const target = document.getElementById(active);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Keep hash updated without showing a .html path anywhere.
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${active}`);
    }
  }, [active]);

  const activate = (id: SectionId) => setActive(id);

  const navButtons = useMemo(
    () =>
      SECTIONS.map((id) => ({
        id,
        label:
          id === "features"
            ? "Features"
            : id === "support"
            ? "Support"
            : id === "download"
            ? "Free Download"
            : "License"
      })),
    []
  );

  return (
    <div className="page">
      <header>
        <div className="brand">
          <div className="brand-mark">C</div>
          <div>
            <div>christinesonapps.com</div>
            <small style={{ color: "var(--muted)", fontWeight: 600 }}>
              Modern email client for focused inboxes
            </small>
          </div>
        </div>
        <nav aria-label="Primary">
          {navButtons.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`nav-btn ${active === id ? "active" : ""}`}
              data-target={id}
              onClick={() => activate(id)}
              aria-pressed={active === id}
            >
              {label}
            </button>
          ))}
          <Link href="/terms" className="nav-btn" prefetch={false}>
            Terms
          </Link>
        </nav>
        <button className="cta" type="button" onClick={() => activate("download")}>
          Get christinesonapps
        </button>
      </header>

      <section className="hero" id="top">
        <div>
          <h1>Fast, private email without the noise.</h1>
          <p>
            christinesonapps is a desktop-class email client inspired by the
            reliability of eM Client. Connect multiple accounts, sort by
            priority, and glide through mail with keyboard-first speed.
          </p>
          <div className="chip-row">
            <span className="chip">Unified inbox with rules</span>
            <span className="chip">Calendar & tasks</span>
            <span className="chip">Local encryption</span>
            <span className="chip">Offline-first sync</span>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="cta" type="button" onClick={() => activate("download")}>
              Free Download
            </button>
            <button
              className="cta"
              type="button"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "var(--text)",
                boxShadow: "none",
                border: "1px solid var(--border)"
              }}
              onClick={() => activate("license")}
            >
              View License Options
            </button>
          </div>
        </div>
        <div className="preview" aria-hidden="true">
          <div className="mock-window">
            <div className="status-row">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="status-dot" />
                <strong>Inbox · christinesonapps</strong>
              </div>
              <small>Focus mode</small>
            </div>
            <p style={{ margin: "0 0 8px" }}>Today • 12 new conversations</p>
            <div style={{ display: "grid", gap: 8 }}>
              <div
                className="card"
                style={{
                  background: "rgba(102,228,168,0.08)",
                  borderColor: "rgba(102,228,168,0.4)"
                }}
              >
                <strong>Smart Bundles</strong>
                <p>Newsletters & promos auto-folded so your people stay on top.</p>
              </div>
              <div className="card">
                <strong>Spotlight Search</strong>
                <p>Type `J` to jump to any contact, file, or calendar event.</p>
              </div>
              <div className="card">
                <strong>One-click Unsubscribe</strong>
                <p>Clear clutter without leaving your inbox.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tab-bar" role="tablist" aria-label="Sections">
        {navButtons.map(({ id, label }) => (
          <button
            key={id}
            className={`tab-btn ${active === id ? "active" : ""}`}
            role="tab"
            aria-selected={active === id}
            aria-controls={id}
            data-target={id}
            onClick={() => activate(id)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>

      <section id="features" className={`tab-content ${active === "features" ? "active" : ""}`} role="tabpanel">
        <h2 className="section-title">Features</h2>
        <div className="grid">
          <div className="card">
            <h3>Unified inbox that stays tidy</h3>
            <p>
              Rules, VIP senders, and bundles keep the important threads surfaced
              while low-value mail stays quiet.
            </p>
          </div>
          <div className="card">
            <h3>Calendar and tasks built in</h3>
            <p>Schedule from any thread, drag emails into tasks, and keep everything in one clean timeline.</p>
          </div>
          <div className="card">
            <h3>Keyboard-first speed</h3>
            <p>Shortcuts for triage, snooze, reply, archive, and search mean you finish inbox zero in minutes.</p>
          </div>
          <div className="card">
            <h3>Security & privacy</h3>
            <p>On-device encryption for cached mail, OAuth for major providers, and no tracking pixels by default.</p>
          </div>
        </div>
        <ul className="list" style={{ marginTop: 18 }}>
          <li>Supports Gmail, Outlook, IMAP, iCloud, and Exchange.</li>
          <li>Smart offline sync so you can draft and search without a network.</li>
          <li>Themeable UI with compact density and high-contrast options.</li>
        </ul>
      </section>

      <section id="support" className={`tab-content ${active === "support" ? "active" : ""}`} role="tabpanel">
        <h2 className="section-title">Support</h2>
        <p style={{ color: "var(--muted)", maxWidth: 720 }}>
          We keep support lightweight and fast. Most questions are resolved same-day.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Help Center</h3>
            <p>Step-by-step setup for Gmail, Outlook, and custom IMAP, plus troubleshooting guides.</p>
          </div>
          <div className="card">
            <h3>Contact</h3>
            <p>
              Email <strong>support@christinesonapps.com</strong> or start a ticket from Settings → Help. Business hours: Mon–Fri, 9am–6pm CST.
            </p>
          </div>
          <div className="card">
            <h3>Community</h3>
            <p>Join our monthly office hours for tips and live Q&A on power workflows.</p>
          </div>
        </div>
      </section>

      <section id="download" className={`tab-content ${active === "download" ? "active" : ""}`} role="tabpanel">
        <h2 className="section-title">Free Download</h2>
        <p style={{ color: "var(--muted)" }}>
          Grab the latest desktop build. No credit card required.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Windows</h3>
            <p>Installer for Windows 10/11 with auto-updates.</p>
            <a
              className="cta"
              href="https://christinesonapps.com/download/windows"
              target="_blank"
              rel="noreferrer"
            >
              Download .exe
            </a>
          </div>
          <div className="card">
            <h3>macOS</h3>
            <p>Universal build for Apple Silicon & Intel.</p>
            <a
              className="cta"
              href="https://christinesonapps.com/download/macos"
              target="_blank"
              rel="noreferrer"
            >
              Download .dmg
            </a>
          </div>
          <div className="card">
            <h3>Linux</h3>
            <p>Deb & AppImage packages; works offline-first.</p>
            <a
              className="cta"
              href="https://christinesonapps.com/download/linux"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </div>
        </div>
        <p style={{ color: "var(--muted)", marginTop: 14 }}>
          Checksums and release notes are published with every build.
        </p>
      </section>

      <section id="license" className={`tab-content ${active === "license" ? "active" : ""}`} role="tabpanel">
        <h2 className="section-title">License</h2>
        <div className="grid">
          <div className="card">
            <h3>Personal</h3>
            <p>Free for individuals. Optional upgrade adds advanced rules and calendar sharing.</p>
            <a
              className="cta"
              href="https://christinesonapps.com/license/personal"
              target="_blank"
              rel="noreferrer"
            >
              Get Personal
            </a>
          </div>
          <div className="card">
            <h3>Team</h3>
            <p>$7/user/mo — includes centralized policy controls, SSO, and shared signatures.</p>
            <a
              className="cta"
              href="https://christinesonapps.com/license/team"
              target="_blank"
              rel="noreferrer"
            >
              Start Team Trial
            </a>
          </div>
          <div className="card">
            <h3>Enterprise</h3>
            <p>Custom security reviews, priority SLAs, and onboarding support.</p>
            <a
              className="cta"
              href="https://christinesonapps.com/license/enterprise"
              target="_blank"
              rel="noreferrer"
            >
              Talk to Sales
            </a>
          </div>
        </div>
        <ul className="list" style={{ marginTop: 16 }}>
          <li>Licenses include updates and security patches during the term.</li>
          <li>Volume discounts start at 50 seats.</li>
          <li>30-day money-back guarantee.</li>
        </ul>
      </section>

      <footer>
        Built by christinesonapps.com · Privacy-first email that respects your time.{" "}
        <Link href="/privacy" prefetch={false} style={{ textDecoration: "underline" }}>
          Privacy
        </Link>{" "}
        ·{" "}
        <Link href="/terms" prefetch={false} style={{ textDecoration: "underline" }}>
          Terms
        </Link>
      </footer>
    </div>
  );
}
