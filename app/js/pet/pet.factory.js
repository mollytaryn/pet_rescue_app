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
    var req = {
      method: 'POST',
      url: TFURL + 'create/addPetComment',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {'petId': id, 'comment': data}
    };

    $http(req).success(function (res) {
      console.log(res);
      cb(res);
    });
      // .post(TFURL + 'create/addPetComment', {petId: id, comment: data})
      // .success(function (res) {
      //   console.log(res);
      //   cb(res);
      // });
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
