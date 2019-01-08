(function () {

    'use strict';

    var suggestCtrl = function ($scope) {

        var vm = this;


        /* carregamento de imagem */
        $scope.openFile = function (event) {

            var input = event.target;

            var reader = new FileReader();

            reader.onload = function () {

                var dataURL = reader.result;
                var output = document.getElementById('output');
                output.src = dataURL;
            };

            reader.readAsDataURL(input.files[0]);
        };


        function buscaDados() {

            var jsonDados;

            $http({ method: "POST", url: "http://localhost:3000/db" })
                .then(function mySuccess(response) {

                })
        }

        function _init() {
            buscaDados();
        };
        _init();
    };

    // ['$scope', HomeCtrl]-> o home é á variavel criada lá em cima, por isso não tem aspas 
    angular.module('myApp', []).controller('suggestCtrl', ['$scope', suggestCtrl]);

}());

