import { Renter } from '@prisma/client';
import { prisma as db } from '../../../prismaService';

export const renterRepository = {
  async store({ fullname, document, email, phoneNumber }: Partial<Renter>): Promise<Renter> {
    const renter = await db.renter.create({
      data: {
        fullname: <string>fullname,
        document: <string>document,
        email: <string>email,
        phoneNumber: <string>phoneNumber
      }
    });

    return renter;
  },

  async read(id: string): Promise<Renter | null> {
    return await db.renter.findUnique({
      where: {
        id: id
      },
      include: {
        Apartment: true
      }
    });
  },


  async readAll(): Promise<Renter[] | []> {
    return await db.renter.findMany({
      include: {
        Apartment: true
      }
    });
  },

  async readByEmailOrDocument(email: string, document: string): Promise<Renter | null> {
    return await db.renter.findFirst({
      where: {
        OR: [
          {
            email: {
              equals: email
            }
          },
          {
            document: {
              equals: document
            }
          }
        ]
      }
    });
  },

  async edit(renter: Partial<Renter>): Promise<Renter> {
    return await db.renter.update({
      where: {
        id: <string>renter.id
      },
      data: renter
    });
  },
};
