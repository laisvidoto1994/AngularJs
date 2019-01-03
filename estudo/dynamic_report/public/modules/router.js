angular.module('myApp')
.config([ '$urlRouterProvider', '$stateProvider', '$locationProvider', '$firebaseRefProvider',
 function($urlRouterProvider, $stateProvider, $locationProvider, $firebaseRefProvider)
 { 

  $firebaseRefProvider.registerUrl({
    default: config.databaseURL,
    // user: `{$config.databaseURL}/user`
  });
  
  $locationProvider.html5Mode({enabled: true, requireBase: false});

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state( 'index', {
    url: '/',
    templateUrl: 'modules/crud/view/login.html',
    controller: 'LoginCtrl as loginCtrl'
  })
  .state( 'register', {
    url: '/register',
    templateUrl: 'modules/crud/view/register.html',
    controller: 'RegisterCtrl'
  })
  .state( 'form', {
    url: '/form',
    templateUrl: 'modules/crud/view/form.html',
    controller: 'formCtrl'
  })
  .state( 'home', {
    url: '/home',
    templateUrl: 'modules/crud/view/home.html',
    controller: 'HomeCtrl as homeCtrl'
  })
  .state( 'listaUsuarios', {
    url: '/listaUsuarios',
    templateUrl: 'modules/crud/view/listaUsuarios.html',
    controller: 'ListaUsuarioController'
  })
  //console.log($stateProvider)
    
}]);