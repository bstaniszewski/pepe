'use strict';

angular
    .module('pepeApp')
        .controller(
            'DocumentsController',
            [
                '$scope',
                function ($scope) {
                    $scope.documents = [
                        {
                            name: "Pierwszy",
                            desc: "Opis pierwszego ..."
                        },
                        {
                            name: "Drugi"
                        },
                        {
                            name: "Trzeci",
                            desc: "Opis trzeciego ..."
                        }
                    ]
                }
            ]
        );