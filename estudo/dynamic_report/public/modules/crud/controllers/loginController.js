(function () {
    'use strict';

    var LoginCtrl = function ($scope, $http, $firebaseArray, $firebaseObject, $firebaseAuth, $state, authService) {

        var vm = this;

        //menssagens de ERRO do firebase referentes á tela de login
        const MENSS1 = "The password is invalid or the user does not have a password.";
        const MENSS2 = "There is no user record corresponding to this identifier. The user may have been deleted.";
        const MENSS3 = "Dados Incorretos!";
 

        var authObj = $firebaseAuth();

        vm.isChecked = false;

        /*
        *   Login no sistema
        */

        vm.login = function (user) {
            let source = "SESSION";
            if (vm.isChecked) {
                source = "LOCAL"
            }

            authService.login(source)
                .then(function (result) {
                    console.log(result);
                    return vm.signIn(user);
                })
                .catch(function (error) {
                    console.log("Error: ", error.code);
                    console.log("Error: ", error.message);
                });

        }

        vm.signIn = function (user) {
            authService.loginWithEmailAndPass(user)
                .then(function (firebaseUser) {
                    console.log("User: " + firebaseUser.user.email + ", logged successfully!"); 
                    $state.go('home');
                    // função para pegar o token "data".
                    authService.getToken().then(function (data) {
                        console.log(data);
                    });
                }).catch(function (error) {
                    vm.iconeErroLogin = true;
                    if (error.message == MENSS1 || error.message == MENSS2 ) 
                    {
                        vm.erros = MENSS3; 
                    }
                });
        }

        // Essa função é chamada toda vez que o estado do usuário mudar.
        authObj.$onAuthStateChanged(
            function (user) {
                if (user) {
                    // User is signed in.   
                } else {
                    // User is signed out.
                    $state.go('index');
                    authObj.$signOut();
                }
            }
        );

    }

    angular.module('myApp').controller('LoginCtrl', ['$scope', '$http', '$firebaseArray', '$firebaseObject', '$firebaseAuth', '$state', 'authService', LoginCtrl]);

}());

