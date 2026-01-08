export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          minHeight: "80vh",
          backgroundImage: "url('/images/hero-background-light.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Light overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.88)",
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "120px 40px",
          }}
        >
          <h1
            style={{
              fontSize: "44px",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "24px",
              color: "#0f172a",
            }}
          >
            A Real Claims Recovery Solution — With Zero Financial Risk
          </h1>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "820px",
              lineHeight: 1.6,
              color: "#334155",
              marginBottom: "28px",
            }}
          >
            Healthcare leaders: the era of payers quietly keeping your earned
            dollars is ending. RCM workflows optimized posting and exceptions —
            not continuous recovery. That limitation is over.
          </p>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "820px",
              lineHeight: 1.6,
              color: "#334155",
            }}
          >
            Beyond-Claims is a deterministic recovery engine that audits paid and
            denied claims line-by-line, corrects what was misadjudicated, and
            recovers revenue previously left behind — with no upfront cost and
            payment only on dollars actually collected.
          </p>
        </div>
      </section>
    </>
  );
}
