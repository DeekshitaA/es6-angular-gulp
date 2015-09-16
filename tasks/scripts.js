var browserify = require('browserify');
var babelify = require('babelify');
var ngannotate = require('browserify-ngannotate');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('scripts:lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(plumber({
            handleError: function (err) {
                this.emit('end');
            }
        }))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('scripts:bundle', function() {
    return browserify({
            entries: 'src/main.js',
            transform: [babelify]
        })
        .transform(babelify)
        .transform(ngannotate)
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(plumber({
            handleError: function (err) {
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist/js'));
});

module.exports = [['scripts:lint', 'scripts:bundle']];