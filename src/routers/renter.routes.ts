import { Router } from 'express';
import { renterController } from '../modules/renter/controller/renterController';
import { renterValidator } from '../validators/renter';
import { handleValidator } from '../validators/handleValidator';

export const renterRouter = Router();

renterRouter.post('/store',
  renterValidator.create,
  handleValidator,
  renterController.strore
);

renterRouter.get('/',
  renterController.readAll
);

renterRouter.get('/:id',
  renterValidator.id,
  handleValidator,
  renterController.read
);
renterRouter.put('/edit',
  renterValidator.idBody,
  renterValidator.create,
  handleValidator,
  renterController.edit
);
