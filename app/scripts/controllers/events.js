'use strict';

angular.module('ekApp')
.controller('EventsController', function($scope, events){
	$scope.events = events.query();
})
