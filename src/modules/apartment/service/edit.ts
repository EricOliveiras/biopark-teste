import { Apartment } from '@prisma/client';
import { apartamentRepository } from '../repository';
import { HttpException } from '../../../errors/HttpException';

export const edit = async (apartament: Partial<Apartment>): Promise<Apartment> => {
  const apartamentId = <string>apartament.id;

  const readExistingApartment = await apartamentRepository.read(apartamentId);

  if (!readExistingApartment) {
    throw new HttpException(404, 'Apartment not registered or does not exist');
  }

  const readApartmentNumber = await apartamentRepository.readByNumber(
    <string>apartament.buildingId,
    <string>apartament.number
  );

  if (readExistingApartment.number !== <string>apartament.number && readApartmentNumber) {
    throw new HttpException(404, 'There is already an apartment in this building registered with this number');
  }

  return await apartamentRepository.edit(<Apartment>apartament);
};
