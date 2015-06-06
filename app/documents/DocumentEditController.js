'use strict';

angular
    .module('pepeApp')
    .controller(
        'DocumentEditController',
        [
            '$scope',
            '$stateParams',
            'DocumentsService',
            function ($scope, $stateParams, DocumentsService) {
                console.log($stateParams);
                
                $scope.document = {};
            }
        ]
    );