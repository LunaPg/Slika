'use strict';

angular.module('myphotosApp')
  .controller('MainCtrl', function ($scope, $http) {
  })
	.directive('skIsotope', function($http){
		return {
		  link: function ($scope, element, attrs) {
			// wtf lol value : Informagique, 3 arguments
			// pourrave qu'on sait pas pourquoi
			/**
			 * @param {string} selectYear recupere les donne du modele 
			 * @param {string} wtg Nom du param watche
			 * @param {undefined} lol undefined Informagique
			 * @param {string} value value de la bariable watche
			 */
			  $scope.watch('selectYear', function (wtf, lol, value) {
					console.log('year', value);
					$http({
					url: '/api/' + value,
					method: 'GET'
					}).success(function(data, status, headers, config){
						$scope.year = 2014;
						$scope.images = data;
						//!\  Timeout de l'enfer Ne Pas Enlever
						// Need pour que Isotope puisse se lancer
						setTimeout(function () {
							element.isotope({
								masonryHorizontal: {
									rowHeight: 200
								},
									itemSelector: '.pictures',
							})
						}, 100);
					});
				});
			}
		}
	});
