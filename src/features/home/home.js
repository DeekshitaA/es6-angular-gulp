angular.module('features.home', [])

.config(function($routeProvider) {
  	$routeProvider.when('/', {
		templateUrl:'views/home.html',
		controller:'HomeController',
		controllerAs:'home'
    });
})

.service('HomeService', function($http, $cacheFactory){
	this.clean = function() {
		return $cacheFactory('/svc/home').removeAll();
	};

	this.data = function() {
		return $http.get('/svc/home', {
			cache: true
		}).then(response => response.data);
	};
})

.controller('HomeController', function(HomeService){
	HomeService.data(response => {
		this.data = response;
	});

	this.name = 'world';
});