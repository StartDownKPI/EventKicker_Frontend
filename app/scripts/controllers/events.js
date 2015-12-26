'use strict';

angular.module('ekApp')
.controller('EventsController', function($scope, $stateParams, $state, Event, Category){

	$scope.newEvent = {
		authorId: 14
	};
	$scope.timeCreated_ = new Date();
	$scope.timeScheduled_ = new Date();

	$scope.newEventErr = "";

	$scope.tryAddNewEvent = function(){
		if ($scope.newEventForm.$valid) {
			var time_c = $scope.timeCreated_,
				time_s = $scope.timeScheduled_;

			$scope.newEvent.timeScheduled = 
				"" + time_s.getFullYear() + (time_s.getMonth() + 1) + time_s.getDate() + "T" + 
					 (time_s.getHours().toString().length === 1 ? "0"+time_s.getHours() : time_s.getHours())
					 + time_s.getMinutes() + time_s.getSeconds() + "+0200";

			$scope.newEvent.timeCreated = 
				"" + time_c.getFullYear() + (time_c.getMonth() + 1) + time_c.getDate() + "T" + 
					 (time_c.getHours().toString().length === 1 ? "0"+time_c.getHours() : time_c.getHours())
					 + time_c.getMinutes() + time_c.getSeconds() + "+0200";

			console.log($scope.newEvent);
			
			Event.save($scope.newEvent).$promise
				.then(function(res){
					if (res.success) {
						$state.go('events');
					} else {
						$scope.newEventErr = "Sorry! Cannot add new event..."
					}
				});
		}
	};
	
	$scope.events = [];

	Event.getAll().$promise.then(function(result){
		if (result.success === true) {
			$scope.events = result.multiple;
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
		},
		{
			name: 'Created at date',
			value: '-timeCreated'
		}
	];

});
