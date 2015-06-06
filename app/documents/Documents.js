'use strict';

angular
    .module('pepeApp')
    .config(
        function ($stateProvider) {
            $stateProvider
                .state(
                    'documents',
                    {
                        controller: 'DocumentsController',
                        templateUrl: 'app/documents/DocumentsView.html',
                        url: '/documents'
                    }
                )
                .state(
                    'editdocument',
                    {
                        controller: 'DocumentEditController',
                        templateUrl: 'app/documents/DocumentEditView.html',
                        url: '/editdocument/:index'
                    }
                )
                .state(
                    'document',
                    {
                        controller: 'DocumentController',
                        templateUrl: 'app/documents/DocumentView.html',
                        url: '/document'
                    }
                );
        }
    );