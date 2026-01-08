// /pages/pricing.js

export default function Pricing() {
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

    /* HERO */
    hero: {
      padding: "84px 0 46px",
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
      maxWidth: 920,
      marginBottom: 14,
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
      maxWidth: 940,
    },
    bullets: {
      marginLeft: 18,
      lineHeight: 1.75,
      maxWidth: 940,
    },

    /* PRICE CARD */
    priceCard: {
      marginTop: 18,
      border: "1px solid rgba(15, 23, 42, 0.10)",
      borderRadius: 14,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      padding: "18px 18px",
      maxWidth: 940,
    },
    priceTop: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 18,
      flexWrap: "wrap",
      marginBottom: 10,
    },
    priceBig: {
      fontSize: 42,
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    priceSub: {
      fontSize: 14,
      color: "#334155",
      maxWidth: 520,
      lineHeight: 1.5,
    },
    badgeRow: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 8,
    },
    badge: {
      fontSize: 12,
      padding: "6px 10px",
      borderRadius: 999,
      border: "1px solid rgba(15, 23, 42, 0.12)",
      background: "#ffffff",
      fontWeight: 700,
    },

    /* IMAGE */
    imageCard: {
      marginTop: 26,
      borderRadius: 18,
      overflow: "hidden",
      background: "#ffffff",
      boxShadow: "0 22px 60px rgba(15, 23, 42, 0.18)",
      maxWidth: 940,
    },
    img: {
      width: "100%",
      display: "block",
    },

    /* CALLOUT */
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
    },

    /* CTA */
    ctaRow: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      marginTop: 16,
    },
    buttonPrimary: {
      background: "#16a34a",
      color: "#ffffff",
      borderRadius: 10,
      padding: "10px 14px",
      fontWeight: 700,
      textDecoration: "none",
    },
    buttonSecondary: {
      background: "transparent",
      color: "#1e3a8a",
      border: "1px solid rgba(30, 58, 138, 0.35)",
      borderRadius: 10,
      padding: "10px 14px",
      fontWeight: 700,
      textDecoration: "none",
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
        <div style={styles.container}>
          <h1 style={styles.h1}>Pricing</h1>

          <p style={styles.lead}>
            Pricing aligned to outcomes, auditability, and non-interference.
          </p>

          <p style={styles.lead}>
            We only participate when revenue is actually collected — and the fee
            is fully inclusive.
          </p>

          <div style={styles.priceCard}>
            <div style={styles.priceTop}>
              <div style={styles.priceBig}>5%</div>
              <div style={styles.priceSub}>
                of incremental dollars actually collected through Beyond-driven
                recovery activity. No recovery = no fee.
              </div>
            </div>

            <div style={styles.badgeRow}>
              <span style={styles.badge}>All-inclusive</span>
              <span style={styles.badge}>Unlimited usage</span>
              <span style={styles.badge}>Unlimited resubmissions</span>
              <span style={styles.badge}>Updates included</span>
              <span style={styles.badge}>Auditable outputs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMIC COMPARISON */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What This Looks Like in Practice</h2>

          <p style={styles.p}>
            With current RCM processes, hospitals often net <b>$740M–$780M</b> on{" "}
            <b>$1B</b> in claims after short pays, fees, and abandonment. With{" "}
            <b>Beyond-Claims</b> and <b>Beyond-Truth</b>, conservative modeling
            supports approximately <b>$930M</b> in collections before fees.
            After a <b>5% fee applied only to incremental recovery</b>, hospitals
            retain approximately <b>$922.5M</b> —{" "}
            <b>over $140M more</b> on the same <b>$1B</b> in claims.
          </p>

          <div style={styles.imageCard}>
            <img
              src="/images/pricing-future-net-comparison.png"
              alt="Future-state comparison of net hospital collections using traditional RCM versus Beyond-Claims and Beyond-Truth"
              style={styles.img}
            />
          </div>
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
