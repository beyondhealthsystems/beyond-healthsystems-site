// /pages/_app.js

import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav
        style={{
          padding: "24px 40px",
          borderBottom: "1px solid #eee",
          display: "flex",
          gap: 24,
          alignItems: "center",
          fontFamily: "system-ui",
        }}
      >
        <Link href="/" style={{ fontWeight: 600 }}>
          Beyond Health Systems
        </Link>
        <Link href="/platform">Platform</Link>
        <Link href="/beyond-claims">Beyond-Claims</Link>
        <Link href="/beyond-truth">Beyond-Truth</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <Component {...pageProps} />
    </>
  );
}

