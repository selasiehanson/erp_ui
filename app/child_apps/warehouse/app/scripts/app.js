'use strict';


var warehouseApp = angular
  .module('warehouseApp', [
    'ui.router'
  ]);

warehouseApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state(
    'warehouse', {
      url: '/warehouse',
      templateUrl: 'child_apps/warehouse/app/views/main.html',
      controller: 'SampleCtrl'
    })
  $stateProvider.state(
    'warehouse.clients', {
      url: '/clients',
      templateUrl: 'child_apps/warehouse/app/views/main.html',
      controller: 'SampleCtrl'
    })
});

warehouseApp.controller('SampleCtrl', function($scope) {
  $scope.items = [{
    name: 'Shoe',
    qauntity: 30,
    reOrderLevel: 10
  }, {
    name: 'Socks',
    qauntity: 83,
    reOrderLevel: 20
  }, {
    name: 'Sandals',
    qauntity: 45,
    reOrderLevel: 15 
  }, ]
});