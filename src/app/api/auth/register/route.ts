import { prisma } from "@/services/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { z, ZodError } from "zod";

const registerSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(3, "Password must have than 8 characters"),
});

export async function POST(request: Request) {
  try {
    const { email, name, password } = registerSchema.parse(
      await request.json()
    );

    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Email user already exists");
    }

    const hashedPassword = await hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
