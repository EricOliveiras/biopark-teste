import { Apartment } from '@prisma/client';
import { apartamentRepository } from '../repository';
import { HttpException } from '../../../errors/HttpException';

export const edit = async (apartament: Partial<Apartment>): Promise<Apartment> => {
  const apartamentId = <string>apartament.id;

  const readExistingApartment = await apartamentRepository.read(apartamentId);

  if (!readExistingApartment) {
    throw new HttpException(404, 'Apartment not registered or does not exist');
  }

  return await apartamentRepository.edit(<Apartment>apartament);
};
