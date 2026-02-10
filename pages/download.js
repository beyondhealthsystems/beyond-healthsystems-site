import Nav from "../components/Nav";

export default function Download() {
  return (
    <>
      <Nav />
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif"
      }}>
        <h1>Download Beyond-Truth</h1>

        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          Deterministic audit engine for hospital and RCM denial recovery.
        </p>

        <div style={{
          marginTop: "40px",
          padding: "30px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9fafb"
        }}>
          <h3>Windows Installer</h3>
          <p>Version 1.0</p>

          <a
            href="https://github.com/beyondhealthsystems/beyond-healthsystems-site/releases/latest/download/Beyond-Truth-Installer.exe"

            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "14px 24px",
              backgroundColor: "#1E3A8A",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold"
            }}
          >
            Download Installer (105 MB)
          </a>
        </div>

        <div style={{ marginTop: "50px" }}>
          <h3>Early Adopter Program</h3>
          <p>
            Risk-free pilot.  
            Performance-based pricing.  
            6–8% recovery uplift typical in line-level short-pays.
          </p>
        </div>
      </div>
    </>
  );
}
