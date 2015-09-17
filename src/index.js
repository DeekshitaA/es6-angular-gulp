import { config } from './config';
import home from './features/home';

angular.module('appName', [
	'ngRoute',
	home.name
]).config(config);