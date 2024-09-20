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
    // req.session.usuario = { nome: 'Jady Godoi', logado: true}
    console.log(req.session.usuario)
    /*
    Aqui criamos um objeto com dados do usuário guardados na sessão do usuário. Esses dados ficarão guardados por 7 dias como foi configurado no server.js
    */

    // req.flash('info', 'Olá mundo!')
    // req.flash('error', 'uma mensagem de erro.')
    // req.flash('success', 'uma mensagem de sucesso.')
    console.log(req.flash('info'), req.flash('success'), req.flash('error'))
    /*
    connect-flash
        Mensagens Temporárias:
            connect-flash é usado para enviar mensagens temporárias entre requisições. Essas mensagens são armazenadas na sessão e removidas assim que são acessadas.
    */

    res.render('index', { //inejtando dados no template do index para home.
        titulo: 'Este é o título injetado por ejs',
        numeros: [1,2,3,4,5,6,7,8,9]
    }) //é um método do objeto res que renderiza uma visão (view) usando o motor de templates configurado, que no seu caso é o EJS.
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de post')
}

/*
Os controladores contêm a lógica que será executada quando uma rota é acessada. Eles ajudam a manter o código organizado, separando a lógica de negócio da definição das rotas. Neste projeto, homeController.js e contatoController.js são exemplos de controladores.
 */