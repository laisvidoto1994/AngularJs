angular.module("listaTelefonica").directive("uiDate", function ($http, config) {
     
    return { 
        require: "ngModel",
        link: function(scope, element, attrs, ctrl){

            var _formatDate = function(date)
            {
                date = date.replace(/[^0-9]+/g, "");

                if(date.length > 2){
                    date = date.substring(0,2) + "/" +  date.substring(2);
                }
                return data;
            };


            element.bind("keyup",function(){
                ctrl.$setViewValue(ctrl.$viewValue + "!");
                ctrl.$render();
            });
        }
    };   
});