//Este arquivo contém a lógica associada às rotas da página inicial

/*
Definição do Modelo: HomeModel é definido com um esquema (HomeSchema) que especifica a estrutura dos documentos na coleção Home.
Criação de Documento: O código cria um novo documento na coleção Home com um título e descrição específicos.
Consulta de Documentos: O código busca todos os documentos na coleção Home e imprime os resultados.
Este código ilustra operações básicas de interação com um banco de dados MongoDB usando Mongoose, permitindo a criação e leitura de documentos de forma assíncrona, lidando com sucessos e erros através de promessas (then e catch).
*/
// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'Titulo da Home do Site da Jady',
//     descricao: 'Esse é um modelo para iniciar um projeto completo em node.js com expresse e mongoDB.'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))


// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))

    
exports.paginaInicial = (req, res) => {
    res.render('index') //é um método do objeto res que renderiza uma visão (view) usando o motor de templates configurado, que no seu caso é o EJS.
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de post')
}

/*
Os controladores contêm a lógica que será executada quando uma rota é acessada. Eles ajudam a manter o código organizado, separando a lógica de negócio da definição das rotas. Neste projeto, homeController.js e contatoController.js são exemplos de controladores.
 */