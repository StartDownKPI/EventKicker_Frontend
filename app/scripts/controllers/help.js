'use strict';

angular
	.module('ekApp')
	.controller('HelpSuggestController', function($scope,$stateParams, Event, Item, HelpSuggest){
		$scope.currEvent = {};
		$scope.currEventItems = [];
		$scope.helpData = {
			senderId: 2,
			description: "Just raw text(())",
			destinationUsername: "infm",
			eventId: $stateParams.id
		};

		$scope.addItem = function(){
			console.log($scope.helpData);
			HelpSuggest.save($scope.helpData).$promise.then(
				function(res){
					console.log("Request sended");
				}
			);
		};

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

