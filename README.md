# src atual

- [controllers/](./src/controllers)
  - [UsersController.js](./src/controllers/UsersController.js)
- [routes/](./src/routes)
  - [index.js](./src/routes/index.js)
  - [users.routes.js](./src/routes/users.routes.js)
- [utils/](./src/utils)
  - [AppError.js](./src/utils/AppError.js)
- [server.js](./src/server.js)

# SQL

- O que é um banco de dados - 10:45: Nessa aula aprenderemos o que é um banco de dados e quais são as suas propriedades como: Tabela, linha, coluna, tipo de dado. Também aprenderemos o que é um banco de dados Relacional.
  <img src="./img/node1.jpg">
  <img src="./img/node2.jpg">
  <img src="./img/node3.jpg">
  <img src="./img/node4.jpg">
  <img src="./img/node5.jpg">

- Estrutura do Banco de Dados - 06:02: Nessa aula apresentaremos como será a estrutura do banco de dados do projeto que iremos desenvolver.
  <img src="./img/node6.jpg">

- Conectando com o banco de dados - 07:40: Nessa aula faremos a configuração inicial para que nosso projeto consiga se comunicar com o banco de dados SQLite.

  - npm install sqlite3 sqlite --save (dependência de produção)
  - Criar pasta database/sqlite/index.js

- SGBD (Sistema Gerenciador de Banco de DAdos) - 02:23: Nessa aula instalaremos a ferramenta Beekeper Studio para que consigamos visualizar e executar funções em nosso banco da dados.

  - [Open Source SQL Editor and Database Manager](https://www.beekeeperstudio.io/)
    <img src="./img/node8.jpg">

- Criando tabela de usuário - 08:49 - Nessa aula com a utilização do Beekeper Studio, criaremos a nossa primeira tabela no banco de dados.

  - Comando para criar a tabela `users`:
      <pre>
      CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR,
      email VARCHAR,
      password VARCHAR,
      avatar VARCHAR NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    </pre>
    <img src="./img/node7.jpg">

- SQL - 03:04 - Nessa aula aprenderemos o significado de SQL (Structured Query Language), ou Linguagem de Consulta Estruturada. É a linguagem padrão para banco de dados relacionais. Também aprenderemos sobre comandos DML (Data Manipulation Language)

  - Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional.
  - DDL ou Data Definition Language (Linguagem de Definição de dados) - permite ao usuário definir as novas tabelas e os elementos que serão associados a elas. É responsável pelos comandos de criação e alteração no banco de dados, sendo composto por três comandos: `CREATE`, `ALTER` e `DROP`.

- Alter - 05:23
- Comando DDL - 04:27
- Manipulando Dados - 15:29
  - O DML ou Data Manipulation Language (Linguagem de Manipulação de Dados) interage diretamente com os dados dentro das tabelas. Possui três comandos para esta manipulação: `INSERT`, `UPDATE` e `DELETE`.
- Migrations - 07:08
- Select - 07:02
- Cadastrando usuário - 04:33
- Criptografando senha do usuário - 05:18
- Atualizando usuário - 10:57
- Atualizando senha - 05:14
- Datetime do Banco - 03:29
- Validando nome e e-mail - 02:55
