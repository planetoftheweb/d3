var gulp = require('gulp'),
  webserver = require('gulp-server-io'),
  source = './builds/d3',
  dest = './builds/d3'

function html() {
  return gulp.src(dest + '**/*.html')
}

function js() {
  return gulp.src(dest + '**/*.js')
}

function styles() {
  return gulp.src(dest + '**/*.css')
}

function watch() {
  gulp.watch(source + 'js/**/*.js', js)
  gulp.watch(source + 'css/**/*.css', styles)
  gulp.watch(source + 'index.html', html)
}

function server() {
  return gulp.src(source).pipe(
    webserver({
      serverReload: {
        dir: source,
      },
      port: 3333,
      open: true,
    })
  )
}

var build = gulp.series(gulp.parallel(js, styles, html), server, watch)

gulp.task('default', build)
