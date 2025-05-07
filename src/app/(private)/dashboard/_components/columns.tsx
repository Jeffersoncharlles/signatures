"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ActionsViews } from "./actions-views";
import { $Enums, STATUS_SIGNED } from "@prisma/client";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DocumentsPdF = {
  id: string;
  name: string;
  userId: string;
  user: string;
  fileKey: string;
  createdAt: Date;
  updatedAt: Date;
  status: $Enums.STATUS_SIGNED;
};

export const columns: ColumnDef<
  {
    id: string;
    name: string;
    userId: string;
    user: string;
    fileKey: string;
    createdAt: Date;
    updatedAt: Date;
    status: STATUS_SIGNED;
  },
  unknown
>[] = [
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
