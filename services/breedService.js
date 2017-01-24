puppies.factory('breedService', ['$http', function($http) {

  var _breeds = [];

  var getAll = function() {
    $http.get('https://ajax-puppies.herokuapp.com/breeds.json')
      .success(function(data) {
        angular.copy(data, _breeds);
      });
    return _breeds;
  };

  return {
    getAll: getAll
  };
}]);
