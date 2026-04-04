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

      <div style={styles.footer}>
        <div style={styles.container}>
          © {new Date().getFullYear()} Beyond Health Systems. All rights
          reserved.
        </div>
      </div>
    </main>
  );
}
