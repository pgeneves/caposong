'use strict';

angular.
  module('core.song').
  factory('Song', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
        console.debug("Instantiating Song service");
        var service = new Song_service($http, $q, $timeout);
        service.refreshSongList();
        return service;
  }]);

function Song_service($http, $q, $timeout) {
    this.$http = $http;
    this.$q = $q;
    this.$timeout =$timeout;
    this.songList = null;

    this._refreshSongList = function(deferred) {
        this.$http.get("/song-data/list")
         .then(function(response) {
            console.debug("Got song data");
            console.debug(response.data);
            deferred.resolve(response.data)
        });
    };

    this.refreshSongList = function() {
        this.songList = this.$q.defer();
        this._refreshSongList(this.songList);
    };

    this.getSongListPromise = function() {
        return this.songList.promise;
    };

    this.getSongLyricsPromise = function(songId) {
        var deferred = this.$q.defer();
        this.$http.get("/song-data/get?id="+songId)
         .then(function(response) {
            console.debug("Got song lyrics data");
            console.debug(response.data);
            deferred.resolve(response.data)
        });
        return deferred.promise;
    };
}
