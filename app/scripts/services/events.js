'use strict';

angular
	.module('ekApp')
	.factory('Event', function($resource){
		return $resource('http://way42.ru/api/events/:id', { id: '@id' },
			{
				getAll: {method:'GET', params:{}}
			}
						);
	});
