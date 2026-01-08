// pages/index.js

export default function Home() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 40px" }}>

      {/* HERO */}
      <section style={{ marginBottom: 80 }}>
        <h1 style={{ fontSize: 42, marginBottom: 16 }}>
          A real claims recovery solution — with zero financial risk.
        </h1>

        <p style={{ fontSize: 20, fontWeight: 500, marginBottom: 24 }}>
          <strong>
            Healthcare leaders: the era of payers quietly keeping your earned
            dollars is ending.
          </strong>
          <br />
          RCM workflows optimized posting and exceptions — not continuous
          recovery. That limitation is over.
        </p>

        {/* IMAGE 1 — HERO BOARDROOM (PNG) */}
        <img
          src="/images/hero-boardroom.png"
          alt="Hospital leadership reviewing positive recovered revenue results"
          style={{
            width: "100%",
            borderRadius: 10,
            marginBottom: 16,
          }}
        />

        <p style={{ fontSize: 16, color: "#444", marginBottom: 32 }}>
          Hospital leadership reviewing confirmed recovered revenue — real
          dollars returned to the operating budget.
        </p>

        <p style={{ fontSize: 18, maxWidth: 900 }}>
          Powered by <strong>Beyond-Claims</strong>, a{" "}
          <strong>deterministic</strong> recovery engine (not probabilistic AI).
          No upfront cost. No consulting fees.{" "}
          <strong>Payment only on recovered dollars.</strong>
        </p>
      </section>

      {/* SCALE OF THE PROBLEM */}
      <section style={{ marginBottom: 80 }}>
        <h2>The scale of the problem</h2>

        <p style={{ fontSize: 18, maxWidth: 950 }}>
          At roughly <strong>$2.9T</strong> in claims-based provider spend, even a{" "}
          <strong>~14–15% initial denial rate</strong> means hundreds of billions
          of dollars enter denial workflows each year — while many “paid” claims
          still contain underpayments that never get reworked.
        </p>

        {/* IMAGE 2 — AUDIT DASHBOARD */}
        <img
          src="/images/audit-dashboard.jpg"
          alt="Claims audit dashboard showing denied, paid, in-process, and recovered claims"
          style={{
            width: "100%",
            borderRadius: 10,
            margin: "24px 0",
          }}
        />

        <p style={{ fontSize: 16, color: "#444" }}>
          Claim-state audit view showing denied, paid, in-process, and recovered
          claims with measurable success rates.
        </p>

        <p style={{ marginTop: 16, fontWeight: 600 }}>
