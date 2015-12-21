'use strict';

angular
	.module('ekApp')
	.factory('User', function($resource){
		return $resource('http://way42.ru/api/users/:userName',
						 {
							 userName: '@userName'
						 },
						 {
							 getAll: { method:'GET', 
								 		params:{} 
							 }
						 }
						)
	});
