'use strict';

angular
	.module('ekApp')
	.factory('Event', function($rootScope, $resource){
		return $resource('http://77.47.204.144:80/api/events/:id', { id: '@id' },
			{
				getAll: {method:'GET', params:{}}
			}
						);
	});
