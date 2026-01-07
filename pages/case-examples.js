// /pages/case-examples.js

export default function CaseExamples() {
  return (
    <main style={{ padding: "80px", fontFamily: "system-ui", maxWidth: 1100 }}>
      <h1>Case Examples</h1>

      <p>
        The examples below illustrate typical outcomes observed when Beyond is
        deployed in large healthcare environments. Specific results vary by
        organization, payer mix, and contract structure.
      </p>

      <h2>Enterprise Health System</h2>
      <p>
        A multi-hospital system identified widespread partial underpayments
        embedded in claims previously marked as paid. Autonomous correction
        resulted in a measurable uplift in collected revenue without additional
        staff or workflow disruption.
      </p>

      <h2>Large Provider Group</h2>
      <p>
        A large provider group used Beyond to audit post-payment outcomes and
        surface enforcement inconsistencies across multiple payers, creating a
        defensible record for recovery and negotiation.
      </p>

      <h2>RCM Partner</h2>
      <p>
        An RCM organization integrated Beyond alongside existing workflows to
        extend recovery beyond zero-pay denials, unlocking revenue historically
        abandoned as uneconomic to pursue.
      </p>

      <p style={{ marginTop: 40, fontStyle: "italic" }}>
        Detailed case studies and metrics are available upon request.
      </p>
    </main>
  );
}

