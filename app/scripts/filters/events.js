'use strict';

angular.module('ekApp')
.filter('events', function(){
	return function( events, filterBy ){
		return events.filter ( function( element, index, array ){
			var categoryCond = true;
			// var categoryCond = ( element.category.name === filterBy.category.name ||
			// 				 filterBy.category.name === 'All');
			
			var dateCond = (
				(filterBy.startDate <= element.timeScheduled) &&
				(filterBy.endDate >= element.timeScheduled)
			);
			
			return categoryCond && dateCond; 

		} );
	};
});
