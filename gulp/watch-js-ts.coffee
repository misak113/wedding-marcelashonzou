
gulp = require 'gulp'
paths = require './paths'
require './js-ts'
develop = require './js-ts-develop'

gulp.task 'watch-js-ts', ['js-ts', 'js-ts-develop'], ->
  files = [
    paths.tsd.src
    paths.ts.src + '/**/*.ts'
    paths.ts.src + '/**/*.tsx'
  ]
  return gulp.watch files, ['js-ts', develop.restart]
