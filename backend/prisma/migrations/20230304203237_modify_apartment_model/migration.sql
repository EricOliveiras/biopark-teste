/*
  Warnings:

  - You are about to drop the column `floor` on the `apartments` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `apartments` table. All the data in the column will be lost.
  - Added the required column `bathrooms` to the `apartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parkingSpaces` to the `apartments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rooms` to the `apartments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "apartments" DROP COLUMN "floor",
DROP COLUMN "number",
ADD COLUMN     "bathrooms" INTEGER NOT NULL,
ADD COLUMN     "parkingSpaces" INTEGER NOT NULL,
ADD COLUMN     "rooms" INTEGER NOT NULL;
