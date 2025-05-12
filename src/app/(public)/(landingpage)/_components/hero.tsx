import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { PenIcon } from "lucide-react";

const HeroSection = () => {
  const words = [
    {
      text: "Assinatura",
    },
    {
      text: "Digital",
    },
    {
      text: "Simples",
    },
    {
      text: "e",
    },
    {
      text: "Acessível.",
      className: "text-primary ",
    },
  ];

  return (
    <div className="flex  gap-6 justify-between items-center h-screen">
      <div className="gap-6 flex flex-col  w-[640px]">
        <div className="h-[120px] w-full">
          <TypewriterEffect
            words={words}
            cursorClassName="bg-primary "
            className="text-xl"
          />
        </div>
        <div className="w-[480px] mt-4">
          <p className="text-lg  text-zinc-500">
            Com o Signature, você assina seus PDFs em segundos. Sem burocracia.
            Sem limites desnecessários.
          </p>
        </div>
        <Button className="p-6">Experimente Grátis</Button>
      </div>
      <div className="w-full flex  items-center justify-end p-6">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          <PenIcon className="fill-primary text-primary-foreground size-36" />{" "}
          <br /> <Cover className="text-primary">Signature</Cover>
        </h1>
      </div>
    </div>
  );
};
export default HeroSection;
