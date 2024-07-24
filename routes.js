/*
Este arquivo define as rotas da aplicação, delegando as responsabilidades para os controladores.
 */

const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')


//Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

//Rotas de contato
route.get('/contato', contatoController.paginaInicial)


module.exports = route

/*
Rotas

Rotas são pontos de extremidade (endpoints) definidos na sua aplicação que respondem a solicitações HTTP específicas. Elas são definidas com métodos HTTP como GET, POST, PUT, DELETE, etc. No Express, as rotas são configuradas usando app.get(), app.post(), e assim por diante. Neste código, as rotas são definidas em routes.js e associadas a funções específicas nos controladores.
 */