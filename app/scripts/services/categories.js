'use strict';

angular
	.module('ekApp')
	.factory('Category', function($resource){
		return $resource('/api/categories/:id', { id: '@id' }, {
			'query':{
				method: 'GET',
				isArray: true
			}
		} );
	});
