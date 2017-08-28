var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var path = require('path');
var runSequence = require('run-sequence');

var config = require('../config');

gulp.task('default', function(callback) {
  return runSequence('copyStatic', 'styles', callback);
});

gulp.task('dev', function(callback) {
  return runSequence('copyStatic', 'styles', callback);
});

gulp.task('dist', function(callback) {
  return runSequence('copyStatic', 'styles', callback);
});

gulp.task('copyStatic', function(callback) {
  var staticFiles = path.join(config.src, 'static', '*.*');
  gulp.src(staticFiles)
    .pipe(gulp.dest(config.dest));
  callback();
});

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