import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DrawSignatureCanvas from "./draw-sginature-canvas";

interface Props {
  documentId: string;
}

const SignatureView = ({ documentId }: Props) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Deseja assinar?</DialogTitle>
        <DialogDescription>Criei sua assinatura digital aqui</DialogDescription>
      </DialogHeader>
      <DrawSignatureCanvas documentId={documentId} />
    </DialogContent>
  );
};
export default SignatureView;
