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
                        url: '/'
                    }
                );
        }
    );