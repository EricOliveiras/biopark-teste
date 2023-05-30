-- CreateTable
CREATE TABLE "buildings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "numberOfApartments" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "buildings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apartments" (
    "id" TEXT NOT NULL,
    "floor" INTEGER NOT NULL,
    "number" TEXT NOT NULL,
    "rented" BOOLEAN NOT NULL DEFAULT false,
    "locator" TEXT NOT NULL DEFAULT 'BioPark',
    "squareMeter" INTEGER NOT NULL,
    "rentAmount" DOUBLE PRECISION NOT NULL,
    "renterId" TEXT,
    "buildingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "apartments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "renters" (
    "id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "email" TEXT,
    "phoneNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "renters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "buildings_id_key" ON "buildings"("id");

-- CreateIndex
CREATE UNIQUE INDEX "buildings_address_key" ON "buildings"("address");

-- CreateIndex
CREATE UNIQUE INDEX "apartments_id_key" ON "apartments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "renters_id_key" ON "renters"("id");

-- CreateIndex
CREATE UNIQUE INDEX "renters_document_key" ON "renters"("document");

-- CreateIndex
CREATE UNIQUE INDEX "renters_email_key" ON "renters"("email");

-- AddForeignKey
ALTER TABLE "apartments" ADD CONSTRAINT "apartments_renterId_fkey" FOREIGN KEY ("renterId") REFERENCES "renters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apartments" ADD CONSTRAINT "apartments_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
