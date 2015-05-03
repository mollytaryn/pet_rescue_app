angular
  .module('tailfail')
  .factory('petFactory', petFactory);

function petFactory($http, $route, TFURL) {
  var pets = {};

  pets.findPet = function(id, cb) {
    $http
      .get(TFURL + 'read/getPetInfo/' + id)
      .success(function (data) {
        console.log(data);
        cb(data);
      });
  };

  pets.findAllPets = function(cb) {
    $http
      .get(TFURL + 'read/getPetFeed')
      .success(function(data) {
        cb(data);
      });
  };
  return pets;
}
