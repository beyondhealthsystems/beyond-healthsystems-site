export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          background: "#0F172A",
          color: "#F8FAFC",
          padding: "140px 40px 120px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ fontSize: 56, lineHeight: 1.1, marginBottom: 24 }}>
            Paid ≠ Correct.
          </h1>

          <p style={{ fontSize: 22, maxWidth: 820, color: "#CBD5E1" }}>
            Beyond Health Systems audits what was paid, proves what was owed,
            and corrects revenue silently lost after claims post as “paid.”
          </p>

          <p style={{ marginTop: 24, maxWidth: 820, fontSize: 18, color: "#94A3B8" }}>
            Deterministic, auditable healthcare intelligence for claims,
            payments, and enforcement — without disrupting existing RCM workflows.
          </p>

          <div style={{ marginTop: 40 }}>
            <a
              href="/contact"
              style={{
                background: "#16A34A",
                color: "#FFFFFF",
                padding: "14px 24px",
                textDecoration: "none",
                borderRadius: 6,
                fontWeight: 600,
                marginRight: 16,
                display: "inline-block",
              }}
            >
              Request a Private Audit
            </a>

            <a
              href="/platform"
              style={{
                color: "#CBD5E1",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              How the platform works →
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: "100px 40px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 40, marginBottom: 24, color: "#0F172A" }}>
            The largest revenue gap in healthcare isn’t denials.
          </h2>

          <p style={{ fontSize: 18, color: "#334155", maxWidth: 900 }}>
            Most revenue cycle operations focus on denied claims because they are visible.
            The far larger issue lives inside claims that post as “paid.”
          </p>

          <p style={{ fontSize: 18, color: "#334155", maxWidth: 900, marginTop: 16 }}>
            Partial enforcement, contract misapplication, and silent payer behavior
            changes accumulate after payment — where traditional systems stop looking.
          </p>

          <p style={{ fontSize: 18, color: "#334155", maxWidth: 900, marginTop: 16 }}>
            Once money posts, accounts close. Accuracy is assumed. Revenue truth is never verified.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: "100px 40px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 38, marginBottom: 48, color: "#0F172A" }}>
            Beyond audits what others assume is correct.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
            {[
              ["Audit Paid Claims", "Line-item verification after payment, not before."],
              ["Prove Accuracy", "Deterministic logic showing what should have been paid — and why."],
              ["Correct at Scale", "Automatically generate corrected, submission-ready claims."],
              ["Stay Auditable", "Every decision is logged, explainable, and defensible."],
            ].map(([title, desc]) => (
              <div key={title}>
                <h3 style={{ fontSize: 20, marginBottom: 8, color: "#0F172A" }}>{title}</h3>
                <p style={{ color: "#334155" }}>{desc}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 32, color: "#475569", fontSize: 16 }}>
            No appeals. No black boxes. No workflow disruption.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ padding: "100px 40px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 38, marginBottom: 48, color: "#0F172A" }}>
            A unified platform for revenue truth and recovery.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
            <div>
              <h3>Beyond-Claims™</h3>
              <p>
                Autonomous correction and recovery of underpaid and misadjudicated claims —
                including partials most organizations abandon.
              </p>
              <a href="/beyond-claims">Learn more →</a>
            </div>

            <div>
              <h3>Beyond-Truth™</h3>
              <p>
                A deterministic audit layer showing what was paid, what should have been paid,
                and why the difference exists.
              </p>
              <a href="/beyond-truth">Learn more →</a>
            </div>

            <div>
              <h3>Enforcement Intelligence</h3>
              <p>
                Early detection of payer enforcement shifts, denial patterns,
                and systemic revenue leakage.
              </p>
              <a href="/platform">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section style={{ padding: "100px 40px", background: "#0F172A", color: "#F8FAFC" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 44, marginBottom: 16 }}>
            6–10% uplift in collected revenue
          </h2>

          <p style={{ fontSize: 18, color: "#CBD5E1" }}>
            On claims already billed — without increasing staff,
            denial volume, or payer friction.
          </p>
        </div>
      </section>

    </main>
  );
}
