const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/postagens', (req, res) => {
    res.send('Lista de postagens (em desenvolvimento)');
});

app.get('/nova', (req, res) => {
    res.render('form');
});

app.post('/add', (req, res) => {
    res.send('Recebendo dados do formulário (em desenvolvimento)');
});

app.get('/testdb', async (req, res) => {
    try {
        const db = require('./models/db');
        await db.testConnection();
        res.send('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        res.send('Erro na conexão com o banco de dados: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});