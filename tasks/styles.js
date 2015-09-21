var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

module.exports = function(){
	return gulp.src('src/**/*.scss')
		.pipe(plumber())
	    .pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(concat('main.css'))
		.pipe(minifyCss())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'));
};