var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var path = require('path');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var requireDir = require('require-dir');

requireDir('tasks');

var config = require('../config');

gulp.task('dist', function(callback) {
  config.browserSync = false;
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
  
  runSequence('browserSync-reload', callback);
});

gulp.task('styles-bootstrap', function(callback) {
  gulp.src('./node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('bootstrap.css'))
    .pipe(gulp.dest(path.join(config.dest, 'css')));
  
  callback();
});

gulp.task('browserSync-init', function(callback) {
  browserSync.init({
    server: {
      baseDir: config.dest
    }
  });

  gulp.watch(path.join(config.dest, '{**/*,*}.{html,css,js}')).on('change', browserSync.reload);
});

gulp.task('browserSync-reload', function(callback) {
  browserSync.reload();
});

gulp.task('default', function(callback) {
  gulp.watch(path.join(config.src, 'styles', '/*.scss'), ['styles-local']);
  gulp.watch(path.join(config.src, 'static', '{**/*,*}.*'), ['copyStatic']);

  var stream = runSequence('browserSync-init', 'copyStatic', 'styles', callback);
  return stream;
});
