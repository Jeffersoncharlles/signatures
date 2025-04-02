import { env } from "@/env";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisma";
import { Prisma } from "@prisma/client";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentialsSchema.parse(credentials);

        try {
          const user = await prisma.user.findFirst({
            where: {
              email: email,
            },
          });

          if (!user) {
            throw new Error("Invalid credentials");
          }

          const confirmPassword = await compare(password, user.password);

          if (!confirmPassword) {
            throw new Error("Invalid credentials");
          }

          return user;
        } catch (error) {
          if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new Error("Ops.. Ocorreu um erro volte mais tarde!.");
          }
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
