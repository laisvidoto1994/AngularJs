
var nomeInput = document.querySelector('#name');
var idadeInput = document.querySelector('#idade');
var emailInput = document.querySelector('#email');
var urlInput = document.querySelector('#url');
var formInput = document.querySelector('#formulario');

/*
  var nomeInput   = document.getElementById('name');
  var idadeInput  = document.getElementById('idade');
  var emailInput  = document.getElementById('email');
  var urlInput    = document.getElementById('url');
  var formInput   = document.getElementById('form');
  */

console.log(nomeInput);

formInput.addEventListener("submit", function (e) {

  e.preventDefault();

  var menssagem;
  var nomeValor = nomeInput.value;
  var idadeValor = idadeInput.value;
  var emailValor = emailInput.value;
  var urlValor = urlInput.value;

  menssagem = "Ola, meu nome e: " + nomeValor +
    " </br> minha idade e:" + idadeValor +
    " </br> meu e-mail e:" + emailValor;

  /*      
  var imagens = document.getElementById("imagem").src     = urlInput.value;           
  var mostar  = document.getElementById("demo").innerHTML = menssagem; 
  */
  console.log(nomeValor);

  var imagens = document.querySelector("#imagem").src = urlInput.value;
  var mostar = document.querySelector("#demo").innerHTML = menssagem;
});
