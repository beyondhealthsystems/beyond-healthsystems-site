// /pages/pricing.js
import Nav from "../components/Nav";

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

    /* HERO with background */
    hero: {
      padding: "84px 0 42px",
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

    section: {
      padding: "46px 0",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
    },
    p: {
      fontSize: 16,
      lineHeight: 1.65,
      marginBottom: 14,
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
        <Nav />

     
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.h1}>Pricing</h1>
        </div>
      </section>

      {/* IMAGE + ECONOMICS + PRICING */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.mediaCard}>
            <img
              src="/images/pricing-future-net-comparison.png"
              alt="Future-state comparison of net hospital collections using traditional RCM versus Beyond-Claims and Beyond-Truth"
              style={styles.img}
            />
          </div>

          <p style={{ ...styles.p, marginTop: 18 }}>
            With current RCM processes, hospitals often net <b>$740M–$780M</b> on{" "}
            <b>$1B</b> in claims after short pays, fees, and abandonment. With{" "}
            <b>Beyond-Claims</b> and <b>Beyond-Truth</b>, conservative modeling
            supports approximately <b>$930M</b> in collections before fees.
            After a <b>5% fee applied only to incremental recovery</b>, hospitals
            retain approximately <b>$922.5M</b> —{" "}
            <b>over $140M more</b> on the same <b>$1B</b> in claims.
          </p>

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
