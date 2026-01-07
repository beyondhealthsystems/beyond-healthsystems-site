// /pages/_app.js

import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb"
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "system-ui"
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 18 }}>
            <Link href="/" style={{ textDecoration: "none", color: "#0f172a" }}>
              Beyond Health Systems
            </Link>
          </div>

          <nav style={{ display: "flex", gap: 24, fontSize: 14 }}>
            <Link href="/platform">Platform</Link>
            <Link href="/beyond-claims">Beyond-Claims</Link>
            <Link href="/beyond-truth">Beyond-Truth</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/who-its-for">Who It’s For</Link>
            <Link href="/technical">Technical</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Component {...pageProps} />
      </main>

      <footer
        style={{
          marginTop: 120,
          padding: "40px",
          borderTop: "1px solid #e5e7eb",
          fontFamily: "system-ui",
          fontSize: 14,
          color: "#475569"
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          © {new Date().getFullYear()} Beyond Health Systems
        </div>
      </footer>
    </>
  );
}
