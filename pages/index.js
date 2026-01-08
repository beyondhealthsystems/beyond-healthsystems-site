export default function Home() {
  return (
    <div style={{ fontFamily: "Georgia, serif" }}>
      {/* NAVIGATION */}
      <nav
        style={{
          padding: "18px 40px",
          borderBottom: "1px solid #e5e7eb",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "24px",
            fontSize: "16px",
          }}
        >
          <a href="/" style={{ textDecoration: "none" }}>Beyond Health Systems</a>
          <a href="/platform" style={{ textDecoration: "none" }}>Platform</a>
          <a href="/beyond-claims" style={{ textDecoration: "none" }}>Beyond-Claims</a>
          <a href="/beyond-truth" style={{ textDecoration: "none" }}>Beyond-Truth</a>
          <a href="/pricing" style={{ textDecoration: "none" }}>Pricing</a>
          <a href="/contact" style={{ textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "65vh",
          backgroundImage: "url('/images/hero-background-light.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* CORRECT OVERLAY (LIGHT, NOT WHITEOUT) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.72)",
          }}
        />

        {/* HERO CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "110px 40px 90px",
          }}
        >
          <h1
            style={{
              fontSize: "44px",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "24px",
              color: "#0f172a",
            }}
          >
            A Real Claims Recovery Solution — With Zero Financial Risk
          </h1>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "860px",
              lineHeight: 1.6,
              color: "#1f2937",
              marginBottom: "26px",
            }}
          >
            Healthcare leaders: the era of payers quietly keeping your earned
            dollars is ending. RCM workflows optimized posting and exceptions —
            not continuous recovery. That limitation is over.
          </p>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "860px",
              lineHeight: 1.6,
              color: "#1f2937",
            }}
          >
            Beyond-Claims is a deterministic recovery engine that audits paid and
            denied claims line-by-line, corrects what was misadjudicated, and
            recovers revenue previously left behind — with no upfront cost and
            payment only on dollars actually collected.
          </p>
        </div>
      </section>
    </div>
  );
}
