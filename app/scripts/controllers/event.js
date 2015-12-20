'use strict';

angular.module('ekApp')
.controller('EventController', function($scope, $stateParams, Event, Category){
	
	$scope.currEvent = Event.get({id:$stateParams.id});
	console.log($scope.currEvent.name);


})
