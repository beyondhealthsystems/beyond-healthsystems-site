// /pages/index.js

export default function Home() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 40px" }}>

      {/* HERO */}
      <section style={{ marginBottom: 80 }}>
        <h1 style={{ fontSize: 42, marginBottom: 16 }}>
          A real claims recovery solution — with zero financial risk.
        </h1>

        {/* MOVED OPENER — NOW CORRECTLY PLACED */}
        <p style={{ fontSize: 20, fontWeight: 500, marginBottom: 24 }}>
          <strong>
            Healthcare leaders: the era of payers quietly keeping your earned
            dollars is ending.
          </strong>
          <br />
          RCM workflows optimized posting and exceptions — not continuous
          recovery. That limitation is over.
        </p>

        <p style={{ fontSize: 18, maxWidth: 900 }}>
          Powered by <strong>Beyond-Claims</strong>, a{" "}
          <strong>deterministic</strong> recovery engine (not probabilistic “AI
          insights”). No upfront cost. No consulting fees.{" "}
          <strong>Payment only on recovered dollars.</strong>
        </p>

        <p style={{ fontSize: 18, maxWidth: 900, marginTop: 16 }}>
          Recover year-one cash that can materially expand operating capacity —
          and identify multi-year recovery opportunity across the past ~5 years.
        </p>

        <div style={{ marginTop: 30 }}>
          <button style={{ marginRight: 16 }}>Run the audit</button>
          <button>See what “paid” got wrong</button>
        </div>
      </section>

      {/* WHY THIS REVENUE WAS LEFT BEHIND */}
      <section style={{ marginBottom: 80 }}>
        <h2>This revenue wasn’t missed. It was left behind.</h2>

        <p style={{ fontSize: 18 }}>
          Hospitals didn’t fail to recover this money.
          <br />
          <strong>
            The economics — and the lack of enabling technology — made recovery
            uneconomical.
          </strong>
        </p>

        <ul style={{ fontSize: 17, marginTop: 20 }}>
          <li>Paid claims auto-close once payment is non-zero</li>
          <li>Partial payments don’t trigger denials</li>
          <li>Line-item errors vanish inside totals</li>
          <li>Manual follow-up costs more than expected recovery</li>
          <li>
            Human workforces cannot review paid claims at the speed, scale, or
            cost required
          </li>
          <li>
            Smaller-balance claims are routinely abandoned because traditional
            RCM workflows cannot afford to work them
          </li>
          <li>
            Until now, autonomous technology capable of auditing and recovering
            this revenue reliably did not exist
          </li>
        </ul>

        <p style={{ marginTop: 16, fontStyle: "italic" }}>
          The problem wasn’t awareness. <strong>It was feasibility.</strong>
        </p>
      </section>

      {/* SCALE OF THE PROBLEM */}
      <section style={{ marginBottom: 80 }}>
        <h2>The scale of the problem</h2>

        <p style={{ fontSize: 18, maxWidth: 950 }}>
          At roughly <strong>$2.9T</strong> in claims-based provider spend, even a{" "}
          <strong>~14–15% initial denial rate</strong> means{" "}
          <strong>hundreds of billions of dollars</strong> enter denial workflows
          each year — while many “paid” claims still contain underpayments that
          never get reworked because recovery has historically been uneconomical
          at scale, especially for smaller claims that RCM teams can’t justify
          pursuing.
        </p>

        <p style={{ marginTop: 10 }}>
          Beyond-Claims does not estimate this number.
          <br />
          <strong>
            We quantify your exact recovery opportunity by audit — claim by
            claim, service line by line.
          </strong>
        </p>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section style={{ marginBottom: 80 }}>
        <h2>What makes this different</h2>

        <h3>Deterministic. Auditable. Executable.</h3>

        <p style={{ fontSize: 18 }}>
          Beyond-Claims does not predict outcomes. It{" "}
          <strong>verifies errors and executes recovery</strong>.
        </p>

        <ul style={{ fontSize: 17, marginTop: 20 }}>
          <li>
            <strong>Deterministic logic</strong> — rules-based recovery, not
            probabilistic models
          </li>
          <li>
            <strong>Claim-level proof</strong> — every finding is traceable and
            auditable
          </li>
          <li>
            <strong>Machine-scale execution</strong> — corrections generated and
            submitted automatically
          </li>
        </ul>

        <p style={{ marginTop: 16 }}>
          Every recovered dollar ties back to a specific claim, a specific
          error, and a specific correction.
        </p>

        <p>No black boxes. No trust required.</p>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ marginBottom: 80 }}>
        <h2>How it works</h2>

        <p>
          <strong>1) Audit — Proof</strong>
          <br />
          We analyze historical paid claims to identify verifiable underpayments
          and misadjudications.
        </p>

        <p>
          <strong>2) Recover — Execution</strong>
          <br />
          Corrections are generated and submitted at scale — automatically.
        </p>

        <p>
          <strong>3) Pay — Alignment</strong>
          <br />
          You pay only from money you actually receive. No recovery = no cost.
        </p>
      </section>

      {/* WHAT THIS ENABLES */}
      <section style={{ marginBottom: 80 }}>
        <h2>What this enables</h2>

        <ul style={{ fontSize: 17 }}>
          <li>Nurse retention and staffing stability</li>
          <li>Physician support and burnout reduction</li>
          <li>Equipment upgrades that were deferred</li>
          <li>IT and clinical modernization</li>
          <li>Margin stabilization without cuts</li>
        </ul>

        <p>
          This isn’t new revenue. <strong>It’s earned revenue returned.</strong>
        </p>
      </section>

      {/* CLOSE */}
      <section style={{ marginBottom: 60 }}>
        <h2>You assume zero financial risk.</h2>

        <ul style={{ fontSize: 17 }}>
          <li>No upfront cost</li>
          <li>No consulting fees</li>
          <li>No workflow disruption</li>
          <li>No headcount expansion</li>
        </ul>

        <p>
          Beyond-Claims only succeeds if <strong>you get paid</strong>.
        </p>

        <h3 style={{ marginTop: 40 }}>Start with proof.</h3>
        <p>
          Run the audit. See what “paid” got wrong. Decide with evidence — not
          promises.
        </p>

        <button>Run the audit</button>

        <p style={{ marginTop: 20, fontSize: 13, color: "#555" }}>
          Audit scope, recovery potential, and timing vary by payer, contract,
          and historical claim profile.
        </p>
      </section>
    </main>
  );
}
