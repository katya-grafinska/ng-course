'use strict';

angular.module('myApp')
  .directive('listItem', listItemDirective);

function listItemDirective() {
  return {
    scope: {
      title: '=',
      description: '='
    },
    templateUrl: 'templates/list-item.html',
    link: function($scope) {
      console.log("SCOPE>?", $scope);
    }
  }
}
