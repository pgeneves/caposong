'use strict';

angular.
  module('songList').
  component('songList', {
    templateUrl: 'song-list/song-list.template.html',
    controller: ['$scope', 'Lang', 'Song', function SongListController($scope, Lang, Song) {
        this.orderProp = 'name';

        this.refreshData = function() {
          Song.refreshSongList()
          Song.getSongListPromise().then(function(data) {
            this.songs = data;
            $scope.loaded = true;
          }.bind(this))
        }

        $scope.loaded = false;
        this.langService = Lang;
//
//        Lang.getAllText().then(function(result) {
//            $scope.langText = result;
//        });
        this.refreshData();
      }
    ]
  });
