(function () {

    'use strict';

    var DetalheCtrl = function ($scope, $http, servico) {

        var vm = this;

        /*  */
        var refs = servico.getGsonServe();

        function _init() {

        };

        _init();
    }

    angular.module("myApp")
        .controller("DetalheCtrl", ['$scope', '$http', 'servico', DetalheCtrl]);

}());