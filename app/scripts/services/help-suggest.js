'use strict';

angular
	.module('ekApp')
	.factory('HelpSuggest', function($resource){
		return $resource(
			'http://localhost:3600/help-request/submit',
			{

			},
			{
				doRequest: {
					method:'POST'
				}
			}
		);
	});
