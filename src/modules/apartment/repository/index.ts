import { Apartment } from '@prisma/client';
import { prisma as db } from '../../../prismaService';

export const apartamentRepository = {
  async store({ buildingId, floor, number, rentAmount, squareMeter }: Partial<Apartment>): Promise<Apartment> {
    return await db.apartment.create({
      data: {
        buildingId: <string>buildingId,
        floor: <number>floor,
        number: <string>number,
        rentAmount: <number>rentAmount,
        squareMeter: <number>squareMeter
      }
    });
  },

  async read(id: string): Promise<Apartment | null> {
    return await db.apartment.findUnique({
      where: {
        id: id
      }
    });
  },

  async readAll(): Promise<Apartment[] | []> {
    return await db.apartment.findMany();
  },

  async readByFloorAndNumber(buildingId: string, floor: number, number: string): Promise<Apartment | null> {
    return await db.apartment.findFirst({
      where: {
        AND: [
          {
            floor: floor
          },
          {
            number: number
          },
          {
            buildingId: buildingId
          }
        ]
      }
    });
  },

  async readAvailablesApartments(): Promise<Apartment[] | []> {
    return await db.apartment.findMany({
      where: {
        rented: false
      }
    });
  },

  async countNumberOfApartments(id: string): Promise<number | null> {
    return await db.apartment.count({
      where: {
        buildingId: id
      },
    });
  },

  async edit(apartament: Apartment): Promise<Apartment> {
    return await db.apartment.update({
      where: {
        id: apartament.id
      },
      data: apartament
    });
  }
};
