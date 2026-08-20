const express = require('express');
const path = require('node:path');
const router = require('./routes');

//criação da estrutura do servidor com express
const app = express();

//configuração da engine e localização das páginas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//configuração da decodificação dos dados enviados por url a partir dos formulários
app.use(express.urlencoded({extended: true}));

//middleware para utilizar as rotas definidas em ./routes.js com express.Router
app.use(router);

//inicialização do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
})