import Header from "@/components/header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DocumentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  // if (!session) {
  //   redirect("/auth");
  // }
  return (
    <main className=" h-dvh  w-ful antialiased ">
      <Header />
      <main className="max-w-5xl flex px-2 md:block md:px-4 h-dvh mx-auto  justify-center md:justify-normal ">
        {children}
      </main>
    </main>
  );
}
