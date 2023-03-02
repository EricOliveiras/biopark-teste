import { Apartment } from '@prisma/client';
import { apartamentRepository } from '../repository';
import { HttpException } from '../../../errors/HttpException';
import { read } from '../../building/service/read';

export const store = async ({ buildingId, floor, number, rentAmount, squareMeter }: Partial<Apartment>): Promise<Apartment> => {
  const building_Id = <string>buildingId;

  const building = await read(building_Id);

  const count = <number>await apartamentRepository.countNumberOfApartments(building_Id);

  if (count >= <number>building?.numberOfApartments) {
    throw new HttpException(409, 'It is not possible to add more apartments to this building');
  }

  const readExistingApartment = await apartamentRepository.readByFloorAndNumber(building_Id, <number>floor, <string>number);

  if (readExistingApartment) {
    throw new HttpException(409, 'Apartment already registered');
  }

  return await apartamentRepository.store({
    buildingId,
    floor,
    number,
    rentAmount,
    squareMeter
  });
};
