import { Building } from '@prisma/client';
import { Request, Response } from 'express';
import { store } from '../service/store';
import { read } from '../service/read';
import { readAll } from '../service/readAll';
import { edit } from '../service/edit';

export const buildingController = {
  async store(req: Request, res: Response) {
    const {
      name,
      address,
      numberOfApartments
    }: Partial<Building> = req.body;

    const building = await store({
      name,
      address,
      numberOfApartments
    });

    return res.status(201).json(building);
  },

  async read(req: Request, res: Response) {
    const { id } = req.params;

    const building = await read(id);

    return res.status(200).json(building);
  },

  async readAll(req: Request, res: Response) {
    const buildings = await readAll();

    return res.status(200).json(buildings);
  },

  async edit(req: Request, res: Response) {
    const building: Building = req.body;

    const updatedbuilding = await edit(building);

    return res.status(200).json(updatedbuilding);
  }
};
