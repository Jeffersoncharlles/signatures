import { PenIcon } from "lucide-react";
import { Metadata } from "next";

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
    <main className="flex  min-h-svh flex-col  bg-muted  ">
      <div className=" border-b w-full p-6">
        <header className="flex max-w-7xl mx-auto">
          <a
            href="#"
            className="flex items-center gap-2 self-center font-medium"
          >
            <PenIcon className="fill-primary text-primary-foreground size-6" />
            Signature
          </a>
        </header>
      </div>
      <section className="flex max-w-7xl mx-auto flex-col w-full py-6">
        {children}
      </section>
    </main>
  );
}
