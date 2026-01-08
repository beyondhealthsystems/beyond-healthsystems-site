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

    /* CONTENT */
    section: {
      padding: "84px 0 64px",
    },
    h1: {
      fontFamily: "Georgia, serif",
      fontSize: 46,
      lineHeight: 1.15,
      marginBottom: 24,
    },
    p: {
      fontSize: 17,
      lineHeight: 1.65,
      maxWidth: 920,
      marginTop: 22,
    },

    imageCard: {
      marginTop: 30,
      borderRadius: 18,
      overflow: "hidden",
      background: "#ffffff",
      boxShadow: "0 22px 60px rgba(15, 23, 42, 0.18)",
    },
    img: {
      width: "100%",
      display: "block",
    },

    /* FOOTER */
    footer: {
      padding: "28px 0 40px",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
      fontSize: 13,
      color: "#475569",
      marginTop: 80,
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
              <a style={styles.a} href="/beyond-truth">Beyond-Truth</a>
              <a style={styles.a} href="/pricing">Pricing</a>
              <a style={styles.a} href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.h1}>Pricing Philosophy</h1>

          {/* IMAGE */}
          <div style={styles.imageCard}>
            <img
              src="/images/pricing-net-collections.png"
              alt="Comparison of net hospital collections using traditional RCM versus Beyond-Claims and Beyond-Truth"
              style={styles.img}
            />
          </div>

          {/* TEXT BELOW IMAGE */}
          <p style={styles.p}>
            With current RCM processes, hospitals often net <b>$740M–$780M</b> on{" "}
            <b>$1B</b> in claims after short pays, fees, and abandonment. With{" "}
            <b>Beyond-Claims</b> and <b>Beyond-Truth</b>, conservative modeling
            supports approximately <b>$930M</b> in collections before fees.
            After a <b>5% fee applied only to incremental recovery</b>, hospitals
            retain approximately <b>$922.5M</b> —{" "}
            <b>over $140M more</b> on the same <b>$1B</b> in claims.
          </p>
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
