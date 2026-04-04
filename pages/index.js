import Nav from "../components/Nav";

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
      marginTop: 18,
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
    bullets: {
      margin: "10px 0 0 18px",
      padding: 0,
      lineHeight: 1.7,
      maxWidth: 920,
    },
    ctaRow: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      marginTop: 16,
    },
    buttonPrimary: {
      background: "#16a34a",
      color: "#ffffff",
      border: "none",
      borderRadius: 10,
      padding: "10px 14px",
      fontWeight: 700,
      cursor: "pointer",
      textDecoration: "none",
    },
    buttonSecondary: {
      background: "transparent",
      color: "#1e3a8a",
      border: "1px solid rgba(30, 58, 138, 0.35)",
      borderRadius: 10,
      padding: "10px 14px",
      fontWeight: 700,
      cursor: "pointer",
      textDecoration: "none",
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
      <Nav />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.h1}>
            Financial Truth. Recovery Intelligence. Care Intelligence.
          </h1>
          <p style={styles.lead}>
            One platform built to recover earned revenue and reveal what is
            really happening across claims, care paths, providers, diagnoses,
            procedures, medications, and patient journeys.
          </p>
          <p style={styles.sub}>
            Beyond-Truth continuously audits paid and denied claims, identifies
            financial leakage at the service-line level, and makes recovery
            economically viable. Beyond-Care turns that same underlying data
            into care-path, provider, diagnosis, procedure, medication, and
            patient intelligence leaders can actually use.
          </p>

          <p style={styles.p}>
            <b>Why this matters at the leadership level:</b> Revenue once
            assumed gone becomes visible, measurable, and recoverable. At the
            same time, the same data begins revealing how care is actually
            delivered across providers, diagnoses, procedures, medications, and
            patient flow — changing leadership conversations from conjecture to
            confidence.
          </p>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/boardroom-revenue.png"
              alt="Boardroom leadership reviewing recovered revenue"
            />
            <div style={styles.imgCaption}>
              Board-level visibility into recovered revenue and operational
              reality.
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>The Platform</h2>
          <p style={styles.p}>
            <b>See the financial truth. See the care reality. Miss less. Control more.</b>{" "}
            Traditional RCM reporting focuses on denials, collections totals,
            and aging. Traditional healthcare analytics often sits in separate
            systems and still misses the full path of what happened. What is
            usually missing is transaction correctness, service-line precision,
            and the ability to connect financial outcomes with care activity.
          </p>
          <p style={styles.p}>
            The platform surfaces issues hidden deep in adjudication logic and
            connects them with the broader operational and patient picture so
            leaders can act on precise opportunities, not assumptions.
          </p>

          <ul style={styles.bullets}>
            <li>Paid claims</li>
            <li>Denied claims</li>
            <li>Partial payments and underpayments</li>
            <li>Diagnoses and procedures</li>
            <li>Medication visibility</li>
            <li>Provider patterns</li>
            <li>Patient journeys</li>
            <li>Financial outcomes</li>
          </ul>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/audit-dashboard.jpg"
              alt="Unified analytics dashboard"
            />
            <div style={styles.imgCaption}>
              Unified analytics across revenue, recovery, and care intelligence.
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND-TRUTH */}
      <section id="beyond-truth" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Beyond-Truth</h2>
          <p style={styles.p}>
            <b>Deterministic recovery intelligence at service-line precision:</b>{" "}
            Manual recovery efforts fail because small balances, partial
            payments, contract nuances, bundled edits, and labor constraints
            destroy the economics of going after what is already earned.
            Beyond-Truth changes that by making relevant line items measurable,
            reviewable, and actionable.
          </p>

          <ul style={styles.bullets}>
            <li>Continuously audits paid and denied claims</li>
            <li>Identifies recoverable dollars at the service-line level</li>
            <li>Flags underpayments, denials, and financial leakage</li>
            <li>Supports corrected claim generation and recovery workflows</li>
            <li>Makes smaller claims economically viable to pursue</li>
            <li>Provides auditable financial truth, not assumptions</li>
          </ul>

          <div style={{ marginTop: 16 }}>
            <div style={styles.mediaCard}>
              <img
                style={styles.img}
                src="/images/claims-engine.png"
                alt="Deterministic financial truth engine"
              />
              <div style={styles.imgCaption}>
                Deterministic financial truth and recovery intelligence.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND-CARE */}
      <section id="beyond-care" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Beyond-Care</h2>
          <p style={styles.p}>
            <b>Care-path and provider intelligence built from the same underlying data:</b>{" "}
            Healthcare organizations already generate enormous amounts of useful
            signal across claims, remits, diagnoses, procedures, medications,
            and related records, but most of it stays disconnected.
            Beyond-Care turns that history into a usable intelligence layer for
            understanding how care is actually flowing across patients,
            providers, and outcomes.
          </p>

          <ul style={styles.bullets}>
            <li>Reveals real care-path sequencing</li>
            <li>Surfaces provider patterns and variation</li>
            <li>Connects diagnoses, procedures, and medication activity</li>
            <li>Highlights patient fragmentation across services</li>
            <li>Supports operational and financial care insight</li>
            <li>Gives leadership a clearer view beyond reimbursement alone</li>
          </ul>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/clinical-training.jpg"
              alt="Care intelligence and clinical operations"
            />
            <div style={styles.imgCaption}>
              Care intelligence built from real healthcare activity.
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why It Matters</h2>
          <p style={styles.p}>
            <b>Recovered revenue creates capacity. Better visibility supports better decisions.</b>{" "}
            When earned revenue is recovered, it becomes real operational
            capacity: staffing, training, facility support, and improved
            execution without simply absorbing losses or pushing cost pressure
            elsewhere.
          </p>
          <p style={styles.p}>
            When care and provider intelligence become visible in the same
            environment, leaders gain a clearer understanding of where care is
            consistent, where it fragments, where costs rise, and where
            intervention may matter most.
          </p>
          <p style={styles.p}>
            That is the value of combining <b>Beyond-Truth</b> and{" "}
            <b>Beyond-Care</b> in one platform.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Pricing</h2>
          <p style={styles.p}>
            No setup fees. No minimums. No recovery — no cost. Beyond Health
            Systems is designed to align with results, participating when
            revenue is actually collected.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          © {new Date().getFullYear()} Beyond Health Systems. All rights
          reserved.
        </div>
      </footer>
    </main>
  );
}
