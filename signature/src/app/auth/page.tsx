import AuthForm from "./_components/auth-form";
import { PenIcon } from "lucide-react";

export default function Auths() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <PenIcon className="fill-primary text-primary-foreground size-6" />
          Signature
        </a>
        <AuthForm />
      </div>
    </div>
  );
}
