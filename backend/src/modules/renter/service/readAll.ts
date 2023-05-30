import { Renter } from '@prisma/client';
import { renterRepository } from '../repository';

export const readAll = async (): Promise<Renter[] | []> => {
  return await renterRepository.readAll();
};
