// /pages/beyond-claims.js

export default function BeyondClaims() {
  return (
    <section style={{ padding: "120px 40px", maxWidth: 1100 }}>
      <h1>Beyond-Claims</h1>

      <p style={{ fontSize: 18, maxWidth: 900 }}>
        Beyond-Claims is the autonomous revenue recovery engine within the Beyond
        platform. It is designed to identify, correct, and recover underpaid and
        misadjudicated claims — including partial payments that traditional RCM
        workflows silently abandon.
      </p>

      <section style={{ marginTop: 60 }}>
        <h2>The Core Problem</h2>
        <p>
          In most healthcare systems, once a claim posts with a non-zero payment,
          the account is closed. Billing systems are optimized to post money and
          move on — not to verify whether the payment was correct.
        </p>
        <p>
          This creates a structural blind spot where partial enforcement,
          contract misapplication, and payer drift accumulate without review.
        </p>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>What Beyond-Claims Does</h2>
        <ul>
          <li>Audits paid claims at the line-item level</li>
          <li>Identifies recoverable underpayments and partials</li>
          <li>Determines the contractually correct payable amount</li>
          <li>Generates corrected, submission-ready claims automatically</li>
          <li>Maintains a complete, auditable correction trail</li>
        </ul>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>Why Traditional Recovery Fails</h2>
        <p>
          Manual recovery workflows cannot scale. Small variances, partial
          payments, and complex adjustments are economically irrational to pursue
          by hand, even when they are clearly incorrect.
        </p>
        <p>
          As a result, large amounts of earned revenue are written off silently
          — not denied, not disputed, simply ignored.
        </p>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>How Beyond-Claims Changes the Economics</h2>
        <p>
          By automating detection, validation, and correction, Beyond-Claims
          makes recovery feasible at enterprise scale.
        </p>
        <ul>
          <li>No manual follow-up required</li>
          <li>No artificial thresholds or caps</li>
          <li>Unlimited resubmissions where recovery is justified</li>
          <li>No disruption to existing RCM workflows</li>
        </ul>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>Measured Impact</h2>
        <p>
          In large healthcare environments, Beyond-Claims typically delivers a
          <strong> 6–10% uplift in collected revenue</strong> on claims already
          billed — without increasing staffing, denial rates, or payer friction.
        </p>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>Aligned Incentives</h2>
        <p>
          Beyond-Claims is compensated only after recoveries are successfully
          collected. If no value is delivered, no payment is required.
        </p>
        <p>
          This ensures incentives remain aligned with accuracy, recovery, and
          verifiable outcomes.
        </p>
      </section>
    </section>
  );
}
