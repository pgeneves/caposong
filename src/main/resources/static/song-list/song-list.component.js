'use strict';

angular.
  module('songList').
  component('songList', {
    templateUrl: 'song-list/song-list.template.html',
    controller: ['$scope', 'Song', function SongListController($scope, Song) {
        this.orderProp = 'name';

        this.refreshData = function() {
          Song.refreshSongList()
          Song.getSongListPromise().then(function(data) {
            this.songs = data;
            $scope.loaded = true;
          }.bind(this))
        }

        $scope.loaded = false;
        this.refreshData();
      }
    ]
  });
