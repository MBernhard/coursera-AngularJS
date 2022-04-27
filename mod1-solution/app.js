(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LCController);

LCController.$inject = ['$scope'];
function LCController ($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function () {
    if ($scope.lunchMenu.length == 0)
    {
      $scope.message = "Please enter data first";
    }
    else {
      const dishes = $scope.lunchMenu.split(",");
      var numDishes = 0;
      dishes.forEach( function (dish) {
        if (dish.trim().length > 0) numDishes++;
      });
      if (numDishes == 0) {
        $scope.message = "Only enter valid dishes! Empty items are ignored!";
      }
      else if (numDishes <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    }
  };
}

})();
