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
      maxWidth: 880,
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
      maxWidth: 880,
    },
    contactCard: {
      marginTop: 20,
      padding: "24px",
      border: "1px solid rgba(15, 23, 42, 0.10)",
      borderRadius: 16,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      maxWidth: 760,
    },
    contactRow: {
      marginBottom: 14,
      fontSize: 17,
      lineHeight: 1.6,
    },
    label: {
      fontWeight: 700,
      color: "#0f172a",
      marginRight: 8,
    },
    link: {
      color: "#1e3a8a",
      textDecoration: "none",
      fontWeight: 600,
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
            Contact Beyond Health Systems to discuss Beyond-Truth,
            Beyond-Care, pricing, pilots, demos, and deployment options.
          </p>

          <p style={styles.lead}>
            We are focused on helping healthcare organizations recover earned
            revenue, improve visibility, and gain stronger operational and care
            intelligence from the data they already generate.
          </p>

          <div style={styles.contactCard}>
            <div style={styles.contactRow}>
              <span style={styles.label}>Email:</span>
              <a
                style={styles.link}
                href="mailto:steven@healthsystems.com"
              >
                steven@healthsystems.com
              </a>
            </div>

            <div style={styles.contactRow}>
              <span style={styles.label}>Website:</span>
              <a
                style={styles.link}
                href="https://www.beyond-healthsystems.com"
                target="_blank"
                rel="noreferrer"
              >
                www.beyond-healthsystems.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY REACH OUT */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What We Can Discuss</h2>

          <p style={styles.p}>
            Reach out to discuss:
          </p>

          <p style={styles.p}>
            Beyond-Truth for deterministic denial correction, financial truth,
            underpayment visibility, corrected claims, and recovery
            intelligence.
          </p>

          <p style={styles.p}>
            Beyond-Care for care-path visibility, provider patterns, diagnosis
            and procedure insight, medication-linked history, patient
            fragmentation, and executive-level healthcare intelligence.
          </p>

          <p style={styles.p}>
            We can also discuss pilots, commercial structure, enterprise
            opportunities, and deployment options.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <div style={styles.footer}>
        <div style={styles.container}>
          © {new Date().getFullYear()} Beyond Health Systems. All rights
          reserved.
        </div>
      </div>
    </main>
  );
}    },
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
