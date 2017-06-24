'use strict';

var app=angular.module('CapoSongApp');
app.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/songs', {
          template: '<song-list></song-list>'
        }).
        when('/songs/:songUid', {
          template: '<ng-outlet><song-detail $router="$$router"></song-detail></ng-outlet>'
        }).
        otherwise('/songs');
    }
  ]);
