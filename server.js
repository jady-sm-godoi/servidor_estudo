const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `)
})

app.post('/', (request, response) => {
    response.send('Recebi o formulário.')
})

app.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato com a gente.')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('servidor executando na porta 3000')
})