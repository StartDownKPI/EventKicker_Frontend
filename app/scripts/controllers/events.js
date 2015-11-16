'use strict';

angular.module('ekApp')
.controller('EventsController', function($scope, events, categories){
	$scope.categories = categories.query();
	$scope.events = events.query();

	$scope.filterBy = {
		search: '',
		category: $scope.categories[0],
		startDate: new Date(2015,4,1),
		endDate: new Date(2016,1,14)
	};
})
