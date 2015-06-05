'use strict';

/**
 * Inicjalizacja aplikacji
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
					/*
						Tu podłączenie do zdarzenie onChangeState i wpięcie modułu kontroli uprawnień.
						Pobierz role zalogowanego użytkownika i role wymagane w konfiguracji modułu.
						Jeżeli użytkownik jest uprawniony - załaduj moduł, jeżeli nie przekieruj do 'Do widzenia ...'
					 */
					
					$rootScope.powitanie = "Powitanie";
                    $rootScope.nazwaAplikacji = "Pepe";
                }
            ]
        );
