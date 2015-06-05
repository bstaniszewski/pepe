'use strict';

/**
 * http://requirejs.org/docs/api.html
 */
angular
    .module('pepeApp')
        .controller(
            'AppController',
            [
                '$scope',
                function ($scope) {
                    $scope.nazwaAplikacji = "Dziad wsiadł";
                    $scope.powitanie = "Cześć Jarosławie!"
                }
            ]
        );