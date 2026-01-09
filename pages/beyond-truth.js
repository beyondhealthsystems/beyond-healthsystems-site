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

    /* HERO with background */
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
            Beyond-Truth is the audit-first proof layer of the Beyond platform —
            designed to quantify recovery opportunity before workflows change
            and before decisions are made.
          </p>

          <p style={styles.lead}>
            It answers one critical question with precision:
            <br />
            <strong>
              What revenue are we actually leaving behind — and why?
            </strong>
          </p>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/audit-dashboard.jpg"
              alt="Audit analytics showing paid, denied, and recoverable revenue"
            />
            <div style={styles.caption}>
              Executive audit visibility across paid, denied, and recoverable
              claims.
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Beyond-Truth Is</h2>

          <p style={styles.p}>
            Beyond-Truth provides a deterministic audit of historical claims data,
            revealing recovery opportunities that do not surface in standard RCM
            reporting or dashboards.
          </p>

          <p style={styles.p}>
            It does not require operational change, resubmission activity, or
            system replacement. It exists to establish factual baseline truth.
          </p>
        </div>
      </section>

      {/* WHAT IT EXPOSES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What the Audit Exposes</h2>

          <ul style={styles.bullets}>
            <li>Silent underpayments within “paid” claims</li>
            <li>Service-line discrepancies masked by aggregate posting</li>
            <li>Payer-specific enforcement inconsistencies</li>
            <li>Contract drift over time</li>
            <li>Claims never revisited due to economic constraints</li>
          </ul>

          <p style={styles.p}>
            These findings are grounded in adjudication outcomes — not estimates,
            projections, or sampling.
          </p>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Why This Layer Matters</h2>

          <p style={styles.p}>
            Without an audit-first view, organizations debate recovery strategy
            without knowing the true size or nature of the opportunity.
          </p>

          <p style={styles.p}>
            Beyond-Truth removes speculation, enabling leaders to evaluate
            recovery decisions using evidence rather than assumptions.
          </p>
        </div>
      </section>

      {/* OUTPUT */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Leaders Receive</h2>

          <ul style={styles.bullets}>
            <li>Quantified recovery opportunity by payer and service line</li>
            <li>Clear differentiation between denied and paid claim leakage</li>
            <li>Audit-ready documentation suitable for governance review</li>
            <li>A factual foundation for recovery prioritization</li>
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
