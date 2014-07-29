'use strict';

/**
 * @ngdoc function
 * @name posApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the posApp
 */
angular.module('posApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
