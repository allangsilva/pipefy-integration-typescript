import { Router } from 'express';
import cardsRouter from './cards.routes';

const routes = Router();

routes.use('/cards', cardsRouter);

export default routes;
