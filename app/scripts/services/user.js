'use strict';

angular
	.module('ekApp')
	.factory('User', function($resource){
		return $resource('http://localhost:3600/api/users/:id',
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
