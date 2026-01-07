// /pages/index.js  (layout-only adjustment)

export default function Home() {
  return (
    <section style={{ padding: "120px 40px", maxWidth: 1100 }}>
      <h1 style={{ fontSize: 46, lineHeight: 1.2, marginBottom: 24 }}>
        Healthcare intelligence built for audit, accuracy, and system-level truth.
      </h1>

      <p style={{ fontSize: 20, maxWidth: 800, marginBottom: 60 }}>
        Beyond Health Systems is a healthcare intelligence platform focused on
        financial correctness, auditability, and accountability across claims,
        payments, and outcomes.
      </p>

      <section style={{ marginBottom: 80 }}>
        <h2>The hidden problem</h2>
        <p>
          Once a claim posts as “paid,” healthcare systems assume correctness.
          Silent underpayments and enforcement drift remain invisible.
        </p>
      </section>

      <section style={{ marginBottom: 80 }}>
        <h2>The Beyond platform</h2>
        <p>
          Beyond operates independently of billing and RCM workflows to verify
          outcomes — not just process transactions.
        </p>
      </section>

      <section style={{ marginBottom: 80 }}>
        <h2>Measured impact</h2>
        <p>
          Large healthcare organizations typically see a <strong>6–10%</strong>{" "}
          uplift in collected revenue on claims already billed.
        </p>
      </section>
    </section>
  );
}
