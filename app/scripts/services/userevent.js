'use strict';

angular
	.module('ekApp')
	.factory('UserEvent', function($resource){
		return $resource('http://localhost:3600/api/users/:id/events', { id: '@id' },
			{
				getAll: {method:'GET', params:{}}
			}
						);
	});

