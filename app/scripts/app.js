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
    'ngTouch',
	'ngMockE2E',
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
      .state('createEvent', {
		url: '/new',
        templateUrl: 'views/create.html',
      })
      .state('events', {
		url: '/events',
        templateUrl: 'views/events.html',
		controller: 'EventsController'
      })
      .state('login', {
		url: '/login',
        templateUrl: 'views/sign-in.html',
		controller: 'LoginController'
      })
      .state('signup', {
		url: '/signup',
        templateUrl: 'views/sign-up.html',
		controller: 'RegistrationController'
      })
      .state('about', {
		url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  });
