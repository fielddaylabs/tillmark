"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";
type FooterFeedbackTone = "success" | "error";
type DevReportRequest = {
  handled: boolean;
  respond: (result: { ok: boolean; message: string }) => void;
};

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
  const [footerFeedback, setFooterFeedback] = useState<{ tone: FooterFeedbackTone; message: string } | null>(null);
  const longPressTimerRef = useRef<number | null>(null);
  const longPressTriggeredRef = useRef(false);
  const feedbackTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const nextTheme = document.documentElement.dataset.theme;
    if (nextTheme === "dark" || nextTheme === "light") setTheme(nextTheme);
  }, []);

  useEffect(() => {
    function cancelLongPress() {
      if (longPressTimerRef.current != null) window.clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }

    cancelLongPress();
    longPressTriggeredRef.current = false;
    return cancelLongPress;
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", cancelLongPress, { passive: true });
    return () => window.removeEventListener("scroll", cancelLongPress);
  }, [pathname]);

  useEffect(() => () => {
    if (feedbackTimerRef.current != null) window.clearTimeout(feedbackTimerRef.current);
  }, []);

  function showFooterFeedback(message: string, tone: FooterFeedbackTone) {
    setFooterFeedback({ message, tone });
    if (feedbackTimerRef.current != null) window.clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = window.setTimeout(() => setFooterFeedback(null), 3500);
  }

  function requestDevReport() {
    const request: DevReportRequest = {
      handled: false,
      respond: ({ ok, message }) => showFooterFeedback(message, ok ? "success" : "error"),
    };
    window.dispatchEvent(new CustomEvent<DevReportRequest>("tillmark:copy-dev-report", { detail: request }));
    if (!request.handled) showFooterFeedback("Open Capture and load a receipt before copying its report.", "error");
  }

  function cancelLongPress() {
    if (longPressTimerRef.current != null) window.clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = null;
  }

  function handleFooterPointerDown(event: React.PointerEvent<HTMLAnchorElement>) {
    if (event.button !== 0) return;
    cancelLongPress();
    longPressTriggeredRef.current = false;
    longPressTimerRef.current = window.setTimeout(() => {
      longPressTriggeredRef.current = true;
      requestDevReport();
      longPressTimerRef.current = null;
    }, 900);
  }

  function handleFooterPointerUp(event: React.PointerEvent<HTMLAnchorElement>) {
    const wasLongPress = longPressTriggeredRef.current;
    cancelLongPress();
    if (wasLongPress) {
      event.preventDefault();
    }
  }

  function handleFooterClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (event.altKey) {
      event.preventDefault();
      requestDevReport();
      return;
    }
    if (longPressTriggeredRef.current) {
      event.preventDefault();
      longPressTriggeredRef.current = false;
    }
  }

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch {
      // Theme still applies when browser storage is unavailable.
    }
  }

  return (
    <main className={`shell ${pathname === "/kitchen" ? "is-kitchen-route" : ""}`}>
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
        <div className="footer-meta">
          <a
            className="footer-credit"
            href="https://fieldday.dev"
            target="_blank"
            rel="noreferrer"
            aria-describedby="developer-shortcut-hint"
            aria-keyshortcuts="Alt+Enter"
            onPointerDown={handleFooterPointerDown}
            onPointerUp={handleFooterPointerUp}
            onPointerLeave={cancelLongPress}
            onPointerCancel={cancelLongPress}
            onClick={handleFooterClick}
            onKeyDown={(event) => {
              if (event.altKey && event.key === "Enter") {
                event.preventDefault();
                requestDevReport();
              }
            }}
          >
            Built by Field Day Labs LLC
          </a>
          <span>Seeded demo data · stored locally in this browser</span>
          <span id="developer-shortcut-hint" className="sr-only">Short click opens Field Day. Hold this link briefly, or press Alt plus Enter when it is focused, to copy the receipt development report.</span>
          {footerFeedback && <span className={`footer-feedback ${footerFeedback.tone === "error" ? "is-error" : ""}`} role={footerFeedback.tone === "error" ? "alert" : "status"}>{footerFeedback.message}</span>}
        </div>
      </footer>
    </main>
  );
}
