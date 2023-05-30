import { Apartment } from '@prisma/client';
import { prisma as db } from '../../../prismaService';

export const apartamentRepository = {
  async store({ buildingId, rooms, bathrooms, parkingSpaces, rentAmount, squareMeter }: Partial<Apartment>): Promise<Apartment> {
    return await db.apartment.create({
      data: {
        buildingId: <string>buildingId,
        rooms: <number>rooms,
        bathrooms: <number>bathrooms,
        parkingSpaces: <number>parkingSpaces,
        rentAmount: <number>rentAmount,
        squareMeter: <number>squareMeter
      }
    });
  },

  async read(id: string): Promise<Apartment | null> {
    return await db.apartment.findFirst({
      where: {
        id: id
      },
      include: {
        Renter: {
          select: {
            id: true,
            fullname: true,
            document: true,
            email: true,
            phoneNumber: true,
          }
        },
        Building: {
          select: {
            id: true,
            name: true,
            address: true,
            numberOfApartments: true,
          }
        }
      }
    });
  },

  async readAll(): Promise<Apartment[] | []> {
    return await db.apartment.findMany({
      include: {
        Renter: {
          select: {
            id: true,
            fullname: true,
            document: true,
            email: true,
            phoneNumber: true,
          }
        },
        Building: {
          select: {
            id: true,
            name: true,
            address: true,
            numberOfApartments: true,
          }
        }
      }
    });
  },

  async readAvailablesApartments(): Promise<Apartment[] | []> {
    return await db.apartment.findMany({
      where: {
        rented: false
      },
      include: {
        Renter: {
          select: {
            id: true,
            fullname: true,
            document: true,
            email: true,
            phoneNumber: true,
          }
        },
        Building: {
          select: {
            id: true,
            name: true,
            address: true,
            numberOfApartments: true,
          }
        }
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
