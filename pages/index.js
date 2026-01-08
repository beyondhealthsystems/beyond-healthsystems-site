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

        {/* IMAGE 1 — BOARDROOM */}
        <img
          src="/images/boardroom-revenue.png"
          alt="Hospital leadership reviewing recovered revenue results"
          style={{ width: "100%", borderRadius: 10, marginBottom: 16 }}
        />

        <p style={{ fontSize: 16, color: "#444", marginBottom: 32 }}>
          Confirmed recovered revenue — returned to the operating budget and
          reinvested into patient care.
        </p>

        <p style={{ fontSize: 18 }}>
          Powered by <strong>Beyond-Claims</strong>, a deterministic recovery
          engine. No upfront cost. No consulting fees.{" "}
          <strong>Payment only on recovered dollars.</strong>
        </p>
      </section>

      {/* AUDIT / SCALE */}
      <section style={{ marginBottom: 80 }}>
        <h2>The scale of the problem</h2>

        <p style={{ fontSize: 18 }}>
          At roughly <strong>$2.9T</strong> in claims-based provider spend, even a{" "}
          <strong>~14–15% initial denial rate</strong> means hundreds of billions
          of dollars enter denial workflows — while underpayments go unseen.
        </p>

        {/* IMAGE 2 — AUDIT DASHBOARD */}
        <img
          src="/images/audit-dashboard.jpg"
          alt="Claims audit dashboard showing denied, paid, and recovered claims"
          style={{ width: "100%", borderRadius: 10, margin: "24px 0" }}
        />

        <p style={{ fontWeight: 600 }}>
          We quantify your exact recovery opportunity by audit — claim by claim,
          service line by line.
        </p>
      </section>

      {/* ENGINE */}
      <section style={{ marginBottom: 80 }}>
        <h2>Deterministic. Auditable. Executable.</h2>

        {/* IMAGE 3 — CLAIMS ENGINE */}
        <img
          src="/images/claims-engine.png"
          alt="Deterministic engine processing healthcare claims and denials"
          style={{ width: "100%", borderRadius: 10, margin: "24px 0" }}
        />

        <p style={{ fontSize: 18 }}>
          Autonomous technology continuously evaluating paid and denied claims —
          validating outcomes and executing recovery at machine scale.
        </p>
      </section>

      {/* OUTCOMES */}
      <section style={{ marginBottom: 80 }}>
        <h2>What this enables</h2>

        {/* IMAGE 4 — CLINICAL TRAINING */}
        <img
          src="/images/clinical-training.jpg"
          alt="Doctors and nurses training with expanded hospital capacity"
          style={{ width: "100%", borderRadius: 10, margin: "24px 0" }}
        />

        <p style={{ fontSize: 18 }}>
          Earned revenue returned — reinvested into staffing, training,
          equipment, and patient care.
        </p>
      </section>

    </main>
  );
}
