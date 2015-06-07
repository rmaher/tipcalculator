    $scope.subtotal = function(basemeal, taxrate) {
       	   var taxtotal = taxrate * basemeal;
       	   return taxtotal + basemeal;  
       };

       .controller('dataCtrl', ['$scope', function($scope) {

       	 $scope.submit = function() {
          if ($scope.basemeal) {
            $scope.earnings.push
          }
       }

        ng-controller="dataCtrl"

         ng-model="earnings"

         + $scope.basemeal;

         ng-click="mealcount = mealcount + 1"

         $scope.fulltiptotal = 0;
          for(i = 0; i < $scope.tiptotal; i++){
            $scope.fulltiptotal = $scope.fulltiptotal + $scope.tiptotal;
          };