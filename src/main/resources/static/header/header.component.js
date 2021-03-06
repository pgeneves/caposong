'use strict';

angular.
  module('header').
  component('header', {
    templateUrl: 'header/header.template.html',
    controller: ['$route', '$rootScope', '$scope', 'Lang', function HeaderController($route, $rootScope, $scope, Lang) {
        this.langService = Lang;
        $scope.allLangs = this.langService.allLangs;
        $scope.selected_lang = $scope.allLangs[0];
        $scope.titleLabel = "CapoeiraSong";
        $scope.creditsLabel = "(c) pgeneves 2016";
        this.langService = Lang;
        this.setLang = function(newValue) {
            if (newValue != null) {
                this.langService.setLang(newValue.key);
                $rootScope.current_lang = newValue.key;
            }
        };
        this.setLang($scope.selected_lang);
      }
    ]
  });
