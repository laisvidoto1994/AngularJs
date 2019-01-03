(function () {

    'use strict';

    var authService = function ($http, $firebaseArray, $firebaseObject, $firebaseAuth, $state) {

        var vm = this;

        var service = {
            getGsonServe: _getGsonServe,
        };
        return service;

        /** 
        *  
        */
        function _getGsonServe() {

        }

        function _init() {

        }

        _init();
    }

    //dependencias
    angular.module('myApp').service('servico', ['$http', servico]);

    //referenciando á propio serviço e deixando disponivel
    angular.module("myApp").service("servico", servico);
}());