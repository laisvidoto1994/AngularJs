(function () {

    'use strict';

    var HomeCtrl = function ($scope, $http, servico) {

        var vm = this;

        /*  */
        var refs = servico.getGsonServe();

        function _init() {

        };

        _init();
    }

    angular.module("myApp")
        .controller("HomeCtrl", ['$scope', '$http', 'servico', HomeCtrl]);

}());