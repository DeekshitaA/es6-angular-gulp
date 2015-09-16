import { Config } from './config';
import { HomeController, HomeService } from './features/home/home';

angular.module('appName', [
	'ngRoute'
])

.config(Config)
.controller('HomeController', HomeController)
.controller('HomeService', HomeService);