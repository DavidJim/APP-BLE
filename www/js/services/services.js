angular.module('App').factory("Items", function($firebaseArray) {
  var itemsRef = new Firebase("https://demoble.firebaseio.com/items");
  return $firebaseArray(itemsRef);
})