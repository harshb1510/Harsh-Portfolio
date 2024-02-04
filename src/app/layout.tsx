import type { Metadata } from "next";

import "./globals.css";
import logo from "../../public/logo.png";

export const metadata: Metadata = {
  title: "Harsh",
  description: "Personal Portfolio",
  icons: {
    icon: logo.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-transparent">{children}</body>
    </html>
  );
}
