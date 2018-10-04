angular.module("listaTelefonica", []);

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {

    $scope.app = "Lista Telefonica";

    $scope.contatos =
        [
            { nome: "Pedro", telefone: "9999-8888", cor: "blue" },
            { nome: "Ana", telefone: "9999-7777", cor: "yellow" },
            { nome: "Maria", telefone: "9999-6666", cor: "red" }
        ];

    $scope.operadoras =
        [
            { nome: "oi", codigo: 14, categoria: "celular" },
            { nome: "vivo", codigo: 15, categoria: "fixo" },
            { nome: "tim", codigo: 41, categoria: "celular" },
            { nome: "tim", codigo: 25, categoria: "fixo" },
            { nome: "tim", codigo: 21, categoria: "fixo" }
        ];
 
    $scope.addContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };

    $scope.ApagarContato = function (contatos) {
        
        $scope.contatos = contatos.filter(function (contato){

            if(!contato.selecionado){
                return contato;
            }
        });
    };

    $scope.isContatoSelecionado = function(contatos){

       return contatos.some(function (contato){
            return contato.selecionado;
        });

    }


}); 