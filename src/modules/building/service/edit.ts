import { Building } from '@prisma/client';
import { buildingRepository } from '../repository';
import { HttpException } from '../../../errors/HttpException';

export const edit = async (building: Partial<Building>): Promise<Building> => {
  const buildingId = <string>building.id;

  const readExistingBuilding = await buildingRepository.read(buildingId);

  if (!readExistingBuilding) {
    throw new HttpException(404, 'Building not registered or does not exist');
  }

  const readExistingBuildingByAddress = await buildingRepository.readByAddress(<string>building.address?.toLowerCase());

  if (readExistingBuilding.address !== building.address && readExistingBuildingByAddress) {
    throw new HttpException(409, 'There is already a building registered at this address');
  }

  const updatedbuilding = await buildingRepository.edit(<Building>building);

  return updatedbuilding;
};
