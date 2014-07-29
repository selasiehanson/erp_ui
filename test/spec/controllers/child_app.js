'use strict';

describe('Controller: ChildAppCtrl', function () {

  // load the controller's module
  beforeEach(module('masterAppApp'));

  var ChildAppCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChildAppCtrl = $controller('ChildAppCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
