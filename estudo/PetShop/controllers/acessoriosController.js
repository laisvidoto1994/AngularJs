(function () {

    'use strict';

    var AcessoariosCtrl = function ($scope, $http) {

        var vm = this;
 
        function _init() {
        };
        _init();
    };

    // ['$scope', HomeCtrl]-> o home é á variavel criada lá em cima, por isso não tem aspas 
    angular.module('myApp', []).controller('AcessoariosCtrl', ['$scope', '$http', AcessoariosCtrl]);

}());