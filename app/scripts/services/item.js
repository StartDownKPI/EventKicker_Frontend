'use strict';

angular
	.module('ekApp')
	.factory('Item', function($rootScope, $resource){
		return $resource(
			'http://77.47.204.144:80/api/events/:eventId/items/:itemId',
			{ eventId: '@eventId', itemId: '@itemId' },
			{
				getAll: { method:'GET', params:{} }
			}
		);
	});
