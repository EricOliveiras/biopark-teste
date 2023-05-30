import { Request, Response } from 'express';
import { Renter } from '@prisma/client';
import { store } from '../service/store';
import { read } from '../service/read';
import { edit } from '../service/edit';
import { readAll } from '../service/readAll';

export const renterController = {
  async strore(req: Request, res: Response) {
    const {
      fullname,
      document,
      email,
      phoneNumber
    }: Partial<Renter> = req.body;

    const renter = await store({
      fullname,
      document,
      email,
      phoneNumber
    });

    return res.status(201).json(renter);
  },

  async read(req: Request, res: Response) {
    const { id } = req.params;

    const renter = await read(id);

    return res.status(200).json(renter);
  },

  async readAll(req: Request, res: Response) {
    const renters = await readAll();

    return res.status(200).json(renters);
  },

  async edit(req: Request, res: Response) {
    const renter: Renter = req.body;

    const uodatedRenter = await edit(renter);

    return res.status(200).json(uodatedRenter);
  }
};
