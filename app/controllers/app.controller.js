'use strict';
angular.module('myApp')
  .controller('AppCtrl', function ($scope, TodoService) {    
    $scope.items = TodoService.getItems();
    $scope.addItem = function(data) {
      TodoService.addItem(data);
    };
    $scope.deleteItem = function(removeItem) {
      TodoService.deleteItem(removeItem);
    };
});