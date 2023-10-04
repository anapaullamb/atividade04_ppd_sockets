// Importa as bibliotecas necessárias
var express = require('express'),

    app = express(),
    server = require('http').createServer(app).listen(4555), // Cria um servidor HTTP e o faz escutar na porta 4555
    io = require('socket.io').listen(server); // Cria uma instância do Socket.io e a conecta ao servidor



export const emitir = function (req, res, next) {
    var notificar = req.query.notificacao || '';
    if (notificar != '') {
        io.emit('notificacao', notificar); // Emite uma notificação via Socket.io
        next(); // Passa para o próximo middleware
    } else {
        next(); // Passa para o próximo middleware
    }
}