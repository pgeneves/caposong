'use strict';

angular.
  module('core.song').
  factory('SongListData', ['Song', '$http', '$q', function(Song, $http, $q) {
        return function() {
                console.log("Instantiating SongListData");
                var data = Song.getSongListPromise();
                return $q.all([data]).then(function(results){
                    console.log("Returning promised SongListData "+results[0]);
                    return results[0];
                })
            }
        }]);
