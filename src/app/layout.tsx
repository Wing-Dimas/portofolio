"use client";
import { useDarkModeStore } from "@/store/DarkMode";
import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  variable: "--font-quicksand",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${quicksand.className} font-quicksand ${
          isDarkMode ? "dark bg-dark" : "bg-light"
        }`}
      >
        {children}
      </body>
    </html>
  );
}
