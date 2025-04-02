"use client";

import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export const Logout = () => {
  return (
    <div className="px-6">
      <Button variant={"ghost"} onClick={() => signOut()}>
        <LogOut />
        Sair
      </Button>
    </div>
  );
};
