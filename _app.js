export default function MyApp({ Component, pageProps }) {
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
        }}
      >
        <a href="/" style={{ fontWeight: 600 }}>
          Beyond Health Systems
        </a>
        <a href="/platform">Platform</a>
        <a href="/claims">Beyond-Claims</a>
        <a href="/truth">Beyond-Truth</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
      </nav>

      <Component {...pageProps} />
    </>
  );
}
