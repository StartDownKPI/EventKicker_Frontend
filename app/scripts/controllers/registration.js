'use strict';

angular.module('ekApp')
	.controller('RegistrationController', function($scope, $location, $state, User){
		$scope.user = {};
		$scope.reg = function(){
			if ($scope.regForm.$valid) {
				console.log ($scope.user);
				User.save($scope.user)
				.$promise.then(
					function(res){
						console.log(res.success);
						if (res.success) {
							$state.go('login');
						}
					}
				);
			}
		};
	});

