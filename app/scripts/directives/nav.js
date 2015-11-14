'use strict';

angular.module('ekApp')
.directive('navbar', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/nav.html',
		controller: 'NavigationCtrl'
	};
});
