import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tillmark — Receipt OCR",
  description: "Tillmark turns receipt photos into structured purchasing data.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 5c61f4c (init)
