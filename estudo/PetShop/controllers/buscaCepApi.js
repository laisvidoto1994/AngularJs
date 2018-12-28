var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

    $(document).ready(function () {
        $("#aba").load("abas.html");
        $("#rodape").load("rodape.html");
    });

    $scope.nova = function () { 
        location.href = "cadastro.html"
    }

    var result = '';
    $scope.submit = function () {
        result = $scope.data;

        $http({ method: "GET", url: "https://viacep.com.br/ws/" + result + "/json/" })
            .then(function mySuccess(response) {

                if (response.data == null) {
                    $scope.cepCorreto = false;
                    $scope.cepIncorreto = true;
                }
                else {
                    $scope.cepCorreto = true;
                    $scope.cepIncorreto = false;
                    $scope.data = response.data;
                    var x = [$scope.data];
  
                    $scope.cep = x[0].cep;
                    $scope.logradouro = x[0].logradouro;
                    $scope.complemento = x[0].complemento;
                    $scope.bairro = x[0].bairro;
                    $scope.localidade = x[0].localidade;
                    $scope.uf = x[0].uf;
                    $scope.unidade = x[0].unidade;
                    $scope.ibge = x[0].ibge;
                    $scope.gia = x[0].gia;
                }
            }, function myError(response) {
                $scope.cepIncorreto = true;
                $scope.myWelcome = response.statusText;
            });
    };
});