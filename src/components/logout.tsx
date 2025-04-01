"use client";

import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

export const Logout = () => {
  return (
    <div className="px-6">
      <Button variant={"ghost"}>
        <LogOut />
        Sair
      </Button>
    </div>
  );
};
