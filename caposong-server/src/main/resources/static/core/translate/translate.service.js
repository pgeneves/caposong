'use strict';

function Translate_service($http, $q, $timeout) {
        this.$http = $http;
        this.$q = $q;
        this.$timeout =$timeout;
        this.langMapPromises = null;
        this.langMap=null;
        this.curLangKey=null;
        this.curLang=null;
        this.cachedText=null;
        this.messages={};

        // Define all supported lang
        this.allLangs = [{label:'Français', key:'fr'},
        {label:'Portuguêse', key:'pt'},
        {label:'English', key:'en'},];

        this.getLangKey = function() {
          return this.curLangKey;
        };

        this.setLang = function(langKey) {
            this.curLangKey=langKey;
            this.curLang=this.langMap[langKey];
            this.messages=this.cachedText[this.curLang];
        };

        this._loadLangFile = function(deferred, lang) {
          this.$timeout(function() {
             this.$http.get("/lang/text_"+lang+".json")
                 .then(function(response) {
                    console.debug("Got en text");
                    console.debug(response.data);
                    deferred.resolve(response.data)
                });
            }.bind(this),500)
        };

        this._initialize = function() {
            this.langMapPromises = [];
            this.langMap = {};
            this.cachedText = {};
            var idx=0;
            this.allLangs.forEach( function(lang) {
                this.langMap[lang.key] = idx;
                this.cachedText[idx] = {};
                var promise_lng = this.$q.defer();
                this._loadLangFile(promise_lng, lang.key);
                this.langMapPromises.push(promise_lng.promise);
                idx++;
            }.bind(this));
            this.curLangKey='en';
            this.curLang=this.langMap['en'];
        };

        this._cacheText = function() {
          this._initialize();
          return this.$q.all(this.langMapPromises).then(function(results){
              return results;
          }.bind(this))
        };
}

angular.
  module('core.translate').
  factory('Lang', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
        console.debug("Instantiating Lang");
        var service = new Translate_service($http, $q, $timeout);
        service._cacheText().then(function(result) {
               this.cachedText = result;
               this.messages=this.cachedText[this.curLang];
           }.bind(service));;
        return service;
  }]);
