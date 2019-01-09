var app = angular.module('myApp', []);
app.controller('myGoogleCtrl', function ($scope, $http) {

    $scope.nova = function () {
        location.href = "localizacao.html"
    }

    $scope.initMap = function () {

        var x = document.getElementById("myText").value;
        console.log(x);

        var latLng = {
            lat: -8.0820288,
            lng: -34.9404221
        };

        //criando uma sobreposição da div ocupando o espaço dela com o mapa
        var map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 15,
            center: latLng
        });

        //definição da localização do pino vermelho no mapa
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }

});