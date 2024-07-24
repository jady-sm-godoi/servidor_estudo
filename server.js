const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
/*
é um middleware que permite que o Express analise dados codificados em URL (como os dados enviados de um formulário HTML). O { extended: true } permite que objetos aninhados sejam analisados corretamente.
*/


app.get('/', (request, response) => {
    response.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `)
})

app.get('/testes/:idUsuarios?/:perfil?', (request, response) => {
    /*
    define uma rota que pode receber parâmetros de rota opcionais (idUsuarios e perfil). O ponto de interrogação ? após o nome do parâmetro indica que ele é opcional.
    */
    console.log(request.params) //contém os parâmetros de rota enviados.
    console.log(request.query) //ontém os parâmetros de query string (dados enviados na URL após o ?).
    response.send('Oiiiii')
})

app.post('/', (request, response) => {
    /*
    app.post('/', (request, response) => { ... }); define uma rota que processa os dados enviados via POST para a página principal (/).
    request.body contém os dados do formulário enviados no corpo da solicitação.
    */
    console.log(request.body)
    response.send(`O que recebi do formulário foi: ${request.body.nome}`)
})

app.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato com a gente.')
})

app.listen(3000, () => { //faz com que o aplicativo comece a escutar conexões na porta 3000.
    console.log('http://localhost:3000')
    console.log('servidor executando na porta 3000')
})