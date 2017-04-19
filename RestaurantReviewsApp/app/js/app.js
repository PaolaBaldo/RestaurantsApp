'use strict';

/* App Module */

var restaurantReviewsApp = angular.module('restaurantReviewsApp', [
  'ngRoute',
  'restaurantReviewsControllers'

]);

restaurantReviewsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	
      when('/nonFictions', {
        templateUrl: 'partials/nonFiction-list.html',
        controller: 'NonFictionListCtrl'
      }).
      when('/restaurants.restaurants/:nonFictionId/:resName', {
        templateUrl: 'partials/nonFiction-detail.html',
        controller: 'NonFictionDetailCtrl'
      }).
	  when('/fictions', {
        templateUrl: 'partials/fictions-list.html',
        controller: 'FictionListCtrl'
      }).
	  when('/fictions/:fictionTitle/:fictionAuthor', {
        templateUrl: 'partials/fiction-detail.html',
        controller: 'FictionDetailCtrl'
      }).
	  when('/home/:search', {
        templateUrl: 'partials/nonFiction-list.html',
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
