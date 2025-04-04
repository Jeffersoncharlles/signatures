import { bucket } from "@/services/buckets";
import { prisma } from "@/services/prisma";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  try {
    const session = await getServerSession();

    if (!session || !session.user?.email) {
      return NextResponse.json(
        {
          success: false,
          error: "Não autorizado",
        },
        { status: 401 }
      );
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

    const document = await prisma.document.findUnique({
      where: {
        id: id,
        userId: user.id,
      },
    });

    if (!document) {
      return NextResponse.json(
        {
          success: false,
          error: "Não autorizado",
        },
        { status: 401 }
      );
    }

    const deleteObjectCommand = new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: document?.fileKey,
    });

    const {
      $metadata: { httpStatusCode },
    } = await bucket.send(deleteObjectCommand);

    if (httpStatusCode === 204) {
      await prisma.document.delete({
        where: {
          id: document.id,
        },
      });
    }

    return NextResponse.json(
      {
        success: true,
        data: "deletado",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
