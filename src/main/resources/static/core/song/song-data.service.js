'use strict';

angular.
  module('core.song').
  factory('SongListData', ['Song', '$http', '$q', function(Song, $http, $q) {
        return function() {
                var data = Song.getSongListPromise();
                return $q.all([data]).then(function(results){
                    return results[0];
                })
            }
        }]);
