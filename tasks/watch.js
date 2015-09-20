var gulp = require('gulp');
var tasks = require('./default.js')[0];

gulp.task('watch:all', function(){
	gulp.watch(['src/**/*.js', 'test/**/*.spec.js'], ['scripts', 'test']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.scss', ['styles']);
	gulp.watch('bower_components/**/*', ['vendor']);
});

module.exports = [tasks.concat(['watch:all'])];