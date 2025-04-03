import { Separator } from "@/components/ui/separator";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

import InputFiles from "./_components/input-files";
import { fetchDocuments } from "./_actions/fetchdocuments";

export default async function Docs() {
  const data = [
    {
      id: "22312312",
      name: "Detran",
      user: "Jefferson",
      status: "PENDING",
    },
  ];

  const datas = await fetchDocuments();

  console.log(datas);

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
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
