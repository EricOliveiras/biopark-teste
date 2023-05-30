import { Apartment } from '@prisma/client';
import { apartamentRepository } from '../repository';
import { HttpException } from '../../../errors/HttpException';

export const read = async (id: string): Promise<Apartment | null> => {
  const readExistingApartment = await apartamentRepository.read(id);

  if (!readExistingApartment) {
    throw new HttpException(404, 'Apartment not registered or does not exist');
  }

  return readExistingApartment;
};
