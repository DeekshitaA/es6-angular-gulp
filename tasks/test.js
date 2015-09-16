var Server = require('karma').Server;

module.exports = function(done){
	new Server({
    	configFile: __dirname + '/../karma.conf.js',
    	singleRun: true
  	}, function(exitCode) {
		if(exitCode != 0){
			console.log('Karma has exited with ' + exitCode);
		}
		done(0);
	}).start();
};