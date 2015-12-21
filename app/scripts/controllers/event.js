'use strict';

angular.module('ekApp')
.controller('EventController', function($scope, $stateParams, Event, Category,User){
	
	$scope.currEvent = {};
	$scope.currEventAuthor = {};

	Event.get({id:$stateParams.id}).$promise
		.then(function(result){
			if (result.success) {
				$scope.currEvent = result.single;
				return result.single;
			}
		})
		.then(function(result){
			if (result){
				$scope.currEventAuthor = User.get(
					{ id:result.authorId }
				).
					$promise.then(function(res){
						if (res.success) {
							$scope.currEventAuthor = res.single;
						}
					});
			}
		});

})
