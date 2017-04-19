'use strict';

/* Controllers */

var restaurantReviewsControllers = angular.module('restaurantReviewsControllers', ['ngRoute', 'ngResource']);




 restaurantReviewsControllers.controller('LocationCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
    $scope.search = $routeParams.search;
    $http.get('https://developers.zomato.com/api/v2.1/locations?query='+$routeParams.search+'&apikey=97574fc00517865f7bc5ca22ac8a80c6').success(function(data) {
      $scope.nonFictions = data;
	  $http.get('https://developers.zomato.com/api/v2.1/search?lat='+$scope.nonFictions.location_suggestions[0].latitude+'&lon='+$scope.nonFictions.location_suggestions[0].longitude+'&apikey=97574fc00517865f7bc5ca22ac8a80c6').success(function(data) {
      
	  $scope.restaurants = data;
	  
    });
	  
    });

    $scope.orderProp = 'age';
  }]);


  restaurantReviewsControllers.controller('NonFictionListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('https://developers.zomato.com/api/v2.1/search?lat='+$scope.nonFictions.location_suggestions[0].latitude+'&lon='+$scope.nonFictions.location_suggestions[0].longitude+'&apikey=97574fc00517865f7bc5ca22ac8a80c6').success(function(data) {
	
      $scope.nonFictions = data;
    });

    $scope.orderProp = 'age';
  }]);
  
 


restaurantReviewsControllers.controller('NonFictionDetailCtrl', ['$scope', '$sce', '$routeParams', '$http',
  function($scope, $sce, $routeParams, $http) {
	  $scope.resname = $routeParams.resName;
    $http.get('https://developers.zomato.com/api/v2.1/reviews?res_id='+$routeParams.nonFictionId+'&apikey=97574fc00517865f7bc5ca22ac8a80c6').success(function(data) {
	  $scope.nonFiction = data;
	  
    });
  }]);
  
 
  
  
  
  
  
  
  
  
  
  




  