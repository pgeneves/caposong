'use strict';

angular.
  module('core.translate').
  factory('Lang', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
        var fac = {}
        fac.$http = $http;
        fac.$q = $q;
        fac.$timeout =$timeout;
        fac.langMapPromises = [];
        fac.langMap = {'en':0,'pt':1,'fr':2};
        fac.curLangKey='en';
        fac.curLang=fac.langMap['en'];
        fac.cachedText={0:{},1:{},2:{}};

        fac._refreshLangList = function(deferred, lang) {
          this.$timeout(function() {
             this.$http.get("/lang/text_"+lang+".json")
                 .then(function(response) {
                    deferred.resolve(response.data)
                });
            }.bind(this),500)
          }.bind(fac)

        fac.loadText = function() {
            var promise_en = this.$q.defer();
            var promise_pt = this.$q.defer();
            var promise_fr = this.$q.defer();
            this._refreshLangList(promise_en, "en");
            this._refreshLangList(promise_pt, "pt");
            this._refreshLangList(promise_fr, "fr");
            this.langMapPromises.push(promise_en.promise);
            this.langMapPromises.push(promise_pt.promise);
            this.langMapPromises.push(promise_fr.promise);
        }.bind(fac)

        fac.getText = function(txtKey) {
          return this.cachedText[this.curLang][txtKey];
        }.bind(fac)

        fac.getAllText = function() {
          return this.cachedText[this.curLang];
        }.bind(fac)

        fac.getLangKey = function() {
          return this.curLangKey;
        }.bind(fac)

        fac.setLang = function(langKey) {
            this.curLangKey=langKey;
            this.curLang=this.langMap[langKey];
        }.bind(fac)

        fac.cacheText = function() {
          return this.$q.all(this.langMapPromises).then(function(results){
              return results;
          }.bind(this))
        }.bind(fac)

        fac.loadText();
        fac.cacheText().then(function(result) {
               this.cachedText = result;
           }.bind(fac));;
        return fac;
  }]);
