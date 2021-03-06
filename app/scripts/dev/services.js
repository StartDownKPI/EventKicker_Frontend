'use strict';

angular
	.module('ekApp')
	.factory('mockGetAllEvents', function(){
		var result = [
			{
				id: 0,
				name: 'Guitar Evening at KPI',
				category: {
					name: 'Music'
				},
				timeCreated: new Date(2015,11,1),
				timeScheduled: new Date(2015,12,12),
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				pictureUrl: '/images/sample1.jpg',
				userCreatedId: 3,
				participantIds: [1,3,64,2,4134,656,735,35],
				itemsNeeded: [
					'3 Guitars',
					'Microphones',
					'Tea',
					'Coffee'
				]
			},
			{
				id: 1,
				name: 'Test Event',
				category: {
					name: 'Sport'
				},
				timeCreated: new Date(2015,11,1),
				timeScheduled: new Date(2016,1,17),
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				pictureUrl: '/images/sample2.jpg',
				userCreatedId: 3,
				participantIds: [1,3,64,214,4134,656,735,35],
				itemsNeeded: [
					'3 Guitars',
					'Microphones',
					'Tea',
					'Coffee'
				]
			},
			{
				id: 2,
				name: 'Test Event',
				category: {
					name: 'Politics'
				},
				timeCreated: new Date(2015,11,1),
				timeScheduled: new Date(2015,12,19),
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				pictureUrl: '/images/sample3.jpg',
				userCreatedId: 3,
				participantIds: [1,3,64,26,735,35],
				itemsNeeded: [
					'3 Guitars',
					'Microphones',
					'Tea',
					'Coffee'
				]
			},
			{
				id: 3,
				name: 'Test Event',
				category: {
					name: 'Politics'
				},
				timeCreated: new Date(2015,11,1),
				timeScheduled: new Date(2015,12,24),
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				pictureUrl: '/images/sample4.jpg',
				userCreatedId: 3,
				participantIds: [1,3,633,12,1314,4134,656,735,35],
				itemsNeeded: [
					'3 Guitars',
					'Microphones',
					'Tea',
					'Coffee'
				]
			}
		];

		return {
		  get: function(){
			  return result;
		  },
		  getById: function(){
			  return result[0];
		  }
		};
	})

	.factory('mockGetAllCategories', function(){
		var result = [
			{
				name: 'Musica'
			},
			{
				name: 'Politics'
			},
			{
				name: 'Sport'
			},
			{
				name: 'Music'
			}
		];
		return {
			get: function(){
				return result;
			}
		};
	});
