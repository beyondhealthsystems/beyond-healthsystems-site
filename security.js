// /pages/security.js

export default function Security() {
  return (
    <main style={{ padding: "80px", fontFamily: "system-ui", maxWidth: 1000 }}>
      <h1>Security & Data Protection</h1>

      <p>
        Beyond Health Systems is designed for enterprise environments where data
        integrity, access control, and auditability are critical.
      </p>

      <h2>Core Security Principles</h2>
      <ul>
        <li>Least-privilege access</li>
        <li>Deterministic, auditable processing</li>
        <li>No black-box decision paths</li>
        <li>Separation of data ingestion, evaluation, and enforcement</li>
      </ul>

      <h2>Data Handling</h2>
      <p>
        Data is processed solely for validation, audit, and recovery purposes.
        Beyond does not resell, repurpose, or monetize client data.
      </p>

      <h2>Audit & Traceability</h2>
      <p>
        All system outputs are traceable to source inputs, with reproducible
        evaluation logic designed for internal and external review.
      </p>

      <p style={{ marginTop: 40, fontStyle: "italic" }}>
        Detailed security documentation is available upon request.
      </p>
    </main>
  );
}
