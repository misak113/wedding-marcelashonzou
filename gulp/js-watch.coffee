
gulp = require 'gulp'
paths = require './paths'
require './js'
develop = require './js-develop'

gulp.task 'js-watch', ['js', 'js-develop'], ->
  files = [
    paths.tsd.src
    paths.ts.src + '/**/*.ts'
    paths.ts.src + '/**/*.tsx'
  ]
  return gulp.watch files, ['js', develop.restart]
