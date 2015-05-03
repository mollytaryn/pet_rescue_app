angular
  .module('tailfail')
  .controller('PetController', PetController);

function PetController($http, $rootScope, petFactory) {
  petFactory.findPet(function (pets) {
    vm.data = pets;
  });
}
