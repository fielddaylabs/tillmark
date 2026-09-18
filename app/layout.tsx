import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tillmark — Receipt OCR",
  description: "Tillmark turns receipt photos into structured purchasing data.",
};

const themeScript = `(() => {
  try {
    const storedTheme = localStorage.getItem("tillmark-theme");
    const theme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    document.documentElement.dataset.theme = theme;
  } catch {}
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
