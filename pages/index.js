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
      color: "#0f172a",
    },
    sub: {
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: 860,
      margin: 0,
      color: "#0f172a",
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
      color: "#0f172a",
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
      color: "#0f172a",
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
      display: "inline-block",
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
      display: "inline-block",
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
              <a style={styles.a} href="#platform">
                Platform
              </a>
              <a style={styles.a} href="#beyond-claims">
                Beyond-Claims
              </a>
              <a style={styles.a} href="#beyond-truth">
                Beyond-Truth
              </a>
              <a style={styles.a} href="#pricing">
                Pricing
              </a>
              <a style={styles.a} href="#contact">
                Contact
              </a>
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
            dollars is ending. RCM workflows optimized posting and exceptions —
            not continuous recovery. That limitation is over.
          </p>

          <p style={styles.sub}>
            Beyond-Claims is a deterministic recovery engine that audits paid and
            denied claims line-by-line, corrects what was misadjudicated, and
            recovers revenue previously left behind — with no upfront cost and
            payment only on dollars actually collected.
          </p>

          {/* HERO IMAGE */}
          <div style={{ marginTop: 22 }}>
            <div style={styles.mediaCard}>
              <img
                style={styles.img}
                src="/images/boardroom-revenue.png"
                alt="Hospital leadership reviewing recovered revenue results"
              />
              <div style={styles.imgCaption}>
                Leadership alignment: recovered dollars show up as operating
                capacity — immediately.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>The Platform</h2>
          <p style={styles.p}>
            We quantify your exact recovery opportunity by audit — claim by
            claim, service line by line.
          </p>
          <p style={styles.p}>
            The economics — and the lack of enabling technology — made recovery
            uneconomical. That is no longer true.
          </p>

          <div style={styles.grid2}>
            <div style={styles.mediaCard}>
              <img
                style={styles.img}
                src="/images/audit-dashboard.jpg"
                alt="Audit dashboard showing paid, denied, in-process, and success rates"
              />
              <div style={styles.imgCaption}>
                Audit visibility: paid, denied, in-process — and confirmed
                recoveries.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND-CLAIMS */}
      <section id="beyond-claims" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Beyond-Claims</h2>
          <p style={styles.p}>
            Beyond-Claims focuses on what traditional workflows miss: silent
            underpayments, misapplied contract terms, and line-item errors that
            get auto-posted once a claim shows “paid.”
          </p>
          <ul style={styles.bullets}>
            <li>Audits paid and denied claims continuously</li>
            <li>Finds recoverable dollars at the service-line level</li>
            <li>Builds corrections that can be resubmitted and tracked</li>
            <li>Designed to make small claims economically recoverable</li>
          </ul>

          <div style={{ marginTop: 16 }}>
            <div style={styles.mediaCard}>
              <img
                style={styles.img}
                src="/images/claims-engine.png"
                alt="Advanced deterministic rules engine processing paid and denied claims"
              />
              <div style={styles.imgCaption}>
                Deterministic rules engine: identifies what was missed and
                drives claim correction workflows.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND-TRUTH */}
      <section id="beyond-truth" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Beyond-Truth</h2>
          <p style={styles.p}>
            Beyond-Truth is the audit-first layer that proves the opportunity
            before any change to workflow — so leaders can see the dollars, the
            patterns, and the root causes with full transparency.
          </p>

          <div style={styles.grid2}>
            <div style={styles.mediaCard}>
              <img
                style={styles.img}
                src="/images/clinical-training.jpg"
                alt="Hospital clinicians and staff training, enabled by recovered operating capacity"
              />
              <div style={styles.imgCaption}>
                Recovered revenue becomes capacity — staffing, training, and
                care delivery improvements.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Pricing</h2>
          <p style={styles.p}>
            No collection. No cost. We only get paid on dollars actually
            collected — aligning incentives and eliminating upfront risk.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <p style={styles.p}>
            Email: <b>steven@beyond-ai.com</b> &nbsp;|&nbsp; Phone:{" "}
            <b>847-791-7838</b>
          </p>

          <div style={styles.ctaRow}>
            <a style={styles.buttonPrimary} href="mailto:steven@beyond-ai.com">
              Request a 15-min walk-through
            </a>
            <a style={styles.buttonSecondary} href="#platform">
              View the audit flow
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div style={styles.footer}>
        <div style={styles.container}>
          © {new Date().getFullYear()} Beyond Health Systems. All rights
          reserved.
        </div>
      </div>

      {/* RESPONSIVE (NO EXTRA FILES NEEDED) */}
      <style>{`
        @media (max-width: 900px) {
          main { }
        }
        @media (max-width: 720px) {
          h1 { font-size: 40px !important; }
        }
        @media (max-width: 520px) {
          h1 { font-size: 34px !important; }
        }
      `}</style>
    </main>
  );
}
