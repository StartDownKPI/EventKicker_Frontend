'use strict';

angular.module('ekApp')
.factory('Auth', function($resource){
	var currUser = {
		username: "",
		password: ""
	}
	var auth = {
		isLogged: false,
		currUser: currUser
	};

	return auth;
});
