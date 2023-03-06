import { Router } from 'express';
import { apartmentController } from '../modules/apartment/controller/apartmentController';
import { apartmentValidator } from '../validators/apartment';
import { handleValidator } from '../validators/handleValidator';

export const apartmentRouter = Router();

apartmentRouter.post('/store',
  apartmentValidator.create,
  handleValidator,
  apartmentController.store
);

apartmentRouter.post('/rentapartment/:id',
  apartmentValidator.id,
  handleValidator,
  apartmentController.rentApartment
);

apartmentRouter.post('/removerenter/:id',
  apartmentValidator.id,
  handleValidator,
  apartmentController.removeRenter
);

apartmentRouter.get('/',
  apartmentController.readAll
);

apartmentRouter.get('/availables',
  apartmentController.readAvailables
);

apartmentRouter.get('/:id',
  apartmentValidator.id,
  handleValidator,
  apartmentController.read
);

apartmentRouter.put('/edit',
  apartmentValidator.idBody,
  apartmentValidator.update,
  handleValidator,
  apartmentController.edit
);
