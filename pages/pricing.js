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
      padding: "84px 0 42px",
    },
    h1: {
      fontFamily: "Georgia, serif",
      fontSize: 48,
      lineHeight: 1.15,
      marginBottom: 18,
      letterSpacing: "-0.02em",
    },

    section: {
      padding: "46px 0",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
    },
    h2: {
      fontSize: 28,
      marginBottom: 14,
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

    mediaCard: {
      marginTop: 18,
      border: "1px solid rgba(15, 23, 42, 0.10)",
      borderRadius: 14,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      overflow: "hidden",
    },
    img: {
      display: "block",
      width: "100%",
      height: "auto",
    },

    priceCard: {
      marginTop: 24,
      border: "1px solid rgba(15, 23, 42, 0.10)",
      borderRadius: 14,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      padding: "20px 20px",
      maxWidth: 940,
    },
    priceBig: {
      fontSize: 46,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginBottom: 6,
    },
    priceSub: {
      fontSize: 16,
      lineHeight: 1.6,
      marginBottom: 14,
      maxWidth: 720,
    },
    badgeRow: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
    },
    badge: {
      fontSize: 13,
      padding: "6px 12px",
      borderRadius: 999,
      border: "1px solid rgba(15, 23, 42, 0.12)",
      fontWeight: 700,
      background: "#ffffff",
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
        </div>
      </section>

      {/* IMAGE */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.mediaCard}>
            <img
              src="/images/pricing-future-net-comparison.png"
              alt="Future-state comparison of net hospital collections using traditional RCM versus Beyond-Claims and Beyond-Truth"
              style={styles.img}
            />
          </div>

          {/* PRICING BLOCK — MOVED UNDER IMAGE */}
          <div style={styles.priceCard}>
            <p style={styles.p}>
              <b>Pricing aligned to outcomes, auditability, and non-interference.</b>
            </p>

            <p style={styles.p}>
              We only participate when revenue is actually collected — and the
              fee is fully inclusive.
            </p>

            <div style={styles.priceBig}>5%</div>

            <p style={styles.priceSub}>
              of incremental dollars actually collected through Beyond-driven
              recovery activity. <b>No recovery = no fee.</b>
            </p>

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

      {/* FOOTER */}
      <div style={styles.footer}>
        <div style={styles.container}>
          © {new Date().getFullYear()} Beyond Health Systems. All rights reserved.
        </div>
      </div>
    </main>
  );
}
