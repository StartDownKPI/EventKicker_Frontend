'use strict';

angular.module('ekApp')
.controller('EventsController', function($scope, Event, Category){
	$scope.categories = [{name: 'All'}];
	$scope.serverCategories = Category.query(function(){
		$scope.categories = $scope.categories.concat($scope.serverCategories);
	});

	$scope.events = Event.query();

	$scope.filterBy = {
		search: '',
		category: $scope.categories[0],
		startDate: new Date(2015,4,1),
		endDate: new Date(2016,1,14)
	};

	$scope.orderProperties = [
		{
			name: 'Popularity',
			value: '-participantIds.length'
		},
		{
			name: 'Start date',
			value: 'timeScheduled'
		}
	];

});
