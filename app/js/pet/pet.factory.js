angular
  .module('tailfail')
  .factory('petFactory', petFactory);

function petFactory($http, $route, TFURL) {
  var pets = {};

  pets.findPet = function(cb) {
    $http
      .get(TFURL + 'read/getPetInfo2')
      .success(function(data) {
        cb(data);
      });
  };

  pets.findAllPets = function(cb) {
    .get(TFURL + 'read/getPetFeed')
    .success(function(data) {
      cb(data);
  };

  return pets;
}
