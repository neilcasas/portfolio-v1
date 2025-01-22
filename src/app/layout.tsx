import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Neil Casas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
