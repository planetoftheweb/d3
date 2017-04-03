const gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  postcss = require('gulp-postcss'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),

  dest = 'builds/d3/';

  gulp.task('html', function() {
    gulp.src(dest + '*.html');
  });

  gulp.task('css', function() {
    gulp.dest(dest + 'css');
  });

  gulp.task('js', function() {
    gulp.dest(dest + 'js');
  });

  gulp.task('watch', function() {
    gulp.watch(dest + '**/*.css', ['css']);
    gulp.watch(dest + '**/*.js', ['js']);
    gulp.watch(dest + '**/*.html', ['html']);
  });

gulp.task('webserver', function() {
  gulp.src(dest)
    .pipe(webserver({
      livereload: true,
      port: 3000,
      open: true
    }));
});

gulp.task('default', ['html', 'css', 'webserver','watch']);
