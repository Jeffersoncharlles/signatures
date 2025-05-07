import { env } from "@/env";
import { compare } from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const nextAuthOptions: NextAuthOptions = {
  providers: [
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

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          };
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, //1d
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Adiciona o ID ao token JWT
      }
      return token;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
