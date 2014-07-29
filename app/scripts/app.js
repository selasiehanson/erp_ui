'use strict';

/**
 * @ngdoc overview
 * @name masterAppApp
 * @description
 * # masterAppApp
 *
 * Main module of the application.
 */
// things to add
// 1. Authentication service that child apps use
// 2. User and His or her permissions as per the app
// 3. Messaging between modules

var APPS = [{
  name: 'WareHouse',
  module: 'warehouseApp'
}, {
  name: 'Pos',
  module: 'posApp'
}];

var mainAppModules = [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngTouch'
];

var childAppModules = APPS.map(function(app) {
  return app.module;
});

childAppModules.forEach(function(module) {
  mainAppModules.push(module);
});

var app = angular.module('masterAppApp', mainAppModules);

// app.value('APPS', {
//   pos: 'http://0.0.0.0:9050',
//   inventory: 'http://0.0.0.0:9060'
// });

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state(
    'home', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).state('embedded', {
    url: '/app/:name',
    template: function(stateParams) {
      var view = 'View for ' + stateParams.name + ' page';
      return view;
    },
    controller: 'AppCtrl'
  });
});



// angular.bootstrap(angular.element("#warehouseApp"), ['warehouseApp']);