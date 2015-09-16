var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var bower = require('bower-files')();
var minifyCss = require('gulp-minify-css');
 
module.exports = [['vendor:js', 'vendor:css']];

gulp.task('vendor:js', function() {
	return gulp.src(bower.ext('js').files)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('vendor:css', function() {
	return gulp.src(bower.ext('css').files)
		.pipe(concat('vendor.css'))
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css'));
});