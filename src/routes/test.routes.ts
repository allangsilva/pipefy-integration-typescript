import path from 'path';
import { Router } from 'express';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import { promisify } from 'util';

import config from '../config/config';

const arquivo = require(path.resolve(__dirname, '..', 'config', 'arquivo.json'));
const credenciais = require(path.resolve(__dirname, '..', 'config', config.googleAccountService));
const testRouter = Router();

testRouter.get('/', async (request, response) => {

  const doc = new GoogleSpreadsheet(arquivo.id);

  await doc.useServiceAccountAuth({
    client_email: credenciais.client_email,
    private_key: credenciais.private_key.replace(/\\n/g, '\n')
  });
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  // para atualizar
  sheet.addRow({
    nome: "João Victor",
    data: 21,
    email: "joao@medium.com"
  });

  // para ler
  sheet.getRows().then(rows => {
    rows.map((row: GoogleSpreadsheetRow) => {
        console.log(row.nome);
    })
  });

  return response.json({ title: doc.title });
})

export default testRouter;
