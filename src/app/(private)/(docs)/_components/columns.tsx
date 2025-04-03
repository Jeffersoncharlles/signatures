"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ActionsViews } from "./actions-views";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DocumentsPDF = {
  id: string;
  name: string;
  status: string;
  user: string;
};

export const columns: ColumnDef<DocumentsPDF>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "user",
    header: "User",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const pdf = row.original;

      return <ActionsViews pdf={pdf} />;
    },
  },
];
