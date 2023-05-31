import { CorsOptions } from 'cors';

export const corsConfig: CorsOptions = {
  origin: '*',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  allowedHeaders: '*'
}
