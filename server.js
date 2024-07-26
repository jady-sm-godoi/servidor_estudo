/*
Este é o arquivo principal do seu servidor. Aqui, você configura o servidor e define middleware global, além de importar e usar as rotas definidas em outro arquivo.
*/

require('dotenv').config() //dotenv é uma biblioteca que carrega variáveis de ambiente de um arquivo .env para process.env em Node.js. Isso é útil para configurar variáveis de ambiente em projetos de forma fácil e segura, especialmente para manter informações sensíveis, como senhas e chaves de API, fora do código-fonte.

const express = require('express')
const app = express()

/*
Importação do Mongoose: Para usar a biblioteca Mongoose.
Conexão ao MongoDB: Usa mongoose.connect com uma string de conexão armazenada em uma variável de ambiente.
Promise: Manipula a conexão bem-sucedida e os erros.
Evento pronto: Sinaliza que a aplicação está pronta para aceitar solicitações após a conexão com o banco de dados.
Este padrão é útil para garantir que a aplicação só começa a aceitar solicitações depois que a conexão com o banco de dados está estabelecida, proporcionando uma inicialização mais segura e robusta.
*/
const mongoose = require('mongoose')

mongoose.connect(process.env.CONECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e  => console.log(e))

const routes = require('./routes') //Isso permite que você use as rotas definidas nesse arquivo no seu aplicativo principal (server.js).
const path = require('path') //Esta linha importa o módulo path do Node.js, que fornece utilitários para trabalhar com caminhos de arquivos e diretórios.
const {middlewareGlobal} = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}))
/*
é um middleware que permite que o Express analise dados codificados em URL (como os dados enviados de um formulário HTML). O { extended: true } permite que objetos aninhados sejam analisados corretamente.
*/

app.use(express.static(path.resolve(__dirname, 'public')))
/*
você está dizendo ao Express para servir todos os arquivos estáticos encontrados na pasta public. Isso significa que qualquer arquivo colocado nessa pasta será acessível diretamente pelo navegador.
*/

app.set('views', path.resolve(__dirname, 'src', 'views'))
/*
Esta linha configura o diretório onde estão localizadas as vistas (arquivos de template) da sua aplicação.
path.join(__dirname, 'src', 'views') combina o caminho atual do diretório (__dirname) com 'src' e 'views' para formar o caminho completo para a pasta de vistas.
*/
app.set('view engine', 'ejs')
/*
Esta linha configura o Express para usar o EJS (Embedded JavaScript) como o motor de templates da aplicação.
O EJS é uma linguagem de templates que permite gerar HTML com JavaScript. Ele facilita a criação de páginas HTML dinâmicas, onde você pode inserir dados dinamicamente no HTML.
*/

app.use(middlewareGlobal); //todas as requisições, em todos os métodos em todas as rotas vão passar por esse middleware global.
app.use(routes)
/*
Esta linha adiciona o middleware de rotas ao seu aplicativo. Isso significa que todas as rotas definidas em routes.js serão usadas pelo seu aplicativo.
 */


app.on('pronto', () => {
    app.listen(3000, () => { //faz com que o aplicativo comece a escutar conexões na porta 3000.
        console.log('http://localhost:3000')
        console.log('servidor executando na porta 3000')
    })
})
