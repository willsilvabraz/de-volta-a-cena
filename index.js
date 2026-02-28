require('dotenv').config();
const express = require('express');
const routes = require('./src/routes/Index');


const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Tudo OK ');
});


