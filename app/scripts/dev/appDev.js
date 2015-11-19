'use strict';

angular
	.module('ekApp')
	.run(function($httpBackend, 
				  mockGetAllEvents,
				  mockGetAllCategories
				 ){
		$httpBackend.whenGET(/views\/.*/).passThrough();
		$httpBackend.whenGET(/events$/)
			.respond(mockGetAllEvents.get());
		$httpBackend.whenGET(/categories$/)
			.respond(mockGetAllCategories.get());
	});
