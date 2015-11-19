'use strict';

angular.module('ekApp')
.controller('EventsController', function($scope, Event, Category){
	$scope.categories = [{name: 'All'}];
	$scope.serverCategories = Category.query(function(){
		$scope.categories = $scope.categories.concat($scope.serverCategories);
	});
	console.log($scope.categories);

	$scope.events = Event.query();
	console.log($scope.events);

	$scope.filterBy = {
		search: '',
		category: $scope.categories[0],
		startDate: new Date(2015,4,1),
		endDate: new Date(2016,1,14)
	};
});
