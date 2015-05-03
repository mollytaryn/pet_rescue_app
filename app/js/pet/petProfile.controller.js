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
}
