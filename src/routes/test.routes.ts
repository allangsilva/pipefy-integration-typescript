import { Router } from 'express';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';

import accountService from '../config/accountService';

const testRouter = Router();

testRouter.get('/', async (request, response) => {

  const doc = new GoogleSpreadsheet("1ffd2V0hvflJg_S8vtyloFndIh5b_3yLXdHLe4QHWjlI");

  await doc.useServiceAccountAuth({
    client_email: accountService.client_email,
    private_key: accountService.private_key.replace(/\\n/g, '\n')
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
