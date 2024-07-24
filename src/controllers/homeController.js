//Este arquivo contém a lógica associada às rotas da página inicial

exports.paginaInicial = (req, res) => {
    res.render('index') //é um método do objeto res que renderiza uma visão (view) usando o motor de templates configurado, que no seu caso é o EJS.
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de post')
}

/*
Os controladores contêm a lógica que será executada quando uma rota é acessada. Eles ajudam a manter o código organizado, separando a lógica de negócio da definição das rotas. Neste projeto, homeController.js e contatoController.js são exemplos de controladores.
 */