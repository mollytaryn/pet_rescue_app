angular
  .module('tailfail')
  .controller('PetController', PetController);

function PetController($location, petFactory, $scope, $http, TFURL) {
  $scope.petsData = [];
    $http
      .get(TFURL + 'read/getPetFeed')
      .success(function(data) {
        processData(data);
        console.log(data);
      });
  function processData(data) {
    angular.forEach(data, function(info, key) {
      $scope.petsData.push(info);
    });
    // $scope.petsData = data;
  };
}
