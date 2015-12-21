'use strict';

angular.module('ekApp')
.controller('EventController', function($scope, $stateParams, Event, Category){
	
	$scope.currEvent = {};

	Event.get({id:$stateParams.id}).$promise.then(function(result){
		if (result.success) {
			$scope.currEvent = result.single;
		}
	});

})
