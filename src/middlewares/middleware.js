exports.middlewareGlobal = (req, res, next) => {
    //lógica ...
    next()
}

/*
Middleware é um conceito fundamental no desenvolvimento de aplicações com Express. Middleware são funções que têm acesso ao objeto de solicitação (request req), ao objeto de resposta (response res) e à próxima função de middleware no ciclo de solicitação/resposta da aplicação. Essas funções podem executar qualquer código, modificar os objetos de solicitação e resposta, terminar o ciclo de solicitação/resposta ou chamar a próxima função de middleware.

**Tipos de Middleware
Middleware de Aplicação: Vinculado a uma instância do aplicativo Express.
Middleware de Rota: Vinculado a uma instância do roteador Express.
Middleware Incorporado: Middleware fornecido pelo próprio Express (como express.static e express.json).
Middleware de Terceiros: Middleware criado por desenvolvedores externos (como body-parser ou cors).

**Como Funciona
Função Middleware: É uma função que recebe três argumentos: req, res, next

**Middleware Global
Middleware global é aplicado a todas as rotas. Você pode usar app.use() para aplicar middleware global.

**Middleware para Rota Específica
Middleware pode ser aplicado a rotas específicas, passando a função middleware como segundo argumento.

**Middleware para Grupo de Rotas
Você pode aplicar middleware a um grupo de rotas usando o roteador.

**Middleware Incorporado
Express possui alguns middlewares incorporados, como express.json() e express.urlencoded().

Middleware é essencial para adicionar funcionalidades como autenticação, registro de atividades (logging), análise de dados da solicitação, manipulação de erros e muito mais. Ele ajuda a manter o código modular e reutilizável.

 */