puppies.controller('PuppyCtrl', ['puppyService', 'breedService', '$scope', function(puppyService, breedService, $scope) {
  
  breedService.getAll().then(function(data) {
    $scope.breeds = data.data;
  });

  $scope.breeds = breedService.getAll();

  var refreshList = function() {
    puppyService.getAll().then(function(data) {
      $scope.puppies = data.data;
    })
  }

}]);