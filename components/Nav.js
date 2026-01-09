import { useEffect, useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const styles = {
    navWrap: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
    },
    container: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "0 40px",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "14px 0",
    },
    navLeft: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: 16,
      whiteSpace: "nowrap",
    },
    navLinks: {
      display: isMobile ? "none" : "flex",
      gap: 18,
      flexWrap: "wrap",
      justifyContent: "flex-end",
      fontSize: 14,
      alignItems: "center",
    },
    a: {
      color: "#1e3a8a",
      textDecoration: "none",
      fontWeight: 600,
    },
    menuButton: {
      display: isMobile ? "block" : "none",
      background: "transparent",
      border: "1px solid rgba(15, 23, 42, 0.18)",
      borderRadius: 10,
      padding: "8px 10px",
      fontWeight: 700,
      cursor: "pointer",
      color: "#1e3a8a",
      lineHeight: 1,
    },
    mobileMenu: {
      display: isMobile && menuOpen ? "block" : "none",
      padding: "10px 0 14px",
      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
    },
    mobileLink: {
      display: "block",
      padding: "10px 0",
      color: "#1e3a8a",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: 14,
    },
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/platform", label: "Platform" },
    { href: "/beyond-claims", label: "Beyond-Claims" },
    { href: "/beyond-truth", label: "Beyond-Truth" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div style={styles.navWrap}>
      <div style={styles.container}>
        <div style={styles.nav}>
          <div style={styles.navLeft}>Beyond Health Systems</div>

          <button
            style={styles.menuButton}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            Menu
          </button>

          <div style={styles.navLinks}>
            {links.map((l) => (
              <a key={l.href} style={styles.a} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div style={styles.mobileMenu}>
          {links.map((l) => (
            <a
              key={l.href}
              style={styles.mobileLink}
              href={l.href}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
