import { Renter } from '@prisma/client';
import { renterRepository } from '../repository';
import { HttpException } from '../../../errors/HttpException';

export const edit = async (renter: Partial<Renter>): Promise<Renter> => {
  const renterId = <string>renter.id;

  const readExistingRenter = await renterRepository.read(renterId);

  if (!readExistingRenter) {
    throw new HttpException(404, 'renter not registered or does not exist');
  }

  const updatedRenter = await renterRepository.edit(<Renter>renter);

  return updatedRenter;
};
