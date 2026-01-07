export default function Platform() {
  return (
    <main
      style={{
        padding: "80px 60px",
        fontFamily: "system-ui",
        maxWidth: 1200,
        margin: "0 auto",
        lineHeight: 1.6
      }}
    >
      <h1>The Platform</h1>

      <p style={{ fontSize: 18, maxWidth: 900 }}>
        Beyond Health Systems is a system-level healthcare intelligence platform
        built to verify outcomes, expose financial inaccuracies, and enforce
        correctness — after claims are marked “paid.”
      </p>

      <h2>The gap in today’s systems</h2>
      <p style={{ maxWidth: 900 }}>
        Modern healthcare infrastructure is optimized for throughput: claims are
        submitted, adjudicated, paid, and closed. Once payment posts, systems
        assume correctness.
      </p>
      <p style={{ maxWidth: 900 }}>
        That assumption hides partial enforcement, contract misapplication,
        payer drift, and silent write-offs that are never disputed or recovered.
      </p>

      <h2>A different layer of intelligence</h2>
      <p style={{ maxWidth: 900 }}>
        Beyond Health Systems operates independently of billing and RCM
        workflows. It does not replace existing systems or interfere with
        operations.
      </p>
      <p style={{ maxWidth: 900 }}>
        Instead, it introduces an audit-first verification layer that evaluates
        what was billed, what was adjudicated, what was paid, and what should
        have happened.
      </p>

      <h2>How the platform is used</h2>
      <ul style={{ maxWidth: 900 }}>
        <li>Audit paid claims for correctness, not just denial status</li>
        <li>Identify recoverable underpayments and partials</li>
        <li>Produce fully auditable correction trails</li>
        <li>Support executive, compliance, and financial oversight</li>
      </ul>

      <h2>Delivered through focused systems</h2>
      <p style={{ maxWidth: 900 }}>
        Platform capabilities are delivered through purpose-built systems,
        including <strong>Beyond-Claims</strong> for autonomous recovery and
        <strong> Beyond-Truth</strong> for audit and financial intelligence.
      </p>

      <p style={{ marginTop: 40, fontStyle: "italic" }}>
        Technical architecture and phase detail available in the Technical
        Overview.
      </p>
    </main>
  );
}
