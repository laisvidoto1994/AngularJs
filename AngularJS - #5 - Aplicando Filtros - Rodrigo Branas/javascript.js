angular.module("listaTelefonica", ["ngMessages"]);

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {

    $scope.app = "Lista Telefonica";

    $scope.contatos =
        [
            { nome: "Pedro", telefone: "9999-8888", data: new Date(), operadora: {nome: "Oi", odigo: 14, categoria: "celular"}, cor: "blue" },
            { nome: "Ana", telefone: "9999-7777", data: new Date(), operadora: {nome: "vivo", codigo: 15, categoria: "fixo"},cor: "yellow" },
            { nome: "Maria", telefone: "9999-6666",data: new Date(), operadora: {nome: "tim", codigo: 41, categoria: "celular" }, cor: "red" }
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
        /* setado o status do campo para intocado */
        $scope.contatoForm.$setPristine();
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