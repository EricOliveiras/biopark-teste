import { Renter } from '@prisma/client';
import { HttpException } from '../../../errors/HttpException';
import { renterRepository } from '../repository';

export const store = async ({ fullname, document, email, phoneNumber }: Partial<Renter>): Promise<Renter> => {
  const readExistingRenter = await renterRepository.readByEmailOrDocument(<string>email, <string>document);

  if (readExistingRenter) {
    throw new HttpException(409, 'Renter already registered');
  }

  return await renterRepository.store({
    fullname,
    document,
    email,
    phoneNumber
  });
};
