
//Configuração do servidor
const express = require('express');  
const app = express(); 

//Dependencias
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

//Configuração bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuração handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main', 
}));
app.set('view engine', 'handlebars');

