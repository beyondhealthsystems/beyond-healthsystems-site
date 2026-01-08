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

    /* HERO — background added safely */
    hero: {
      padding: "84px 0 40px",
      backgroundImage: "url('/images/hero-background-light.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    h1: {
      fontFamily: "Georgia, serif",
      fontSize: 52,
      lineHeight: 1.12,
      margin: "0 0 18px 0",
      letterSpacing: "-0.02em",
    },
    lead: {
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: 820,
      margin: "0 0 14px 0",
    },
    sub: {
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: 860,
      margin: 0,
    },

    section: {
      padding: "38px 0",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
    },
    sectionTitle: {
      fontSize: 28,
      margin: "0 0 10px 0",
      letterSpacing: "-0.01em",
    },
    p: {
      fontSize: 16,
      lineHeight: 1.65,
      margin: "0 0 12px 0",
      maxWidth: 920,
    },

    mediaCard: {
      border: "1px solid rgba(15, 23, 42, 0.10)",
      borderRadius: 14,
      overflow: "hidden",
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
    },
    img: {
      display: "block",
      width: "100%",
      height: "auto",
    },
    imgCaption: {
      padding: "12px 14px",
      fontSize: 14,
      lineHeight: 1.5,
      color: "#334155",
    },

    grid2: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 18,
      marginTop: 14,
    },

    bullets: {
      margin: "10px 0 0 18px",
      padding: 0,
      lineHeight: 1.7,
      maxWidth: 920,
    },

    footer: {
      padding: "26px 0 40px",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
      color: "#475569",
      fontSize: 13,
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
              <a style={styles.a} href="#platform">Platform</a>
              <a style={styles.a} href="#beyond-claims">Beyond-Claims</a>
              <a style={styles.a} href="#beyond-truth">Beyond-Truth</a>
              <a style={styles.a} href="#pricing">Pricing</a>
              <a style={styles.a} href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.h1}>
            A Real Claims Recovery Solution — With Zero Financial Risk
          </h1>
          <p style={styles.lead}>
            Healthcare leaders: the era of payers quietly keeping your earned
            dollars is ending.
          </p>
          <p style={styles.sub}>
            Beyond-Claims audits paid and denied claims line-by-line and
            recovers revenue previously left behind.
          </p>

          <div style={{ marginTop: 22 }}>
            <div style={styles.mediaCard}>
              <img style={styles.img} src="/images/boardroom-revenue.png" />
              <div style={styles.imgCaption}>
                Leadership alignment through recovered revenue.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>The Platform</h2>
          <div style={styles.mediaCard}>
            <img style={styles.img} src="/images/audit-dashboard.jpg" />
            <div style={styles.imgCaption}>
              Audit visibility across paid, denied, and recovered claims.
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND-CLAIMS */}
      <section id="beyond-claims" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Beyond-Claims</h2>
          <div style={styles.mediaCard}>
            <img style={styles.img} src="/images/claims-engine.png" />
            <div style={styles.imgCaption}>
              Deterministic service-line recovery engine.
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND-TRUTH */}
      <section id="beyond-truth" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Beyond-Truth</h2>
          <div style={styles.mediaCard}>
            <img style={styles.img} src="/images/clinical-training.jpg" />
            <div style={styles.imgCaption}>
              Recovered revenue funds staffing and care.
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Pricing</h2>
          <p style={styles.p}>
            No recovery. No cost. We only get paid when you collect.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          <p style={styles.p}>
            <b>steven@beyond-ai.com</b> | <b>847-791-7838</b>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <div style={styles.footer}>
        <div style={styles.container}>
          © {new Date().getFullYear()} Beyond Health Systems
        </div>
      </div>
    </main>
  );
}
