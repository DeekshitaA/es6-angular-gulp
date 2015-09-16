var gulp = require('gulp');
var flatten = require('gulp-flatten');

module.exports = function(){
	return gulp.src('src/**/*.html')
		.pipe(flatten())
		.pipe(gulp.dest('dist/views'));
};