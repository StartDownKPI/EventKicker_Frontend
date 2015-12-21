'use strict';

angular
	.module('ekApp')
	.controller('UserController', function($scope,$stateParams, User, Event){
		$scope.currUser = {};

		User.get({userName:$stateParams.userName})
		.$promise.then(function(res){
			if (res.success) {
				$scope.currUser = res.single;
			}
		});

	})
	;
