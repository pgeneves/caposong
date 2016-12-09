'use strict';

angular.
  module('header').
  component('header', {
    templateUrl: 'header/header.template.html',
    controller: ['$route', '$rootScope', '$scope', 'Lang', function HeaderController($route, $rootScope, $scope, Lang) {
        $scope.allLangs = [{label:'Français', key:'fr'},
        {label:'Portuguêse', key:'pt'},
        {label:'English', key:'en'},];
        $scope.selected_lang = $scope.allLangs[0];
        $scope.titleLabel = "CapoeiraSong";
        $scope.creditsLabel = "(c) pgeneves 2016";
        this.langService = Lang;
        this.setLang = function(newValue) {
            if (newValue != null) {
                this.langService.setLang(newValue.key);
                $rootScope.current_lang = newValue.key;
//                $route.reload();
            }
        };
        this.setLang($scope.selected_lang);
      }
    ]
  });
