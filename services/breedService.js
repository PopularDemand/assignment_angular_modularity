puppies.factory('breedService', ['$http', function($http) {

  var getAll = function() {
    return $http.get('https://ajax-puppies.herokuapp.com/breeds.json');
  };

  return {
    getAll: getAll
  }
}])