import { env } from "@/env";
import { generateNameRandom } from "@/lib/generate-name-random";
import { bucket } from "@/services/buckets";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export const useUploadBucket = async (file: File) => {
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
};
