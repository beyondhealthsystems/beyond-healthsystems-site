export default function BeyondClaims() {
  return (
    <main style={{ padding: "80px", fontFamily: "system-ui", maxWidth: 1100 }}>
      <h1>Beyond-Claims</h1>

      <p>
        Beyond-Claims is the autonomous recovery engine within the Beyond
        platform. It focuses on identifying and correcting underpayments,
        partial payments, and misapplied contract logic — even after claims post
        as “paid.”
      </p>

      <h2>The Problem</h2>

      <p>
        Once a claim posts with a non-zero payment, most systems close the
        account. Manual recovery is economically irrational at scale, leaving
        meaningful revenue permanently uncollected.
      </p>

      <h2>What Beyond-Claims Does</h2>

      <ul>
        <li>Identifies recoverable underpayments</li>
        <li>Determines the correct payable amount</li>
        <li>Generates corrected submissions when appropriate</li>
        <li>Operates without manual intervention</li>
      </ul>

      <h2>Why It Works</h2>

      <p>
        Beyond-Claims changes the economics of recovery. By automating detection
        and correction, recovery becomes feasible at scale — including partials
        that were previously abandoned.
      </p>

      <p>
        The result is measurable uplift in collected revenue without adding
        operational burden.
      </p>
    </main>
  );
}
