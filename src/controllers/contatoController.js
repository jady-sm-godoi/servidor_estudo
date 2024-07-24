//Este arquivo contém a lógica associada às rotas de contato.

exports.paginaInicial = (req, res) => {
    res.send('Obrigada por entrar em contato!')
}

/*
Os controladores contêm a lógica que será executada quando uma rota é acessada. Eles ajudam a manter o código organizado, separando a lógica de negócio da definição das rotas. Neste projeto, homeController.js e contatoController.js são exemplos de controladores.
 */