var gulp = require('gulp');
var path = require('path');
var runSequence = require('run-sequence');
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

gulp.task('default', function(callback) {
  gulp.watch(path.join(config.src, 'styles', '/*.scss'), ['styles-local']);
  gulp.watch(path.join(config.src, 'static', '{**/*,*}.*'), ['copyStatic']);

  var stream = runSequence('browserSync-init', 'copyStatic', 'styles', callback);
  return stream;
});
