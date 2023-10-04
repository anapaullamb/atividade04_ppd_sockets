// Importa as bibliotecas necessárias
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'); // Biblioteca para análise do corpo das requisições


// Configura o uso do bodyParser para analisar os corpos das requisições
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // Define a porta padrão como 8080 caso não seja fornecida via variável de ambiente
var router = require('./routes'); // Criação do roteador
var middleware = require('./middleware'); // Criação do roteador


app.use(middleware.emitir); // Utiliza o middleware de emissão de notificações
app.use('/api', router); // Define a rota base '/api' para o roteador

// Inicia o servidor na porta definida
app.listen(port);
console.log('Conectado à portas ' + port);