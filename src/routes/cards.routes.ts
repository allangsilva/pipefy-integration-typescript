import { Router } from 'express';

import UpdateCardsSheetService from '../services/UpdateCardsSheetService';
import CardsRepository from '../repositories/CardsRepository';

const cardsRouter = Router();

const cardsRepository = new CardsRepository();
const updateSheetService = new UpdateCardsSheetService(cardsRepository);

cardsRouter.get('/export/:pipeId', async (request, response) => {
  try {

    const { pipeId } = request.params;

    const result = await updateSheetService.execute(pipeId);

    return response.json(result);
  } catch (err) {
    console.error(`ERROR - ${err.message}`, err);
    return response.status(400).json({ error: err.message });
  }
});

export default cardsRouter;
