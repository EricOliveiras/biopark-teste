import express from 'express';
import cors from 'cors';

import { routes } from '../routers';
import { errorMiddleware } from '../middleware/errorMiddleware';
import { corsConfig } from './cors';

export const app = express();

app.use(express.json());

app.use(cors(corsConfig));

app.use(routes);

app.use(errorMiddleware);
