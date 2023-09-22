"use client";
import { useDarkModeStore } from "@/store/DarkMode";
import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio Dimas Wing Bagas Bimantara",
  keywords: "Dimas Wing Bagas Bimnatara, Portofolio, Software Engineering",
};

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
