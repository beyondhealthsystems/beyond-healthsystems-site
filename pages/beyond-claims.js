// /pages/beyond-claims.js
import Nav from "../components/Nav";

export default function BeyondClaims() {
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
          <h1 style={styles.h1}>Beyond-Claims</h1>

          <p style={styles.lead}>
            Beyond-Claims is the execution layer of the Beyond platform — focused
            on identifying, correcting, and recovering revenue lost to silent
            underpayments and misadjudicated claims.
          </p>

          <p style={styles.lead}>
            It operates continuously, economically, and deterministically —
            working the claims traditional RCM workflows cannot.
          </p>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/claims-engine.png"
              alt="Deterministic claims recovery engine processing paid and denied claims"
            />
            <div style={styles.caption}>
              Service-line level recovery across paid and denied claims.
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Beyond-Claims Does</h2>

          <p style={styles.p}>
            Beyond-Claims focuses on claims that are typically ignored once
            payment posts — not because they are correct, but because the cost of
            manual review outweighs the expected return.
          </p>

          <ul style={styles.bullets}>
            <li>Audits paid and denied claims continuously</li>
            <li>Identifies recoverable discrepancies at the line-item level</li>
            <li>Builds correction-ready claim data</li>
            <li>Tracks outcomes through verified recovery</li>
          </ul>
        </div>
      </section>

      {/* WHY IT EXISTS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Why Traditional Recovery Falls Short</h2>

          <p style={styles.p}>
            Most RCM operations are optimized for denial management — not for
            verifying whether paid claims were adjudicated correctly.
          </p>

          <p style={styles.p}>
            Once a claim posts as “paid,” it is typically closed. Partial
            underpayments, modifier issues, and contract drift persist quietly,
            compounding over time.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>How Beyond-Claims Works</h2>

          <ul style={styles.bullets}>
            <li>Evaluates adjudication outcomes deterministically</li>
            <li>Applies repeatable, auditable recovery logic</li>
            <li>Prioritizes claims where recovery is economically viable</li>
            <li>Eliminates dependence on manual follow-up</li>
          </ul>

          <p style={styles.p}>
            This allows recovery workflows to scale — including for smaller
            claims that were previously written off by default.
          </p>
        </div>
      </section>

      {/* OUTCOMES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Clients See</h2>

          <ul style={styles.bullets}>
            <li>Recovered dollars tied to verified payment</li>
            <li>Visibility into payer behavior and enforcement gaps</li>
            <li>Reduction in silent write-offs</li>
            <li>Recovery without added staffing or overhead</li>
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
