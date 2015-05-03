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

  pets.findPetComments = function(id, cb) {
    $http
      .get(TFURL + 'read/getPetComments/' + id)
      .success(function (data) {
        cb(data);
        console.log(data);
      });
  };

  pets.addNewComment = function (id, data, cb) {

    $http
      .post(TFURL + 'create/addPetComment', {petId: id, comment: data.comment})
      .success(function (res) {
        console.log(res);
        cb(res);
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
