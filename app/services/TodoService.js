angular.module('myApp')
	.factory('TodoService', function TodoServiceFactory(){
    var items = [];
    var lastUsedIndex = 1;
    function getIndex() {
    	return lastUsedIndex++;
    }

		return {

			getItems: function() {
				return items;
			},

			addItem: function(newItem) {
				if (newItem.title.length >= 3) {
					newItem.id = getIndex();
					var copy = angular.copy(newItem);		    
			    items.unshift(copy);
				}
			},

			deleteItem: function(removeItem) {
				items.splice(items.indexOf(removeItem), 1);
			}
		}
	});