'use strict';

angular.module('myphotosApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
		$scope.images = [
		{name : '1.jpg'},
		{name : '2.jpg'},
		{name : '3.jpg'},
		{name : '4.jpg'},
		];
  });
