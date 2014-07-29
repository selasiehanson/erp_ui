'use strict';

/**
 * @ngdoc overview
 * @name posApp
 * @description
 * # posApp
 *
 * Main module of the application.
 */
var posApp = angular.module('posApp', [
  'ui.router'
]);

posApp.config(function($stateProvider) {

  $stateProvider.state(
    'pos', {
      url: '/pos',
      templateUrl: 'child_apps/pos/app/views/main.html',
      // controller: 'SampleCtrl'
    })
    .state(
      'pos.sales', {
        url: '/sales',
        templateUrl: 'child_apps/pos/app/views/sales.html',
        // controller: 'SampleCtrl'
      })
    .state(
      'pos.suppliers', {
        url: '/suppliers',
        templateUrl: 'child_apps/pos/app/views/suppliers.html',
        // controller: 'SampleCtrl'
      })
    .state(
      'pos.suppliers.new', {
        url: '/new',
        templateUrl: 'child_apps/pos/app/views/new_supplier.html',
        // controller: 'SampleCtrl'
      })
    .state(
      'pos.products', {
        url: '/products',
        templateUrl: 'child_apps/pos/app/views/products.html',
        // controller: 'SampleCtrl'
      });
});