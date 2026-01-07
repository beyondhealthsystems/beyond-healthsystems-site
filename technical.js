// /pages/technical.js

export default function Technical() {
  return (
    <main style={{ padding: "80px", fontFamily: "system-ui", maxWidth: 1100 }}>
      <h1>Technical Overview</h1>

      <p>
        The Beyond platform is engineered for determinism, auditability, and
        operational safety. Every output is explainable, reproducible, and
        reviewable.
      </p>

      <h2>Design Principles</h2>
      <ul>
        <li>Deterministic logic — identical inputs produce identical outputs</li>
        <li>Full claim- and line-level traceability</li>
        <li>No interference with existing billing or RCM systems</li>
        <li>Enterprise-scale processing without manual queues</li>
      </ul>

      <h2>High-Level Architecture</h2>
      <p>
        Beyond ingests adjudicated claims and payment data, normalizes outcomes,
        and evaluates them against contractual and policy expectations.
      </p>

      <p>
        Results are persisted with a complete audit trail and, where applicable,
        passed to autonomous correction and recovery workflows.
      </p>

      <h2>Phased Capability Model</h2>
      <p>
        Platform functionality is delivered through a multi-phase architecture.
        Early phases focus on normalization and validation. Later phases enable
        autonomous enforcement, recovery, and prevention.
      </p>

      <p>
        Phase-level implementation details are intentionally abstracted here to
        preserve system integrity.
      </p>

      <h2>Audit & Governance</h2>
      <ul>
        <li>Verifiable source-to-outcome lineage</li>
        <li>Clear separation of detection and enforcement</li>
        <li>Designed for compliance, audit, and executive review</li>
      </ul>

      <p style={{ marginTop: 40, fontStyle: "italic" }}>
        Detailed technical documentation is available under NDA.
      </p>
    </main>
  );
}
