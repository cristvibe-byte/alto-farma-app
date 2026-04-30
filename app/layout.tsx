import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alto Farma App",
  description: "AI Studio App - Alto Farma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
