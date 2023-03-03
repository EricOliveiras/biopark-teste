import { Router } from 'express';
import { apartmentController } from '../modules/apartment/controller/apartmentController';

export const apartmentRouter = Router();

apartmentRouter.post('/store', apartmentController.store);
apartmentRouter.post('/rentapartment/:id', apartmentController.rentApartment);
apartmentRouter.post('/removerenter/:id', apartmentController.removeRenter);
apartmentRouter.get('/', apartmentController.readAll);
apartmentRouter.get('/availables', apartmentController.readAvailables);
apartmentRouter.get('/:id', apartmentController.read);
apartmentRouter.put('/edit', apartmentController.edit);
