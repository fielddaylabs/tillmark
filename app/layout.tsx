import type { Metadata } from "next";
import "./globals.css";
import { DemoProvider } from "./components/demo-context";

export const metadata: Metadata = {
  title: "Tillmark | Food operations",
  description: "Tillmark turns purchasing activity into clear operational action.",
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
      <body><DemoProvider>{children}</DemoProvider></body>
    </html>
  );
}
