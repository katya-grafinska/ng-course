'use strict';

angular.module('myApp')
  .controller('AppCtrl', AppController);

function AppController($scope) {

  $scope.data = { };

  $scope.items = [
    {
      title: 'Item #1',
      description: 'Item description #1'
    },
    {
      title: 'Item #2',
      description: 'Item description #2'
    }
  ];

  $scope.addItem = function(newItem) {
    var copy = angular.copy(newItem);
    $scope.items.push(copy);
  }
}
