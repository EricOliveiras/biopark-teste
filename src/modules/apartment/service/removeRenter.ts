import { Apartment } from '@prisma/client';
import { apartamentRepository } from '../repository';
import { HttpException } from '../../../errors/HttpException';
import { edit } from './edit';

export const removeRenter = async (apartmentId: string): Promise<Apartment> => {
  const readExistingApartment = await apartamentRepository.read(apartmentId);

  if (!readExistingApartment) {
    throw new HttpException(404, 'Apartment not registered or does not exist');
  }

  if (!readExistingApartment.rented) {
    throw new HttpException(404, 'Apartment is not already rented');
  }

  const {
    id,
    buildingId,
    floor,
    number,
    locator,
    squareMeter,
    rentAmount
  } = readExistingApartment;

  return await edit({
    id,
    buildingId,
    floor,
    number,
    locator,
    squareMeter,
    rentAmount,
    rented: false,
    renterId: null
  });
};
