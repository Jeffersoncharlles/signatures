/*
  Warnings:

  - Added the required column `signedAt` to the `signatures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "signatures" ADD COLUMN     "signedAt" TIMESTAMP(3) NOT NULL;
