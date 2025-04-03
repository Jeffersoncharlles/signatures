"use server";

import { prisma } from "@/services/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; // Garante que será executado no servidor

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

    const userWithDocuments = await prisma.document.findMany({
      where: {
        userId: user.id,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    const documentsUser = {
      documents: userWithDocuments.map((doc) => {
        return {
          id: doc.id,
          name: doc.name,
          userId: doc.userId,
          user: doc.user.name,
          fileKey: doc.fileKey,
          createdAt: doc.createdAt,
          updatedAt: doc.updatedAt,
          status: doc.status,
        };
      }),
    };

    return { success: true, documentsUser, status: 200 };
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return {
      success: false,
      message: "Erro interno do servidor",
      status: 500,
    };
  }
}
