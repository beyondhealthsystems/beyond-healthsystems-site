// /pages/pricing.js

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
      maxWidth: 920,
      marginBottom: 14,
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
      maxWidth: 940,
    },
    bullets: {
      marginLeft: 18,
      lineHeight: 1.75,
      maxWidth: 940,
    },

    priceCard: {
      marginTop: 18,
      border: "1px solid rgba(15, 23, 42, 0.10)",
      borderRadius: 14,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      padding: "18px 18px",
      maxWidth: 940,
    },
    priceTop: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 18,
      flexWrap: "wrap",
      marginBottom: 10,
    },
    priceBig: {
      fontSize: 42,
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    priceSub: {
      fontSize: 14,
      color: "#334155",
      maxWidth: 520,
      lineHeight: 1.5,
    },
    badgeRow: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 8,
    },
    badge: {
      fontSize: 12,
      padding: "6px 10px",
      borderRadius: 999,
      border: "1px solid rgba(15, 23, 42, 0.12)",
      color: "#0f172a",
      background: "#ffffff",
      fontWeight: 700,
    },

    callout: {
      marginTop: 16,
      border: "1px solid rgba(15, 23, 42, 0.10)",
      borderRadius: 14,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      padding: "16px 16px",
      maxWidth: 940,
    },
    calloutText: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      color: "#0f172a",
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
      padding: "30px 0 40px",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
      fontSize: 13,
      color: "#475569",
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

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.h1}>Pricing</h1>

          <p style={styles.lead}>
            Pricing aligned to outcomes, auditability, and non-interference.
          </p>

          <p style={styles.lead}>
            We only participate when revenue is actually collected — and the fee
            is fully inclusive.
          </p>

          <div style={styles.priceCard}>
            <div style={styles.priceTop}>
              <div style={styles.priceBig}>5%</div>
              <div style={styles.priceSub}>
                of incremental dollars actually collected through Beyond-driven
                recovery activity. No recovery = no fee.
              </div>
            </div>

            <div style={styles.badgeRow}>
              <span style={styles.badge}>All-inclusive</span>
              <span style={styles.badge}>Unlimited usage</span>
              <span style={styles.badge}>Unlimited resubmissions</span>
              <span style={styles.badge}>Updates included</span>
              <span style={styles.badge}>Auditable outputs</span>
            </div>
          </div>

          <div style={styles.ctaRow}>
            <a style={styles.buttonPrimary} href="mailto:steven@beyond-ai.com">
              Request pricing walkthrough
            </a>
            <a style={styles.buttonSecondary} href="/platform">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* PRICING PHILOSOPHY */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Pricing Philosophy</h2>

          <p style={styles.p}>
            Beyond pricing is designed to align incentives and eliminate
            friction. We do not charge for access, usage, or attempts — only for
            verified financial outcomes.
          </p>

          <ul style={styles.bullets}>
            <li>
              <b>Aligned incentives:</b> paid only after successful collection.
            </li>
            <li>
              <b>Auditability by default:</b> outputs are traceable and suitable
              for governance review.
            </li>
            <li>
              <b>Non-interference:</b> Beyond does not require you to replace
              systems or change internal workflow to begin.
            </li>
          </ul>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What’s Included at 5%</h2>

          <p style={styles.p}>
            The 5% fee is fully inclusive — software access, usage, updates, and
            recovery workflows.
          </p>

          <ul style={styles.bullets}>
            <li>
              <b>On-prem license or SaaS/PaaS deployment</b> (your choice)
            </li>
            <li>
              <b>Unlimited usage</b> across claims and service lines
            </li>
            <li>
              <b>Unlimited repair and new claim recreation</b> where recovery is
              justified
            </li>
            <li>
              <b>Unlimited resubmissions</b> when recovery economics support it
            </li>
            <li>
              <b>All software updates included</b>
            </li>
            <li>
              <b>Auditable outputs</b> suitable for executive and board review
            </li>
          </ul>

          <div style={styles.callout}>
            <p style={styles.calloutText}>
              <b>Important:</b> Beyond is designed to make recovery economically
              viable even for smaller claims that traditional workflows ignore.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>How This Compares</h2>

          <p style={styles.p}>
            Traditional RCM economics often include per-claim fees, percentage
            fees, and operational overhead that can translate to meaningful
            effective cost — especially on smaller recoveries.
          </p>

          <p style={styles.p}>
            Beyond is intentionally simpler: one outcome-aligned rate, fully
            inclusive, with no artificial caps or usage limits.
          </p>

          <ul style={styles.bullets}>
            <li>
              <b>Beyond:</b> 5% of incremental dollars actually collected
            </li>
            <li>
              <b>Legacy models:</b> combinations of percent-of-collections plus
              per-claim fees and manual labor
            </li>
            <li>
              <b>Operational reality:</b> many underpayments remain untouched
              because manual review does not pencil out
            </li>
          </ul>
        </div>
      </section>

      {/* SUMMARY */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Summary</h2>

          <p style={styles.p}>
            Pricing is simple by design:
          </p>

          <ul style={styles.bullets}>
            <li>
              <b>No recovery → no fee</b>
            </li>
            <li>
              <b>5% of dollars actually collected</b>
            </li>
            <li>
              <b>All-inclusive</b>: unlimited usage, recovery workflows, and
              updates
            </li>
          </ul>

          <div style={styles.ctaRow}>
            <a style={styles.buttonPrimary} href="mailto:steven@beyond-ai.com">
              Request a pricing walkthrough
            </a>
            <a style={styles.buttonSecondary} href="/contact">
              Contact
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
