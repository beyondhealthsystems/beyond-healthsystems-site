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
      maxWidth: 920,
      paddingLeft: 0,
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
    priceBox: {
      marginTop: 20,
      padding: "24px",
      border: "1px solid rgba(15, 23, 42, 0.10)",
      borderRadius: 16,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      maxWidth: 760,
    },
    bigPrice: {
      fontSize: 44,
      fontWeight: 800,
      lineHeight: 1,
      margin: "0 0 10px 0",
      color: "#166534",
    },
    priceSub: {
      fontSize: 18,
      lineHeight: 1.6,
      margin: 0,
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

          <p style={styles.lead}>
            Beyond Health Systems is designed to align with recovery, not create
            more overhead. We do not charge on paid claims, and we do not charge
            simply for looking at historical claim data.
          </p>

          <p style={styles.lead}>
            Our recovery model is focused on denied claims and other claims that
            are commonly written off or left untouched because the economics of
            manual recovery are too weak.
          </p>

          <div style={styles.priceBox}>
            <div style={styles.bigPrice}>10%</div>
            <p style={styles.priceSub}>
              We charge <strong>10% only on money actually collected</strong>{" "}
              from targeted denied or written-off claims recovered through the
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* SIMPLE MODEL */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>A Simple Recovery Model</h2>

          <p style={styles.p}>
            The model is straightforward: you provide the claims and denial
            history, the platform identifies recoverable opportunity in claims
            that would often remain written off, and payment occurs only after
            money is actually recovered.
          </p>

          <ul style={styles.bullets}>
            <li>No setup fees</li>
            <li>No minimums</li>
            <li>No charge on already paid claims</li>
            <li>No charge on claims that are not collected</li>
            <li>10% fee only after actual recovery</li>
          </ul>
        </div>
      </section>

      {/* WHAT WE FOCUS ON */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What We Focus On</h2>

          <p style={styles.p}>
            Beyond-Truth is built for the portion of the revenue cycle that too
            often gets abandoned: denied claims, partially paid claims, and
            claims that become economically difficult to work through
            traditional processes.
          </p>

          <p style={styles.p}>
            These are often dollars already earned, but left behind because the
            labor cost, time burden, or complexity makes recovery unattractive
            through conventional workflows.
          </p>

          <ul style={styles.bullets}>
            <li>Denied claims</li>
            <li>Written-off claims with real recovery potential</li>
            <li>Claims too small or difficult to pursue manually</li>
            <li>Claims where the economics of traditional follow-up break down</li>
          </ul>
        </div>
      </section>

      {/* WHAT YOU DO */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What You Do</h2>

          <p style={styles.p}>
            The process is intentionally simple. You use your historical claims
            and denial data, let the platform identify targeted recovery
            opportunity, and then wait for the money that was already earned to
            come back into the system.
          </p>

          <ul style={styles.bullets}>
            <li>Provide claims and denial history</li>
            <li>See the identified recovery opportunity</li>
            <li>Pursue recovery on targeted denied or written-off claims</li>
            <li>Pay only after money is actually collected</li>
          </ul>
        </div>
      </section>

      {/* WHY THIS IS DIFFERENT */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Why This Is Different</h2>

          <p style={styles.p}>
            Traditional RCM pricing often applies across all collections or
            large portions of total claims volume. Our model is narrower and
            more aligned: we participate only in the value actually recovered
            from the part of the claims universe that is most often abandoned.
          </p>

          <p style={styles.p}>
            That means you are not paying us on clean claims that were already
            paid. You are paying only on recovered dollars from difficult,
            denied, or commonly written-off claims.
          </p>
        </div>
      </section>

      {/* LEADERSHIP VIEW */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Leadership-Friendly Economics</h2>

          <p style={styles.p}>
            The pricing model is built to be easy to understand at the executive
            level:
          </p>

          <ul style={styles.bullets}>
            <li>No upfront financial risk</li>
            <li>No need to pay on claims already paid</li>
            <li>No need to pay unless recovery actually occurs</li>
            <li>Clear alignment between platform performance and financial result</li>
          </ul>
        </div>
      </section>

      {/* OPTIONAL NOTE */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Typical Commercial Structure</h2>

          <p style={styles.p}>
            Standard structure: <strong>10% of actual collected dollars</strong>{" "}
            on targeted denied or written-off claims recovered through the
            platform.
          </p>

          <p style={styles.p}>
            For enterprise pilots, volume arrangements, or custom deployment
            structures, contact us directly.
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
}    navLinks: {
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
