export class HomeController {
	constructor(HomeService) {
		this.HomeService = HomeService;

		HomeService.data(response => {
			this.data = response;
		});

		this.name = 'world';
	}
}