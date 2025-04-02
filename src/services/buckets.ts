import { env } from "@/env";
import { S3Client } from "@aws-sdk/client-s3";

const bucket = new S3Client({
  region: "auto",
  endpoint: env.AWS_END_POINT,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

export { bucket };
