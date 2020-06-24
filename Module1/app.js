(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.Message = "";
  $scope.lunch = "";
  
  $scope.checkLunch = function () {
  if ($scope.lunch != "") {
      var sLunch = $scope.lunch.split(",");
      if (sLunch.length > 3){
        $scope.Message = "Too much!";
      } else {
        $scope.Message = "Enjoy!";
      }
  } else {
    $scope.Message = "Please enter data first!";
  }

  }
}


})();
