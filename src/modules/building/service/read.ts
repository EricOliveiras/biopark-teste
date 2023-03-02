import { Building } from '@prisma/client';
import { buildingRepository } from '../repository';
import { HttpException } from '../../../errors/HttpException';

export const read = async (id: string): Promise<Building | null> => {
  const readExistingBuilding = await buildingRepository.read(id);

  if (!readExistingBuilding) {
    throw new HttpException(404, 'Building not registered or does not exist');
  }

  return readExistingBuilding;
};
