angular.module("listaTelefonica").directive("uiAlert", function ($http, config) {
     
        return {
            templateUrl:"view/alert.html",
            replace: true,
            restrict: "AE",
            scope:{
                topic: "@title",
                error: "=message"                
            },
            transclude: true
        };   
});