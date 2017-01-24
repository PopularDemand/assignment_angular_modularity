puppies.factory('puppyService', ['$http', function($http) {
  
  var getAll = function() {
    return $http.get('https://ajax-puppies.herokuapp.com/puppies.json').success(function(response) {
      return response;
    })
  };

  var addPuppy = function() {

  };

  var deletePuppy = function() {

  };

  return {
    getAll: getAll,
    addPuppy: addPuppy,
    deletePuppy: deletePuppy
  }
}]);