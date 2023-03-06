import { Apartment } from '@prisma/client';
import { apartamentRepository } from '../repository';
import { HttpException } from '../../../errors/HttpException';
import { read } from '../../building/service/read';

export const store = async ({ buildingId, rooms, bathrooms, parkingSpaces, rentAmount, squareMeter }: Partial<Apartment>): Promise<Apartment> => {
  const building_Id = <string>buildingId;

  const building = await read(building_Id);

  const count = <number>await apartamentRepository.countNumberOfApartments(building_Id);

  if (count >= <number>building?.numberOfApartments) {
    throw new HttpException(409, 'It is not possible to add more apartments to this building');
  }

  return await apartamentRepository.store({
    buildingId,
    rooms,
    bathrooms,
    parkingSpaces,
    rentAmount,
    squareMeter
  });
};
