"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 200;
app.get('/', function (request, response) {
    response.send('Hello Word!');
});
app.get('/Gege', function (request, response) {
    response.send('Mentalidades<br><br>Persistêcia<br>Responsabilidade Pessoal<br>Orientação ao Futuro<br>Mentalidade de Crescimento');
});
app.get('/Gen', function (request, response) {
    response.send('Habilidades<br><br>Trabalho em Equipe<br> Atenção aos Detalhes<br>Protividade<br>Comunição');
});
app.get('/Lista', function (resquest, response) {
    response.send('Bancos de Dados<br><br>MySQLWorkBench<br>ComandoJoin');
});
// Code here
// Codifique os exercicio da primeira lista 
app.listen(port, function () {
    console.log("Server is runnig at port ".concat(port));
});
