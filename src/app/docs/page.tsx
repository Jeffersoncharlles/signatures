import { Separator } from "@/components/ui/separator";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { Button } from "@/components/ui/button";

export default function Docs() {
  const data = [
    {
      id: "22312312",
      name: "Detran",
      user: "Jefferson",
      status: "PENDING",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="py-10 ">
        <h1>Documentos</h1>
        <Separator />
      </div>
      <div>
        <Button>Upload Novo PDF</Button>
      </div>
      <div className=" py-4">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
