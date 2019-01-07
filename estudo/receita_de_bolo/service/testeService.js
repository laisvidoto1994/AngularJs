angular.module('myApp', [])
    .service('servicoServices', function ($http) {
        this.getGsonServe = function () {
            return $http({ method: "GET", url: "http://localhost:3000/db" });
        }
    });