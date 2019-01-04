(function () {

    'use strict';

    var HomeCtrl = function ($scope, $http) {

        var vm = this;

        $scope.teste = 'oi';

        function buscaDados() {

            var jsonDados;

            $http({ method: "GET", url: "http://localhost:3000/db" })
                .then(function mySuccess(response) {

                    jsonDados = response.data.db;
                    $scope.teste2 = jsonDados;
                    console.log($scope.teste2);
                })
                , function myError(response) {
                    console.log("ERROR: " + response);
                };
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

