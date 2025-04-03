import { Separator } from "@/components/ui/separator";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

import InputFiles from "./_components/input-files";
import { fetchDocuments } from "./_actions/fetchdocuments";
import { Suspense } from "react";

export default async function Docs() {
  const fetchResult = await fetchDocuments();

  return (
    <div className="flex flex-col">
      <div className="py-10 ">
        <h1>Documentos</h1>
        <Separator />
      </div>
      <div className="">
        <InputFiles />
      </div>
      <div className=" py-4">
        <Suspense fallback={<>carregando</>}>
          <DataTable
            columns={columns}
            data={fetchResult?.documentsUser?.documents || []}
          />
        </Suspense>
      </div>
    </div>
  );
}
