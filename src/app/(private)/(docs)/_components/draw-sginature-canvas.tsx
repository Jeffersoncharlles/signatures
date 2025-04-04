import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

interface Props {
  documentId: string;
}

const DrawSignatureCanvas = ({ documentId }: Props) => {
  const sigCanvas = useRef<SignatureCanvas>(null);

  const handleSaveBase64Canvas = async () => {
    if (sigCanvas.current) {
      //  console.log(sigCanvas.current.getCanvas().toDataURL("image/x-png", 5));
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
        console.log("Resposta da API:", data);
      } catch (error) {
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
