
var app = angular.module("app", []);


app.controller("myCtrl", function($scope, $timeout) {


  $scope.novoJogador = {};
  $scope.mensagem = "Escolha seu favorito";
  $scope.products = ["Milk", "Bread", "Cheese"];


  var jogador1 = {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bra-Cos_%281%29.jpg/220px-Bra-Cos_%281%29.jpg",
    numero: 10,
    nome: "Neymar Jr",
    gols: 13,
    efeitinho: false
  };
  var jogador2 = {
    imagemUrl: "http://cdn.espn.com.br/image/wide/622_eb92adc2-2b27-479b-971f-4fe29eb23638.jpg",
    numero: 11,
    nome: "Coutinho",
    gols: 10,
    efeitinho: false

  };
  var jogador3 = {
    imagemUrl: "https://abrilveja.files.wordpress.com/2017/08/marcelo-coletiva-selecao.jpg?quality=70&strip=info&w=680&h=453&crop=1",
    numero: 16,
    nome: "Marcelo",
    gols: 16,
    efeitinho: false,
  };

  $scope.jogadores = [jogador1, jogador2, jogador3];


  $scope.escolher = function( numero){

    for(var count = 0; count < $scope.jogadores.length; count++){
      var jogadorAtual = $scope.jogadores[count];
      if(jogadorAtual.numero == numero){
        $scope.imagemEscolhida = jogadorAtual.imagemUrl;
        $scope.mensagem = "O seu jogador favorito é" + jogadorAtual.nome;
      }
    }
  }
  
  $scope.adicionar = function (novoJogador) {
    $scope.jogadores.push(novoJogador);
    $scope.novoJogador = {};
  }
 
  
  $scope.fazerGol = function(jogador){
    
    console.log(jogador);
    if(jogador.numero == "10" && jogador.gols > 14){
      jogador.caicai = true;
    }
    jogador.gols++;
    jogador.efeitinho = !jogador.efeitinho;
    $timeout(function(){
      jogador.efeitinho = !jogador.efeitinho;
    }, 1000);
  }
  
  

});