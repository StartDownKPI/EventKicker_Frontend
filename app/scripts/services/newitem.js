'use strict';

angular
	.module('ekApp')
	.factory('NewItem', function($rootScope, $resource){
		return $resource(
			'http://77.47.204.144:80/api/items/',
			{},
			{
				getAll: { method:'GET', params:{} }
			}
		);
	});

