var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');

module.exports = function() {
    return gulp.src('src/**/*.js')
        .pipe(plumber({
            handleError: function (err) {
                this.emit('end');
            }
        }))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .pipe(sourcemaps.init())
            .pipe(ngAnnotate())
            .pipe(traceur())
            .pipe(concat('index.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist/js'));
};