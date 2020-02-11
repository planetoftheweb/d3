const gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  postcss = require('gulp-postcss'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),

  dest = 'builds/d3/';

  function html(cb) {
    gulp.src(dest + "*.html");
    cb();
  }

  function css(cb) {
    gulp.dest(dest + "css");
    cb();
  }

  function js(cb) {
    gulp.dest(dest + "js");
    cb();
  }

  function watch() {
    gulp.watch(dest + '**/*.css', gulp.series(css));
    gulp.watch(dest + '**/*.js', gulp.series(js));
    gulp.watch(dest + '**/*.html', gulp.series(html));
  }

function startWebserver() {
  gulp.src(dest)
    .pipe(webserver({
      livereload: true,
      port: 3000,
      open: true
    }));
}

exports.default = gulp.series(html, css, startWebserver, watch);
