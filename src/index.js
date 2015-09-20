angular.module('appName', [
	'ngRoute',
	'ui.bootstrap',
	'features.home'
])

.config(function($routeProvider) {
  	$routeProvider.otherwise({
    	redirectTo:'/'
    });
});