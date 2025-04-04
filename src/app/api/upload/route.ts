import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { bucket } from "@/services/buckets";
import { env } from "@/env";
import { generateNameRandom } from "@/lib/generate-name-random";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/services/prisma";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession();

  // console.log({ session });
  if (!session) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email ?? undefined },
    select: { id: true }, // Busca apenas o necessário
  });

  if (!user) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof File) || file.type !== "application/pdf") {
      return NextResponse.json(
        { success: false, error: "O arquivo deve ser um PDF" },
        { status: 400 }
      );
    }

    const bytes = await file?.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Criar nome de arquivo único
    const uniqueFileName = generateNameRandom(file.name);

    // Criar comando para envio ao S3
    const putObjectCommand = new PutObjectCommand({
      Bucket: env.AWS_BUCKET_NAME,
      Key: uniqueFileName,
      Body: buffer,
      ContentType: "application/pdf",
    });

    // Fazer upload para o S3

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

    // Gerar URL pública do arquivo
    // const fileUrl = `https://${env.AWS_BUCKET_NAME}.r2.cloudflarestorage.com/${uniqueFileName}`;
    // const fileUrl = `${env.AWS_END_POINT}/${env.AWS_BUCKET_NAME}/${uniqueFileName}`;

    // Gerar Signed URL (se o bucket for privado)
    const getObjectCommand = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: uniqueFileName,
    });
    const signedUrl = await getSignedUrl(bucket, getObjectCommand, {
      expiresIn: 60 * 60, // 3600  = 1hr
    });

    // Inserir no banco de dados usando Prisma
    await prisma.document.create({
      data: {
        name: file.name, // Nome do arquivo salvo no BD
        fileKey: uniqueFileName,
        status: "PENDING",
        userId: user.id,
      },
    });

    // Expira em 1 hora
    // console.log(fileUrl);
    // console.log(signedUrl);

    return NextResponse.json(
      { success: true, url: signedUrl },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
