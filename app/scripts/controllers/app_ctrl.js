'use strict';

/**
 * @ngdoc function
 * @name masterAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the masterAppApp
 */
angular.module('masterAppApp')
  .controller('AppCtrl', function ($scope, $stateParams, APPS, $sce) {
    console.log($stateParams);
    var url = $sce.trustAsResourceUrl(APPS[$stateParams.name]);
    $scope.appSrc = url;
  });
