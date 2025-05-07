import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DrawSignatureCanvas from "./draw-sginature-canvas";

interface Props {
  documentId: string;
  onClose?: () => void;
}

const SignatureView = ({ documentId, onClose }: Props) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Deseja assinar?</DialogTitle>
        <DialogDescription>Criei sua assinatura digital aqui</DialogDescription>
      </DialogHeader>
      <DrawSignatureCanvas documentId={documentId} onClose={onClose} />
    </DialogContent>
  );
};
export default SignatureView;
