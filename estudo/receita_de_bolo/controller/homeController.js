(function () {

    'use strict';

    var HomeCtrl = function ($scope, $http) {

        var vm = this;

        $scope.teste = 'oi';

        function buscaDados() {

            var jsonDados = [];

            $http({ method: "GET", url: "http://localhost:3000/db" })
                .then(function mySuccess(response) {

                    for (var prop in response.data.db) {
                        var dados = [];
                        dados.id = response.data.db[prop].id;
                        dados.name = response.data.db[prop].name;
                        dados.descricao = response.data.db[prop].descricao;
                        dados.photo = response.data.db[prop].photo;

                        dados.ingredientesMassa = response.data.db[prop].ingredientes[0].massa;
                        dados.ingredientesRecheio = response.data.db[prop].ingredientes[0].recheio;
                        dados.ingredientesCobertura = response.data.db[prop].ingredientes[0].cobertura;
                        dados.ingredientesCalda = response.data.db[prop].ingredientes[0].calda;
                        dados.ingredientesPraline = response.data.db[prop].ingredientes[0].praline;

                        dados.modoDePreparoMassa = response.data.db[prop].modoDePreparo[0].massa;
                        dados.modoDePreparoRecheio = response.data.db[prop].modoDePreparo[0].recheio;
                        dados.modoDePreparoCobertura = response.data.db[prop].modoDePreparo[0].cobertura;
                        dados.modoDePreparoCalda = response.data.db[prop].modoDePreparo[0].calda;
                        dados.modoDePreparoPraline = response.data.db[prop].modoDePreparo[0].praline;
                        dados.modoDePreparoMontagem = response.data.db[prop].modoDePreparo[0].montagem;
                        dados.modoDePreparoDica = response.data.db[prop].modoDePreparo[0].dica;

                        jsonDados.push(dados);
                    }
                    return jsonDados;
                })
                , function myError(response) {
                    console.log("ERROR: " + response);
                };

            $scope.teste2 = jsonDados[jsonDados];
            console.log($scope.teste2);
        };

        function _init() {
            //  var ref = servicoService.getGsonServe();
            buscaDados();
        };

        _init();
    };

    // ['$scope', HomeCtrl]-> o home é á variavel criada lá em cima, por isso não tem aspas 
    angular.module('myApp', []).controller('HomeCtrl', ['$scope', '$http', HomeCtrl]);

}());

