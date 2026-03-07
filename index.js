require('dotenv').config();
const express = require('express');
const session = require('express-session');
const routes = require('./app/routes/Index.js');


const app = express();

app.use(session({
  secret: "segredo-super-forte",
  resave: false,
  saveUninitialized: false,
}));

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


