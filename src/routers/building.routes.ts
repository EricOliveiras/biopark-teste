import { Router } from 'express';
import { buildingController } from '../modules/building/controller/buildingController';

export const buildingRouter = Router();

buildingRouter.post('/store', buildingController.store);
buildingRouter.get('/', buildingController.readAll);
buildingRouter.get('/:id', buildingController.read);
buildingRouter.put('/edit', buildingController.edit);
