angular.module('tipApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
        .when('/', {
          templateUrl : 'home.html',
        })
        .when('/new-meal', {
          templateUrl : 'new-meal.html',
          controller : 'NewMealsCtrl'
        })
        .when('/my-earnings', {
          templateUrl : 'my-earnings.html',
          controller : 'EarningsCtrl'
        })
        .when('/error', {
          template : '<p>Error - Page Not Found</p>'
        })
        .otherwise({redirectTo : '/route'});

      })
      .controller('MainCtrl', function($route, $routeParams) {
           
      })
      .controller('HomeCtrl', function($routeParams) {
        
      
      })

      .controller('NewMealsCtrl', function($routeParams) {
             $scope.submitForm = function() {

               $scope.tiptotal = $scope.basemeal * $scope.tippercent/100;

               $scope.taxtotal = $scope.basemeal * $scope.taxrate/100 + $scope.basemeal;

               $scope.mealtotal = $scope.taxtotal + $scope.tiptotal;

               $scope.fulltiptotal = $scope.fulltiptotal + $scope.tiptotal;

               $scope.mealcount = $scope.mealcount + 1;

               $scope.avgtip = $scope.fulltiptotal/$scope.mealcount;

         };

      })
      .controller('EarningsCtrl', function($scope) {
        
         $scope.clearfields = function() {
                  $scope.basemeal = "";
                  $scope.taxrate = "";
                  $scope.tippercent = "";
         };

      }); 


