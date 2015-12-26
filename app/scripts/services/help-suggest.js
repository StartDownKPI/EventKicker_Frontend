'use strict';

angular
	.module('ekApp')
	.factory('HelpSuggest', function($rootScope, $resource){
		return $resource('http://77.47.204.144:80/api/help-request/submit',
			{

			},
			{
				doRequest: {
					method:'POST'
				}
			}
		);
	});
