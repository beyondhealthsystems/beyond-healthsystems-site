// /pages/platform.js

export default function Platform() {
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
      gap: 16,
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
      flexWrap: "wrap",
      justifyContent: "flex-end",
      fontSize: 14,
    },
    a: {
      color: "#1e3a8a",
      textDecoration: "none",
      fontWeight: 600,
    },

    hero: {
      padding: "70px 0 18px",
    },
    h1: {
      fontFamily: "Georgia, serif",
      fontSize: 48,
      lineHeight: 1.12,
      margin: "0 0 14px 0",
      letterSpacing: "-0.02em",
    },
    lead: {
      fontSize: 18,
      lineHeight: 1.65,
      maxWidth: 920,
      margin: "0 0 8px 0",
    },

    section: {
      padding: "26px 0",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
    },
    h2: {
      fontSize: 24,
      margin: "0 0 10px 0",
      letterSpacing: "-0.01em",
    },
    p: {
      fontSize: 16,
      lineHeight: 1.7,
      margin: "0 0 12px 0",
      maxWidth: 940,
    },
    bullets: {
      margin: "10px 0 0 18px",
      padding: 0,
      lineHeight: 1.75,
      maxWidth: 940,
    },

    callout: {
      marginTop: 16,
      border: "1px solid rgba(15, 23, 42, 0.10)",
      borderRadius: 14,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      padding: "16px 16px",
      maxWidth: 940,
    },
    calloutText: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      color: "#0f172a",
    },

    ctaRow: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      marginTop: 14,
    },
    buttonPrimary: {
      background: "#16a34a",
      color: "#ffffff",
      border: "none",
      borderRadius: 10,
      padding: "10px 14px",
      fontWeight: 700,
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-block",
    },
    buttonSecondary: {
      background: "transparent",
      color: "#1e3a8a",
      border: "1px solid rgba(30, 58, 138, 0.35)",
      borderRadius: 10,
      padding: "10px 14px",
      fontWeight: 700,
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-block",
    },

    footer: {
      padding: "26px 0 40px",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
      color: "#475569",
      fontSize: 13,
      marginTop: 10,
    },
  };

  return (
    <main style={styles.page}>
      {/* NAV */}
      <div style={styles.navWrap}>
        <div style={styles.container}>
          <div style={styles.nav}>
            <div style={styles.navLeft}>Beyond Health Systems</div>

            <div style={styles.navLinks}>
              <a style={styles.a} href="/">
                Home
              </a>
              <a style={styles.a} href="/platform">
                Platform
              </a>
              <a style={styles.a} href="/beyond-claims">
                Beyond-Claims
              </a>
              <a style={styles.a} href="/beyond-truth">
                Beyond-Truth
              </a>
              <a style={styles.a} href="/pricing">
                Pricing
              </a>
              <a style={styles.a} href="/contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.h1}>The Platform</h1>
          <p style={styles.lead}>
            A deterministic system for identifying, correcting, and recovering
            misadjudicated claims.
          </p>
          <p style={styles.lead}>
            Beyond continuously audits paid and denied claims at the service-line
            level, applies deterministic adjudication logic, and enables recovery
            workflows that were previously uneconomical or invisible.
          </p>

          <div style={styles.ctaRow}>
            <a style={styles.buttonPrimary} href="mailto:steven@beyond-ai.com">
              Request a 15-min walk-through
            </a>
            <a style={styles.buttonSecondary} href="/">
              Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IT AUDITS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What the platform audits</h2>
          <p style={styles.p}>
            The platform evaluates <b>both denied and paid claims</b>, without
            relying on sampling or thresholds.
          </p>
          <p style={styles.p}>Specifically, it audits:</p>
          <ul style={styles.bullets}>
            <li>Fully denied claims</li>
            <li>Partially paid claims</li>
            <li>Paid claims with line-item discrepancies</li>
            <li>Claims closed without secondary review</li>
            <li>Claims impacted by contract enforcement drift over time</li>
          </ul>
          <p style={styles.p}>
            This approach surfaces recovery opportunities that traditional RCM
            workflows do not see — because those workflows stop once payment
            posts.
          </p>
        </div>
      </section>

      {/* WHY ERRORS PERSIST */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Why errors persist after payment</h2>
          <p style={styles.p}>
            Most revenue leakage does not occur because teams fail to work
            denials. It occurs because <b>paid claims are assumed to be correct</b>.
          </p>
          <p style={styles.p}>Common causes include:</p>
          <ul style={styles.bullets}>
            <li>Contract terms applied inconsistently over time</li>
            <li>Bundling and unbundling edits misfired at the line level</li>
            <li>Modifiers ignored or incorrectly evaluated</li>
            <li>Policy changes implemented unevenly across payers</li>
            <li>Tolerance thresholds that auto-close underpayments</li>
          </ul>
          <p style={styles.p}>
            Once a claim is posted as “paid,” these issues are rarely revisited —
            not because teams don’t care, but because the economics don’t support
            manual review.
          </p>
        </div>
      </section>

      {/* HOW IT EVALUATES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>How Beyond evaluates claims</h2>
          <p style={styles.p}>
            Beyond uses <b>deterministic, rule-based logic</b> — not probabilistic
            AI — to evaluate claim correctness.
          </p>
          <p style={styles.p}>Each claim is processed:</p>
          <ul style={styles.bullets}>
            <li>Line by line</li>
            <li>Against known contract expectations</li>
            <li>Using repeatable, auditable decision rules</li>
            <li>With full traceability back to source data</li>
          </ul>
          <p style={styles.p}>
            This ensures outcomes are explainable, defensible, and suitable for
            financial governance. There are no black boxes, scoring models, or
            opaque confidence thresholds.
          </p>
        </div>
      </section>

      {/* AFTER IDENTIFICATION */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What happens after discrepancies are identified</h2>
          <p style={styles.p}>
            Once a recoverable discrepancy is confirmed, the platform supports:
          </p>
          <ul style={styles.bullets}>
            <li>Creation of correction-ready claim data</li>
            <li>Resubmission or follow-up workflows</li>
            <li>Tracking of claim outcomes through payment</li>
            <li>Verification of dollars actually recovered</li>
          </ul>
          <p style={styles.p}>
            This closes the loop — moving from identification to verified
            financial impact.
          </p>
        </div>
      </section>

      {/* WHAT CLIENTS RECEIVE */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What clients receive</h2>
          <p style={styles.p}>
            Clients do not receive “insights” alone. They receive{" "}
            <b>measurable, governed outcomes</b>.
          </p>
          <p style={styles.p}>Platform outputs include:</p>
          <ul style={styles.bullets}>
            <li>Audit visibility across paid and denied claims</li>
            <li>Recovery tracking by payer, contract, and service line</li>
            <li>Confirmed recovered revenue metrics</li>
            <li>Transparency suitable for executive and board review</li>
          </ul>
          <p style={styles.p}>
            The result is not just recovery — but confidence in what is being
            enforced, what is being missed, and why.
          </p>
        </div>
      </section>

      {/* SCALE */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Designed for scale and economics</h2>
          <p style={styles.p}>
            The platform is built to make recovery <b>economically viable at scale</b>,
            including small claims, partial payments, and high-volume service lines.
          </p>
          <p style={styles.p}>
            By removing manual bottlenecks and replacing them with deterministic
            automation, recovery becomes repeatable — not episodic.
          </p>

          <div style={styles.callout}>
            <p style={styles.calloutText}>
              <b>Summary:</b> The platform exists for one reason — to ensure that{" "}
              <b>paid</b> does not automatically mean <b>correct</b>.
            </p>
          </div>

          <div style={styles.ctaRow}>
            <a style={styles.buttonPrimary} href="mailto:steven@beyond-ai.com">
              Request a 15-min walk-through
            </a>
            <a style={styles.buttonSecondary} href="/">
              Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          © {new Date().getFullYear()} Beyond Health Systems. All rights reserved.
        </div>
      </footer>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 720px) {
          h1 { font-size: 38px !important; }
        }
        @media (max-width: 520px) {
          h1 { font-size: 34px !important; }
        }
      `}</style>
    </main>
  );
}
