puppies.factory('puppyService', ['$http', function($http) {

  var _puppies = [];
  var _id = [];

  var getAll = function() {
    $http.get('https://ajax-puppies.herokuapp.com/puppies.json')
      .success(function(data) {
        angular.copy(data, _puppies);
      });
    return _puppies;
  };

  var addPuppy = function(puppy) {
    console.log(puppy);
    puppy.id = _id;
    _id++;
    $http.post('https://ajax-puppies.herokuapp.com/puppies.json',
      JSON.stringify(puppy)
    ).success(function(data) {
      _puppies.push(data);
    })

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
