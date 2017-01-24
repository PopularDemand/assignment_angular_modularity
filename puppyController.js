puppies.controller('PuppyCtrl', ['puppyService', 'breedService', '$scope', function(puppyService, breedService, $scope) {

  $scope.breeds = breedService.getAll();
  $scope.puppies = puppyService.getAll();

  $scope.refreshList = function() {
    $scope.puppies = puppyService.getAll();
  };

  $scope.deletePuppy = function(id) {
    puppyService.deletePuppy(id);
  };

}]);
