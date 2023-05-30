import { Apartment } from '@prisma/client';
import { apartamentRepository } from '../repository';

export const readAvailablesApartments = async (): Promise<Apartment[] | []> => {
  return await apartamentRepository.readAvailablesApartments();
};
