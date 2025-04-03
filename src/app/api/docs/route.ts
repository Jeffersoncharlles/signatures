import { prisma } from "@/services/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const session = await getServerSession();

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { success: false, message: "Não autorizado" },
        { status: 401 }
      );
    }

    console.log("Usuário logado:", session.user.email);

    // Buscar usuário no banco de dados
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!userAlreadyExists) {
      return NextResponse.json(
        { success: false, message: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, user: "user" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
};
