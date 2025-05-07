import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { toast } from "sonner";

interface Props {
  documentId: string;
  onClose?: () => void;
}

const DrawSignatureCanvas = ({ documentId, onClose }: Props) => {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const router = useRouter();

  const handleSaveBase64Canvas = async () => {
    if (sigCanvas.current) {
      const base64Image = sigCanvas.current
        .getCanvas()
        .toDataURL("image/x-png", 3);
      try {
        const response = await fetch("/api/signature", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64Image, documentId }),
        });

        const data = await response.json();

        if (data.success) {
          if (onClose) onClose(); // <-- fecha o dialog

          toast.success("Assinado com sucesso");
          router.refresh();
        }
      } catch (error) {
        toast.error("Erro ao enviar imagem");
        console.error("Erro ao enviar imagem:", error);
      }
    }
  };
  return (
    <div>
      <SignatureCanvas
        ref={sigCanvas}
        canvasProps={{ width: 500, height: 200 }}
      />
      <Button onClick={handleSaveBase64Canvas}>Salvar</Button>
    </div>
  );
};
export default DrawSignatureCanvas;
