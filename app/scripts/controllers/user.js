'use strict';

angular
	.module('ekApp')
	.controller('UserController', function($scope,$stateParams, User, Event, UserEvent){
		$scope.currUser = {};
		$scope.currUserEvents = [];

		User.get({id:$stateParams.id})
		.$promise.then(function(res){
			if (res.success) {
				$scope.currUser = res.single;
				return res.single;
			}
		})
		.then(function(result){
			if (result) {
				UserEvent.get({id:result.id})
				.$promise.then(function(ue_res){
					if (ue_res.success) {
						$scope.currUserEvents = ue_res.multiple;
					}
				});
			}
		});

	})
	;
