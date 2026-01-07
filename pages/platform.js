export default function Platform() {
  return (
    <main style={{ padding: "4rem", fontFamily: "system-ui", maxWidth: 1000 }}>
      <h1 style={{ fontSize: 40 }}>The Platform</h1>

      <p style={{ fontSize: 18, lineHeight: 1.7, marginTop: 16 }}>
        Beyond Health Systems is a system-level healthcare intelligence platform
        built to expose financial truth after claims are marked “paid.”
      </p>

      <p style={{ fontSize: 18, lineHeight: 1.7 }}>
        Traditional revenue cycle systems stop auditing once a payment posts.
        We do not.
      </p>

      <hr style={{ margin: "32px 0" }} />

      <h2>What makes this different</h2>
      <ul style={{ fontSize: 16, lineHeight: 1.8 }}>
        <li>Non-interfering auditing layer — no disruption to billing workflows</li>
        <li>Deterministic logic, not probabilistic guesswork</li>
        <li>Line-level financial enforcement validation</li>
        <li>Fully auditable outputs (CSV, JSON, FHIR)</li>
      </ul>

      <hr style={{ margin: "32px 0" }} />

      <h2>Who this is for</h2>
      <ul style={{ fontSize: 16, lineHeight: 1.8 }}>
        <li>Hospitals and health systems</li>
        <li>Large physician groups</li>
        <li>RCM vendors and clearinghouses</li>
        <li>Consulting and audit firms</li>
      </ul>

      <p style={{ fontSize: 17, marginTop: 24 }}>
        Typical deployments uncover <b>6–10% additional collectible revenue</b>
        on already-billed claims — without increasing denial volume.
      </p>
    </main>
  );
}
