import { Button } from "@/components/ui/button";
import { PenIcon } from "lucide-react";
import Link from "next/link";

const HeaderLandingPage = () => {
  return (
    <header className="flex max-w-7xl mx-auto justify-between ">
      <a href="#" className="flex items-center gap-2 self-center font-medium">
        <PenIcon className="fill-primary text-primary-foreground size-6" />
        Signature
      </a>

      <nav className="flex gap-2">
        <Button asChild variant={"outline"}>
          <Link href="/sign-up">Cadastrar</Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">Login</Link>
        </Button>
      </nav>
    </header>
  );
};
export default HeaderLandingPage;
