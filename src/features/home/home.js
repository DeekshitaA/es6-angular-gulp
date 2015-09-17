export class HomeService {
	constructor($http, $cacheFactory) {
		this.$http = $http;
		this.$cacheFactory = $cacheFactory;
	}

	data(fresh) {
		if(fresh){
			this.$cacheFactory('/svc/home').removeAll();
		}

		this.$http.get('/svc/home', {
			cache: true
		}).then(response => response.data);
	}
}

export class HomeController {
	constructor(HomeService) {
		this.HomeService = HomeService;

		HomeService.data(response => {
			this.data = response;
		});

		this.name = 'world';
	}
}