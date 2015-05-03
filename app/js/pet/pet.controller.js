angular
  .module('tailfail')
  .controller('PetController', PetController);

function PetController(petFactory) {
  var vm = this;

  petFactory.findAllPets(function (pets) {
    vm.data = pets;
  });
}
