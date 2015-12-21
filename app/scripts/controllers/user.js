'use strict';

angular
	.module('ekApp')
	.controller('UserController', function($scope,$stateParams, User, Event){
		$scope.currUser = {};

		User.get({id:$stateParams.id})
		.$promise.then(function(res){
			if (res.success) {
				$scope.currUser = res.single;
			}
		});

	})
	;
