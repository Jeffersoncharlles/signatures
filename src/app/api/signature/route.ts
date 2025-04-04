import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/services/prisma";
import { bucket } from "@/services/buckets";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { env } from "@/env";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email ?? undefined },
    select: { id: true, name: true },
  });

  if (!user) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  try {
    const { image, documentId } = await req.json();

    // Remover o prefixo do base64
    const base64Data = image.replace(/^data:image\/png;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    const fileName = `assinatura-${Date.now()}-${user.name}.png`;

    // Criar comando para envio ao S3 envio da assinatura
    const putObjectCommand = new PutObjectCommand({
      Bucket: env.AWS_BUCKET_NAME,
      Key: fileName,
      Body: buffer,
      ContentType: "image/png",
    });

    // Fazer upload para o R2 com verificação de erro
    try {
      await bucket.send(putObjectCommand);
      // console.log(response);
    } catch (uploadError) {
      console.error("Erro no upload para o R2:", uploadError);
      return NextResponse.json(
        {
          success: false,
          error: "Falha ao enviar o arquivo para o armazenamento",
        },
        { status: 500 }
      );
    }
    const imageUrl = `${env.AWS_END_POINT}/${env.AWS_BUCKET_NAME}/${fileName}`;

    await prisma.signature.create({
      data: {
        signatureImg: image,
        userId: user.id,
        documentId,
      },
    });

    console.log(imageUrl);

    return NextResponse.json({ success: true, url: imageUrl }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
