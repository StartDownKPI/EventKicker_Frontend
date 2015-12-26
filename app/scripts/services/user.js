'use strict';

angular
	.module('ekApp')
	.factory('User', function($rootScope, $resource){
		return $resource('http://77.47.204.144:80/api/users/:id',
			 {
				 id: '@id'
			 },
			 {
				 getAll: { method:'GET', 
							params:{} 
				 }
			 }
		)
	});
