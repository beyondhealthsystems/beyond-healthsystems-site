// /pages/platform.js  (layout normalization)

export default function Platform() {
  return (
    <section style={{ padding: "120px 40px", maxWidth: 1100 }}>
      <h1>The Platform</h1>

      <p style={{ fontSize: 18, maxWidth: 900 }}>
        Beyond Health Systems is a system-level intelligence platform designed to
        verify outcomes after claims are marked paid.
      </p>

      <section style={{ marginTop: 60 }}>
        <h2>Why it exists</h2>
        <p>
          Existing infrastructure assumes correctness once payment posts.
          Beyond verifies that assumption.
        </p>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>How it works</h2>
        <p>
          Beyond introduces an audit-first layer above traditional workflows,
          without operational disruption.
        </p>
      </section>
    </section>
  );
}
