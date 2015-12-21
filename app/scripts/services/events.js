'use strict';

angular
	.module('ekApp')
	.factory('Event', function($resource){
		return $resource('http://localhost:3600/api/events/:id', { id: '@id' },
			{
				getAll: {method:'GET', params:{}}
			}
						);
	});
