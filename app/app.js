'use strict';

/**
 *
 */

var appModule =
	angular
        .module(
            'pepeApp',
            [
                'ui.router',
            ]
        )
        .config(
            function($stateProvider, $urlRouterProvider, $httpProvider) {
				$urlRouterProvider.otherwise('/');
			}
        )
        .run(
            [
                '$rootScope',
                function ($rootScope) {
                    $rootScope.nazwaAplikacji = "Pepe";
                }
            ]
        );
