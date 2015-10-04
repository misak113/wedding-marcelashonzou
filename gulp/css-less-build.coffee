
gulp = require 'gulp'
less = require 'gulp-less'
paths = require './paths'

gulp.task 'css-less-build', ->
  return gulp.src([paths.less.src])
    .pipe less()
    .pipe gulp.dest(paths.dist + '/css')
