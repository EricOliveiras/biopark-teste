import { Apartment, Renter } from '@prisma/client';
import { Request, Response } from 'express';
import { store } from '../service/store';
import { read } from '../service/read';
import { readAll } from '../service/readAll';
import { edit } from '../service/edit';
import { readAvailablesApartments } from '../service/readAvailables';
import { rentApartment } from '../service/rentApartment';
import { removeRenter } from '../service/removeRenter';

export const apartmentController = {
  async store(req: Request, res: Response) {
    const {
      buildingId,
      floor,
      number,
      rentAmount,
      squareMeter
    }: Partial<Apartment> = req.body;

    const apartament = await store({
      buildingId,
      floor,
      number,
      rentAmount,
      squareMeter
    });

    return res.status(201).json(apartament);
  },

  async read(req: Request, res: Response) {
    const { id } = req.params;

    const apartament = await read(id);

    return res.status(200).json(apartament);
  },

  async readAll(req: Request, res: Response) {
    const apartaments = await readAll();

    return res.status(200).json(apartaments);
  },

  async readAvailables(req: Request, res: Response) {
    const apartaments = await readAvailablesApartments();

    return res.status(200).json(apartaments);
  },

  async rentApartment(req: Request, res: Response) {
    const { id } = req.params;
    const {
      fullname,
      document,
      email,
      phoneNumber
    }: Partial<Renter> = req.body;

    const rentedApartment = await rentApartment(id, {
      fullname,
      document,
      email,
      phoneNumber
    });

    return res.status(200).json(rentedApartment);
  },

  async edit(req: Request, res: Response) {
    const apartament: Apartment = req.body;

    const updatedApartament = await edit(apartament);

    return res.status(200).json(updatedApartament);
  },

  async removeRenter(req: Request, res: Response) {
    const { id } = req.params;

    const updatedApartament = await removeRenter(id);

    return res.status(200).json(updatedApartament);
  }
};
