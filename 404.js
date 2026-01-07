// /pages/404.js

export default function NotFound() {
  return (
    <main style={{ padding: "80px", fontFamily: "system-ui", maxWidth: 900 }}>
      <h1>Page Not Found</h1>

      <p>
        The page you’re looking for does not exist or may have moved.
      </p>

      <p>
        <a href="/">Return to the homepage →</a>
      </p>
    </main>
  );
}
