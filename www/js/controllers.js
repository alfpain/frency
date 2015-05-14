angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/Items.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('Supermercado', function($scope) {
  $scope.playlists = [
    { title: 'La Torre', id: 'supermer' },
    { title: 'wallmart', id: 'restaurantes' },
    { title: 'paiz', id: 'centro' }
  ];
})

.controller('Supermer', function($scope) {
  $scope.playlists = [
    { title: 'La Torre 2*1', id: '2x1' },
    { title: 'la torre -20%', id: '20' },
    { title: 'la torre platos', id: 'platos' }
  ];
})
//********************************************************
//********************************************************



.controller('LaTorre', function($scope, LaTorre) {
  $scope.chats = LaTorre.all();

})


.controller('Categorias', function($scope, Chats) {
  $scope.chats = Chats.all();

});
/*
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
*/
