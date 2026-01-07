// /pages/index.js

export default function Home() {
  return (
    <main style={{ padding: "80px", fontFamily: "system-ui", maxWidth: 1200 }}>
      <h1>
        Healthcare intelligence built for audit, accuracy, and system-level
        truth.
      </h1>

      <p style={{ fontSize: 18, maxWidth: 900 }}>
        Beyond Health Systems is a next-generation healthcare intelligence
        platform focused on financial accuracy, auditability, and accountability
        across claims, payments, and outcomes.
      </p>

      <h2>The Hidden Problem</h2>
      <p>
        Once a claim posts as “paid,” healthcare systems assume the outcome is
        correct. In reality, underpayments, partial enforcement, and contract
        drift remain buried inside claims that are never revisited.
      </p>

      <h2>The Beyond Platform</h2>
      <p>
        Beyond operates independently of billing and RCM workflows to verify
        what should have happened versus what actually occurred — at scale and
        without operational disruption.
      </p>

      <h2>Two Core Systems</h2>
      <ul>
        <li>
          <strong>Beyond-Claims</strong> — Autonomous recovery of underpaid and
          misadjudicated claims, including partials historically abandoned.
        </li>
        <li>
          <strong>Beyond-Truth</strong> — An audit-first intelligence layer that
          establishes a verifiable record of financial correctness.
        </li>
      </ul>

      <h2>Measured Impact</h2>
      <p>
        Large healthcare organizations typically see a{" "}
        <strong>6–10% uplift</strong> in collected revenue on claims already
        billed — without adding staff or disrupting payer relationships.
      </p>

      <h2>Who This Is For</h2>
      <p>
        Hospitals, health systems, provider groups, RCM partners, advisory
        firms, and payers seeking verified financial truth and recovery.
      </p>

      <p style={{ marginTop: 40 }}>
        <a href="/contact">Start a conversation →</a>
      </p>
    </main>
  );
}
