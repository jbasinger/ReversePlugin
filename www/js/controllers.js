angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('MainCtrl', function($scope, $ionicPlatform ) {

  $ionicPlatform.ready(function(){
    $scope.loading = false;
    $scope.$apply();
  });
  $scope.revStr = {text:''};
  $scope.loading = true;
  $scope.reversed = "";
  $scope.reverseIt = function(){
    window.reverse.doIt($scope.revStr.text, function(rev){
      $scope.reversed = rev.value;
      $scope.$apply();
    });
  }
});
