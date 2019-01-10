# Estudos em AngularJs

## automação de testes Protractor 

https://imasters.com.br/back-end/primeiros-passos-com-protractor


#graficos em Google Chart 
 
https://www.devmedia.com.br/introducao-a-google-chart-tools/26453
https://developers.google.com/chart/interactive/docs/customizing_tooltip_content

#Firebase

*The key to Firebase security - Google I/O 2016->https://www.youtube.com/watch?v=PUBnlbjZFAI			
*Firebase-> https://medium.com/tableless/firebase-database-fazendo-a-seguran%C3%A7a-7a02b0f3b92b

angulaJs->


> Diretivas-> são extenções do html que permitem á implementação de novos comportamentos, de forma declarativa

> ng-app-> Definindo as fornteiras da aplicação  
  
-------------------------------------------------------------------------------------------------------------
> ng-controller-> Responsavel pelo que á view consome

>criando um Controller de exemplo  

app.controller("testeInicialCtrl", function($scope)  
{  
     $scope.message = "teste de testes!";  
}); 

------------------------------------------------------------------------------------------------------------- 
> criando um Module de exemplo  

angular.module("testeInicial",[]);

------------------------------------------------------------------------------------------------------------- 
scope-> faz á mediação entre view e Controller e vise-versa
ng-bind-> Substitui o elemento por uma expressão

-------------------------------------------------------------------------------------------------------------
ng-repeat-> Interando itens de cada coleção ou de um objeto
exemplo->
<tr ng-repeat="contato in contatos">
	<td ng-repeat="(key, value) in contato">
		{{value}} 
	</td>
</tr> 

-------------------------------------------------------------------------------------------------------------

ng-model->vinculando uma propriedade ao $scope(ele pega uma coisa da view e passa para o controller)

ng-bind->ele pega uma coisa do controller e passa para view

ng-click-> atribui um comportamento ao evento

ng-disabled-> desabilitando um elemento dinamicamente

ng-options-> renderiza as opções de um select

ng-class->

ng-style->

ng-show-> mostre um elemento

ng-hide-> esconda um elemento

ng-if-> mostrar apenas se á condição do elemento for atendida

ng-include-> incluir conteudo dinamicamente(chamar um outro html dentro da pagina)

ng-required->define um determinado campo como obrigatorio(define como campo obrigatorio)

$valid-> consultar á validade de um campo ou formulario

$invalid-> consultar á validade de um campo ou formulario

$pristine-> verificando  se um formulario ou campo já foi utilizado alguma vez(nunca foi tocado ou modificado)

$dirty-> verificando  se um formulario ou campo já foi utilizado alguma vez(já foi tocado ou modificado)

ng-minlength-> define o tamanho minimo permitido

ng-maxlength->define o tamanho maximo permitido

$error-> consultando os erros de um campo ou formulario

ng-pattern-> define uma expressão  para validar campo(ng-pattern="/^\d{4,5}-\d{4}$/")

uppercase->transforma uma string em letras maiuscula

lowercase-> transforma uma string em letras minusculas

date-> formata uma dada com uma mascara(dd-mm-aaaa)

filter-> filtra um array com base em um criterio

orderBy-> ordena um array com base de um criterio

currency-> converte numero para moeda

number-> formata um numero

limitTo-> limita um array ou uma string

$http-> permite a realização de qequisições utilizando XMLHttpRequest ou via JSONP(get,post,put,delete,head,jsonp)

sop-> same-origin policy

JSONP-> JSON 

factory-> 

service

value

provider

