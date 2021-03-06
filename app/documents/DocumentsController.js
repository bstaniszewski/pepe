'use strict';

angular
    .module('pepeApp')
    .controller(
        'DocumentsController',
        [
            '$scope',
            'DocumentsService',
            function ($scope, DocumentsService) {
                $scope.documents = DocumentsService.getDocuments();
            }
        ]
    );