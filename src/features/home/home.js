export class HomeService {
	constructor($http, $cacheFactory) {
		'ngInject';

		this.$http = $http;
		this.$cacheFactory = $cacheFactory;
	}

	data(fresh) {
		if(fresh){
			this.$cacheFactory.remove('/svc/home');
		}

		this.$http.get('/svc/home', {
			cache: true
		}).then(response => response.data);
	}
}

export class HomeController {
	constructor(HomeService) {
		'ngInject';

		this.HomeService = HomeService;

		HomeService.data(response => {
			this.data = response;
		});
	}
}