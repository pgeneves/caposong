'use strict';

angular.
  module('songDetail').
  component('songDetail', {
    templateUrl: 'song-detail/song-detail.template.html',
    bindings: { $router: '<'},
    controller: ['$scope', '$routeParams', 'Song',
      function SongDetailController($scope, $routeParams, Song) {
        this.refreshData = function() {
          Song.getSongLyricsPromise($routeParams.songId).then(function(data) {
            this.song = data;
            $scope.loaded = true;
          }.bind(this))
        }

        this.backToList = function() {
          this.$router.navigate(['songs']);
        }

        $scope.loaded = false;
        this.refreshData();
      }
    ]
  });
