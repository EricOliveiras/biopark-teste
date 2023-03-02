import { Building } from '@prisma/client';
import { HttpException } from '../../../errors/HttpException';
import { buildingRepository } from '../repository';

export const store = async ({ name, address, numberOfApartments }: Partial<Building>): Promise<Building> => {
  const readExistingBuilding = await buildingRepository.readByAddress(<string>address?.toLowerCase());

  if (readExistingBuilding) {
    throw new HttpException(409, 'Building already registered');
  }

  return await buildingRepository.store({
    name,
    address: <string>address?.toLowerCase(),
    numberOfApartments
  });
};
