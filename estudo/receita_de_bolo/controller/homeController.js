(function () {

    'use strict';

    var HomeCtrl = function ($scope) {

        var vm = this;

        $scope.teste = 'oi';

        function _init() {

        };
        _init();
    };

    // ['$scope', HomeCtrl]-> o home é á variavel criada lá em cima, por isso não tem aspas 
    angular.module('myApp', []).controller('HomeCtrl', ['$scope', HomeCtrl]);

}());

