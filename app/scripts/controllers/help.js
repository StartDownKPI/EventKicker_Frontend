'use strict';

angular
	.module('ekApp')
	.controller('HelpSuggestController', function($scope,$stateParams, Event, Item){
		$scope.currEvent = {};
		$scope.currEventItems = [];

		Event.get({id:$stateParams.id})
		.$promise.then(function(res){
			if (res.success) {
				$scope.currEvent = res.single;
				return res.single;
			}
		});

		Item.get({
				eventId:$stateParams.id,
		}).$promise.then(function(res){
			if (res.success) {
				$scope.currEventItems = res.multiple;
				return res.multiple;
			}
		});

	})
	;

