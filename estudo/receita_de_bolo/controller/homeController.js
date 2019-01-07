(function () {

    'use strict';

    var HomeCtrl = function ($scope, $http, servicoServices) {

        var vm = this;
        $scope.ingredientesNull = 0;

        function buscaDados() {

            var jsonDados;

            $http({ method: "GET", url: "http://localhost:3000/db" })
                .then(function mySuccess(response) {
                    jsonDados = response.data.db;
                    $scope.teste2 = jsonDados;

                    $scope.filteredTodos = [];
                    $scope.itemsPerPage = 1;
                    $scope.currentPage = 1;

                    $scope.makeTodos = function () {
                        $scope.todos = [];
                        for (let i = 0; i < jsonDados.length; i++) {

                            //string vazia
                            if (!jsonDados[i].ingredientes[0].praline[0]) {
                                console.log(jsonDados[i].ingredientes[0].praline);
                                $scope.checked = false;
                            }
                            else {
                                $scope.checked = true;
                            }

                            $scope.todos.push({
                                id: jsonDados[i].id
                                , name: jsonDados[i].name
                                , descricao: jsonDados[i].descricao
                                , photo: jsonDados[i].photo

                                , ingredientesMassa: jsonDados[i].ingredientes[0].massa
                                , ingredientesRecheio: jsonDados[i].ingredientes[0].recheio
                                , ingredientesCobertura: jsonDados[i].ingredientes[0].cobertura
                                , ingredientesCalda: jsonDados[i].ingredientes[0].calda
                                , ingredientesPraline: jsonDados[i].ingredientes[0].praline

                                , modoDePreparoMassa: jsonDados[i].modoDePreparo[0].massa
                                , modoDePreparoRecheio: jsonDados[i].modoDePreparo[0].recheio
                                , modoDePreparoCobertura: jsonDados[i].modoDePreparo[0].cobertura
                                , modoDePreparoCalda: jsonDados[i].modoDePreparo[0].calda
                                , modoDePreparoPraline: jsonDados[i].modoDePreparo[0].praline
                                , modoDePreparoMontagem: jsonDados[i].modoDePreparo[0].montagem
                                , modoDePreparoDica: jsonDados[i].modoDePreparo[0].dica  
                            });
                        }
                    };

                    $scope.figureOutTodosToDisplay = function () {

                        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
                        var end = begin + $scope.itemsPerPage;

                        $scope.filteredTodos = $scope.todos.slice(begin, end);
                    };

                    $scope.makeTodos();
                    $scope.figureOutTodosToDisplay();

                    $scope.pageChanged = function () {
                        $scope.figureOutTodosToDisplay();
                    };

                    return jsonDados;

                })
                , function myError(response) {
                    console.log("ERROR: " + response);
                };

            /*
                   var jsonDados2;
                   jsonDados2 = servicoServices.getGsonServe()
                       .then(function mySuccess(response) { 
                           jsonDados = response.data.db;
                           $scope.teste2 = jsonDados;  
                       })
                       , function myError(response) {
                           console.log("ERROR: " + response);
                       };
            
                  // $scope.teste2 = jsonDados2;
                   console.log(jsonDados2);
            */
        };

        function _init() {
            //  var ref = servicoService.getGsonServe();
            buscaDados();
        };

        _init();
    };

    // ['$scope', HomeCtrl]-> o home é á variavel criada lá em cima, por isso não tem aspas 
    angular.module('myApp', ['ui.bootstrap'])
        .controller('HomeCtrl', ['$scope', '$http', HomeCtrl]);

}());

