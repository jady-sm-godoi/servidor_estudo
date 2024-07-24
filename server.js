const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (request, response) => {
    response.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `)
})

app.get('/testes/:idUsuarios?/:perfil?', (request, response) => {
    console.log(request.params)
    console.log(request.query)
    response.send('Oiiiii')
})

app.post('/', (request, response) => {
    console.log(request.body)
    response.send(`O que recebi do formulário foi: ${request.body.nome}`)
})

app.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato com a gente.')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('servidor executando na porta 3000')
})