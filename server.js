/*
Este é o arquivo principal do seu servidor. Aqui, você configura o servidor e define middleware global, além de importar e usar as rotas definidas em outro arquivo.
*/
const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({extended: true}))
/*
é um middleware que permite que o Express analise dados codificados em URL (como os dados enviados de um formulário HTML). O { extended: true } permite que objetos aninhados sejam analisados corretamente.
*/

app.use(routes)




app.listen(3000, () => { //faz com que o aplicativo comece a escutar conexões na porta 3000.
    console.log('http://localhost:3000')
    console.log('servidor executando na porta 3000')
})