export function config($routeProvider) {
  	$routeProvider.when('/', {
		templateUrl:'views/home.html',
		controller:'HomeController',
		controllerAs:'home'
    });
}