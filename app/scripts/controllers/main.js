'use strict';

angular.module('myphotosApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
		$http({
			url: '/api/2014',
			method: 'GET'
			}).success(function(data, status, headers, config){
				$scope.year = 2014;
				$scope.images = data
				});
  });
