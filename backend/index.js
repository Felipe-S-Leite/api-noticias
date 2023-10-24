const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

//acessando os controles da aplicação
const usuario = require('./controllers/usuarioController.js');

//rotas
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Estou aqui DENOVO'));
app.use('/usuario', usuario);

app.listen(port, () => console.log(`servidor rodando porta ${port}!`));
