import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Signatures",
  description: "Um App onde pode fazer a assinatura dos seus documentos pdf",
  openGraph: {
    locale: "pt-BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
