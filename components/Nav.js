export default function Nav() {
  const styles = {
    navWrap: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
    },
    container: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "0 40px",
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
      color: "#0f172a",
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
  };

  return (
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
  );
}
