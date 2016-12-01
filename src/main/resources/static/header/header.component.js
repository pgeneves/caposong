'use strict';

angular.
  module('header').
  component('header', {
    templateUrl: 'header/header.template.html',
    controller: ['$scope', 'Lang', function HeaderController($scope, Lang) {
        $scope.titleLabel = "CapoeiraSong";
        $scope.creditsLabel = "(c) pgeneves 2016";
        this.langService = Lang;
        this.setLang = function(lang) {
            this.langService.setLang(lang);
        }
      }
    ]
  });
