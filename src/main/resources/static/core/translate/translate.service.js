'use strict';

angular.
  module('core.translate').
  factory('Lang', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
        var translate = {}
        translate.$http = $http;
        translate.$q = $q;
        translate.$timeout =$timeout;

        // Define all supported lang
        translate.allLangs = [{label:'Français', key:'fr'},
        {label:'Portuguêse', key:'pt'},
        {label:'English', key:'en'},];

        translate.langMapPromises = null;
        translate.langMap=null;
        translate.curLangKey=null;
        translate.curLang=null;
        translate.cachedText=null;

        translate.messages={};
        console.debug("Instantiating Lang");

        translate.getLangKey = function() {
          return this.curLangKey;
        }.bind(translate)

        translate.setLang = function(langKey) {
            this.curLangKey=langKey;
            this.curLang=this.langMap[langKey];
            this.messages=this.cachedText[this.curLang];
        }.bind(translate)

        translate._loadLangFile = function(deferred, lang) {
          this.$timeout(function() {
             this.$http.get("/lang/text_"+lang+".json")
                 .then(function(response) {
                    console.log("Got en text");
                    console.log(response.data);
                    deferred.resolve(response.data)
                });
            }.bind(this),500)
          }.bind(translate)

        translate._initialize = function() {
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
        }.bind(translate)

        translate._cacheText = function() {
          return this.$q.all(this.langMapPromises).then(function(results){
              return results;
          }.bind(this))
        }.bind(translate)

        translate._initialize();
        translate._cacheText().then(function(result) {
               this.cachedText = result;
               this.messages=this.cachedText[this.curLang];
           }.bind(translate));;
        return translate;
  }]);
