(function () {

    'use strict';

    var IndexCtrl = function ($scope) {

        var vm = this;

        

        function _init() { 
        };
        _init();
    };

    // ['$scope', HomeCtrl]-> o home é á variavel criada lá em cima, por isso não tem aspas 
    angular.module('myApp', []).controller('IndexCtrl', ['$scope', IndexCtrl]);

}());