var wordInput = document.getElementById("wordName");
var form_el   = document.getElementById("myForm");

var email     = document.getElementById("email");
var form      = document.getElementById("myForm");

form_el.addEventListener("submit", function(evt) 
{
    evt.preventDefault();
    fillArray();
});


function fillArray() 
{
    console.log("do something with "+ wordInput.value);
}


form.addEventListener("click", function(evt) 
{
    evt.preventDefault();
    emailArray();
});


function emailArray() 
{
    console.log("e-mail enviado com sucesso para: "+ email.value);
}