puppies.directive('puppyRow', function() {
  return {
    templateUrl: '/puppyRow.html',
    restrict: 'A',
    scope: {
      puppy: '='
    }
  }
})