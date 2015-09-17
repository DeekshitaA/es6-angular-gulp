var gulp = require('gulp');
var flatten = require('gulp-flatten');

gulp.task('html:views', function() {
    return gulp.src('src/features/**/*.html')
		.pipe(flatten())
		.pipe(gulp.dest('dist/views'));
});

gulp.task('html:index', function() {
    return gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});

module.exports = [['html:views', 'html:index']];