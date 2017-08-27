var gulp = require('gulp');
var path = require('path');
var runSequence = require('run-sequence');

var config = require('../config');

gulp.task('default', function(callback) {
  return runSequence('copyStatic', callback);
});

gulp.task('dev', function(callback) {
  return runSequence('copyStatic', callback);
});

gulp.task('dist', function(callback) {
  return runSequence('copyStatic', callback);
});

gulp.task('copyStatic', function(callback) {
  var staticFiles = path.join(config.src, 'static', '*.*');
  gulp.src(staticFiles)
    .pipe(gulp.dest(config.dest));
  callback();
});