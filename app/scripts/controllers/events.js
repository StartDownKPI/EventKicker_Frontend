'use strict';

angular.module('ekApp')
.controller('EventsController', function($scope, $stateParams, Event, Category){
	
	$scope.events = [];

	Event.getAll().$promise.then(function(result){
		if (result.success === true) {
			$scope.events = result.multiple;
			console.log($scope.events[0]);
		}
	});

	$scope.filterBy = {
		search: '',
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
