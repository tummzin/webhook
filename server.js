const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/webhooks/orders-create', (req, res) => {
  console.log('Pedido criado:', req.body);
  res.sendStatus(200);
});

app.post('/webhooks/fulfillments-create', (req, res) => {
  console.log('Pedido enviado:', req.body);
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Servidor pronto para receber webhooks!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
