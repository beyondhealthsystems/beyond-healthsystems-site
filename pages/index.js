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
      borderBottom: "1px solid rgba(15,23,42,0.08)",
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

    hero: {
      padding: "84px 0 48px",
      backgroundImage: "url('/images/hero-background-light.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    h1: {
      fontFamily: "Georgia, serif",
      fontSize: 52,
      lineHeight: 1.12,
      marginBottom: 18,
      letterSpacing: "-0.02em",
    },
    lead: {
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: 820,
      marginBottom: 14,
    },
    sub: {
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: 860,
    },

    section: {
      padding: "42px 0",
      borderTop: "1px solid rgba(15,23,42,0.08)",
    },
    sectionTitle: {
      fontSize: 28,
      marginBottom: 10,
      letterSpacing: "-0.01em",
    },
    p: {
      fontSize: 16,
      lineHeight: 1.65,
      maxWidth: 920,
      marginBottom: 12,
    },
    emphasis: {
      fontWeight: 700,
      marginBottom: 6,
    },

    mediaCard: {
      border: "1px solid rgba(15,23,42,0.10)",
      borderRadius: 14,
      overflow: "hidden",
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
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

    footer: {
      padding: "26px 0 40px",
      borderTop: "1px solid rgba(15,23,42,0.08)",
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
              <a style={styles.a} href="#platform">Platform</a>
              <a style={styles.a} href="#beyond-claims">Beyond-Claims</a>
              <a style={styles.a} href="#beyond-truth">Beyond-Truth</a>
              <a style={styles.a} href="#pricing">Pricing</a>
              <a style={styles.a} href="#contact">Contact</a>
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
            The healthcare revenue cycle was built to post money — not to verify
            correctness. That assumption quietly costs hospitals millions every year.
          </p>

          <p style={styles.sub}>
            Beyond-Claims continuously audits paid and denied claims, corrects
            misadjudication at the service-line level, and recovers revenue previously
            left behind — with payment only when you actually collect.
          </p>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/boardroom-revenue.png"
              alt="Hospital leadership reviewing recovered revenue"
            />
            <div style={styles.imgCaption}>
              When recovered revenue becomes visible, leadership decisions change.
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>The Platform</h2>

          <p style={styles.emphasis}>What you can’t see, you can’t recover.</p>

          <p style={styles.p}>
            Hospitals track denial rates, days in AR, and net collections.
            What they don’t see is how much revenue is quietly lost once a claim
            posts as “paid.”
          </p>

          <p style={styles.p}>
            Beyond-Truth audits every paid and denied claim to surface silent
            underpayments, contract enforcement drift, and misapplied edits —
            line by line.
          </p>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/audit-dashboard.jpg"
              alt="Audit dashboard"
            />
            <div style={styles.imgCaption}>
              Full-population audit visibility across paid, denied, and recovered claims.
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND-CLAIMS */}
      <section id="beyond-claims" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Beyond-Claims</h2>

          <p style={styles.emphasis}>The problem was never effort. It was economics.</p>

          <p style={styles.p}>
            Manual recovery breaks down when partial payments auto-close accounts
            and small claims cost more to rework than they return.
          </p>

          <p style={styles.p}>
            Beyond-Claims reverses that math with a deterministic engine that
            identifies recoverable dollars automatically, builds correction-ready
            claims, and submits at scale without human bottlenecks.
          </p>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/claims-engine.png"
              alt="Claims rules engine"
            />
            <div style={styles.imgCaption}>
              Automated, service-line precision recovery — at scale.
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND-TRUTH */}
      <section id="beyond-truth" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Beyond-Truth</h2>

          <p style={styles.emphasis}>
            Recovered revenue doesn’t stay in reports. It becomes capacity.
          </p>

          <p style={styles.p}>
            Dollars lost to underpayment affect staffing, training, and program
            growth. By recovering revenue already earned, hospitals fund care
            without cutting services or raising rates.
          </p>

          <div style={styles.mediaCard}>
            <img
              style={styles.img}
              src="/images/clinical-training.jpg"
              alt="Clinical training"
            />
            <div style={styles.imgCaption}>
              Revenue recovery translated into real-world clinical impact.
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Pricing</h2>
          <p style={styles.p}>
            No setup fees. No minimums. No recovery — no cost.
            Beyond-Claims only participates when revenue is actually collected.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          <p style={styles.p}>
            <b>steven@beyond-ai.com</b> &nbsp;|&nbsp; <b>847-791-7838</b>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          © {new Date().getFullYear()} Beyond Health Systems. All rights reserved.
        </div>
      </footer>

      <style>{`
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
