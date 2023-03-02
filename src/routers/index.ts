import { Router } from 'express';
import { rootRouter } from './root.routes';
import { apartmentRouter } from './apartament.routes';
import { buildingRouter } from './building.routes';

export const routes = Router();

routes.use('/building', buildingRouter);
routes.use('/apartment', apartmentRouter);
routes.use('/', rootRouter);
