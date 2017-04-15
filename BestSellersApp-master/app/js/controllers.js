'use strict';

/* Controllers */

var bestsellersControllers = angular.module('bestsellersControllers', []);



  bestsellersControllers.controller('NonFictionListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.9225,4.47917&radius=500&type=restaurant&keyword=cruise&key=AIzaSyB5ld4tmD-FcLQLn0TIssm_MBwY_GQKQeg').success(function(data) {
      $scope.nonFictions = data;
    });

    $scope.orderProp = 'age';
  }]);
  

  
  

bestsellersControllers.controller('NonFictionDetailCtrl', ['$scope', '$sce', '$routeParams', '$http',
  function($scope, $sce, $routeParams, $http) {
    $http.get('https://www.googleapis.com/books/v1/volumes?q='+$routeParams.nonFictionTitle+'+inauthor:'+$routeParams.nonFictionAuthor+'&key=AIzaSyCNBVoFsCE2k7vLILDlJYYF5KNIoDYO5ts').success(function(data) {
      
	  $scope.nonFiction = 'oi';
	  $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.nonFiction.items[0].volumeInfo.previewLink + "&output=embed");
    });
  }]);
  
 
  
  
  
  
  
  
  
    bestsellersControllers.controller('FictionListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://api.nytimes.com/svc/books/v2/lists/combined-print-and-e-book-fiction.json?api-key=2f551344ecfe43ac9265ee34106353fe').success(function(data) {
      $scope.fictions = data;
    });

    $scope.orderProp = 'age';
  }]);
  
  
  


  
  
  
bestsellersControllers.controller('FictionDetailCtrl', ['$scope', '$sce', '$routeParams', '$http',
  function($scope, $sce, $routeParams, $http) {
	 
    $http.get('https://www.googleapis.com/books/v1/volumes?q='+$routeParams.fictionTitle+'+inauthor:'+$routeParams.fictionAuthor+'&key=AIzaSyCNBVoFsCE2k7vLILDlJYYF5KNIoDYO5ts').success(function(data) {
     
	
	  $scope.fiction = data;
	 
	  $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.fiction.items[0].volumeInfo.previewLink + "&output=embed");
    });
  }]);
  

  bestsellersControllers.controller('HomeCtrl', ['$scope', 'Home',
  function($scope, Home) {
    $scope.homes = Home.query();
    $scope.orderProp = 'age';
  }]);
  
  
bestsellersControllers.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/glyphicons-halflings-white.png';
});
  