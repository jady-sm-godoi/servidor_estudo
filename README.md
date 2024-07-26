# Meu Projeto de Servidor com Node.js e Express

Este projeto é um exemplo básico de servidor construído com Node.js e Express. Abaixo estão os passos para instalar, configurar e rodar o servidor, além de explicações sobre os conceitos envolvidos.

## Pré-requisitos

- Node.js instalado (você pode baixar [aqui](https://nodejs.org/))
- npm (gerenciador de pacotes do Node.js, instalado junto com o Node.js)

## Instalação

1. Inicialize o projeto com npm:

    ```bash
    npm init -y
    ```

    Isso cria um arquivo `package.json` que mantém um registro das dependências e scripts do seu projeto.

2. Instale o Express:

    ```bash
    npm install express
    ```

    Express é um framework para Node.js que facilita a criação de servidores web e APIs.

3. Instale o Nodemon para desenvolvimento:

    ```bash
    npm install nodemon --save-dev
    ```

    Nodemon é uma ferramenta que reinicia automaticamente o servidor sempre que detecta alterações nos arquivos, facilitando o desenvolvimento.

## Executando o Servidor

1. Para rodar o servidor normalmente, use:

    ```bash
    node server.js
    ```

2. Para rodar o servidor com Nodemon, use:

    ```bash
    npx nodemon server.js
    ```

# Conceitos Importantes

## Node.js
Node.js é um ambiente de execução de JavaScript no servidor. Ele permite que você execute código JavaScript fora de um navegador, o que é ideal para construir servidores e ferramentas de linha de comando.

## Express
Express é um framework minimalista para Node.js que facilita a criação de servidores web e APIs. Ele fornece uma série de funcionalidades robustas para aplicativos web e móveis.

 - Roteamento: Define como o aplicativo responde a uma solicitação de um cliente para um endpoint específico.
 - Middlewares: Funções que têm acesso ao objeto de solicitação (req), ao objeto de resposta (res) e à próxima função middleware no ciclo de solicitação/resposta.

## Nodemon
Nodemon é uma ferramenta que ajuda no desenvolvimento de aplicativos baseados em Node.js reiniciando automaticamente o servidor quando mudanças nos arquivos do projeto são detectadas. Isso economiza tempo e melhora a produtividade.

## dotenv
```bash
    npm install dotenv 
```
A dotenv é uma biblioteca usada para carregar variáveis de ambiente de um arquivo .env para process.env.
### Benefícios:
- Segurança: Mantém credenciais e configurações sensíveis fora do código-fonte.
- Portabilidade: Facilita a configuração em diferentes ambientes (desenvolvimento, teste, produção).

## mongoose
```bash
    npm install mongoose
```
O mongoose é uma biblioteca de modelagem de dados para MongoDB, que fornece uma API para criar esquemas, modelos e realizar operações CRUD.
### Benefícios:
- Modelagem de Dados: Facilita a definição de esquemas de dados e validações.
- Operações CRUD Simplificadas: Fornece uma API para criar, ler, atualizar e deletar documentos.
- Middleware e Hooks: Suporta middleware para adicionar lógica antes ou depois de operações de banco de dados.


# Conclusão
Este projeto fornece uma base sólida para começar a desenvolver servidores com Node.js e Express. Explore a documentação oficial do Node.js e do Express para aprender mais sobre as funcionalidades avançadas e melhores práticas.

### Contato
Para quaisquer perguntas ou sugestões, entre em contato via jady.s.m@gmail.com.