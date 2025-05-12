import { Metadata } from "next";
import HeaderLandingPage from "./_components/header-landing-page";

export const metadata: Metadata = {
  title: "Signatures",
  description: "Um App onde pode fazer a assinatura dos seus documentos pdf",
  openGraph: {
    title: "Signatures",
    description: "Um App onde pode fazer a assinatura dos seus documentos pdf",
    url: `https://signatures-chi.vercel.app/og-image.png`,
    siteName: "Signatures",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `https://signatures-chi.vercel.app/og-image.png`,
        width: 800,
        height: 600,
        alt: "Signatures",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex  min-h-svh flex-col  bg-muted  ">
      <div className=" border-b w-full p-6">
        <HeaderLandingPage />
      </div>
      <section className="flex max-w-7xl mx-auto flex-col w-full py-6">
        {children}
      </section>
    </main>
  );
}
