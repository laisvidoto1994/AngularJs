(function () {

  'use strict';

  var authService = function ($http, $firebaseArray, $firebaseObject, $firebaseAuth, $state) {

    var vm = this;

    var authObj = $firebaseAuth();
    var db = firebase.database().ref().child("user");

    var service = {
      adicionarUsuarioFirebase: _adicionarUsuarioFirebase,
      adicionarUsuarioBanco: _adicionarUsuarioBanco,
      signOutUsuarioBanco: _signOutUsuarioBanco,
      upUser: _upUser,
      readData: _readData,
      login: _login,
      loginWithEmailAndPass: _loginWithEmailAndPass,
      getToken: _getToken,
      checkUserAdmin: _checkUserAdmin
    };
    return service;

    function _checkUserAdmin(loggedUser) {
      return firebase.database().ref().child("user").orderByChild('uid').equalTo(loggedUser);
    }

    /**
     * Criar Altenticação de usuario no Firebase
     */
    function _adicionarUsuarioFirebase(emailUsuario, senhaUsuario) {
      return authObj.$createUserWithEmailAndPassword(emailUsuario, senhaUsuario);
    }

    /** 
     *  Adicionar Usuario no Banco do Firebase do type=user
     */
    function _adicionarUsuarioBanco(emailUsuario, typeUsuario, uidUsuario) {
      return $firebaseArray(db).$add({ email: emailUsuario, type: typeUsuario, uid: uidUsuario });
    }

    /**
      * Requisição ao banco de dados do firebase
      */
    function _readData(data) {
      return firebase.database().ref().child(data);
    }

    /**
    * Saber o tipo de acesso ao firebase se é LOCAL ou SOURCE
    */
    function _login(source) {
      return firebase.auth().setPersistence(firebase.auth.Auth.Persistence[source]);
    }

    /**
     * Realizar loguin do usuario no firebase
     */
    function _loginWithEmailAndPass(user) {
      return authObj.$signInWithEmailAndPassword(user.userEmail, user.userPass);
    }

    /**
     * Gerar o token de acesso do firebase do usuario
    */
    function _getToken() {
      return firebase.auth().currentUser.getIdToken();
    }

    /**
     * Atualização do type do usuario no banco do firebase
     */
    function _upUser(usuario, db, type) {
      return db.ref("user/" + usuario.$id).update({ type: type });
    }

    /** 
    *  realizar o logalt do Usuario no Banco do Firebase
    */
    function _signOutUsuarioBanco(user) {
      return authObj.$signOut();
    }

    function _init() {

    }

    _init();
  }
  angular.module('myApp')
    .service('authService', ['$http', '$firebaseArray', '$firebaseObject', '$firebaseAuth', '$state', authService]);

  angular.module("myApp")
    .service("authService", authService);
}());

