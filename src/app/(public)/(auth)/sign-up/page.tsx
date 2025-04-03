"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { env } from "@/env";

const emailSchema = z
  .object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(3, "Password must have than 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = form.handleSubmit(async ({ email, password, name }) => {
    console.log({ email, password });
    try {
      const response = await fetch(
        `${env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, name }),
        }
      );

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Registration Failed:", error);
    }
  });
  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            type="text"
            placeholder="Jho Doe"
            required
            {...form.register("name")}
          />
        </div>
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
          </div>
          <Input
            id="password"
            type="password"
            required
            {...form.register("password")}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="confirmPassword">Confirmar Password</Label>
          </div>
          <Input
            id="confirmPassword"
            type="password"
            required
            {...form.register("confirmPassword")}
          />
        </div>

        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
      </form>
      <div className="text-center text-sm mt-4">
        Já tem conta?{" "}
        <Link href="/sign-in" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
