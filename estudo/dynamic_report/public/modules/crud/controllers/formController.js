angular.module('myApp')
.controller('formCtrl', ['$scope', '$http', '$firebaseAuth', 
function( $scope, $http, $firebaseAuth)
{
  'use strict';
   
    $scope.authObj = $firebaseAuth();
       
    $scope.form = {};
 
    $scope.alert = function (msg)
    {
      alert(msg);
      console.log($scope.form);
    };

    $scope.areas = ["I.A","Design","Front-End","Back-End"];
    $scope.form.area;

    $scope.getSelectedTextArea = function () 
    { 
      if ($scope.form.area !== undefined) 
      {
        return $scope.form.area;
      } else {
        return "Área";
      }
    };
    
    $scope.levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    $scope.form.level;

    $scope.getSelectedTextLevel = function () 
    { 
      if ($scope.form.level !== undefined) 
      {
        return $scope.form.level;
      } else {
        return "Nível";
      }
    };

    $scope.technologies = ["Cobol","ABAP","Java",".Net"];
    $scope.form.technology;

    $scope.getSelectedTextTechnology = function () 
    { 
      if ($scope.form.technology !== undefined) 
      {
        return $scope.form.technology;
      } else {
        return "Tecnologia";
      }
    };

}]);