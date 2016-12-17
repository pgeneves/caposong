'use strict';

angular.
  module('songDetail').
  component('songDetail', {
    templateUrl: 'song-detail/song-detail.template.html',
    bindings: { $router: '<'},
    controller: ['$rootScope', '$scope', '$routeParams', 'Lang', 'Song',
      function SongDetailController($rootScope, $scope, $routeParams, Lang, Song) {
        this.langService = Lang;

        this.reloadData = function() {
          Song.getSongLyricsPromise($routeParams.songId).then(function(data) {
            this.song = data;
            this.refreshData();
          }.bind(this))
        }

        this.refreshData = function() {
            var songTranslate = [];
            this.songData = [];
            // Get current translation
            var translates = this.song.translate;
            for (var i=0; i<translates.length; i++) {
                if (translates[i].lang === this.langService.getLangKey()) {
                    songTranslate=translates[i].lyrics;
                }
            }
            // Compose view data
            for (var i=0; i<this.song.lyrics.length; i++) {
                var lyr = this.song.lyrics[i];
                var trn = "";
                if (i < songTranslate.length) {
                    trn = songTranslate[i];
                }
                this.songData.push([lyr, trn]);
            }
            $scope.loaded = true;
        }

        this.backToList = function() {
          this.$router.navigate(['songs']);
        }

        $scope.loaded = false;
        $rootScope.$watch('current_lang', function() {
            this.reloadData();
        }.bind(this))
      }
    ]
  });
