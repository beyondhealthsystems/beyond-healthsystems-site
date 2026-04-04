// /pages/beyond-truth.js

import Nav from "../components/Nav";

export default function BeyondTruth() {
  const styles = {
    page: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
      color: "#0f172a",
      backgroundColor: "#ffffff",
      minHeight: "100vh",
    },
    container: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "0 40px",
    },
    navWrap: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 0",
    },
    navLeft: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: 16,
    },
    navLinks: {
      display: "flex",
      gap: 18,
      fontSize: 14,
    },
    a: {
      color: "#1e3a8a",
      textDecoration: "none",
      fontWeight: 600,
    },

    hero: {
      padding: "84px 0 46px",
      backgroundImage: "url('/images/hero-background-light.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    h1: {
      fontFamily: "Georgia, serif",
      fontSize: 48,
      lineHeight: 1.15,
      marginBottom: 18,
      letterSpacing: "-0.02em",
    },
    lead: {
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: 900,
      marginBottom: 18,
    },
    section: {
      padding: "42px 0",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
    },
    h2: {
      fontSize: 28,
      marginBottom: 12,
      letterSpacing: "-0.01em",
    },
    p: {
      fontSize: 16,
      lineHeight: 1.65,
      marginBottom: 14,
      maxWidth: 920,
    },
    bullets: {
      marginLeft: 18,
      lineHeight: 1.7,
      maxWidth: 900,
    },
    mediaCard: {
      marginTop: 22,
      border: "1px solid rgba(15, 23, 42, 0.10)",
      borderRadius: 14,
      overflow: "hidden",
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
    },
    img: {
      width: "100%",
      display: "block",
    },
    caption: {
      padding: "12px 14px",
      fontSize: 14,
      color: "#334155",
    },
    footer: {
      padding: "30px 0 40px",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
      fontSize: 13,
      color: "#475569",
    },
  };

  return (
    <main style={styles.page}>
      <Nav />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.h1}>Beyond-Truth</h1>

          <p style={styles.lead}>
            Beyond-Truth is the deterministic financial intelligence and recovery
            engine of the platform — built to identify what was underpaid,
            denied, missed, or written off too early, and to make those dollars
            visible, auditable, and actionable.
          </p>

          <p style={styles.lead}>
            It answers the question leadership should have been able to answer
            years ago:
            <br />
            <strong>
              What revenue was truly earned, what happened to it, and what can
              still be recovered?
            </strong>
          </p>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/audit-dashboard.jpg"
              alt="Audit analytics showing paid, denied, underpaid, and recoverable revenue"
            />
            <div style={styles.caption}>
              Financial truth across paid, denied, underpaid, and recoverable claims.
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Beyond-Truth Is</h2>

          <p style={styles.p}>
            Beyond-Truth is not generic reporting and not black-box AI. It is a
            deterministic, auditable financial truth layer that evaluates claims
            and remittance history at service-line precision.
          </p>

          <p style={styles.p}>
            It is designed to expose denials, underpayments, partial payments,
            and transaction-level leakage that standard reporting often misses
            or treats as uneconomical to pursue.
          </p>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Beyond-Truth Does</h2>

          <ul style={styles.bullets}>
            <li>Audits paid and denied claims at the service-line level</li>
            <li>Identifies underpayments, denials, and financial leakage</li>
            <li>Distinguishes true recoverable dollars from noise</li>
            <li>Supports corrected claim generation and appeal workflows</li>
            <li>Makes smaller claims economically viable to pursue</li>
            <li>Provides leadership with auditable, explainable outcomes</li>
          </ul>
        </div>
      </section>

      {/* WHAT IT EXPOSES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What It Exposes</h2>

          <ul style={styles.bullets}>
            <li>Silent underpayments hidden inside paid claims</li>
            <li>Service-line discrepancies masked by aggregate posting</li>
            <li>Payer-specific enforcement inconsistencies</li>
            <li>Modifier, bundling, and adjudication-related leakage</li>
            <li>Claims written off because labor economics failed</li>
            <li>Recovery opportunity that traditional workflows never reached</li>
          </ul>

          <p style={styles.p}>
            These findings are grounded in actual transaction outcomes and
            deterministic evaluation logic, not estimates or optimistic guesses.
          </p>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Why It Matters</h2>

          <p style={styles.p}>
            Most healthcare organizations know denials matter, but they still
            lack a clean way to see the broader truth across denied, partially
            paid, and silently underpaid claims. That leaves leadership making
            decisions without a complete picture of what was really lost.
          </p>

          <p style={styles.p}>
            Beyond-Truth replaces conjecture with auditable financial reality,
            so recovery strategy can be based on evidence, not assumptions.
          </p>
        </div>
      </section>

      {/* WHAT LEADERS RECEIVE */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Leaders Receive</h2>

          <ul style={styles.bullets}>
            <li>Quantified recovery opportunity by payer and service line</li>
            <li>Visibility into denied, underpaid, and partially paid claims</li>
            <li>Corrected claim and appeal workflow support</li>
            <li>Audit-ready documentation suitable for governance review</li>
            <li>Executive-level transparency into financial leakage</li>
            <li>A factual basis for recovery prioritization and action</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <div style={styles.footer}>
        <div style={styles.container}>
          © {new Date().getFullYear()} Beyond Health Systems. All rights reserved.
        </div>
      </div>
    </main>
  );
}
