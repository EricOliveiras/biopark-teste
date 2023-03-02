import { Building } from '@prisma/client';
import { prisma as db } from '../../../prismaService';

export const buildingRepository = {
  async store({ name, address, numberOfApartments }: Partial<Building>): Promise<Building> {
    return await db.building.create({
      data: {
        name: <string>name,
        address: <string>address,
        numberOfApartments: <number>numberOfApartments
      }
    });
  },

  async readAll(): Promise<Building[] | []> {
    return await db.building.findMany({
      include: {
        apartments: {
          select: {
            buildingId: true,
            id: true,
            number: true,
            floor: true,
            locator: true,
            squareMeter: true,
            rented: true,
            rentAmount: true,
          }
        }
      }
    });
  },

  async readByAddress(address: string): Promise<Building | null> {
    return await db.building.findUnique({
      where: {
        address: address
      }
    });
  },

  async read(id: string): Promise<Building | null> {
    return await db.building.findUnique({
      where: {
        id: id
      },
      include: {
        apartments: {
          select: {
            buildingId: true,
            id: true,
            number: true,
            floor: true,
            locator: true,
            squareMeter: true,
            rented: true,
            rentAmount: true,
          }
        }
      }
    });
  },

  async edit(building: Building): Promise<Building> {
    return await db.building.update({
      where: {
        id: building.id
      },
      data: building
    });
  }
};
