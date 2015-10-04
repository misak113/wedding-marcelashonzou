
gulp = require 'gulp'
paths = require '../config/paths'
require './build-js'
develop = require './develop-js'

gulp.task 'watch-js', ['build-js', 'develop-js'], ->
  files = [
    paths.tsd.src
    paths.ts.src + '/**/*.ts'
    paths.ts.src + '/**/*.tsx'
  ]
  return gulp.watch files, ['build-js', develop.restart]
