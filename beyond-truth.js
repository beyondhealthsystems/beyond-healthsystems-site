export default function BeyondTruth() {
  return (
    <main
      style={{
        padding: "80px 60px",
        fontFamily: "system-ui",
        maxWidth: 1100,
        margin: "0 auto",
        lineHeight: 1.6
      }}
    >
      <h1>Beyond-Truth</h1>

      <p style={{ fontSize: 18, maxWidth: 820 }}>
        System-level healthcare intelligence built for auditability,
        accuracy, and financial truth.
      </p>

      <h2>The Problem</h2>
      <p>
        Healthcare systems rely on dashboards that summarize outcomes —
        not systems that verify whether those outcomes are correct.
        Once a claim posts as “paid,” it is treated as truth.
      </p>
      <p>
        That assumption hides enforcement drift, contract misapplication,
        and systemic underpayment across millions of claims.
      </p>

      <h2>What Beyond-Truth Does</h2>
      <p>
        Beyond-Truth is an audit-first intelligence layer that evaluates
        claims, payments, and outcomes against what should have happened —
        not just what did happen.
      </p>

      <ul>
        <li>Separates financial truth from system-reported outcomes</li>
        <li>Creates a verifiable, line-by-line audit trail</li>
        <li>Surfaces payer behavior patterns and enforcement gaps</li>
        <li>Supports compliance, appeals, and executive oversight</li>
      </ul>

      <h2>How It’s Used</h2>
      <p>
        Beyond-Truth is used by executives, finance teams, auditors,
        and compliance leaders to answer one core question:
      </p>

      <p style={{ fontWeight: 600 }}>
        “Did we get paid what we were contractually owed — and can we prove it?”
      </p>

      <p style={{ marginTop: 40, fontStyle: "italic" }}>
        Deeper technical and governance details coming next.
      </p>
    </main>
  );
}
