'use strict';

/**
 * @ngdoc function
 * @name masterAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the masterAppApp
 */
angular.module('masterAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
