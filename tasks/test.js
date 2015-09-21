var Server = require('karma').Server;
var skip = require('minimist')(process.argv.slice(2)).skipTests;

module.exports = function(done){
	if(!skip){
		new Server({
	    	configFile: __dirname + '/../karma.conf.js',
	    	singleRun: true
	  	}, function(exitCode) {
			if(exitCode != 0){
				console.log('Karma has exited with ' + exitCode);
			}
			done(0);
		}).start();
	} else {
		console.warn('Karma was skipped');
		done(0);
	}
};