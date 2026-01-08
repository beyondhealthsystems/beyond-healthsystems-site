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

    /* HERO — HARD FIX */
    hero: {
      backgroundImage: "url('/images/hero-background-light.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: 520,
      display: "flex",
      alignItems: "center",
    },
    heroOverlay: {
      width: "100%",
      background: "rgba(255,255,255,0.85)",
      padding: "84px 0 56px",
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
      {/* NAV */}
      <div style={styles.navWrap}>
        <div style={styles.container}>
          <div style={styles.nav}>
            <div style={styles.navLeft}>Beyond Health Systems</div>
            <div style={styles.navLinks}>
              <a style={styles.a} href="/">Home</a>
              <a style={styles.a} href="/platform">Platform</a>
              <a style={styles.a} href="/beyond-claims">Beyond-Claims</a>
              <a style={styles.a} href="/beyond-truth">Beyond-Truth</a>
              <a style={styles.a} href="/pricing">Pricing</a>
              <a style={styles.a} href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <div style={styles.container}>
            <h1 style={styles.h1}>
              A Deterministic Platform for Revenue Integrity
            </h1>

            <p style={styles.lead}>
              The Beyond platform continuously audits paid and denied claims at
              the service-line level, identifies misadjudication, and enables
              recovery workflows that were previously invisible or uneconomical.
            </p>

            <div style={styles.mediaCard}>
              <img
                style={styles.img}
                src="/images/platform-process.png"
                alt="Beyond platform audit, evaluation, and recovery process"
              />
              <div style={styles.caption}>
                Continuous audit → deterministic evaluation → verified recovery.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What the Platform Audits</h2>
          <p style={styles.p}>
            The platform evaluates both denied and paid claims without relying on
            sampling, thresholds, or assumptions once payment posts.
          </p>
          <ul style={styles.bullets}>
            <li>Fully denied claims</li>
            <li>Partially paid claims</li>
            <li>Paid claims with line-item discrepancies</li>
            <li>Claims auto-closed within tolerance thresholds</li>
            <li>Claims affected by contract enforcement drift</li>
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
