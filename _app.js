export default function MyApp({ Component, pageProps }) {
  const linkStyle = { textDecoration: "none", color: "#111" };

  return (
    <>
      <nav
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid #eee",
          display: "flex",
          gap: "24px",
          fontFamily: "system-ui",
          fontSize: 15,
          alignItems: "center",
        }}
      >
        <a href="/" style={{ ...linkStyle, fontWeight: 600 }}>
          Beyond Health Systems
        </a>
        <a href="/platform" style={linkStyle}>Platform</a>
        <a href="/beyond-claims" style={linkStyle}>Beyond-Claims</a>
        <a href="/beyond-truth" style={linkStyle}>Beyond-Truth</a>
        <a href="/pricing" style={linkStyle}>Pricing</a>
        <a href="/contact" style={linkStyle}>Contact</a>
      </nav>

      <Component {...pageProps} />

      <footer
        style={{
          marginTop: 80,
          padding: "40px",
          borderTop: "1px solid #eee",
          fontSize: 13,
          color: "#555",
          fontFamily: "system-ui",
        }}
      >
        © {new Date().getFullYear()} Beyond Health Systems
      </footer>
    </>
  );
}
