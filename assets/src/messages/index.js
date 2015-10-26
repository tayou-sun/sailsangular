/**
 * Created by Андрей on 29.09.2015.
 */
angular.module('messages',['ui.router','ngSails'])

.config(['$stateProvider',function config($stateProvider){
    $stateProvider.state('messages', {
      url: '/messages1',
      views: {
        "main": {
          controller: 'MessagesCtrl',
          template: '/messages' //'constructor/objectonto'//
        }
      }
    })

  }])
.controller('MessagesCtrl',['$scope','$sails',
    function($scope, $sails){
      console.log('MessagesCtrl');
      console.log($sails);
      $sails.get('/messages')
        .then(function(resp){
          $scope.users = resp;
        }, function(resp){
          console.error('user is not load');
        });

  }])
