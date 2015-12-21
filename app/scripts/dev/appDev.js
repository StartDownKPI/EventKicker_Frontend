'use strict';

angular
	.module('ekApp')
	.run(function($httpBackend, 
				  mockGetAllEvents,
				  mockGetAllCategories
				 ){
		$httpBackend.whenGET(/views\/.*/).passThrough();
		$httpBackend.whenGET(/categories$/)
			.respond(mockGetAllCategories.get());
	});
