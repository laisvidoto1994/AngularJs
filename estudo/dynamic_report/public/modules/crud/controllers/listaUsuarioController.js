(function() {

    'use strict';

    var ListaUsuarioController = function(authService, $scope, $http, $firebaseArray, $firebaseObject, $firebaseAuth, $state) {

        var vm = this;

        /* Referência ao banco de dados Firebase */
        var refs = authService.readData('user');

        /* Listagem de Usuarios na tela */
        vm.usuarios = $firebaseArray(refs);
 
        vm.deletado = false;

        /* funcao que inicia os checkbox marcados pra quem sao admin */
        vm.inicio = function(usuario) {

            if (usuario.type == "admin") {
                //preencher o checkbox
                usuario.selecionado = true;
            }
        }
 
        /* Botão de salvar dados no firebase */
        vm.updateUser = function(usuario, isCheck) {
            let type;
            var db = firebase.database();

            if (isCheck) {
                type = 'admin';
                authService.upUser(usuario, db, type).then(function(result) {
                    console.log(result);
                });
                usuario.selecionado = true;
            }

            else {
                type = 'user';
                authService.upUser(usuario, db, type).then(function(result) {
                    console.log(result);
                });
                usuario.selecionado = false;
            }
        }

        /* Habilita o chechbox para editar opção */
        vm.isAdmin = function(index) {

            if (vm.usuarios[index].disabled === true) {
                vm.usuarios[index].disabled = false;
            } else {
                vm.usuarios[index].disabled = true;
            }
        }
    }
    angular.module('myApp')
        .controller('ListaUsuarioController', ['authService', '$scope', '$http', '$firebaseArray', '$firebaseObject', '$firebaseAuth', '$state', ListaUsuarioController]);

}());
