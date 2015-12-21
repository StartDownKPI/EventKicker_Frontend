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
      .state('createEvent', {
		url: '/new',
        templateUrl: 'views/create.html',
		controller: 'EventsController'
      })
      .state('events', {
		url: '/events',
        templateUrl: 'views/events.html',
		controller: 'EventsController'
      })
	  .state('event', {
		  url: '/events/:id',
		  templateUrl: 'views/event.html',
		  controller: 'EventController'
	  })
	  .state('user', {
		  url: '/users/:id',
		  templateUrl: 'views/user.html',
		  controller: 'UserController'
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
