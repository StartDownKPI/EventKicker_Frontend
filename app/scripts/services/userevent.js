'use strict';

angular
	.module('ekApp')
	.factory('UserEvent', function($rootScope, $resource){
		return $resource('http://77.47.204.144:80/api/users/:id/events', { id: '@id' },
			{
				getAll: {method:'GET', params:{}}
			}
						);
	});

