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
  }
};
