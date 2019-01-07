(function () {

    'use strict';

    angular.module('myApp', [])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];
    
    function config($routeProvider, $locationProvider) { 
        $routeProvider
            .state('index', {
                url: '/',
                templateUrl: 'index.html',
                controller: 'IndexCtrl as indexCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: './views/home.html',
                controller: 'HomeCtrl as homeCtrl'
            })
            .state('detalhe', {
                url: '/detalhe',
                templateUrl: './views/detalhe.html',
                controller: 'DetalheCtrl as detalheCtrl'
            })
    };

})();