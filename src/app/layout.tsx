import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio Dimas Wing Bagas Bimantara",
  keywords: "Dimas Wing Bagas Bimnatara, Portofolio, Software Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
