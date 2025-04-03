"use server";

import { prisma } from "@/services/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function fetchDocuments() {
  try {
    const session = await getServerSession();

    if (!session || !session.user?.email) {
      return { success: false, message: "Não autorizado", status: 401 };
    }

    // Buscar usuário no banco de dados
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    if (!user) {
      return redirect("/sign-in");
    }

    const userWithDocuments = await prisma.user.findMany({
      where: {
        id: user.id,
      },
      include: {
        Document: true, // Busca todos os documentos do usuário
      },
    });

    return { success: true, documents: userWithDocuments, status: 200 };
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return { success: false, message: "Erro interno do servidor", status: 500 };
  }
}
