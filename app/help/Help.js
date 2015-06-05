'use strict';

angular
    .module('pepeApp')
    .config(
        function ($stateProvider) {
            $stateProvider
                .state(
                    'help',
                    {
                        controller: function($scope) {
                        
                        }, 
                        template: '<div>Tu opis co i jak ...</div>',
                        url: '/help'
                    }
                );
        }
    );