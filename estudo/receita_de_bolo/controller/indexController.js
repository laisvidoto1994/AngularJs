(function () {

    'use strict';

    var IndexCtrl = function ($scope, $http, servico) {

        var vm = this;

        /*  */
        var refs = servico.getGsonServe();

        function _init() {

        };

        _init();
    }

    angular.module("myApp")
        .controller("IndexCtrl", ['$scope', '$http', 'servico', IndexCtrl]);

}());