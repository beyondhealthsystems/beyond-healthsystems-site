// /pages/beyond-care.js

import Nav from "../components/Nav";

export default function BeyondCare() {
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
      <Nav />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.h1}>Beyond-Care</h1>

          <p style={styles.lead}>
            Beyond-Care is the care intelligence layer of the platform — built
            to turn claims, remittance history, diagnoses, procedures,
            medications, provider activity, and patient journeys into usable,
            executive-level insight.
          </p>

          <p style={styles.lead}>
            It helps answer a question most organizations still cannot answer
            clearly:
            <br />
            <strong>
              What is actually happening across care paths, providers, patients,
              and operational flow — and where should leadership act?
            </strong>
          </p>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/clinical-training.jpg"
              alt="Care intelligence across providers, patients, and clinical activity"
            />
            <div style={styles.caption}>
              Care intelligence built from real healthcare activity.
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Beyond-Care Is</h2>

          <p style={styles.p}>
            Beyond-Care is not generic analytics and not a disconnected
            reporting layer. It is a structured intelligence environment built
            to reveal how care is actually delivered across providers, patients,
            diagnoses, procedures, medications, and operational touchpoints.
          </p>

          <p style={styles.p}>
            It uses the same healthcare history organizations already generate,
            then turns that history into visibility leadership can use to better
            understand patterns, fragmentation, variation, and opportunity.
          </p>
        </div>
      </section>

      {/* WHAT IT REVEALS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Beyond-Care Reveals</h2>

          <ul style={styles.bullets}>
            <li>Real care-path sequencing across patients and services</li>
            <li>Provider patterns and variation</li>
            <li>Diagnosis and procedure relationships</li>
            <li>Medication visibility tied to healthcare activity</li>
            <li>Patient fragmentation across providers or service settings</li>
            <li>Operational trends affecting care delivery</li>
            <li>Financial patterns connected to clinical activity</li>
          </ul>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Why It Matters</h2>

          <p style={styles.p}>
            Most healthcare organizations have no shortage of data. The real
            problem is that claims, remits, diagnoses, procedures, medications,
            and patient/provider activity are usually viewed in fragments.
          </p>

          <p style={styles.p}>
            That makes it harder to understand where care is consistent, where
            it breaks down, where unnecessary variation exists, and where better
            operational decisions could improve both patient experience and
            organizational performance.
          </p>

          <p style={styles.p}>
            Beyond-Care helps leadership move from disconnected data to usable
            care intelligence.
          </p>
        </div>
      </section>

      {/* WHAT LEADERS CAN SEE */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Leaders Can See</h2>

          <ul style={styles.bullets}>
            <li>Which care paths are most common and most costly</li>
            <li>Which providers show notable variation or concentration</li>
            <li>How diagnoses, procedures, and medications cluster together</li>
            <li>Where patients appear fragmented across services</li>
            <li>Where operational patterns may be driving avoidable cost or inconsistency</li>
            <li>How financial outcomes connect back to real care activity</li>
          </ul>
        </div>
      </section>

      {/* WHAT ORGANIZATIONS RECEIVE */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Organizations Receive</h2>

          <ul style={styles.bullets}>
            <li>Care-path and patient journey visibility</li>
            <li>Provider pattern and variation intelligence</li>
            <li>Diagnosis, procedure, and medication-linked insight</li>
            <li>Operational visibility that supports better decisions</li>
            <li>Executive-ready transparency into real healthcare activity</li>
            <li>A stronger foundation for improving both care and control</li>
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
