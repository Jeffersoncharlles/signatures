import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "node:crypto";
import { bucket } from "@/services/buckets";
import { env } from "@/env";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();

  const file: File = formData.get("file") as File;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uniqueFileName = `${randomUUID()}-${file}`;

  const putObjectCommand = new PutObjectCommand({
    Bucket: env.AWS_BUCKET_NAME,
    Key: uniqueFileName,
    Body: buffer,
  });

  try {
    const response = await bucket.send(putObjectCommand);
    console.log("POST-Response", response);
    return NextResponse.json({ success: true }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
