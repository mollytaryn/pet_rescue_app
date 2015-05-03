angular
  .module('tailfail')
  .controller('PetProfileController', PetProfileController);

function PetProfileController($routeParams, petFactory) {
  var vm = this,
      id = $routeParams.uuid;

  petFactory.findPet(id, function (pet) {
    vm.pet = pet;
  });

  petFactory.findPetComments(id, function (petComments) {
    vm.petComments = petComments;
  });

  vm.addNewComment = function() {
    petFactory.addNewComment(id, vm.newComment, function(res) {});
  };
}
