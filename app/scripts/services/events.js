'use strict';

angular
	.module('ekApp')
	.factory('Event', function($resource){
		return $resource('/api/events/:id', { id: '@id' });
	});
