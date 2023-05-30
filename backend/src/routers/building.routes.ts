import { Router } from 'express';
import { buildingController } from '../modules/building/controller/buildingController';
import { buildingValidator } from '../validators/building';
import { handleValidator } from '../validators/handleValidator';

export const buildingRouter = Router();

buildingRouter.post('/store',
  buildingValidator.create,
  handleValidator,
  buildingController.store
);

buildingRouter.get('/',
  buildingController.readAll
);

buildingRouter.get('/:id',
  buildingController.read
);

buildingRouter.put('/edit',
  buildingValidator.id,
  buildingValidator.create,
  handleValidator,
  buildingController.edit
);
