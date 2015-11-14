'use strict';

/**
 * @ngdoc overview
 * @name ekApp
 * @description
 * # ekApp
 *
 * Main module of the application.
 */
angular
  .module('ekApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider ,$urlRouterProvider) {
	  $urlRouterProvider.otherwise('/');

	  $stateProvider
      .state('home', {
		url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
		url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  });
