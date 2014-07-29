'use strict';

/**
 * @ngdoc function
 * @name masterAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the masterAppApp
 */
angular.module('masterAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
