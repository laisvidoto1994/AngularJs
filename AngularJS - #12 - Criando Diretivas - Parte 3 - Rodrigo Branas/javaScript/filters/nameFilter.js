angular.module("listaTelefonica").filter("name", function () {

    return function (input) {

        var listaDeNomes = input.split(" ");

        var listaDeNomeFormatada = listaDeNomes.map(function (nome) {
            if (/(da|de)/.test(nome)) {
                return nome;
            }
            /* retorna o nome com á 1ª letra em maisculo com o resto do nome */
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        /* retorna o nome por estenso */
        return listaDeNomeFormatada.join(" ");
    };
});