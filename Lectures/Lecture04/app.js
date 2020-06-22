(function () {
'use strict';


angular.module('myFirstApp',[])

.controller('MyFirstController', function ($scope) {
  $scope.name="Yaakov";
  $scope.SayHello = function () {
    return "hello cursera";
  };
});



})();
