'use strict';

angular
	.module('ekApp')
	.factory('Item', function($resource){
		return $resource(
			'http://localhost:3600/api/events/:eventId/items/:itemId',
			{ eventId: '@eventId', itemId: '@itemId' },
			{
				getAll: { method:'GET', params:{} }
			}
		);
	});
