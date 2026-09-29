import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { KoFiWidget } from "@/components/KoFiWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Runs before first paint: applies the stored theme (or the OS preference)
// as a class on <html> so the correct theme renders with no flash.
const themeInitScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.add(d?"dark":"light")}catch(e){}})();`;

export const metadata: Metadata = {
  title: "jhonny",
  description: "Personal website of jhonny - Projects, Education, and Art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
        <KoFiWidget />
      </body>
    </html>
  );
}
