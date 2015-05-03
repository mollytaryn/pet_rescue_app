angular
  .module('tailfail')
  .config(petConfig);

function petConfig($routeProvider) {
  $routeProvider
    .when('/discover', {
      templateUrl: 'discover.html',
      controller: 'PetController',
      controllerAs: 'pets'
    })
    .when('/pet_profile/:uuid', {
      templateUrl: 'pet_profile.html',
      controller: 'PetProfileController',
      controllerAs: 'pets'
    })
    .when('/pet_camera', {
      templateUrl: 'pet_camera.html',
      controller: 'PetController',
      controllerAs: 'pets'
    })
    .when('/failure_profile', {
      templateUrl: 'failure_profile.html',
      controller: 'FailureController',
      controllerAs: 'failures'
    })
    .otherwise({
      redirectTo: '/discover'
    });
}
