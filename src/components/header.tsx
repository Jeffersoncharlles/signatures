import { PenIcon } from "lucide-react";
import { Logout } from "./logout";

const Header = () => {
  return (
    <header className="bg-secondary mx-auto h-[60px]  flex items-center shadow-md">
      <header className="w-full mx-auto  max-w-5xl  flex gap-2 text-primary">
        <PenIcon className="fill-primary text-primary-foreground size-6" />
        Signature
      </header>
      <Logout />
    </header>
  );
};
export default Header;
