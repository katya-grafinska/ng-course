'use strict';

angular.module('myApp')
  .directive('listItem', listItemDirective);

function listItemDirective() {
  return {
    templateUrl: 'templates/list-item.html'
  }
}
