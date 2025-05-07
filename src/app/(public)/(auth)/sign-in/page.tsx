"use client";

import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const emailSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const SignInForm = () => {
  // const [error, setError] = useState<string | null | undefined>();

  const router = useRouter();
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.error) {
      toast.error("Credencias Invalidas");
      // setError(response.error);
    }

    if (!response?.error) {
      router.push("/dashboard");
      router.refresh();
    }
  });
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4">
        <Button variant="outline" className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
            />
          </svg>
          Login with Google
        </Button>
      </div>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 px-2 text-muted-foreground">
          Ou por Email
        </span>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-6">
        {/* <p>{error}</p> */}
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@example.com"
            required
            {...form.register("email")}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu Sua senha?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            required
            {...form.register("password")}
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
      <div className="text-center text-sm">
        Nao tem conta?{" "}
        <Link href="/sign-up" className="underline underline-offset-4">
          Cadastrar
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
