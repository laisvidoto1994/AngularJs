/* 
    https://www.youtube.com/watch?v=_y7rKxqPoyg&list=PLQCmSnNFVYnTD5p2fR4EXmtlR6jQJMbPb&index=1  
    ng-app=>Definindo as fornteiras da aplicação 
*/

/* criando um modulo */
var app =  angular.module("testeInicial",[]);

/* criando um Controller */
app.controller("testeInicialCtrl", function($scope)
{
     $scope.message = "teste de testes!";
});