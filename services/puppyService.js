puppies.factory('puppyService', ['$http', function($http) {

  var _puppies = [];

  var getAll = function() {
    $http.get('https://ajax-puppies.herokuapp.com/puppies.json')
      .success(function(data) {
        angular.copy(data, _puppies);
      });
    return _puppies;
  };

  var addPuppy = function() {

  };

  var deletePuppy = function(id) {
    $http({
      method: 'DELETE',
      url: 'https://ajax-puppies.herokuapp.com/puppies/' + id + '.json',
    }).success(function() {
      console.log(_puppies);
      for (var i = 0; i < _puppies.length; i++) {
        if (_puppies[i].id === id) {
          _puppies.splice(i, 1);
        }
      }
    });
  };

  return {
    getAll: getAll,
    addPuppy: addPuppy,
    deletePuppy: deletePuppy
  };
}]);
