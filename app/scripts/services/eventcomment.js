'use strict';

angular
	.module('ekApp')
	.factory('EventComment', function($rootScope, $resource){
		return $resource(
			'http://77.47.204.144:80/api/events/:id/comments',
			{},
			{
				getAll: { method:'GET', params:{} }
			}
		);
	});


