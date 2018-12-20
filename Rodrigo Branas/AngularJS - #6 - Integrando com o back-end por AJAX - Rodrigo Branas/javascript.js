angular.module("listaTelefonica", ["ngMessages"]);

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter, $http) {

    $scope.app = "Lista Telefonica";

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

        $http.get("http://127.0.0.1:5500/operadoras.json")
            .then(function (data) {

                for (var index = 0; index < data.data.length; index++) {

                    console.log(data.data);
                    $scope.operadoras = data.data;
                }
            })
            .error(function (data) {
                $scope.message = "deu erro: " + data;
            });
    };

    var carregarContatos = function () {

        /*
            get("http://127.0.0.1:5500/contatos.json", function (data) {
                console.log(data);
                document.getElementById("ajax").innerHTML = data;
            });
        */

        $http.get("http://127.0.0.1:5500/contatos.json")
            .then(function (data) {

                for (var index = 0; index < data.data.length; index++) {

                    console.log(data.data);
                    $scope.contatos = data.data;
                    //document.getElementById("ajax").innerHTML = data.data;
                }
            })
            .error(function (data) {
                $scope.message = "deu erro: " + data;
            });
    };

    $scope.addContato = function (contato) {
        // $scope.contatos.push(angular.copy(contato));

        /*
        $http.post("http://127.0.0.1:5500/contatos.json", contato)
            .then(function (data) {
    
                delete $scope.contato; 
                $scope.contatoForm.$setPristine();
            }); 
        */
        $http.post("http://127.0.0.1:5500/contatos.json", contato)
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