(function() {

  'use strict';

  var HomeCtrl = function (authService, $scope, $http, $firebaseAuth, $firebaseArray, $firebaseObject, $state) {
    
    var vm = this;

    vm.authObj = $firebaseAuth();

    vm.sair = function(){ authService.signOutUsuarioBanco();}

    /* Lista de Reportes do Banco Firebase */
    var ref = authService.readData('reports');
    vm.reports = $firebaseArray(ref);

    vm.buscaUsuarioVisivel = function (uidUsuarioLogado) {

      authService.checkUserAdmin(uidUsuarioLogado)
        .on("value", function (snapshot) {
          var chaveUsuario;
          var todoUsuario;

          /* varrendo o array, atraz do $id */
          snapshot.forEach(function (data) {
            chaveUsuario = data.key;
          });

          todoUsuario = snapshot.child(chaveUsuario).val();

          console.log(todoUsuario.type + " - " + todoUsuario.email);

          if (todoUsuario.type == "admin") {
            vm.tipoUsuarioVisivel = true;
          }
          else {
            vm.tipoUsuarioVisivel = false;
          }

        }, function (error) {
          console.log("Error: " + error.code);
        });
    }
    function _init() {
      var uidUsuarioLogado = vm.authObj.$getAuth().uid;
      vm.buscaUsuarioVisivel(uidUsuarioLogado);
    };

    _init();
  }

  angular.module("myApp")
  .controller("HomeCtrl", ['authService', '$scope', '$http', '$firebaseAuth', '$firebaseArray', '$firebaseObject', '$state',HomeCtrl]); 

}());
