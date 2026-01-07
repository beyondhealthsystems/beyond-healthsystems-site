export default function BeyondClaims() {
  return (
    <section style={{ padding: "120px 40px", maxWidth: 1100 }}>
      <h1>Beyond-Claims</h1>

      <p style={{ fontSize: 18, maxWidth: 900 }}>
        Beyond-Claims is the autonomous revenue recovery engine within the Beyond
        platform. It identifies, corrects, and recovers underpaid and
        misadjudicated claims — including partial payments that traditional RCM
        workflows abandon.
      </p>

      <section style={{ marginTop: 60 }}>
        <h2>The Core Problem</h2>
        <p>
          Once a claim posts with a non-zero payment, most systems assume it is
          correct. Partial enforcement and contract drift accumulate silently.
        </p>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>What It Does</h2>
        <ul>
          <li>Audits paid claims line-by-line</li>
          <li>Identifies recoverable underpayments</li>
          <li>Generates corrected, submission-ready claims</li>
          <li>Maintains a full audit trail</li>
        </ul>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>Impact</h2>
        <p>
          Typical result: <strong>6–10% uplift in collected revenue</strong> on
          already-billed claims.
        </p>
      </section>
    </section>
  );
}
