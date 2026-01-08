// /pages/index.js

export default function Home() {
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
      fontSize: 16,
      letterSpacing: "-0.02em",
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
      padding: "100px 0 72px",
      backgroundImage: "url('/images/hero-background-light.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    heroInner: {
      maxWidth: 820,
    },

    h1: {
      fontFamily: "Georgia, serif",
      fontSize: 52,
      lineHeight: 1.12,
      marginBottom: 18,
      letterSpacing: "-0.02em",
    },

    lead: {
      fontSize: 18,
      lineHeight: 1.6,
      marginBottom: 14,
    },

    sub: {
      fontSize: 18,
      lineHeight: 1.6,
    },

    section: {
      padding: "48px 0",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
    },

    sectionTitle: {
      fontSize: 28,
      marginBottom: 10,
    },

    p: {
      fontSize: 16,
      lineHeight: 1.65,
      maxWidth: 900,
      marginBottom: 12,
    },

    footer: {
      padding: "32px 0",
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
              <a style={styles.a} href="/platform">Platform</a>
              <a style={styles.a} href="/beyond-claims">Beyond-Claims</a>
              <a style={styles.a} href="/pricing">Pricing</a>
              <a style={styles.a} href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroInner}>
            <h1 style={styles.h1}>
              A Real Claims Recovery Solution — With Zero Financial Risk
            </h1>

            <p style={styles.lead}>
              The healthcare revenue cycle was built to post money —
              not to verify correctness. That assumption quietly costs
              hospitals millions every year.
            </p>

            <p style={styles.sub}>
              Beyond-Claims continuously audits paid and denied claims,
              corrects misadjudication at the service-line level, and
              recovers revenue previously left behind — with payment
              only when you actually collect.
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>The Platform</h2>
          <p style={styles.p}>
            Deterministic audit technology that identifies recoverable
            revenue across paid and denied claims — automatically,
            continuously, and at scale.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Pricing</h2>
          <p style={styles.p}>
            No setup fees. No minimums. No recovery — no cost.
            We only participate when revenue is actually collected.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <p style={styles.p}>
            <b>steven@beyond-ai.com</b> &nbsp;|&nbsp; <b>847-791-7838</b>
          </p>
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
          h1 { font-size: 40px !important; }
        }
        @media (max-width: 520px) {
          h1 { font-size: 34px !important; }
        }
      `}</style>
    </main>
  );
}
