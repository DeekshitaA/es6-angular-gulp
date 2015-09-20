var gulp = require('gulp');
var connect = require('gulp-connect');
var tasks = require('./default.js')[0];

gulp.task('connect', function(){
	connect.server({
	    root: 'dist'
	});
});

module.exports = [tasks.concat(['connect', 'watch'])];