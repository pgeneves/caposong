'use strict';

angular.
  module('core.song').
  factory('Song', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
        var fac = {}
        fac.$http = $http;
        fac.$q = $q;
        fac.$timeout =$timeout;
        fac.songList = null;
        console.log("Instantiating Song");

        fac._refreshSongList = function(deferred) {
          this.$timeout(function() {
//             this.$http.get("/song-data/song-data.json")
             this.$http.get("/song-data/list")
                 .then(function(response) {
                    console.log("Got song data");
                    console.log(response.data);
                    deferred.resolve(response.data)
                });
            }.bind(this),500)
          }.bind(fac)

        fac.refreshSongList = function() {
            this.songList = this.$q.defer();
            this._refreshSongList(this.songList);
        }.bind(fac)

        fac.getSongListPromise = function() {
          return this.songList.promise;
          }.bind(fac)

        fac.getSongLyricsPromise = function(songId) {
          var deferred = this.$q.defer();
          this.$timeout(function() {
//             this.$http.get("/song-data/song-lyrics-"+songId+".json")
             this.$http.get("/song-data/get")
                 .then(function(response) {
                    console.log("Got song lyrics data");
                    console.log(response.data);
                    deferred.resolve(response.data)
                });
            }.bind(this),500)
          return deferred.promise;
        }.bind(fac)

        fac.refreshSongList();

        return fac;
  }]);
