// /pages/contact.js
import Nav from "../components/Nav";

export default function Contact() {
  const styles = {
    page: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
      color: "#0f172a",
      backgroundColor: "#ffffff",
      minHeight: "100vh",
    },
    container: {
      maxWidth: 1000,
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

    /* HERO with background */
    hero: {
      padding: "88px 0 48px",
      backgroundImage: "url('/images/hero-background-light.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    h1: {
      fontFamily: "Georgia, serif",
      fontSize: 46,
      letterSpacing: "-0.02em",
      marginBottom: 18,
    },
    lead: {
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: 760,
      marginBottom: 16,
    },

    section: {
      padding: "46px 0",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
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
      width: "100%",
      display: "block",
    },

    contactBlock: {
      marginTop: 28,
      fontSize: 17,
      lineHeight: 1.7,
    },

    ctaRow: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      marginTop: 20,
    },
    buttonPrimary: {
      background: "#16a34a",
      color: "#ffffff",
      borderRadius: 10,
      padding: "10px 16px",
      fontWeight: 700,
      textDecoration: "none",
      display: "inline-block",
    },
    buttonSecondary: {
      background: "transparent",
      color: "#1e3a8a",
      border: "1px solid rgba(30, 58, 138, 0.35)",
      borderRadius: 10,
      padding: "10px 16px",
      fontWeight: 700,
      textDecoration: "none",
      display: "inline-block",
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
          <h1 style={styles.h1}>Contact</h1>

          <p style={styles.lead}>
            Beyond-Claims works with healthcare leadership teams evaluating recovery
            economics, auditability, and long-term financial integrity.
          </p>

          <p style={styles.lead}>
            If you’re exploring whether revenue is being quietly left behind,
            we’re happy to walk through it — directly and transparently.
          </p>
        </div>
      </section>

      {/* IMAGE + CONTACT */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.mediaCard}>
            <img
              src="/images/contact-office-waiting.png"
              alt="Beyond Health Systems office environment awaiting executive calls"
              style={styles.img}
            />
          </div>

          <div style={styles.contactBlock}>
            <p>
              <b>Email:</b>{" "}
<a href="mailto:steven@beyond-claims.com">steven@beyond-claims.com</a>,{" "}
<a href="mailto:support@beyond-claims.com">tbrne@beyond-claims.com</a>
<br />
              
            </p>

            <p>
              Initial conversations are brief, technical, and exploratory —
              focused on economics, not sales.
            </p>
          </div>

          <div style={styles.ctaRow}>
            <a
              style={styles.buttonPrimary}
              href="mailto:steven@beyond-claims.com?"

            >
              Request a 15-minute discussion
            </a>
            <a style={styles.buttonSecondary} href="/platform">
              View the platform
            </a>
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
