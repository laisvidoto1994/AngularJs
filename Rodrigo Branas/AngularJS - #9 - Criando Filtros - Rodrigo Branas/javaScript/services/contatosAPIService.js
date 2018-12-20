angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {

    var _getContatos = function () {

        return $http.get( config.baseURL + "/contatos.json");
    }

    var _saveContato = function (contato) {

        return $http.post( config.baseURL + "/contatos.json", contato);
    }

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    }; 
});