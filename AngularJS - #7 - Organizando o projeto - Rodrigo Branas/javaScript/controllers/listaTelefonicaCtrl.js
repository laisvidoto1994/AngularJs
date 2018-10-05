angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter, $http) {

    $scope.app = "Lista Telefônica";

    $scope.contatos = [];
    $scope.operadoras = [];

    var get = function (url, callback) {

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                callback(xhr.responseText, xhr.status);
            };
        };

        xhr.open('GET', url);
        xhr.send(null);
    };

    var carregarOperadoras = function () {

        $http.get("http://127.0.0.1:5500/javaScript/json/operadoras.json")
            .then(function (data) {

                for (var index = 0; index < data.data.length; index++) { 
 
                    $scope.operadoras = data.data;
                }
            });
    };

    var carregarContatos = function () { 

        $http.get("http://127.0.0.1:5500/javaScript/json/contatos.json")
            .then(function (data) {

                for (var index = 0; index < data.data.length; index++) {
 
                    $scope.contatos = data.data;
                    //document.getElementById("ajax").innerHTML = data.data;
                }
            });
    };

    $scope.addContato = function (contato) {
        
        $http.post("http://127.0.0.1:5500/javaScript/json/contatos.json", contato)
            .then(function (data) {

                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                carregarContatos();
            });
    };

    $scope.ApagarContato = function (contatos) {

        $scope.contatos = contatos.filter(function (contato) {

            if (!contato.selecionado) {
                return contato;
            }
        });
    };

    $scope.isContatoSelecionado = function (contatos) {

        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    }

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();
}); 