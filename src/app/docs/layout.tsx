import Header from "@/components/header";

export default function DocumentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" h-dvh  w-ful antialiased ">
      <Header />
      <main className="max-w-5xl flex px-2 md:block md:px-4 h-dvh mx-auto  justify-center md:justify-normal ">
        {children}
      </main>
    </main>
  );
}
