angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  //***********Create the login modal that we will use later******************
  $ionicModal.fromTemplateUrl('templates/items.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  //**************************************************************************    
  //************** Triggered in the login modal to close it ******************
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
        
  //**************************************************************************
  //************** Open the login modal  ************************************
  $scope.login = function() {
    $scope.modal.show();
  };
  //**************************************************************************    
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
  //**************************************************************************    
// Simulate a login delay. Remove this and replace with your login
// code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
 //**************************************************************************    

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Supermercado', id: 'Descuento' },
    { title: 'Restaurantes', id: 'playlists' },
    { title: 'Moda', id: 'moda' },
    { title: 'Entretenimiento', id: 'entretenimiento' },
    { title: 'Electrónicos', id: 'electronicos' },
    { title: 'Otros', id: 'otros' }
  ];
})

.controller('Supermercado', function($scope) {
  $scope.playlists = [
    { title: 'La Torre', id: 'supermer' },
    { title: 'wallmart', id: 'restaurantes' },
    { title: 'paiz', id: 'centro' }
  ];
})

//********************************************************
//********************************************************

.controller('descuentos', function($scope) {
  $scope.lista = [
    { title: 'numero uno', id: '2x1' },
    { title: 'numero dos', id: '20' },
    { title: 'numero tres', id: 'platos' }
  ];
})


.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
