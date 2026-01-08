export default function Home() {
  return (
    <main style={{ fontFamily: "Georgia, serif", color: "#0f172a" }}>
      
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          minHeight: "80vh",
          backgroundImage: "url('/hero-background-light.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* LIGHT OVERLAY FOR READABILITY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255, 255, 255, 0.75)", // key fix
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            position: "relative",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "140px 40px",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              lineHeight: "1.15",
              marginBottom: "24px",
            }}
          >
            A Real Claims Recovery Solution — With Zero Financial Risk
          </h1>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "800px",
              marginBottom: "24px",
            }}
          >
            Healthcare leaders: the era of payers quietly keeping your earned
            dollars is ending. RCM workflows optimized posting and exceptions —
            not continuous recovery. That limitation is over.
          </p>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "800px",
            }}
          >
            Beyond-Claims is a deterministic recovery engine that audits paid
            and denied claims line-by-line, corrects what was misadjudicated,
            and recovers revenue previously left behind — with no upfront
            cost and payment only on dollars actually collected.
          </p>
        </div>
      </section>
    </main>
  );
}
