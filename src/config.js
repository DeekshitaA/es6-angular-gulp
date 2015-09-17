export function config($routeProvider) {
  	$routeProvider.otherwise({
    	redirectTo:'/'
    });
}