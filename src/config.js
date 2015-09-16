export class Config{
	constructor($routeProvider) {
		'ngInject';

	  	$routeProvider
	    .when('/', {
			templateUrl:'views/home.html',
			controller:'homeController',
			controllerAs:'home'
	    })
	    .otherwise({
	    	redirectTo:'/'
	    });
	}
}