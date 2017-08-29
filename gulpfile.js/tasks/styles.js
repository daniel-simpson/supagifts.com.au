var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

var config = require('../../config');

gulp.task('styles', function(callback) {
  return runSequence('styles-local', 'styles-bootstrap', callback);
});

gulp.task('styles-local', function(callback) {
  gulp.src(path.join(config.src, 'styles/**/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(path.join(config.dest, 'css')));
  
    callback();
});

gulp.task('styles-bootstrap', function(callback) {
  gulp.src('./node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('bootstrap.css'))
    .pipe(gulp.dest(path.join(config.dest, 'css')));
  
  callback();
});
