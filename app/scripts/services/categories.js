'use strict';

angular.module('ekApp')
.service('categories', function(){
	this.query = function(){
		return [
			{
				name: 'All'
			},
			{
				name: 'Sport',
			},
			{
				name: 'Music'
			},
			{
				name: 'Politics'
			}
		];
	};
});
