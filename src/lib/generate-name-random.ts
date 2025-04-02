import { randomUUID } from "node:crypto";

export const generateNameRandom = (name: string) => {
  return `${randomUUID()}-${name
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9._-]/g, "")}`;
};
