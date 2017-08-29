var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');

var config = require('../../config');

gulp.task('browserSync-init', function(callback) {
  browserSync.init({
    server: {
      baseDir: config.dest
    }
  });

  gulp.watch(path.join(config.dest, '{**/*,*}.{html,css,js}')).on('change', browserSync.reload);
  callback();
});

gulp.task('browserSync-reload', function(callback) {
  browserSync.reload();
});