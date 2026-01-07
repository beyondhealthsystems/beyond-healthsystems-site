export default function Home() {
  return (
    <main
      style={{
        padding: "100px 60px",
        fontFamily: "system-ui",
        maxWidth: 1200,
        margin: "0 auto",
        lineHeight: 1.6
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: 120 }}>
        <h1 style={{ fontSize: 44, maxWidth: 900 }}>
          Healthcare intelligence built for audit, accuracy, and system-level truth.
        </h1>

        <p style={{ fontSize: 20, maxWidth: 820, marginTop: 20 }}>
          Beyond Health Systems is a next-generation healthcare intelligence
          platform focused on auditability, financial accuracy, and systemic
          accountability — across claims, payments, and outcomes.
        </p>

        <div style={{ marginTop: 40, display: "flex", gap: 20 }}>
          <a
            href="/platform"
            style={{
              padding: "14px 22px",
              background: "#111",
              color: "#fff",
              textDecoration: "none",
              borderRadius: 6,
              fontWeight: 600
            }}
          >
            Learn how it works
          </a>

          <a
            href="/contact"
            style={{
              padding: "14px 22px",
              border: "1px solid #111",
              color: "#111",
              textDecoration: "none",
              borderRadius: 6,
              fontWeight: 600
            }}
          >
            Talk to us
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ marginBottom: 100 }}>
        <h2>The problem no dashboard shows</h2>
        <p style={{ maxWidth: 900 }}>
          Once a claim posts as “paid,” healthcare systems assume it is correct.
          In reality, silent underpayments, partial enforcement, and contract
          drift quietly accumulate — never disputed, never recovered.
        </p>
      </section>

      {/* SOLUTION */}
      <section style={{ marginBottom: 100 }}>
        <h2>System-level truth</h2>
        <p style={{ maxWidth: 900 }}>
          Beyond Health Systems operates independently of billing and RCM
          workflows to audit outcomes — not just denials — and surface
          recoverable value hiding inside “successful” claims.
        </p>
      </section>

      {/* VALUE */}
      <section style={{ marginBottom: 120 }}>
        <h2>What this delivers</h2>
        <ul style={{ maxWidth: 900 }}>
          <li>6–10% uplift in collected revenue on already billed claims</li>
          <li>No workflow disruption</li>
          <li>No payer interference</li>
          <li>Fully auditable recovery logic</li>
          <li>Paid only after successful collection</li>
        </ul>
      </section>

      {/* WHO */}
      <section>
        <h2>Who this is for</h2>
        <ul style={{ maxWidth: 900 }}>
          <li>Hospital systems</li>
          <li>Large physician groups</li>
          <li>RCM partners and clearinghouses</li>
          <li>Finance, compliance, and audit leadership</li>
        </ul>
      </section>
    </main>
  );
}
