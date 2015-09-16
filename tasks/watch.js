var gulp = require('gulp');
var tasks = require('./default.js')[0];

gulp.task('watch:all', function(){
	gulp.watch(['src/**/*', 'test/**/*'], tasks);
});

module.exports = [tasks.concat(['watch:all'])];