'use strict';

angular
    .module('pepeApp')
    .controller(
        'DocumentController',
        [
            '$scope',
            'DocumentsService',
            function ($scope, DocumentsService) {
                $scope.document = {};
                
                $scope.saveDocument = DocumentsService.addDocument($scope.document);
            }
        ]
    );