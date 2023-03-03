import { Router } from 'express';
import { renterController } from '../modules/renter/controller/renterController';

export const renterRouter = Router();

renterRouter.post('/store', renterController.strore);
renterRouter.get('/', renterController.readAll);
renterRouter.get('/:id', renterController.read);
renterRouter.put('/edit', renterController.edit);
