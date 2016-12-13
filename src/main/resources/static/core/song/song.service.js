'use strict';

angular.
  module('core.song').
  factory('Song', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
        var fac = {}
        fac.$http = $http;
        fac.$q = $q;
        fac.$timeout =$timeout;
        fac.songList = null;

        fac._refreshSongList = function(deferred) {
         this.$http.get("/song-data/list")
             .then(function(response) {
                deferred.resolve(response.data)
            });
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
         this.$http.get("/song-data/get?id="+songId)
             .then(function(response) {
                deferred.resolve(response.data)
            });
          return deferred.promise;
        }.bind(fac)

        fac.refreshSongList();

        return fac;
  }]);
