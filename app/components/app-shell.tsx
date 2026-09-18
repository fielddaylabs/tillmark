"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

const themeStorageKey = "tillmark-theme";
const navigation = [
  { href: "/capture", label: "Capture" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/todo", label: "To-Do" },
  { href: "/kitchen", label: "Kitchen" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const nextTheme = document.documentElement.dataset.theme;
    if (nextTheme === "dark" || nextTheme === "light") setTheme(nextTheme);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch {
      // Theme still applies for this session.
    }
  }

  return (
    <main className="shell">
      <header className="topbar">
        <Link className="brand" href="/capture" aria-label="Tillmark home">
          <span>TM</span> Tillmark
        </Link>
        <nav className="product-nav" aria-label="Product areas">
          {navigation.map((item) => {
            const active = item.href === "/capture"
              ? pathname === "/" || pathname === "/capture"
              : pathname.startsWith(item.href);
            return <Link className={active ? "active" : ""} href={item.href} key={item.href} aria-current={active ? "page" : undefined}>{item.label}</Link>;
          })}
        </nav>
        <div className="topbar-actions">
          <span className="mode">Demo workspace · six homes</span>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-pressed={theme === "dark"} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
            <span className="theme-icon" aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
            <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
          </button>
        </div>
      </header>
      {children}
      <footer>
        <span>Tillmark / Residential food operations</span>
        <div className="footer-meta"><a className="footer-credit" href="https://fieldday.dev" target="_blank" rel="noreferrer">Built by Field Day Labs</a><span>Seeded demo data · this browser session only</span></div>
      </footer>
    </main>
  );
}
