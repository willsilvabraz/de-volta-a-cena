require('dotenv').config();
const express = require('express');
const routes = require('./src/routes/Index');


const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


