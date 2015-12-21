'use strict';

angular
	.module('ekApp')
	.factory('User', function($resource){
		return $resource('http://way42.ru/api/users/:id',
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
