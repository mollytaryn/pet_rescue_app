angular
  .module('tailfail')
  .factory('petFactory', petFactory);

function petFactory($http, $route, TFURL, $q) {
  var pets = {};

  pets.findAllPets = function(cb) {
    $http
      .get(TFURL + 'read/getPetFeed')
      .success(function(data) {
        cb(data);
      });
  };

  pets.findPet = function(cb) {
    $http
      .get(TFURL + 'read/getPetInfo/id')
      .success(function(data) {
        cb(data);
      });
  };
  return pets;
}
