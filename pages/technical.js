export default function Technical() {
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
      <h1>Technical Overview</h1>

      <p style={{ fontSize: 18, maxWidth: 900 }}>
        Beyond Health Systems is engineered for determinism, auditability,
        and operational safety. The platform is designed to be evaluated,
        validated, and trusted — not treated as a black box.
      </p>

      <h2>Design Principles</h2>
      <ul style={{ maxWidth: 900 }}>
        <li>Deterministic logic — identical inputs always produce identical outputs</li>
        <li>Full traceability from source data to outcome</li>
        <li>Non-interference with existing billing and RCM systems</li>
        <li>Scalable across millions of claims without human review queues</li>
      </ul>

      <h2>System Architecture (High-Level)</h2>
      <p style={{ maxWidth: 900 }}>
        The platform ingests adjudicated claim and payment data, normalizes it,
        and evaluates outcomes against contractual and policy expectations.
      </p>
      <p style={{ maxWidth: 900 }}>
        Evaluation results are persisted with a complete audit trail and,
        where applicable, passed to autonomous correction and resubmission
        workflows.
      </p>

      <h2>Phased Delivery Model</h2>
      <p style={{ maxWidth: 900 }}>
        Platform capability is delivered through a multi-phase architecture.
        Early phases focus on normalization, validation, and classification.
        Later phases enable autonomous enforcement, learning, and prevention.
      </p>

      <p style={{ maxWidth: 900 }}>
        Phase details are intentionally abstracted here to preserve system
        integrity while remaining reviewable by technical and audit teams.
      </p>

      <h2>Audit & Governance</h2>
      <ul style={{ maxWidth: 900 }}>
        <li>Claim- and line-level audit artifacts</li>
        <li>Reproducible evaluations</li>
        <li>Clear separation of detection, decision, and enforcement</li>
        <li>Designed for internal audit, compliance, and external review</li>
      </ul>

      <p style={{ marginTop: 40, fontStyle: "italic" }}>
        Detailed technical documentation is available under NDA.
      </p>
    </main>
  );
}
