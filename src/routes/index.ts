import { Router } from 'express';
import cardsRouter from './cards.routes';
import testRouter from './test.routes';

const routes = Router();

routes.use('/cards', cardsRouter);
routes.use('/test', testRouter);

export default routes;
