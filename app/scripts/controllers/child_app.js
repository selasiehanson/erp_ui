'use strict';

/**
 * @ngdoc function
 * @name masterAppApp.controller:ChildAppCtrl
 * @description
 * # ChildAppCtrl
 * Controller of the masterAppApp
 */
angular.module('masterAppApp')
  .controller('ChildAppCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
