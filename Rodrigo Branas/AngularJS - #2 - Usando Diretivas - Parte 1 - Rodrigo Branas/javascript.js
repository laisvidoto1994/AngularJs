angular.module("listaTelefonica", []);

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {

    $scope.app = "Lista Telefônica";
    $scope.contatos =
        [
            {
                "nome": "Pedro", "telefone": "99998888"
            },
            {
                "nome": "Ana", "telefone": "99997777"
            },
            {
                "nome": "Maria", "telefone": "99996666"
            }
        ];

    $scope.adicionarContato = function (contato) {
        /* '.push'-> inseri um registro no final do array */
        /* angular.copy-> copia o valor e o tipo do valor */
        $scope.contatos.push(angular.copy(contato));
        /* exclui o conteudo de contatos */
        delete $scope.contato;
    };  
}); 