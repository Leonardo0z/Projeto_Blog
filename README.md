# Blog Node.js

Projeto Blog desenvolvido com Node.js, Express, Sequelize, Handlebars e MySQL.

## Estrutura do Projeto

- `app.js` - Servidor principal
- `models/` - Modelos e configuração do banco
- `views/` - Templates Handlebars
- `public/` - Arquivos estáticos

## Rotas

- GET `/` - Página inicial
- GET `/postagens` - Lista de postagens
- GET `/nova` - Formulário de nova postagem
- POST `/add` - Receber dados do formulário
- GET `/testdb` - Testar conexão com banco