import axios, { AxiosInstance } from 'axios';

import config from '../config';
import Card from '../models/Card';
import ErrorInterface from '../models/ErrorInterface';

import queryBuilder from '../helpers/queryBuilder';
import headerBuilder from '../helpers/headerBuilder';

interface CardsDTO {
  data: {
    allCards: Card
  },
  errors: [ErrorInterface]
}

class CardsRepository {

  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: config.pipefyApiHost
    });
  }

  async getAllCards(pipeId: string): Promise<Card> {

    if( !pipeId ) {
      throw Error('ID do Pipe é inválido');
    }

    const response = await this.axios.post<CardsDTO>(
      'queries',
      { "query": queryBuilder.getAllCards(pipeId) },
      { headers: headerBuilder }
      );

    if( response.status != 200 ) {
      throw Error('Erro ao realizar consulta na API Pipefy');
    }

    const { errors, data } = response.data;

    if( errors && errors.length ) {
      throw Error(errors[0].message);
    }

    return data.allCards;
  }
}

export default CardsRepository;
