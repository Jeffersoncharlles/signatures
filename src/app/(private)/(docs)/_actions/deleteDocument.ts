"use server";

import { prisma } from "@/services/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; // Garante que será executado no servidor

export async function DeleteDocument() {}
