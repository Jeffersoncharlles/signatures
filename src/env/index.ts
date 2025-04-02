import { z } from "zod";

const envSchema = z.object({
  EMAIL_SERVER: z.string(),
  EMAIL_FROM: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  NEXTAUTH_SECRET: z
    .string()
    .default("8vWn40nG+nnImn6L5479g/Mbnc9DDn+j2yEOWYPXciw="),
});

export const env = envSchema.parse(process.env);
