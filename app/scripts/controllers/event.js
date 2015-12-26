'use strict';

angular.module('ekApp')
.controller('EventController', function($scope, $stateParams, Event, EventComment, Category,User, Item, NewItem){
	
	$scope.currEvent = {};
	$scope.currEventAuthor = {};
	$scope.currEventItems = [];
	$scope.newNeededItem = {};
	$scope.currEventComments = [];
	
	$scope.visibleNewNeededItemForm = false;

	$scope.toggleNewNeededItemForm = function(){
		$scope.visibleNewNeededItemForm = !$scope.visibleNewNeededItemForm;
	};

	$scope.addNeededItem = function(){
		$scope.newNeededItem.eventId = $scope.currEvent.id;
		NewItem.save($scope.newNeededItem)
		.$promise.then(
			function(res){
				if (res.success) {
					$scope.currEventItems.push($scope.newNeededItem);
					$scope.newNeededItem = {};
				}
			}
		);


	};

	Event.get({id:$stateParams.id}).$promise
		.then(function(result){
			if (result.success) {
				$scope.currEvent = result.single;
				return result.single;
			}
		})
		.then(function(eventResult){
			if (eventResult){
				User.get(
					{ id:eventResult.authorId }
				).
				$promise.then(function(authorResult){
					if (authorResult.success) {
						$scope.currEventAuthor = authorResult.single;
					}
				});
			}
			return eventResult;
		})
		.then(function(eventResult){
			if (eventResult) {
				Item.get(
					{
						eventId:eventResult.id
					}
				)
				.$promise.then(
					function(itemsResult){
						if (itemsResult.success) {
							$scope.currEventItems = itemsResult.multiple;
						}
					}
				);
			}
			return eventResult;
		})
		.then(
			function(eventResult){
				if (eventResult) {
					EventComment.get(
						{
							id:eventResult.id
						}
					).$promise.then(
					function(commentsRes) {
						if (commentsRes.success) {
							$scope.currEventComments = commentsRes.multiple;
						}
					}
					);
				}
			}
		);

})
