// /pages/platform.js
import Nav from "../components/Nav";

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

    /* NAV */
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

    /* HERO WITH BACKGROUND */
    hero: {
      padding: "84px 0 56px",
      backgroundImage: "url('/images/hero-background-light.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
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

    /* SECTIONS */
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

    /* MEDIA */
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

    /* FOOTER */
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
          <h1 style={styles.h1}>
            One Platform for Financial Truth and Care Intelligence
          </h1>

          <p style={styles.lead}>
            Beyond Health Systems turns ordinary 837/835 history and related
            healthcare data into two forms of executive visibility:{" "}
            <b>Beyond-Truth</b> for deterministic financial recovery and{" "}
            <b>Beyond-Care</b> for care-path, provider, diagnosis, procedure,
            medication, and patient intelligence.
          </p>

          <p style={styles.lead}>
            Instead of separating revenue insight from operational and care
            insight, the platform connects both so leaders can understand what
            happened financially, what happened clinically and operationally,
            and where action should occur next.
          </p>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/platform-process.png"
              alt="Beyond platform audit, intelligence, and action process"
            />
            <div style={styles.caption}>
              Unified visibility across financial recovery and care intelligence.
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE PLATFORM SEES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What the Platform Sees</h2>

          <p style={styles.p}>
            The platform is designed to surface both financial and care-related
            signal from the same underlying data environment, creating a more
            complete picture of what is actually happening across the business.
          </p>

          <ul style={styles.bullets}>
            <li>Denied claims</li>
            <li>Paid claims</li>
            <li>Partial payments and underpayments</li>
            <li>Service-line discrepancies</li>
            <li>Diagnoses and CPT/procedure activity</li>
            <li>Medication-linked healthcare history</li>
            <li>Provider patterns and variation</li>
            <li>Patient journeys and care-path sequencing</li>
            <li>Operational and financial outcomes</li>
          </ul>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Why This Matters</h2>

          <p style={styles.p}>
            Most healthcare organizations still operate with fragmented insight.
            Revenue teams see denials and payments. Clinical and operational
            teams see separate systems and partial workflows. Leadership often
            has to make decisions without a unified view of transaction
            correctness, care sequencing, provider behavior, and downstream
            impact.
          </p>

          <p style={styles.p}>
            Beyond Health Systems helps close that gap by bringing together
            financial truth and care intelligence in one governed platform.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>How the Platform Works</h2>

          <p style={styles.p}>
            The platform uses deterministic, auditable logic to evaluate
            financial activity and transform healthcare history into usable
            intelligence. It is built to be explainable, governed, and
            operationally useful — not dependent on black-box assumptions.
          </p>

          <ul style={styles.bullets}>
            <li>Service-line level financial evaluation</li>
            <li>Repeatable rule-based logic</li>
            <li>Full traceability back to source data</li>
            <li>Auditable outputs for review and action</li>
            <li>Connected visibility across financial and care patterns</li>
            <li>No black-box scoring as the source of truth</li>
          </ul>
        </div>
      </section>

      {/* TWO PLATFORM ENGINES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Two Core Intelligence Engines</h2>

          <p style={styles.p}>
            <b>Beyond-Truth</b> focuses on financial recovery, denial
            correction, underpayment visibility, and transaction-level truth.
          </p>

          <p style={styles.p}>
            <b>Beyond-Care</b> focuses on care-path sequencing, provider
            patterns, diagnosis and procedure relationships, medication context,
            and patient-level intelligence drawn from real healthcare activity.
          </p>

          <p style={styles.p}>
            Together, they help leadership see both the financial reality and
            the operational care reality from the same platform.
          </p>
        </div>
      </section>

      {/* WHAT CLIENTS RECEIVE */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Clients Receive</h2>

          <p style={styles.p}>
            The platform delivers governed outputs leaders can use — not just
            abstract analytics.
          </p>

          <ul style={styles.bullets}>
            <li>Verified recovery opportunity by payer and service line</li>
            <li>Visibility into underpayments, denials, and missed revenue</li>
            <li>Care-path and patient journey insight</li>
            <li>Provider pattern and variation visibility</li>
            <li>Diagnosis, procedure, and medication intelligence</li>
            <li>Executive-ready, auditable transparency</li>
            <li>Board-level visibility into both financial and operational reality</li>
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
