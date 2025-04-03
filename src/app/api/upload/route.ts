import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { bucket } from "@/services/buckets";
import { env } from "@/env";
import { generateNameRandom } from "@/lib/generate-name-random";
import { getServerSession } from "next-auth/next";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession();

  // console.log({ session });
  if (!session) {
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

    await bucket.send(putObjectCommand);
    // Promise.all([]);

    // Gerar URL pública do arquivo
    const fileUrl = `https://${env.AWS_BUCKET_NAME}.r2.cloudflarestorage.com/${uniqueFileName}`;

    // Gerar Signed URL (se o bucket for privado)
    const getObjectCommand = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: uniqueFileName,
    });
    const signedUrl = await getSignedUrl(bucket, getObjectCommand, {
      expiresIn: 60 * 60, // 3600  = 1hr
    });

    // Expira em 1 hora
    console.log(fileUrl);
    console.log(signedUrl);

    return NextResponse.json({ success: true, url: fileUrl }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
