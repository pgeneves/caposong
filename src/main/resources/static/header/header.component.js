'use strict';

angular.
  module('header').
  component('header', {
    templateUrl: 'header/header.template.html',
    controller: ['$scope', function HeaderController($scope) {
        $scope.titleLabel = "CapoeiraSong";
        $scope.creditsLabel = "(c) pgeneves 2016";
      }
    ]
  });
