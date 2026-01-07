// /pages/about.js

export default function About() {
  return (
    <main style={{ padding: "80px", fontFamily: "system-ui", maxWidth: 1000 }}>
      <h1>About Beyond Health Systems</h1>

      <p>
        Beyond Health Systems was created to address a structural gap in
        healthcare operations: the lack of verification once claims are marked
        “paid.”
      </p>

      <p>
        Existing infrastructure is optimized for throughput and closure, not
        for validating correctness. Over time, this creates systemic financial
        leakage that remains unmeasured and unaddressed.
      </p>

      <p>
        Beyond was built to introduce audit-first intelligence, deterministic
        recovery, and verifiable financial truth — without disrupting existing
        workflows.
      </p>

      <p>
        The platform is designed for enterprise environments where accuracy,
        accountability, and scale matter.
      </p>
    </main>
  );
}

