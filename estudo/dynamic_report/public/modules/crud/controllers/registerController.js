(function() {
  'use strict';
  var  RegisterCtrl = function($scope, $http, $firebaseArray, $firebaseObject, $firebaseAuth, $state, authService) {
    
    var vm = this;

    var ref = firebase.database().ref().child("user");

    var authObj = $firebaseAuth();

    const MENSSAGEM1 = "The email address is already in use by another account.";
    const MENSSAGEM2 = "E-mail já cadastrado!";
    const MENSSAGEM3 = "E-mail Cadastrado com Sucesso! Realize login";  

    vm.register = function(user) {
      // Autenticação de usuario no firebase
      authService.adicionarUsuarioFirebase( user.userEmail, user.userPass )
      .then(function (result){  
        var uid = authObj.$getAuth().uid;
        // Adicionar usuario no banco
        authService.adicionarUsuarioBanco(user.userEmail, "user", uid); 
        alert(MENSSAGEM3);

        // Logout de usuario no firebase
        authService.signOutUsuarioBanco(user);
        window.location.reload();
      }).catch(function (error){  
        if( error.message == MENSSAGEM1){
          vm.iconeErroRegister = true;
          if (error.message == MENSSAGEM1){
            vm.erroCadastro = MENSSAGEM2;
          }
        } 
      });
    }
  }

  angular.module('myApp')
  .controller('RegisterCtrl', ['$scope', '$http', '$firebaseArray', '$firebaseObject', '$firebaseAuth',
  '$state', 'authService', RegisterCtrl]);
  
}());