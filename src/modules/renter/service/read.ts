import { Renter } from '@prisma/client';
import { renterRepository } from '../repository';
import { HttpException } from '../../../errors/HttpException';

export const read = async (id: string): Promise<Renter> => {
  const readExistingRenter = await renterRepository.read(id);

  if (!readExistingRenter) {
    throw new HttpException(404, 'Renter not registered or does not exist');
  }

  return readExistingRenter;
};
