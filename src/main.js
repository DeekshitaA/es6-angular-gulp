import { register } from './register';
import { config } from './config';
import { HomeController, HomeService } from './features/home/home';

angular.module('appName', [
	'ngRoute'
])
.config(config);

register('appName')
.controller('HomeController', HomeController)
.service('HomeService', HomeService);