'use strict';

angular.module('ekApp')
	.controller('RegistrationController', function($scope){
		$scope.user = {};
		$scope.regUser = function(){
			if ($scope.registrationForm.$valid) {
				console.log ('Sending request');
			}
		};
	});

