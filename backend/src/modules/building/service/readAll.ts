import { Building } from '@prisma/client';
import { buildingRepository } from '../repository';

export const readAll = async (): Promise<Building[] | []> => {
  return await buildingRepository.readAll();
};
