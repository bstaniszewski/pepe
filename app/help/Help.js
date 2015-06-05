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
                            $scope.tresc = "Tu opis co i jak ... z kontrolera";
                        }, 
                        template: '<div>{{tresc}}</div>',
                        url: '/help'
                    }
                )
                .state(
                    'info',
                    {
                        controller: function($scope) {
                            $scope.tresc = "Info";
                        }, 
                        template: '<div>{{tresc}}</div>',
                        url: '/info'
                    }
                )
        }
    );