export default function BeyondClaims() {
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
      <h1>Beyond-Claims</h1>

      <p style={{ fontSize: 18, maxWidth: 800 }}>
        Autonomous recovery for claims that appear “paid” — but are not correct.
      </p>

      <h2>What Beyond-Claims Does</h2>
      <p>
        Beyond-Claims is a deterministic recovery platform that identifies,
        corrects, and resubmits underpaid and misadjudicated claims that
        traditional RCM workflows ignore once a claim posts as paid.
      </p>

      <ul>
        <li>Detects silent underpayments and contract misapplication</li>
        <li>Separates denials, partials, and short-pays at the line level</li>
        <li>Generates corrected, submission-ready claims automatically</li>
        <li>Produces a complete, auditable correction trail</li>
      </ul>

      <h2>Why This Matters</h2>
      <p>
        Most recovery systems only work zero-pay denials. Once money posts,
        billing systems close the account — even when the payment is wrong.
      </p>
      <p>
        Beyond-Claims changes the economics by making post-payment correction
        automated, auditable, and financially rational.
      </p>

      <h2>Typical Impact</h2>
      <p>
        Hospitals and large provider groups typically recover an additional
        <strong> 6–10% of total billed revenue</strong> using Beyond-Claims,
        without increasing staff or disrupting existing workflows.
      </p>

      <p style={{ marginTop: 40, fontStyle: "italic" }}>
        Detailed workflow, phases, and examples coming next.
      </p>
    </main>
  );
}
