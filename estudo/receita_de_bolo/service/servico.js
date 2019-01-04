(function () {

    'use strict';

    var servicoService = function ($http) {

        var vm = this;

        var services = {
            getGsonServe: _getGsonServe
        };
        return services;

        /** 
        *  
        */
        function _getGsonServe() {
            $http.get("http://localhost:3000/db")
                .success(function (data) {
                    console.log(data);
                    return data;
                })
                .error(function (data) {
                    console.log("ERROR: " + data);
                });
        }

        function _init() {

        }

        _init();
    }
 
    angular.module('myApp', []).service('servicoService', ['$scope', servicoService]);
}());