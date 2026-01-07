// /pages/_app.js

import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header
        style={{
          padding: "20px 60px",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "system-ui"
        }}
      >
        <div style={{ fontWeight: 700 }}>
          <Link href="/" style={{ textDecoration: "none", color: "#111" }}>
            Beyond Health Systems
          </Link>
        </div>

        <nav style={{ display: "flex", gap: 20 }}>
          <Link href="/platform">Platform</Link>
          <Link href="/beyond-claims">Beyond-Claims</Link>
          <Link href="/beyond-truth">Beyond-Truth</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/who-its-for">Who It’s For</Link>
          <Link href="/technical">Technical</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <Component {...pageProps} />
    </>
  );
}
