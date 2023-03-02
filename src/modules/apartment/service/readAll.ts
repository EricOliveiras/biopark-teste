import { Apartment } from '@prisma/client';
import { apartamentRepository } from '../repository';

export const readAll = async (): Promise<Apartment[] | []> => {
  return await apartamentRepository.readAll();
};
