import Card from '../models/Card';
import CardRepository from '../repositories/CardsRepository';

class UpdateCardsSheetService {

  private repository: CardRepository;

  constructor(repository: CardRepository) {
    this.repository = repository;
  }

  async execute(pipeId: string): Promise<Card> {
    const cards = await this.repository.getAllCards(pipeId);
    return cards;
  }
}

export default UpdateCardsSheetService;
