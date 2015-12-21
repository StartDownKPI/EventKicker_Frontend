'use strict';

angular
	.module('ekApp')
	.factory('Item', function($resource){
		return $resource(
			'http://way42.ru/api/events/:eventId/items/:itemId',
			{ eventId: '@eventId', itemId: '@itemId' },
			{
				getAll: { method:'GET', params:{} }
			}
		);
	});
