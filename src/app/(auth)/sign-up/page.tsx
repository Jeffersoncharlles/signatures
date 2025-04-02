"use client";
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

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data);

    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
    });

    // if (!response?.error) {
    //   router.push("/docs");
    //   router.refresh();
    // }
  });
  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-6">
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
        Já tem conta?{" "}
        <Link href="/sign-in" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
