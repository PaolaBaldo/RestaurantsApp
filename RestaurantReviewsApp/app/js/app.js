'use strict';

/* App Module */

var restaurantReviewsApp = angular.module('restaurantReviewsApp', [
  'ngRoute',
  'restaurantReviewsControllers'

]);

restaurantReviewsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	
      when('/restaurantS', {
        templateUrl: 'partials/restaurant-list.html',
        controller: 'RestaurantListCtrl'
      }).
      when('/restaurants.restaurants/:restaurantId/:resName', {
        templateUrl: 'partials/restaurant-detail.html',
        controller: 'RestaurantDetailCtrl'
      }).
	  when('/home/:search', {
        templateUrl: 'partials/restaurant-list.html',
        controller: 'LocationCtrl'
      }).
	  when('/home', {
        templateUrl: 'partials/home.html',
		controller: 'LocationCtrl'	
      }).
	  otherwise({
        redirectTo: '/home'
      });
  }])
  .config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'];
});
