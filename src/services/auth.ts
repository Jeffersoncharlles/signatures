import { env } from "@/env";
// import { v4 as uuid } from "uuid";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { encode as defaultEncode } from "next-auth/jwt";
import { prisma } from "./prisma";
import { Prisma } from "@prisma/client";

// const adapter = PrismaAdapter(prisma);

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
        // console.log(credentials);

        try {
          const user = await prisma.user.findFirst({
            where: {
              email: credentials?.email,
            },
          });

          if (!user) {
            throw new Error("Invalid credentials");
          }

          const confirmPassword = await compare(
            credentials?.password || "",
            user.password
          );

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
  // pages: {
  //   signIn: "/sign-in",
  // },
  secret: env.NEXTAUTH_SECRET,
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
