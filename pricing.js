// /pages/pricing.js  (layout normalization)

export default function Pricing() {
  return (
    <section style={{ padding: "120px 40px", maxWidth: 1100 }}>
      <h1>Pricing Philosophy</h1>

      <p style={{ fontSize: 18, maxWidth: 900 }}>
        Pricing aligned to outcomes, auditability, and non-interference.
      </p>

      <section style={{ marginTop: 60 }}>
        <h2>Aligned incentives</h2>
        <p>Paid only after successful collection.</p>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>No artificial limits</h2>
        <p>
          Unlimited resubmissions where recovery is justified.
        </p>
      </section>
    </section>
  );
}
