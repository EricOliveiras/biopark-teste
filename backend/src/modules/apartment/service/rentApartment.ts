import { Renter } from '@prisma/client';
import { apartamentRepository } from '../repository';
import { HttpException } from '../../../errors/HttpException';
import { renterRepository } from '../../renter/repository';
import { store } from '../../renter/service/store';
import { edit } from './edit';

export const rentApartment = async (apartmentId: string, renter: Partial<Renter>) => {
  const readExistingApartment = await apartamentRepository.read(apartmentId);

  if (!readExistingApartment) {
    throw new HttpException(404, 'Apartment not registered or does not exist');
  }

  if (readExistingApartment.rented) {
    throw new HttpException(409, 'Apartment is already rented');
  }

  const {
    id,
    buildingId,
    rooms,
    bathrooms,
    parkingSpaces,
    locator,
    squareMeter,
    rentAmount
  } = readExistingApartment;

  const readExistingRenter = await renterRepository.readByEmailOrDocument(<string>renter.email, <string>renter.document);

  if (!readExistingRenter) {
    const storeRenter = await store({
      fullname: renter.fullname,
      document: renter.document,
      email: renter.email,
      phoneNumber: renter.phoneNumber
    });

    const updateApartment = await edit({
      id,
      buildingId,
      rooms,
      bathrooms,
      parkingSpaces,
      locator,
      squareMeter,
      rentAmount,
      rented: true,
      renterId: storeRenter.id
    });

    return updateApartment;
  }

  return await edit({
    id,
    buildingId,
    rooms,
    bathrooms,
    parkingSpaces,
    locator,
    squareMeter,
    rentAmount,
    rented: true,
    renterId: readExistingRenter.id
  });
};
