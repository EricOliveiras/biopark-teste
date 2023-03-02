import { Router } from 'express';
import { apartmentController } from '../modules/apartment/controller/apartmentController';

export const apartmentRouter = Router();

apartmentRouter.post('/store', apartmentController.store);
apartmentRouter.get('/', apartmentController.readAll);
apartmentRouter.get('/availables', apartmentController.readAvailables);
apartmentRouter.get('/:id', apartmentController.read);
apartmentRouter.put('/edit', apartmentController.edit);
