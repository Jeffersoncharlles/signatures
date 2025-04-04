"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Trash } from "lucide-react";
import { DocumentsPdF } from "./columns";

interface Props {
  pdf: DocumentsPdF;
}

export const ActionsViews = ({ pdf }: Props) => {
  const handleViewPdf = async (id: string) => {
    const res = await fetch("/api/view-document", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.success && data.signedUrl) {
      window.open(data.signedUrl, "_blank");
    } else {
      alert("Erro ao visualizar PDF");
    }
  };

  const handleDeletePDF = async (id: string) => {
    const res = await fetch("/api/view-document", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.json();

    console.log({ data });
  };

  return (
    <div>
      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="space-y-1">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem className="text-red-800 cursor-pointer">
              Deletar PDF
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-yellow-800 cursor-pointer"
              onClick={() => handleViewPdf(pdf.id)}
            >
              Ver PDF
            </DropdownMenuItem>
            <DropdownMenuItem className="text-green-700 cursor-pointer">
              ASSINAR PDF
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="hidden sm:flex gap-2">
        <Button variant={"destructive"} onClick={() => handleDeletePDF(pdf.id)}>
          <Trash />
        </Button>
        <Button onClick={() => handleViewPdf(pdf.id)}>Ver</Button>
        <Button>Assinar</Button>
      </div>
    </div>
  );
};
