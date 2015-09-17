import { register } from '../../register';
import { config } from './home.config';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

export default angular.module('HomeModule', []).config(config);

register('HomeModule')
	.controller('HomeController', HomeController)
	.service('HomeService', HomeService);