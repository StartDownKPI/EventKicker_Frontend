'use strict';

angular.module('ekApp').service('events', function(){
	this.query = function(){
		return [
			{
				id: 0,
				name: 'Guitar Evening at KPI',
				timeCreated: '7/11/2015',
				timeScheduled: '31/11/2015',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				pictureUrl: '/images/sample.jpg',
				userCreatedId: 3,
				participantIds: [1,3,64,233,12,1314,4134,656,735,35],
				itemsNeeded: [
					'3 Guitars',
					'Microphones',
					'Tea',
					'Coffee'
				]
			}
		];
	};
});
