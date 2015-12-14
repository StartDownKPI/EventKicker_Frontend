angular.module('ekApp')
	.controller('LoginController', function($scope){
		$scope.login = function(){
			if ($scope.loginForm.$valid) {
				console.log ('Sending request');
			}
		};
	});
