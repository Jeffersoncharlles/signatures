"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Esquema de validação Zod (somente PDF)
const fileSchema = z.object({
  file: z
    .any()
    .refine((files) => files && files.length > 0, {
      message: "O arquivo é obrigatório",
    })
    .refine((files) => files[0]?.type === "application/pdf", {
      message: "O arquivo deve ser um PDF",
    }),
});

type filePdF = z.infer<typeof fileSchema>;

const InputFiles = () => {
  const [uploadStatus, setUploadStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<filePdF>({
    resolver: zodResolver(fileSchema),
    defaultValues: {
      file: "",
    },
  });

  const onSubmit = async (data: filePdF) => {
    console.log(data.file[0]);
    if (data.file[0]) {
      setUploadStatus("");
    }

    const formData = new FormData();
    formData.append("file", data.file[0]);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Erro ao enviar o arquivo");

      setUploadStatus("Upload realizado com sucesso!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setUploadStatus("Erro ao enviar o arquivo");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="file" className="w-44" {...register("file")} />
      <Button type="submit">Upload Novo PDF</Button>
      {errors.file?.message && (
        <p className="text-red-500">{String(errors.file.message)}</p>
      )}
      {uploadStatus && <p>{uploadStatus}</p>}
    </form>
  );
};
export default InputFiles;
